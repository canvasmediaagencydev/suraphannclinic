<script setup>

const route = useRoute()
const pageKey = route.params.id

// const content = await queryContent('blogs')
//   .where({ id: `blogs-${pageKey}` })
//   .findOne()

const { data: content } = await useAsyncData('blogs',
  () => queryContent('blogs')
    .where({ id: `${String(pageKey).padStart(2, '0')}` })
    .findOne()
)

</script>

<template>

  <Container>
    
    <FlexY class="w-full">
      <PageTitle>{{ content.title }}</PageTitle>
      <Container class="mb-6">
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