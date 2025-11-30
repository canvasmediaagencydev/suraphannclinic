<script setup>

const assessmentUrl = "https://drive.google.com/file/d/1dNZu-UeeuaKIRnpgMzDM3EQpJLm7a1Rs/view?usp=sharing"

defineProps({
  title: String
})

</script>

<template>
  <FlexX class="justify-center items-center text-base sm:text-lg lg:text-4xl font-bold my-4 lg:my-6">
    <NuxtLink 
      class="w-full sm:w-max mx-auto bg-app-green text-white rounded-3xl text-center cursor-pointer px-3 lg:px-16 py-4 border-2 border-app-green transition-all duration-500 hover:lg:bg-white hover:lg:text-app-green"
      :to="assessmentUrl"
      target="_blank"
    >
      {{ title ? title : "เช็กความเสี่ยงของโรคต่างๆ เบื้องต้น คลิก" }}
    </NuxtLink>
  </FlexX>
</template>