<script>
  import Table from '$lib/components/table-query.svelte'
</script>
<Table
        type="person"
        filter="persons"
        uri="http://jmbox.local:5050/v1/crm/persons"
/>
