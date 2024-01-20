<script>
  import {CldImage} from 'svelte-cloudinary'
export let data;
console.log(data)
</script>

<div class="grid auto-cols-400 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
  {#each data.images as {public_id} }
  <a href="/images/{public_id}" class="w-full h-full grid place-items-center">
    <CldImage src={public_id} width="400" height="400"/>
  </a>
  {/each}
</div>





