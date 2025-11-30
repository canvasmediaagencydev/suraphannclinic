<script setup>

const blogs_path = "/blogs"
const videos_path = "/videos"

</script>

<template>
  <Container>
    <FlexY class="pb-10">

      <PageTitle>สาระความรู้</PageTitle>

      <FlexY>
        <TextTitle>บทความ ความรู้เกี่ยวกับโรคและการดูแลสุขภาพ</TextTitle>
        <ContentList :path="blogs_path" v-slot="{ list }">
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

        <FlexX class="justify-end py-4 text-xl lg:text-2xl font-bold">
          <div></div>
          <NuxtLink
            :to="`/blogs`"
          >
            ดูทั้งหมด
          </NuxtLink>
        </FlexX>
      </FlexY>

      <FlexY>
        <TextTitle>วิดีโอความรู้โรคและสุขภาพจากคุณหมอ</TextTitle>
        <ContentList :path="videos_path" v-slot="{ list }">
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

        <FlexX class="justify-end py-4 text-xl lg:text-2xl font-bold">
          <div></div>
          <NuxtLink
            :to="`/videos`"
          >
            ดูทั้งหมด
          </NuxtLink>
        </FlexX>
      </FlexY>

      <Container>
        <AssessmentButton />
      </Container>
      
      <ContactContainer />

    </FlexY>

  </Container>
</template>
