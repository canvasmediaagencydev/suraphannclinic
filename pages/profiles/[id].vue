<script setup>

const route = useRoute()
const pageKey = route.params.id

const { data: content } = await useAsyncData('profiles',
  () => queryContent('profiles')
    .where({ id: `profiles-${pageKey}` })
    .findOne()
)

</script>

<template>

  <Container>
    
    <FlexY>
      <PageTitle>{{ content.title }}</PageTitle>
      <Container>
        <FlexY class="w-full">

          <ContentDoc 
            :path="content._path"
            class="text-base lg:text-xl"
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
  
          <ProfileHistories 
            :histories="content.histories" 
          />
        </FlexY>
      </Container>
    </FlexY>
  </Container>

</template>

<style>

.image-profile {
  float: left; 
  width: 40%; 
  padding: 0rem 1rem;
  border-radius: 5%;
}

@media screen and (max-width: 1024px){
  .image-profile {
    width: 100%; 
    padding: 1rem 0rem;
  }
}

</style>