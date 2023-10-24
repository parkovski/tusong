interface Song {
  name: string;
  page: string;
}

export async function load({ fetch }: { fetch: any }): Promise<{ songs: Song[] }> {
  const response = await fetch('/api/songs');
  const songs = await response.json();
  return { songs };
}
