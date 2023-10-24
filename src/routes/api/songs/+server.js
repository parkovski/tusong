import fetchSongs from '$lib/util/fetch-songs.js';
import { json } from '@sveltejs/kit';

export async function GET() {
  const songs = await fetchSongs();
  const sortedSongs = songs.sort((a, b) => a.name.localeCompare(b.name))
  return json(sortedSongs);
}
