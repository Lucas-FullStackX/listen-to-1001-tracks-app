import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "user-read-private",
  "streaming",
  "playlist-modify-public",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

// Initialize the Spotify API object
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
