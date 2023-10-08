<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  // The string Date constructor assumes UTC time, but toDateString uses the
  // local time zone which results in the wrong day being displayed.
  const dateParts = data.date.split('-').map(x => +x);
  const date = new Date(dateParts[0], dateParts[1]-1, dateParts[2]).toDateString();
</script>

<article>
  <h1>{ data.title } - <span style="font-weight: normal">{ date }</span></h1>
  <svelte:component this={data.content} />
</article>
