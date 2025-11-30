<script setup>

const props = defineProps({
  color: String,
  title: String,
  subtitle: String,
  image: String,
  url: String,
})

</script>

<template>
  
  <NuxtLink
    :to="url"
    class="w-full cursor-pointer shadow-lg"
  >
    <FlexX
      class="justify-center items-center text-center"
      :class="color === `green` ? `bg-app-green/70` : `bg-blue-600/80`"
      responsive
      reverse
    >
      <FlexY class="w-full lg:w-1/2 items-center text-center p-4">
        <FlexY class="w-full items-center leading-5 text-center">
          <FlexX class="text-xl">{{ subtitle }}</FlexX>
          <TextBold class="text-2xl">{{ title }}</TextBold>
        </FlexY>
      </FlexY>
      <div class="w-full lg:w-1/2 aspect-square">
        <img :src="image" alt="" class="w-full object-cover object-center">
      </div>
    </FlexX>
  </NuxtLink>
</template>