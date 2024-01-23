<script lang="ts">
  import {CldImage} from 'svelte-cloudinary'
  import LoadMore from './LoadMore.svelte';
  export let data;
  let images= data.images;
  let nextCursor = data.nextCursor;
  console.log(data)
</script>

<div class="grid auto-cols-400 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
  {#each images as {public_id} }
  <a href="/images/{public_id}" class="w-full h-full grid place-items-center">
    <CldImage src={public_id} width="400" height="400"/>
  </a>
  {/each}
  
  {#if nextCursor && nextCursor.length}
  <LoadMore onLoad={async ()=>{
    const response = await fetch(`/api/images?next=${nextCursor}`)
    const { data, next_cursor } = await response.json();
    images = [...images, ...data];
    nextCursor = next_cursor
  }}/>
  {/if}
  
</div>





