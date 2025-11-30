<script setup>
const props = defineProps({
  title: String,
  color: String,
  to: String
})
</script>

<template>
  <button v-if="to === undefined"
    class="rounded-full px-5 py-2 text-center cursor-pointer"
    :class="{
      'bg-[#CF1808] text-white': color === 'red',
      'bg-orange-400 text-white': color === 'orange',
      'bg-white border border-orange-400 text-orange-400': color === 'orange-border',
      'bg-app-green text-white': color === 'green',
      'bg-none text-[#989DAE]': color === 'none',
      'bg-[#00A3FF] text-white': color === 'blue',
      'bg-[#F5F8FA] text-[#43445B]': color === 'gray',
      'bg-white text-app-green': color === 'white',
    }"
  >
    {{ title }}
    <slot></slot>
  </button>

  <NuxtLink v-else
    class="rounded-full px-5 py-2 text-center cursor-pointer"
    :class="{
      'bg-[#CF1808] text-white': color === 'red',
      'bg-orange-400 text-white': color === 'orange',
      'bg-white border border-orange-400 text-orange-400': color === 'orange-border',
      'bg-[#1DC894] text-white': color === 'green',
      'bg-none text-[#989DAE]': color === 'none',
      'bg-[#00A3FF] text-white': color === 'blue',
      'bg-[#F5F8FA] text-[#43445B]': color === 'gray',
      'bg-white text-app-green': color === 'white',
    }"
    :to="to"
    target="_blank"
  >
    {{ title }}
    <slot></slot>
  </NuxtLink>

</template>