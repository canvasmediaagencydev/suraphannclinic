<script setup>

const route = useRoute()
const pageKey = route.params.id

const { data: content } = await useAsyncData('services',
  () => queryContent('services')
    .where({ id: `services-${pageKey}` })
    .findOne()
)

</script>

<template>
  <Container>
    <FlexY class="w-full">
      <PageTitle>{{ content.title }}</PageTitle>
      <Container>
        <CardBlogs :image="content.card_image" :title="content.card_title"
          class="w-full lg:w-1/3 mx-auto text-center mb-6" />
        <ContentDoc :path="content._path">
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

    <FlexY>
      <TextTitle>
        โรคต่างๆ ใน {{ content.title }}
      </TextTitle>

      <ContentList :path="`/services/${pageKey}`" v-slot="{ list }">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <CardBlogs 
            v-for="article in list.slice(0, 3)" :key="article._path"
            :url="article.url"
            :image="article.image"
            :title="article.title"
            :description="article.description"
          />
        </div>
      </ContentList>
    </FlexY>

    <ContactContainer />

  </Container>

</template>