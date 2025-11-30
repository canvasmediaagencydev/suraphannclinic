<script setup>

const route = useRoute()
const pageKey = route.params.id

// const content = await queryContent('news')
//   .where({ id: `news-${pageKey}` })
//   .findOne()

const { data: content } = await useAsyncData('news',
  () => queryContent('news')
    .where({ id: `news-${pageKey}` })
    .findOne()
)

</script>

<template>

  <Container>
    
    <FlexY>
      <PageTitle>{{ content.title }}</PageTitle>
      <Container>
        <ContentDoc 
          :path="content._path"
        >
          <template #empty>
            <TextTitle>
              ไม่พบเนื้อหา
            </TextTitle>
          </template>
          <template #not-found>
            <TextTitle>
              Blog ({{ content._path }}) not found
            </TextTitle>
          </template>
        </ContentDoc>
      </Container>
    </FlexY>
  </Container>

</template>