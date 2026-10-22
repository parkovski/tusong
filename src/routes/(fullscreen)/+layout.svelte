<script>
  import '$lib/styles/style.css';
  import Header from '$lib/cx/Header.svelte';
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<style>
  footer {
    margin-top: -2rem;
  }
</style>

<Header/>

<main>
  {@render children?.()}
</main>

<footer>Copyright &copy; Parkovski Software</footer>
