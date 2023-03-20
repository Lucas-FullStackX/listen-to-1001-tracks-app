import { useSession } from "next-auth/react";
import { useState } from "react";
import { SPOTIFY_CREATE_PLAYLIST_API } from "../../lib/constants";

interface PlaylistResponse {
  snapshot_id: string;
}

export default function useCreatePlaylist(): [
  (playlist: string) => Promise<void>,
  { loading: boolean; data: PlaylistResponse | {}; error: Error | null }
] {
  // States
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<PlaylistResponse | {}>({});
  const [error, setError] = useState<Error | null>(null);

  // Hooks
  const { data: sessionData } = useSession();
  const createPlaylist = async (playlist: string): Promise<void> => {
    try {
      setLoading(true);
      const createPlaylist = await fetch(
        SPOTIFY_CREATE_PLAYLIST_API(sessionData?.user?.id ?? ""),
        {
          method: "POST",
          body: JSON.stringify({
            name: playlist,
            description: "1001 tracks",
            public: false,
          }),
          headers: {
            Authorization: `Bearer ${sessionData?.user.accessToken}`,
          },
        }
      );
      const resp = await createPlaylist.json();
      setData(resp);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
      if (e instanceof Error) {
        setError(e);
      }
    }
  };

  return [createPlaylist, { loading, data, error }];
}
