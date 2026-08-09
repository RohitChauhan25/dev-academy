"use client";

import * as React from "react";
import {
  ChevronDown,
  Mail,
  BookOpen,
  FileText,
  Code2,
  Bookmark,
  Loader2,
  GraduationCap,
  Eye,
  EyeOff,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup as signupRequest } from "@/lib/auth-api";
import { useAuth } from "@/components/providers/AuthProvider";

interface SignUpModalProps {
  trigger?: React.ReactNode;
}

type Mode = "signup" | "signin";

const BENEFITS = [
  {
    icon: BookOpen,
    title: "Structured Tutorials",
    description: "Frontend, Backend, DevOps & Full Stack — learn step by step.",
  },
  {
    icon: FileText,
    title: "Interview Questions & MCQs",
    description: "Curated, company-wise questions to ace your next interview.",
  },
  {
    icon: Code2,
    title: "Hands-on Practice",
    description: "DSA, machine coding & output-based challenges that stick.",
  },
  {
    icon: Bookmark,
    title: "Save Your Progress",
    description: "Bookmark tutorials and pick up right where you left off.",
  },
];

export default function SignUpModal({ trigger }: SignUpModalProps) {
  const { login, loginWithGoogle } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<Mode>("signup");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showWhy, setShowWhy] = React.useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [signUpSuccess, setSignUpSuccess] = React.useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    setShowWhy(false);
    setFormError("");
    setSignUpSuccess(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      resetForm();
      setMode("signup");
    }
    setOpen(next);
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    setFormError("");
    setSignUpSuccess(false);
  };

  const handleGoogleSignIn = () => {
    setIsGoogleSubmitting(true);
    loginWithGoogle();
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    if (!email.trim()) {
      setFormError("Please enter your email.");
      return;
    }
    if (password.length < 8) {
      setFormError("Password must be at least 8 characters.");
      return;
    }

    setIsSubmitting(true);
    try {
      await signupRequest(email, password);
      setSignUpSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    if (!email.trim() || !password) {
      setFormError("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      await login(email, password);
      handleOpenChange(false);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger ?? <Button variant="outline">Sign In</Button>}
      </DialogTrigger>

      <DialogContent className="max-w-4xl gap-0 overflow-hidden border-border bg-popover p-0 sm:max-w-3xl sm:rounded-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left: brand / benefits panel */}
          <div className="relative hidden flex-col justify-center overflow-hidden px-10 py-8 md:flex">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,rgba(124,58,237,0.12)_0%,transparent_60%)] dark:bg-[radial-gradient(120%_100%_at_0%_0%,rgba(124,58,237,0.25)_0%,transparent_60%)]"
            />
            <div className="relative flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 text-white">
                <GraduationCap className="size-4" />
              </span>
              <h2 className="text-lg font-semibold text-foreground">
                Why join DevAcademy?
              </h2>
            </div>
            <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Sign in to save your progress, bookmark tutorials, and get the
              most out of your interview prep.
            </p>

            <ul className="relative mt-6 flex flex-col gap-4">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-violet-500 dark:text-sky-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: sign-in card */}
          <div className="flex flex-col justify-center bg-accent/20 px-8 py-8 md:border-l md:border-border">
            <div className="mx-auto w-full max-w-lg">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-foreground">Hey 👋</h2>
                <p className="mt-1 text-xl font-semibold text-foreground">
                  Welcome to DevAcademy
                </p>
              </div>

              <div className="mt-5 flex rounded-lg border border-border bg-background p-1">
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className={`flex-1 rounded-md py-1.5 text-sm font-medium transition ${
                    mode === "signup"
                      ? "bg-indigo-600 text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => switchMode("signin")}
                  className={`flex-1 rounded-md py-1.5 text-sm font-medium transition ${
                    mode === "signin"
                      ? "bg-indigo-600 text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign In
                </button>
              </div>

              <Button
                type="button"
                variant="outline"
                disabled={isGoogleSubmitting}
                onClick={handleGoogleSignIn}
                className="mt-5 h-auto w-full justify-between rounded-lg border-border bg-white px-3 py-2 text-black hover:bg-white/90 dark:border-white/20 dark:bg-[#131314] dark:text-white dark:hover:bg-[#1f1f1f]"
              >
                <span className="flex items-center gap-2 text-left">
                  <span className="text-xs font-medium">
                    Continue with Google
                  </span>
                </span>
                {isGoogleSubmitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <FcGoogle className="size-4 shrink-0" />
                )}
              </Button>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[11px] text-muted-foreground">OR</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {mode === "signup" && signUpSuccess ? (
                <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <p className="text-sm font-medium text-foreground">
                    Verification email sent!
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Check your inbox for the verification link. If you
                    signed up before and your old link expired, this new one
                    replaces it.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={mode === "signup" ? handleSignUp : handleSignIn}
                  className="mt-4 flex flex-col gap-3"
                >
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="auth-email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="auth-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="border-border bg-transparent text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="auth-password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="auth-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete={mode === "signup" ? "new-password" : "current-password"}
                        minLength={mode === "signup" ? 8 : undefined}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={mode === "signup" ? "At least 8 characters" : "Enter your password"}
                        className="border-border bg-transparent pr-10 text-foreground placeholder:text-muted-foreground"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute inset-y-0 right-0 flex w-9 items-center justify-center text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="size-4" />
                        ) : (
                          <Eye className="size-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {formError && (
                    <p className="text-sm text-destructive">{formError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1 w-full bg-indigo-600 font-semibold hover:bg-indigo-500"
                  >
                    {isSubmitting && (
                      <Loader2 className="size-4 animate-spin" />
                    )}
                    {mode === "signup" ? "Create Account" : "Sign In"}
                  </Button>
                </form>
              )}

              <button
                type="button"
                onClick={() => setShowWhy((prev) => !prev)}
                className="mt-3 flex w-full items-center justify-between text-sm text-muted-foreground hover:text-foreground"
              >
                Why is sign in required?
                <ChevronDown
                  className={`size-4 transition-transform ${showWhy ? "rotate-180" : ""}`}
                />
              </button>
              {showWhy && (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Signing in lets us save your progress, bookmark tutorials, and
                  keep your learning synced across devices.
                </p>
              )}

              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground/70">
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
