<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';
  export let data;
  console.log(data)
</script>

<div class="flex gap-4">
  <div class="w-[800px]">
    <CldImage height="800" width="800" src={data.image.public_id}/>
  </div>
  <div class="flex-1">
    <div class="font-bold">Tags</div>
    <div class="class">
      {#each data.image.tags as tag }
        <p>{tag}</p>
      {/each}
    </div>
  </div>
</div>