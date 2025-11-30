<script setup>

const props = defineProps({
  bgcolor: String
})

</script>

<template>
  <div 
    class="rounded-xl shadow-md py-6 lg:py-10 px-4 sm:px-8 lg:px-24 border"
    :class="{
      'bg-app-green/80 text-white': bgcolor === 'green',
      'bg-white text-app-darkgreen': bgcolor === 'white',
    }"
  >
    <slot />
  </div>
</template>