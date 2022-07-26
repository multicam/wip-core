<script>
  import Table from '$lib/components/table-query.svelte'
</script>
<Table
        type="emails"
        filter="persons"
        uri="http://localhost:3011/feed/2022-07-20"
        debug=true
/>
