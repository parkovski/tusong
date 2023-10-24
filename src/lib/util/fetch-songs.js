export default async function fetchSongs() {
  const files = import.meta.glob(`/src/routes/\(default)/songs/*.mdx`);

  return await Promise.all(
    Object.entries(files).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        name: metadata.title,
        page: path.slice('/src/routes/(default)'.length, -'.mdx'.length),
      };
    })
  );
}
