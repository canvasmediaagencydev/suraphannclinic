<script setup>

const services = [
  {
    url: "/services/1",
    image: "/services/service-1.webp",
    title: "Non-Communicable diseases",
    subtitle: "กลุ่ม โรคเรื้อรัง NCDs",
  },
  {
    url: "/services/2",
    image: "/services/service-2.webp",
    title: "Hepatitis",
    subtitle: "กลุ่ม โรคตับ",
  },
  {
    url: "/services/3",
    image: "/services/service-3.webp",
    title: "Immunoglobulin",
    subtitle: "กลุ่ม โรคเกี่ยวกับภูมิคุ้มกัน",
  },
  {
    url: "/services/4",
    image: "/services/service-4.webp",
    title: "Herniated Disc",
    subtitle: "กลุ่ม ระบบประสาท ไขข้อ กระดูก",
  },
  {
    url: "/services/5",
    image: "/services/service-5.webp",
    title: "Chronic Disease",
    subtitle: "กลุ่ม โรคเรื้อรังอื่นๆ",
  },
]

</script>

<template>
  <Container>
    <FlexY>
      <PageTitle>บริการของเรา</PageTitle>

      <FlexX 
        class="w-full sm:w-1/2 lg:w-full mx-auto justify-center gap-10 pb-10"
        responsive="true"
      >

        <CardService
          color="green"
          :url="services[0].url" 
          :image="services[0].image"
          :title="services[0].title"
          :subtitle="services[0].subtitle"
        />

        <CardService
          color="green"
          :url="services[1].url" 
          :image="services[1].image"
          :title="services[1].title"
          :subtitle="services[1].subtitle"
        />

        <CardService
          color="green"
          :url="services[2].url" 
          :image="services[2].image"
          :title="services[2].title"
          :subtitle="services[2].subtitle"
        />
       
      </FlexX>

      <FlexX 
        class="w-full sm:w-2/3 mx-auto justify-center gap-10 pb-10"
        responsive="true"
      >

        <CardService
          color="green"
          :url="services[3].url" 
          :image="services[3].image"
          :title="services[3].title"
          :subtitle="services[3].subtitle"
        />

        <CardService
          color="green"
          :url="services[4].url" 
          :image="services[4].image"
          :title="services[4].title"
          :subtitle="services[4].subtitle"
        />

      </FlexX>

    </FlexY>
  </Container>
</template>