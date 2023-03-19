import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET ?? "",
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;

      session.user.id = token.id;

      return session;
    },
  },
});
