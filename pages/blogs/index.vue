<script setup>

const route = useRoute()
const page = ref(1)
const content_path = "/blogs"
const contents = ref([])
const pageSize = 6

const onPage = async () => {

  const currentPage = route.query.page ? route.query.page : 1

  const { data: resContent } = await useAsyncData(content_path,
    () => queryContent(content_path)
      .limit(pageSize)
      .skip(Math.floor((currentPage - 1) * pageSize))
      .sort({ id: -1 })
      .find()
  )
  
  contents.value = resContent.value

  const { data: resPage } = await useAsyncData(content_path,
    () => queryContent(content_path).find()
  )
  page.value = Math.ceil(resPage.value.length / pageSize)

}

watch(() => route.query, async () => {
    await onPage()
})

onNuxtReady(async () => {
  onPage()
})

</script>

<template>
  <Container>
    <FlexY>
      <PageTitle>บทความ</PageTitle>
      <Container class="pb-10">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <CardBlogs
            v-for="article in contents" :key="article._path"
            :url="article.url"
            :image="article.image"
            :title="article.title"
            :description="article.description"
          />
        </div>
        
        <Pagination :page="page" />

      </Container>

      <ContactContainer />

    </FlexY>
  </Container>
</template>