<script>
  import {fetcher} from '../utils'
  import {useQuery} from '@sveltestack/svelte-query';
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import Row from '$lib/components/table-row-factory.svelte'

  const {log} = console, {keys} = Object, {stringify, parse} = JSON

  export let type, uri
  let start, end, data

  const res = useQuery('crmPersons', () => fetcher(uri) )

</script>
<style>

    section {
        @apply text-xs;
    }
</style>
<header>
    <pre>{$res.status}</pre>
</header>
<section class="relative flex-1 overflow-auto">
    {#if $res.status === 'success' }
        <VirtualList items={$res.data} bind:start bind:end let:item>
            <Row type={type} item={item} />
        </VirtualList>
    {/if}
</section>
<footer>{type}: {uri}</footer>
