<style>
  :global(code) {
    white-space: pre-wrap;
  }
</style>

<svelte:head>
  <title>Tu Song - Songs - { data.title }</title>
</svelte:head>

<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<article>
  <h1>{ data.title }</h1>
  <svelte:component this={data.content} />
</article>
