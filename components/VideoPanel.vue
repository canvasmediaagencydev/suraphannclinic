<script setup>

const props = defineProps({
  url: String
})

</script>

<template>
  <FlexX class="justify-center items-center">
    <div class="w-full aspect-video bg-white py-4 lg:py-10">
      <iframe class="w-[350px] h-[200px] sm:w-[540px] sm:h-[315px] lg:w-[960px] lg:h-[630px] mx-auto" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </FlexX>
</template>