<script setup>

const props = defineProps({
  responsive: String,
  reverse: String
})

</script>

<template>
  <div 
    class="flex"
    :class="[
      responsive === undefined ? `flex-col` : `flex-row lg:flex-col`,
      reverse === undefined ? `flex-col` : `flex-row-reverse lg:flex-col`
    ]"
  >
    <slot />
  </div>
</template>