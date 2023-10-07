<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<article>
  <h1>{ data.title } - <span style="font-weight: normal">{ new Date(data.date).toDateString() }</span></h1>
  <svelte:component this={data.content} />
</article>
