<script setup>

const props = defineProps({
  image: String,
  name_th: String,
  name_en: String,
  description: String,
  url: String,
})

</script>

<template>
  <FlexY class="w-full">
    <div class="aspect-square relative">
      <div class="absolute bottom-0">
        <img src="/image-frame.webp">
      </div>
      <img :src="image" alt="">
    </div>

    <FlexY class="bg-white p-4 max-h-48 shadow">
      <TextBold class="text-lg lg:text-xl"><TextGreen>{{ name_th }}</TextGreen></TextBold>
      <div class="text-black text-sm lg:text-base">{{ name_en }}</div>
      <div class="text-black/80 py-3 text-sm">
        <div class="line-clamp-3">{{ description }}</div>
      </div>
    </FlexY>

    <FlexX class="justify-end py-3">
      <Button 
        color="white"
        @click="navigateTo(url)"
        class="flex flex-row justify-center items-center gap-1"
      >
        <TextDarkGreen>อ่านเพิ่มเติม</TextDarkGreen>
        <Icon name="material-symbols:navigate-next" size="24px" />
      </Button>
    </FlexX>
  </FlexY>
</template>