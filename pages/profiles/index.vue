<script setup>

const profile_path = "/profiles"
const profiles = ref([])

const { data: resProfiles } = await useAsyncData(profile_path,
    () => queryContent(profile_path)
      .find()
  )
  profiles.value = resProfiles.value

</script>

<template>
  <FlexY class="bg-app-green/30 text-white">
    <Container>
      <TextTitle>ประวัติการก่อตั้ง และผู้บริหาร สุรพรรณคลินิกการแพทย์แผนไทย</TextTitle>
      <FlexX 
        class="justify-center items-center gap-10 pb-10 px-0 sm:px-16 lg:px-0"
        responsive="true"
      >
        <CardProfile 
          v-for="(profile, index) in profiles" :key="index"
          :image="profile.image"
          :name_th="profile.name_th"
          :name_en="profile.name_en"
          :description="profile.description"
          :url="profile.url"
        />
      </FlexX>
    </Container>
  </FlexY>
</template>