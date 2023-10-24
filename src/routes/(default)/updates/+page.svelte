<script>
  export let data;

  function formatDate(date) {
    const dateParts = date.split('-').map(x => +x);
    return new Date(dateParts[0], dateParts[1]-1, dateParts[2]).toDateString();
  }
</script>

<style>
  ul {
    padding-left: 0;
  }
  li {
    line-height: 150%;
    list-style: none;
  }
  .date {
    font-size: 100%;
    font-style: italic;
  }
</style>

<svelte:head>
  <title>Tu Song - Updates</title>
</svelte:head>

<h1>Updates</h1>

<ul>
  {#each data.posts as post}
    <li>
      <a href={post.path}>{post.meta.title}
        (<span class="date">{formatDate(post.meta.date)}</span>)</a>
    </li>
  {/each}
</ul>
