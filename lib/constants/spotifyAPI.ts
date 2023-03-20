export const SPOTIFY_API = "https://api.spotify.com/v1";
export const SPOTIFY_CREATE_PLAYLIST_API = (user: string): string =>
  `${SPOTIFY_API}/users/${user}/playlists`;
export const SPOTIFY_ADD_TRACK_API = (playlist: string): string =>
  `${SPOTIFY_API}/playlist/${playlist}/tracks`;
