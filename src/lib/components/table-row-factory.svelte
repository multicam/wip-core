<script>
  import {Icon} from '@steeze-ui/svelte-icon'
  import {Mail, CheckCircle, ChevronRight} from '@steeze-ui/heroicons'
  import dayjs from 'dayjs'
  import localizedFormat from 'dayjs/plugin/localizedFormat'

  dayjs.extend(localizedFormat)

  export let item, type, debug = false
  const {log} = console, {keys} = Object, {stringify, parse} = JSON

  let emails = item.personAltEmails ? [item.personEmail].concat(parse(item.personAltEmails)) : [item.personEmail]
</script>
<div class="border border-b-blue-300 pb-2 font-normal">
    {#if type === 'person'}
        <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full bg-gray-300" alt="">
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                        <p class="text-sm font-medium text-indigo-600 truncate">{item.personFirstName} {item.personLastName}</p>
                        {#each emails as email}
                            <p class="mt-2 flex items-center text-xs text-gray-500">
                                <Icon src={Mail} theme='solid' class='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'/>
                                <span class="truncate">{email}</span>
                            </p>
                        {/each}
                    </div>
                    <div class="hidden md:block">
                        <div>
                            <p class="text-xs text-gray-900">
                                Created:
                                <time datetime={dayjs(item.personDateCreated).format()}>{dayjs(item.personDateCreated).format('LLL')}</time>
                            </p>
                            {#if item.lastEmail}
                                <p class="text-xs text-gray-900">
                                    Last Email:
                                    <time datetime={dayjs(item.lastEmail.date).format()}>{dayjs(item.lastEmail.date).format('LLL')}</time>
                                </p>
                            {/if}
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                                <Icon src={CheckCircle} theme='solid'
                                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"/>
                                Completed phone screening
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Icon src={ChevronRight} class="h-5 w-5 text-gray-400"/>
            </div>

        </div>
    {/if}
    {#if debug}
        <pre class="m-4 text-red-400 text-xxs font-mono">{stringify(item, null, 2)}</pre>
    {/if}
</div>
