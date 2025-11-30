<script setup>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  images: Array,
  isCarousal: Boolean,
  textTitle: String,
  textSubTitle: String,
  icons: Array,
})

</script>

<template>
  <div v-if="isCarousal">
    <carousel 
      :autoplay="5000" 
      :wrap-around="true"
      :items-to-show="1"
    >
      <slide v-for="(image, index) in images" :key="index">
        <div class="carousel__item aspect-w-16 aspect-h-9">
          <img :src="image" class="w-full">
        </div>
      </slide>
      <template #addons>
        <navigation />
        <!-- <pagination /> -->
      </template>
    </carousel>
  </div>

  <div 
    v-else
    class="relative overflow-hidden flex flex-col justify-center items-center py-12 md:py-24 xl:py-72"
  >
    <div class="w-full absolute top-0 left-0">
      <div class="absolute w-full h-full bg-black/50"></div>
      <img :src="images[0]" class="w-full">
    </div>

    <TextCenter class="relative z-10 flex flex-col space-y-2 lg:space-y-6 text-white ">
      <div class="text-3xl md:text-4xl lg:text-5xl">{{ textTitle }}</div>
      <div class="w-4/5 lg:w-2/3 mx-auto text-xs lg:text-2xl">{{ textSubTitle }}</div>

      <div class="flex flex-row justify-center">
        <div
          class="flex flex-col items-center space-y-2 px-6 lg:px-12"
          v-for="(item, index) in icons" :key="index"
        >
          <Icon :name="item.icon" class="text-lg lg:text-4xl"/>
          <div class="text-xs sm:text-lg">{{ item.text }}</div>
        </div>
      </div>

    </TextCenter>
  </div>

</template>

<style>

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
  color: #FFF;
}
</style>