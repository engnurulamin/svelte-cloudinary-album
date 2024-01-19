<script>
import "../app.pcss";
import { Camera } from 'lucide-svelte';
import { Upload } from 'lucide-svelte';
import Button from "$lib/components/ui/button/button.svelte";
</script>
<div class="border-b fixed top-0 w-full bg-white">
  <div class="container h-16 flex items-center">
    <a href="/">
      <Camera />
    </a>
    <div class="ml-auto">
      <Button class="space-x-1"><Upload  class="h-[1rem]"/>
        <span>Upload</span>
      </Button>
    </div>
  </div>
</div>

<div class="container pt-16">
  <slot></slot>
</div>