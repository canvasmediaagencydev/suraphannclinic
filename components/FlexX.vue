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
      responsive === undefined ? `flex-row` : `flex-col lg:flex-row`,
      reverse === undefined ? `flex-row` : `flex-col-reverse lg:flex-row`
    ]"
  >
    <slot />
  </div>
</template>