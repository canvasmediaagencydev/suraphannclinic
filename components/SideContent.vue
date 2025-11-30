<script setup>

defineProps({
  title: String,
  pageKey: String,
})

</script>

<template>
  <FlexY class="text-base lg:text-xl divide-y">

    <FlexX class="items-center gap-3 pb-4">
      <Icon name="material-symbols:list" class="text-app-darkgreen" />
      <TextBold class="text-app-green">{{ title }}</TextBold>
    </FlexX>

    <ContentList :path="`/services/${pageKey}`" v-slot="{ list }">
      <NuxtLink 
        v-for="article in list" :key="article._path"
        :to="article.url"
        class="px-8 py-2 transition-all duration-300 hover:lg:bg-app-green hover:lg:text-white"
      >
        {{ article.title }}
      </NuxtLink>
    </ContentList>

  </FlexY>
</template>