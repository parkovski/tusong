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
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<article>
  <h1>{ data.title }</h1>
  <data.content />
</article>
