<script>
  import Table from '$lib/components/table-query.svelte'
</script>
<Table
        type="inbox-entry"
        filter="persons"
        preorder="desc"
        uri="http://jmbox.local:5050/v1/feeds/inbox"
/>
