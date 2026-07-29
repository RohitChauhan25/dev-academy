'use client';

import * as React from 'react';
import { ChevronDown, Mail, BookOpen, FileText, Briefcase, Sparkles, Loader2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SignInModalProps {
  trigger?: React.ReactNode;
  userAvatarUrl?: string;
  userName?: string;
  userEmail?: string;
  onGoogleSignIn?: () => Promise<void> | void;
  onMagicLinkSignIn?: (email: string) => Promise<void> | void;
}

const BENEFITS = [
  {
    icon: BookOpen,
    title: 'Interview Resources',
    description: 'Curated React, JavaScript & Web tech resources.',
  },
  {
    icon: FileText,
    title: 'Share Your Contributions',
    description: 'Showcase your name and connect with the community.',
  },
  {
    icon: Briefcase,
    title: 'Frontend Jobs',
    description: 'Discover curated frontend job listings from top companies.',
  },
  {
    icon: Sparkles,
    title: 'Contribute & Grow',
    description: 'Add interview experiences, resources, and more.',
  },
];

export default function SignInModal({
  trigger,
  userAvatarUrl,
  userName = 'there',
  userEmail,
  onGoogleSignIn,
  onMagicLinkSignIn,
}: SignInModalProps) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [showWhy, setShowWhy] = React.useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = React.useState(false);
  const [isMagicSubmitting, setIsMagicSubmitting] = React.useState(false);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setEmail('');
      setShowWhy(false);
    }
    setOpen(next);
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleSubmitting(true);
    try {
      await onGoogleSignIn?.();
      handleOpenChange(false);
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  const handleMagicLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsMagicSubmitting(true);
    try {
      await onMagicLinkSignIn?.(email);
    } finally {
      setIsMagicSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger ?? <Button variant="outline">Sign In</Button>}
      </DialogTrigger>

      <DialogContent className="max-w-5xl gap-0 overflow-hidden border-white/10 bg-[#0b0b12] p-0 sm:rounded-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left: brand / benefits panel */}
          <div className="relative hidden flex-col justify-center overflow-hidden px-10 py-8 md:flex">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(120% 100% at 0% 0%, rgba(124,58,237,0.25) 0%, rgba(11,11,18,0) 60%)',
              }}
            />
            <div className="relative flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-bold text-white">
                FG
              </span>
              <h2 className="text-lg font-semibold text-white">Why join FrontendGeek?</h2>
            </div>
            <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Sign in to contribute, showcase your work, and connect with the frontend community.
            </p>

            <ul className="relative mt-6 flex flex-col gap-4">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-violet-400" />
                  <div>
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/45">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: sign-in card */}
          <div className="flex flex-col justify-center bg-white/[0.02] px-8 py-8 md:border-l md:border-white/10">
            <div className="mx-auto w-full max-w-lg">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-white">Hey 👋</h2>
                <p className="mt-1 text-xl font-semibold text-white">Welcome to FrontendGeek</p>
              </div>

              <Button
                type="button"
                variant="outline"
                disabled={isGoogleSubmitting}
                onClick={handleGoogleSignIn}
                className="mt-5 h-auto w-full justify-between rounded-lg border-white/10 bg-white px-3 py-2 text-black hover:bg-white/90"
              >
                <span className="flex items-center gap-2 text-left">
                  {userAvatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={userAvatarUrl} alt="" className="size-7 rounded-full object-cover" />
                  ) : (
                    <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs font-medium">Continue as {userName}</span>
                    {userEmail && (
                      <span className="text-[11px] text-muted-foreground">{userEmail}</span>
                    )}
                  </span>
                </span>
                {isGoogleSubmitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <FcGoogle className="size-4 shrink-0" />
                )}
              </Button>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[11px] text-white/40">OR</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <form onSubmit={handleMagicLink} className="mt-4 flex flex-col gap-2">
                <label htmlFor="signin-email" className="text-sm font-medium text-white">
                  Login with Magic link
                </label>
                <Input
                  id="signin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email id to receive magic link"
                  className="border-white/10 bg-transparent text-white placeholder:text-white/30"
                />
                <Button
                  type="submit"
                  disabled={isMagicSubmitting}
                  className="mt-1 w-full bg-indigo-600 font-semibold hover:bg-indigo-500"
                >
                  {isMagicSubmitting && <Loader2 className="size-4 animate-spin" />}
                  Send Magic Link
                </Button>
              </form>

              <button
                type="button"
                onClick={() => setShowWhy((prev) => !prev)}
                className="mt-3 flex w-full items-center justify-between text-sm text-white/70 hover:text-white"
              >
                Why is sign in required?
                <ChevronDown className={`size-4 transition-transform ${showWhy ? 'rotate-180' : ''}`} />
              </button>
              {showWhy && (
                <p className="mt-2 text-xs leading-relaxed text-white/45">
                  Signing in lets us save your contributions, personalize job recommendations, and
                  keep the community spam-free.
                </p>
              )}

              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] text-white/35">
                <Mail className="size-3.5" />
                We will never spam your inbox
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}