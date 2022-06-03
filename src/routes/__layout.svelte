<script>
  import '../app.css'
  import {QueryClientProvider} from "@sveltestack/svelte-query";
</script>
<style>
    :global(body > div) {
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
</style>
<QueryClientProvider>
    <slot/>
</QueryClientProvider>
