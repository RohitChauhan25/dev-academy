'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Loader2,
  Pencil,
  X,
  Check,
  Globe,
  MapPin,
  CalendarDays,
  Flame,
  Target,
  BookOpen,
  Layers,
  Camera,
  KeyRound,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import SignUpModal from '@/components/ui/auth/SignUpModal';
import { useAuth } from '@/components/providers/AuthProvider';
import {
  getPerformanceOverview,
  updateProfile,
  uploadProfilePicture,
  changePassword,
  deleteAccount,
  type PerformanceOverview,
  type UpdateProfileInput,
} from '@/lib/auth-api';

const MAX_PICTURE_BYTES = 5 * 1024 * 1024;
const ALLOWED_PICTURE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

const EXPERIENCE_LEVELS = ['beginner', 'intermediate', 'advanced', 'expert'] as const;

type FormState = {
  name: string;
  bio: string;
  website: string;
  github: string;
  linkedin: string;
  location: string;
  skills: string;
  experienceLevel: string;
};

const emptyForm: FormState = {
  name: '',
  bio: '',
  website: '',
  github: '',
  linkedin: '',
  location: '',
  skills: '',
  experienceLevel: 'beginner',
};

export default function ProfilePage() {
  const router = useRouter();
  const { user, accessToken, status, setSession, logout } = useAuth();

  const [overview, setOverview] = React.useState<PerformanceOverview | null>(null);
  const [editing, setEditing] = React.useState(false);
  const [form, setForm] = React.useState<FormState>(emptyForm);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState('');
  const [uploadingPicture, setUploadingPicture] = React.useState(false);
  const [pictureError, setPictureError] = React.useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [passwordForm, setPasswordForm] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [changingPassword, setChangingPassword] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [passwordSuccess, setPasswordSuccess] = React.useState(false);

  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = React.useState('');
  const [deleting, setDeleting] = React.useState(false);
  const [deleteError, setDeleteError] = React.useState('');

  React.useEffect(() => {
    if (status !== 'authenticated' || !accessToken) return;
    getPerformanceOverview(accessToken)
      .then(({ data }) => data && setOverview(data.overview))
      .catch(() => {});
  }, [status, accessToken]);

  const startEditing = () => {
    if (!user) return;
    setForm({
      name: user.name ?? '',
      bio: user.bio ?? '',
      website: user.website ?? '',
      github: user.github ?? '',
      linkedin: user.linkedin ?? '',
      location: user.location ?? '',
      skills: (user.skills ?? []).join(', '),
      experienceLevel: user.experienceLevel ?? 'beginner',
    });
    setError('');
    setEditing(true);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accessToken) return;
    setError('');
    setSaving(true);

    const payload: UpdateProfileInput = {
      name: form.name.trim(),
      bio: form.bio.trim(),
      website: form.website.trim(),
      github: form.github.trim(),
      linkedin: form.linkedin.trim(),
      location: form.location.trim(),
      skills: form.skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      experienceLevel: form.experienceLevel,
    };

    try {
      const { data } = await updateProfile(accessToken, payload);
      if (!data) throw new Error('Update failed');
      setSession(data.user, accessToken);
      setEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handlePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !accessToken) return;

    setPictureError('');

    if (!ALLOWED_PICTURE_TYPES.includes(file.type)) {
      setPictureError('Only JPEG, PNG, WEBP and GIF images are allowed.');
      return;
    }
    if (file.size > MAX_PICTURE_BYTES) {
      setPictureError('Image must be under 5MB.');
      return;
    }

    setUploadingPicture(true);
    try {
      const { data } = await uploadProfilePicture(accessToken, file);
      if (!data) throw new Error('Upload failed');
      setSession(data.user, accessToken);
    } catch (err) {
      setPictureError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setUploadingPicture(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accessToken) return;
    setPasswordError('');

    if (passwordForm.newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters.');
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setChangingPassword(true);
    try {
      await changePassword(accessToken, passwordForm.currentPassword, passwordForm.newPassword);
      setPasswordSuccess(true);
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      // Changing the password invalidates the current session server-side.
      setTimeout(() => logout(), 1500);
    } catch (err) {
      setPasswordError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setChangingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!accessToken) return;
    setDeleteError('');
    setDeleting(true);
    try {
      await deleteAccount(accessToken);
      setDeleteOpen(false);
      await logout();
      router.replace('/');
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (status === 'unauthenticated' || !user) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-xl font-semibold text-foreground">Sign in to view your profile</h1>
        <p className="text-sm text-muted-foreground">
          Track your progress, bookmark tutorials, and manage your account details.
        </p>
        <SignUpModal trigger={<Button>Sign In</Button>} />
      </div>
    );
  }

  const initials = (user.name ?? user.email ?? '?').charAt(0).toUpperCase();
  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
    : null;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6">
      <Card>
        <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <Avatar size="lg" className="size-20 sm:size-24">
              <AvatarImage src={user.profilePicture || undefined} />
              <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
            </Avatar>

            <input
              ref={fileInputRef}
              type="file"
              accept={ALLOWED_PICTURE_TYPES.join(',')}
              className="hidden"
              onChange={handlePictureChange}
            />
            <button
              type="button"
              aria-label="Change profile picture"
              disabled={uploadingPicture}
              onClick={() => fileInputRef.current?.click()}
              className="absolute -right-1 -bottom-1 flex size-7 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground transition hover:bg-primary/80 disabled:opacity-50"
            >
              {uploadingPicture ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : (
                <Camera className="size-3.5" />
              )}
            </button>
            {pictureError && (
              <p className="absolute top-full mt-1 w-40 text-xs text-destructive">{pictureError}</p>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="truncate text-xl font-semibold text-foreground" title={user.name}>
                  {user.name}
                </h1>
                <p className="truncate text-sm text-muted-foreground" title={user.email}>
                  @{user.username} · {user.email}
                </p>
              </div>

              {!editing && (
                <Button variant="outline" size="sm" onClick={startEditing}>
                  <Pencil className="size-3.5" />
                  Edit profile
                </Button>
              )}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {user.experienceLevel && (
                <Badge variant="secondary" className="capitalize">
                  {user.experienceLevel}
                </Badge>
              )}
              {user.authProvider === 'google' && (
                <Badge variant="outline" className="gap-1">
                  <FcGoogle className="size-3" />
                  Google
                </Badge>
              )}
              {joinedDate && (
                <Badge variant="outline" className="gap-1">
                  <CalendarDays className="size-3" />
                  Joined {joinedDate}
                </Badge>
              )}
              {user.location && (
                <Badge variant="outline" className="gap-1">
                  <MapPin className="size-3" />
                  {user.location}
                </Badge>
              )}
            </div>

            {!editing && user.bio && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{user.bio}</p>
            )}

            {!editing && (user.website || user.github || user.linkedin) && (
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {user.website && (
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <Globe className="size-3.5" /> Website
                  </a>
                )}
                {user.github && (
                  <a
                    href={user.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <FaGithub className="size-3.5" /> GitHub
                  </a>
                )}
                {user.linkedin && (
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    <FaLinkedin className="size-3.5" /> LinkedIn
                  </a>
                )}
              </div>
            )}

            {!editing && (user.skills?.length ?? 0) > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {user.skills!.map((skill) => (
                  <Badge key={skill} variant="ghost">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}

            {editing && (
              <form onSubmit={handleSave} className="mt-4 flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      required
                      minLength={2}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">Location</label>
                    <Input
                      value={form.location}
                      onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Bio</label>
                  <Textarea
                    value={form.bio}
                    onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
                    maxLength={300}
                    placeholder="Tell us a little about yourself"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">Website</label>
                    <Input
                      value={form.website}
                      onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                      placeholder="https://"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">GitHub</label>
                    <Input
                      value={form.github}
                      onChange={(e) => setForm((f) => ({ ...f, github: e.target.value }))}
                      placeholder="https://github.com/you"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">LinkedIn</label>
                    <Input
                      value={form.linkedin}
                      onChange={(e) => setForm((f) => ({ ...f, linkedin: e.target.value }))}
                      placeholder="https://linkedin.com/in/you"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Skills{' '}
                    <span className="font-normal text-muted-foreground">(comma separated)</span>
                  </label>
                  <Input
                    value={form.skills}
                    onChange={(e) => setForm((f) => ({ ...f, skills: e.target.value }))}
                    placeholder="React, Node.js, TypeScript"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Experience level</label>
                  <div className="flex flex-wrap gap-2">
                    {EXPERIENCE_LEVELS.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, experienceLevel: level }))}
                        className={`rounded-full border px-3 py-1 text-xs font-medium capitalize transition ${
                          form.experienceLevel === level
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <div className="mt-1 flex gap-2">
                  <Button type="submit" disabled={saving}>
                    {saving ? <Loader2 className="size-4 animate-spin" /> : <Check className="size-4" />}
                    Save changes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={saving}
                    onClick={() => {
                      setEditing(false);
                      setError('');
                    }}
                  >
                    <X className="size-4" />
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        </CardContent>
      </Card>

      {overview && (
        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
            YOUR PROGRESS
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard icon={Flame} label="Day streak" value={overview.learningStreak} />
            <StatCard icon={Target} label="Accuracy" value={`${Math.round(overview.accuracy)}%`} />
            <StatCard
              icon={BookOpen}
              label="Tutorials done"
              value={overview.completedTutorialsCount}
            />
            <StatCard
              icon={Layers}
              label="In progress"
              value={overview.technologiesInProgress}
            />
          </div>
        </div>
      )}

      <div>
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
          ACCOUNT SETTINGS
        </h2>
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <KeyRound className="size-4 text-primary" />
              <CardTitle>Change password</CardTitle>
            </div>

            {user.authProvider === 'google' ? (
              <p className="text-sm text-muted-foreground">
                You signed in with Google, so there&apos;s no password to change here.
              </p>
            ) : (
              <form onSubmit={handleChangePassword} className="flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">Current password</label>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm((f) => ({ ...f, currentPassword: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">New password</label>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      minLength={8}
                      value={passwordForm.newPassword}
                      onChange={(e) =>
                        setPasswordForm((f) => ({ ...f, newPassword: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-foreground">Confirm new password</label>
                    <Input
                      type="password"
                      autoComplete="new-password"
                      minLength={8}
                      value={passwordForm.confirmPassword}
                      onChange={(e) =>
                        setPasswordForm((f) => ({ ...f, confirmPassword: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>

                {passwordError && <p className="text-sm text-destructive">{passwordError}</p>}
                {passwordSuccess && (
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">
                    Password changed. Signing you out for security — please sign back in.
                  </p>
                )}

                <div>
                  <Button type="submit" disabled={changingPassword} size="sm">
                    {changingPassword && <Loader2 className="size-3.5 animate-spin" />}
                    Update password
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold tracking-wide text-destructive">DANGER ZONE</h2>
        <Card className="ring-destructive/20">
          <CardContent className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Delete account</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Permanently deletes your account, blogs, reviews, and progress. This cannot be
                undone.
              </p>
            </div>

            <Dialog
              open={deleteOpen}
              onOpenChange={(open) => {
                setDeleteOpen(open);
                if (!open) {
                  setDeleteConfirmText('');
                  setDeleteError('');
                }
              }}
            >
              <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="size-3.5" />
                  Delete account
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <AlertTriangle className="size-4 text-destructive" />
                    Delete your account?
                  </DialogTitle>
                  <DialogDescription>
                    This permanently deletes your account and all associated data. Type{' '}
                    <span className="font-medium text-foreground">{user.email}</span> to confirm.
                  </DialogDescription>
                </DialogHeader>

                <Input
                  value={deleteConfirmText}
                  onChange={(e) => setDeleteConfirmText(e.target.value)}
                  placeholder={user.email}
                />

                {deleteError && <p className="text-sm text-destructive">{deleteError}</p>}

                <DialogFooter>
                  <Button variant="outline" onClick={() => setDeleteOpen(false)} disabled={deleting}>
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    disabled={deleteConfirmText !== user.email || deleting}
                    onClick={handleDeleteAccount}
                  >
                    {deleting && <Loader2 className="size-3.5 animate-spin" />}
                    Permanently delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
}) {
  return (
    <Card size="sm">
      <CardHeader className="pb-0">
        <Icon className="size-4 text-primary" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{value}</CardTitle>
        <p className="text-xs text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
