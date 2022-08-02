<script>
  import '../app.css'
  import {QueryClientProvider} from "@sveltestack/svelte-query";
</script>
<style>
    :global(body > div) {
        height: 100vh;
        overflow: hidden;

        @apply flex;
        @apply flex-col;
        @apply text-gray-800;
    }
</style>
<QueryClientProvider>
    <slot/>
</QueryClientProvider>
