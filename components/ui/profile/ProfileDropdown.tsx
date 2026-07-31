'use client';

import Link from 'next/link';
import { Trophy, User, LogOut, ChevronRight } from 'lucide-react';
import { signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function ProfileDropdown({ user }: ProfileDropdownProps) {
  const initials = (user.name ?? user.email ?? '?').charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full ring-2 ring-primary/30 transition hover:ring-primary">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image ?? undefined} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-70 rounded-2xl border bg-background p-0 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-3 px-5">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image ?? undefined} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="px-5 py-2 text-xs font-semibold tracking-wider text-muted-foreground">
          ACCOUNT
        </div>

        <Link
          href="/profile"
          className="flex items-center justify-between px-5 py-2 transition hover:bg-accent"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <User className="h-5 w-5 text-primary" />
            </div>

            <span className="font-medium">Profile</span>
          </div>

          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>

        <Link
          href="/leaderboard"
          className="flex items-center justify-between px-5 py-3 transition hover:bg-accent"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Trophy className="h-5 w-5 text-primary" />
            </div>

            <span className="font-medium">Leaderboard</span>
          </div>

          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>

        <DropdownMenuSeparator />

        <button
          onClick={() => signOut()}
          className="flex w-full  items-center gap-3 px-5 py-2 text-red-500 transition hover:bg-red-500/10"
        >
          <div className="rounded-lg bg-red-500/10 p-2">
            <LogOut className="h-5 w-5" />
          </div>

          <span className="font-medium">Sign Out</span>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
