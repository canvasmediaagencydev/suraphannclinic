<script setup>

const props = defineProps({
  url: String,
  image: String,
  title: String,
  description: String,
})

</script>

<template>
  <FlexY 
    v-if="url"
    @click="navigateTo(url)"
    class="rounded-xl cursor-pointer border shadow-md"
  >
    <FlexX class="justify-center items-center rounded-t-xl">
      <div class="w-full aspect-w-4 aspect-h-3">
        <img :src="image" class="w-full rounded-t-lg object-contain object-center">
      </div>
    </FlexX>

    <FlexY 
      class="flex-1 items-start px-4 py-4 rounded-b-md bg-app-green/30"
    >
      <TextBold class="text-app-darkgreen font-bold line-clamp-1">
        {{ title }}
      </TextBold>
      <div class="text-xs sm:text-sm text-app-green line-clamp-2">
        {{ description }}
      </div>
    </FlexY>
  </FlexY>
  
  <FlexY 
    v-else
    class="rounded-xl border shadow-md"
  >
    <FlexX class="justify-center items-center rounded-t-xl">
      <div class="aspect-square">
        <img :src="image" class="h-72 rounded-t-lg">
      </div>
    </FlexX>

    <FlexY 
      class="items-start px-4 py-4 rounded-b-md bg-app-green/30"
      :class="{'h-20' : description === '' || description === null}"
    >
      <TextBold class="text-app-darkgreen font-bold">{{ title }}</TextBold>
      <div class="text-xs sm:text-sm text-app-green">{{ description }}</div>
    </FlexY>
  </FlexY>

</template>