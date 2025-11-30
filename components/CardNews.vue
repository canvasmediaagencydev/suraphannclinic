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
    @click="navigateTo(url)"
    class="relative rounded-xl cursor-pointer border shadow-md mb-4"
  >
    <FlexX class="justify-center items-center rounded-t-xl">
      <div class="aspect-square">
        <img :src="image" class="h-72 rounded-t-lg">
      </div>
    </FlexX>

    <FlexY class="items-center px-4 pt-4 pb-8 rounded-b-md bg-app-green/60">
      <TextBold class="text-white font-bold">{{ title }}</TextBold>
      <div class="text-xs sm:text-sm text-white">{{ description }}</div>
    </FlexY>

    <Button 
      color="blue"
      class="w-48 absolute -bottom-4 left-1/2 -translate-x-1/2"
    >
      <FlexX class="justify-center items-center">
        <div>อ่านเพิ่มเติม</div>
        <Icon name="material-symbols:chevron-right-rounded" />
      </FlexX>
    </Button>
  </FlexY>
</template>