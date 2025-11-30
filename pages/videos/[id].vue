<script setup>

const route = useRoute()
const pageKey = route.params.id

const { data: content } = await useAsyncData('videos',
  () => queryContent('videos')
    .where({ id: `videos-${pageKey.padStart(2, "0")}` })
    .findOne()
)

const related_contents = ref([])
// const { data: related_contents } = await useAsyncData('videos',
//   () => queryContent('videos')
//     .where({ id: { $ne : `videos-${pageKey}`} })
//     .find()
// )

</script>

<template>

  <Container>
    
    <FlexY>
      <PageTitle>{{ content.title }}</PageTitle>
      <VideoPanel :url="content.embed" />
      <Container>
        <RelateContainer :relate_items="related_contents"/>
      </Container>
    </FlexY>
  </Container>

</template>