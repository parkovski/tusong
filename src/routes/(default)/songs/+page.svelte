<script>
  import Fuse from 'fuse.js';

  export let data;
  let filteredSongs = data.songs;

  const fuse = new Fuse(data.songs, { keys: ['name'] });

  function filter(e) {
    if (e.target.value.length === 0) {
      filteredSongs = data.songs;
      return;
    }
    const result = fuse.search(e.target.value);
    filteredSongs = result.map(x => x.item);
  }

  function clearFilter() {
    document.getElementById('filter').value = '';
    filteredSongs = data.songs;
    return false;
  }
</script>

<style>
  ul,li {
    margin-left: 0;
    padding-left: 0;
  }
  li {
    list-style: none;
    line-height: 150%;
  }
  #filtersection {
    display: inline-block;
    float: right;
    position: relative;
    top: -3.5em;
  }
  @media (max-width: 640px) {
    #filtersection {
      display: block;
      float: none;
      top: 0;
    }
  }
  #clearfilter {
    cursor: pointer;
  }
  #clearfilter:hover {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>Tu Song - Songs</title>
</svelte:head>

<h1>Songs</h1>
<div id="filtersection">
  <label>Search: <input type="text" id="filter" on:input={filter}></label>
  <a id="clearfilter" on:click={clearFilter}>&#10060;</a>
</div>
<ul>
  {#each filteredSongs as song}
    <li><a href="{song.page}">{song.name}</a></li>
  {/each}
  {#if filteredSongs.length === 0}
    <li>No matches</li>
  {/if}
</ul>
