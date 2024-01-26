<script lang="ts">
  import { CldImage } from 'svelte-cloudinary';

export let data;
console.log(data.image.public_id
)
</script>
<h1>dsfgdghftgjh</h1>

<CldImage src={data.image.public_id}/>