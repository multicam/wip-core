<script>
  import {fetcher} from '../utils'
  import {useQuery} from '@sveltestack/svelte-query';
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import Row from '$lib/components/table-row-factory.svelte'

  const {log} = console, {keys} = Object, {stringify, parse} = JSON

  export let name = 'some_query_key', type, uri, debug
  let start, end, data

  const res = useQuery(name, () => fetcher(uri))
  const splat = obj => obj
</script>
<style>
    pre, section {
        @apply text-xs;
    }
</style>
<header>
    <pre>{$res.status}</pre>
</header>
<section class="flex flex-1 relative overflow-auto">
    <div class="flex-1 h-full">
        {#if $res.status === 'success' && $res.data?.length }
            <VirtualList items={$res.data} bind:start bind:end let:item>
                <Row type={type} item={splat(item)} />
            </VirtualList>
        {:else}
            <pre>{stringify($res, null, 2)}</pre>
        {/if}
    </div>
    <div>something</div>
</section>
<footer>{type} -- {uri}</footer>
