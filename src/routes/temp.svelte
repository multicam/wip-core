<script>
  import dayjs from "dayjs";
  import {browser} from '$app/env'
  import {whoami} from '$lib/utils'
  import InputText from '$lib/components/input_text.svelte'
  const {log} = console, {stringify, parse} = JSON, {keys} = Object

  const users = []

  const db_id = 15, db_url = `http://jmbox.local:7379/${db_id}`
  let search, db_search

  const getKey = async (key) => {
    const res = await fetch(`${db_url}/GET/${key}`)
    return res.json()
  }

  const passThrough = async (cmd, ...rest) => {
    log(cmd, [...rest])
  }

  const getUser = async (uid, options = {}) => {
    const res = await getUserKeys(uid,options)
    if( res.KEYS?.length ) {
      const result = {}
      for (let i of res.KEYS) {
        const temp = await getKey(i)
        result[i] = typeof temp.GET === 'string' ? parse(temp.GET) : temp.GET
      }
      return result
    }
    return null
  }

  const updateUser = async (uid, options = {}) => {
    // here
    return getUser(uid)
  }

  const writeUser = async (uid, data, options = {}) => {
    // here
    // data is an object
    // conventions for addresses, grades, extensions
    return getUser(uid)
  }

  const getUserKeys = async (uid, options = {}) => {
    await passThrough(15, 'KEYS', `${uid}:*`)
    const res = await fetch(`http://jmbox.local:7379/15/KEYS/${uid}:*`)
    return res.json()
  }

  getUser(10).then(log)
  getUser(20005).then(log)

</script>
<header class="flex justify-between">
    <InputText bind:value={search} class="flex-1"/>
    <div class="bold">{search ?? ''}</div>
    <InputText bind:value={db_search} class="flex-1"/>
    <div class="bold text-xs">{db_search ?? ''}</div>

</header>
<section class="relative flex-1 overflow-auto bg-neutral-200">
    <div class="text-xs">


    </div>
</section>
<footer class="flex justify-between">
    <div>-- {dayjs().format()}</div>
</footer>
<style>
    header, footer, section {
        @apply px-2 my-1
    }
    pre {
        @apply text-xs;
        @apply leading-normal
    }
</style>
