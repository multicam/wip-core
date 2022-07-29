<script>
    export let value
</script>
<input
        type="text"
        class="
            mt-1
            text-sm
            py-1
            px-2
            block
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            w-full
          "
        placeholder="let it rip..."
        bind:value={value}
>
