'use client';

import * as React from 'react';

import {
  type AuthUser,
  getProfile,
  login as loginRequest,
  logout as logoutRequest,
  refreshSession,
  googleLoginUrl,
} from '@/lib/auth-api';

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

interface AuthContextValue {
  user: AuthUser | null;
  accessToken: string | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => void;
  logout: () => Promise<void>;
  setSession: (user: AuthUser, accessToken: string) => void;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<AuthStatus>('loading');

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const { data } = await refreshSession();
        if (!data) throw new Error('No session');
        const profile = await getProfile(data.accessToken);
        if (cancelled) return;
        setUser(profile.data!.user);
        setAccessToken(data.accessToken);
        setStatus('authenticated');
      } catch {
        if (!cancelled) setStatus('unauthenticated');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const setSession = React.useCallback((nextUser: AuthUser, nextAccessToken: string) => {
    setUser(nextUser);
    setAccessToken(nextAccessToken);
    setStatus('authenticated');
  }, []);

  const login = React.useCallback(async (email: string, password: string) => {
    const { data } = await loginRequest(email, password);
    if (!data) throw new Error('Login failed');
    setSession(data.user, data.accessToken);
  }, [setSession]);

  const loginWithGoogle = React.useCallback(() => {
    window.location.href = googleLoginUrl();
  }, []);

  const logout = React.useCallback(async () => {
    if (accessToken) {
      await logoutRequest(accessToken).catch(() => {});
    }
    setUser(null);
    setAccessToken(null);
    setStatus('unauthenticated');
  }, [accessToken]);

  const value = React.useMemo(
    () => ({ user, accessToken, status, login, loginWithGoogle, logout, setSession }),
    [user, accessToken, status, login, loginWithGoogle, logout, setSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
