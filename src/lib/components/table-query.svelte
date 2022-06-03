<script>
  import {onMount} from "svelte";
  import {fetcher} from '../utils'
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import {useQuery} from '@sveltestack/svelte-query';

  const {log} = console, {keys} = Object, {stringify, parse} = JSON

  export let type, uri
  let start, end, data

  const res = useQuery('crmPersons', () => fetcher(uri) )

</script>
<style>

    section {
        @apply font-mono;
        @apply text-xs;
    }
</style>
<header>
    <pre>{$res.status}</pre>
</header>
<section class="relative flex-1 overflow-auto">
    {#if $res.status === 'success' }
        <VirtualList items={$res.data} bind:start bind:end let:item>
            <div>{stringify(item)}</div>
        </VirtualList>
    {/if}
</section>
<footer>{type}: {uri}</footer>
