<script setup>

const props = defineProps({
  src: String
})
</script>

<template>
  <div class="w-full">
    <img :src="src" class="w-full">
  </div>
</template>