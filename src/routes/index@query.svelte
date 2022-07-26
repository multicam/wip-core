<script>
  import dayjs from "dayjs";
  import {whoami} from '$lib/utils'
  import {useQuery, useQueries, useQueryClient} from '@sveltestack/svelte-query'

  const fetchUsersActive = async () => {
    let res = await fetch('http://jmbox.local:5050/v1/courses/active').then(r => r.json())
    res = res.map(i => i.userId)
    return res
      .filter((i, n) => res.indexOf(i) === n)
      .map(i => ({ userId: i}))
  }

  const fetchUser = async (uid) => {
    return fetch(`http://jmbox.local:5050/v1/user/${uid}`).then(r => r.json())
  }

  const client = useQueryClient()
  const ql = useQuery('coursesActive', fetchUsersActive)
  let users

  $: if($ql.isSuccess && $ql.data.length) {
    log('-- talking', $ql.data.length)

    users = useQueries($ql.data.map(i => ({
      queryKey: ['user', i.userId],
      queryFn: async () => fetchUser(i.userId)
    })))

    // client.refetchQueries()
  }
  // let uindex = $ql?.data
  // let users, ql


  whoami()

  const {log} = console, {stringify} = JSON, {keys} = Object
</script>
<header>
    some header
</header>
<section class="relative flex-1 overflow-auto bg-neutral-200">
    <div>
        <!--{#if $ql.isLoading}-->
        <!--    <span>Loading...</span>-->
        <!--{:else if $ql.error}-->
        <!--    <span>An error has occurred: {$ql.error.message}</span>-->
        <!--{:else}-->
        <!--    <pre class="text-xs ">{stringify($ql.data, null, 2)}</pre>-->
        <!--{/if}-->
        <pre>{stringify(client.getQueriesData('user'),null,2)}</pre>
    </div>
</section>
<footer class="flex justify-between">
    <div>-- {dayjs().format()}</div>
    <div>{$ql.error ? 'error' : $ql.isLoading ? 'loading' : $ql.isRefetching ? 'updating' : $ql.isIdle ? 'idle' : $ql.isSuccess ? 'success' : $ql.isStale ? 'stale' : 'other' }</div>
</footer>
<style>
    header, footer, section {
        @apply px-2 my-1
    }
</style>
