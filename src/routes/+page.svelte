
<script>
export let data;
console.log(data)
</script>

<ul>
  {#each data.images as {public_id} }
    <li>{public_id}</li>
  {/each}
</ul>





