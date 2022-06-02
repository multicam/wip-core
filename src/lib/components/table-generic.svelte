<script>
  import {onMount} from "svelte";
  import {fetcher} from '../utils'
  import VirtualList from '@sveltejs/svelte-virtual-list';

  const {log} = console, {keys} = Object, {stringify, parse} = JSON

  export let type, uri
  let start, end, data

  onMount(async () => {
    data = await fetcher(uri)
  })

  // $: end && (() => {
  //   for (let i of range(start, end)) {
  //     if (i < data.length && !data[i].proc) {
  //       data[i].proc = true
  //     }
  //   }
  // })()

</script>
<style>

    section {
        @apply font-mono;
        @apply text-xs;
    }

</style>
<header>hey</header>
<section class="relative flex-1 overflow-auto">
    {#if data}
        <VirtualList items={data} bind:start bind:end let:item>
            <div>{stringify(item)}</div>
        </VirtualList>
    {:else}
        Loading...
    {/if}
    <div class="absolute bg-blue-200 right-0 top-0">
        <pre>{start}-{end}</pre>
    </div>
</section>
<footer>{type}: {uri}</footer>
