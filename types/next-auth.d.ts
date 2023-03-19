import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string;
    accessToken: string;
    idToken?: string;
    accessTokenExpires: number;
    accessToken?: string;
    username?: string;
    refreshToken?: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    user: {
      id?: string;
      accessToken?: string;
      username?: string;
      refreshToken?: string;
    } & DefaultSession["user"];
  }
  interface Account {
    expires_at: number;
  }
}
