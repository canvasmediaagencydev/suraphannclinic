<script setup>

const route = useRoute()
const pageKey = route.params.id
const pageDetailKey = route.params.detail_id

const { data: content } = await useAsyncData(`services/${pageKey}`,
  () => queryContent(`services/${pageKey}`)
    .where({ id: `services-${pageKey}-${pageDetailKey}` })
    .findOne()
)

</script>

<template>
  <Container>

    <FlexY>
      <PageTitle>{{ content.title }}</PageTitle>
      <Container>

        <FlexX class="gap-4 lg:gap-20" responsive="true" reverse="true">
          <FlexY class="w-full lg:w-2/3">
            <CardBlogs :image="content.image" :title="content.title" class="w-full lg:w-1/2 mx-auto text-center mb-6" />

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

          </FlexY>

          <FlexY class="w-full lg:w-1/3">
            <SideContent title="บริการของเรา" :pageKey="pageKey" />
            <FlexY class="">
              <div v-for="(item) in content" class="hover:text-green-900 py-2 cursor-pointer">
                <NuxtLink v-if="content.title != item.title" :to="item.url">
                  {{ item.title }}
                </NuxtLink>
              </div>
            </FlexY>

          </FlexY>
        </FlexX>
      </Container>
    </FlexY>

    <ContactContainer />

  </Container>
</template>