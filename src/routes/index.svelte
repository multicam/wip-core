<script>
  import dayjs from "dayjs";
  import {browser} from '$app/env'
  import {whoami} from '$lib/utils'
  import InputText from '$lib/components/input_text.svelte'

  const {log} = console, {stringify, parse} = JSON, {keys} = Object

  const users = []

  const fetchUsersActive = async () => {
    let res = await fetch('http://jmbox.local:5050/v1/courses/active').then(r => r.json())
    res = res.map(i => i.userId)
    return res
      .filter((i, n) => res.indexOf(i) === n)
      .map(i => ({userId: i}))
  }

  const fetchUser = async (uid) => {
    return fetch(`http://jmbox.local:5050/v1/user/${uid}`).then(r => r.json())
  }

  const installSubscriber = channel => {
    let previous_response_length = 0
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://jmbox.local:7379/SUBSCRIBE/${channel}`, true);
    xhr.onreadystatechange = checkData;
    xhr.send(null);

    function checkData() {
      if (xhr.readyState === 3) {
        const response = xhr.responseText;
        const chunk = response.slice(previous_response_length);
        previous_response_length = response.length;
        console.log(chunk);
      }
    }
  }

  const fetchUser2 = async uid => {
    const res = await fetch(`http://jmbox.local:7379/15/GET/${uid}:general`)
    const json = await res.json()
    return parse(json.GET)
  }

  whoami()
  browser && installSubscriber('hello')
  // fetchUsersActive().then(log)

    let temp
  fetchUser(10).then(log)
  fetchUser2(10).then(res => {
    temp = res
  })
  // fetchOther().then(log)


  let search, db_search

</script>
<header class="flex justify-between">
    <InputText bind:value={search} class="flex-1"/>
    <div class="bold">{search ?? ''}</div>
    <InputText bind:value={db_search} class="flex-1"/>
    <div class="bold text-xs">{db_search ?? ''}</div>

</header>
<section class="relative flex-1 overflow-auto bg-neutral-200">
    <div class="text-xs">
        <!--{#if $ql.isLoading}-->
        <!--    <span>Loading...</span>-->
        <!--{:else if $ql.error}-->
        <!--    <span>An error has occurred: {$ql.error.message}</span>-->
        <!--{:else}-->
        <!--    <pre class="text-xs ">{stringify($ql.data, null, 2)}</pre>-->
        <!--{/if}-->

        <pre>{stringify(temp,null,2)}</pre>
    </div>
</section>
<footer class="flex justify-between">
    <div>-- {dayjs().format()}</div>
</footer>
<style>
    header, footer, section {
        @apply px-2 my-1
    }
</style>
