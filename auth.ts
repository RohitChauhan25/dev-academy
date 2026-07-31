import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('[auth] user:', user);
      console.log('[auth] account:', account);
      console.log('[auth] google profile:', profile);
      return true;
    },
  },
});
