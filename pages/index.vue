<script setup>

const bannerImage = "/banner.webp"
const videoURL = "https://www.youtube.com/embed/tII8I_GmYKg"
// https://www.youtube.com/watch?v=BEeExpwEMkQ
const slideImages = ["slide-1.webp", "slide-2.webp", "slide-3.webp"]

const services = [
  {
    url: "/services/1",
    icon: "ph:heartbeat-thin",
    title: "โรคเรื้อรัง NCDs ",
    items: [
      { name: "โรคเบาหวาน" },
      { name: "โรคหัวใจ" },
      { name: "โรคความดัน / หลอดเลือด" },
      { name: "โรคมะเร็ง" },
      { name: "โรคกรดไหลย้อน" },
    ]
  },
  {
    url: "/services/2",
    icon: "healthicons:liver-alt-outline",
    title: "โรคตับ",
    items: [
      { name: "ไขมันพอกตับ" },
      { name: "ตับอักเสบ / ไวรัสตับอักเสบ" },
      { name: "ตับแข็ง" },
      { name: "มะเร็งตับ" },
    ]
  },
  {
    url: "/services/3",
    icon: "ph:dna-thin",
    title: "โรคเกี่ยวกับภูมิคุ้มกัน",
    items: [
      { name: "ภูมิแพ้ทางเดินหายใจ" },
      { name: "ภูมิแพ้ผิวหนัง" },
      { name: "ออโตอิมมูน" },
      { name: "รูมาตอยด์" },
    ]
  },
  {
    url: "/services/4",
    icon: "game-icons:pelvis-bone",
    title: "ระบบประสาท ไขข้อ กระดูก และกล้ามเนื้อ",
    items: [
      { name: "ปวดข้อ ข้ออักเสบ" },
      { name: "เกาต์ รูมาตอยด์" },
      { name: "กระดูกทับประสาท" },
      { name: "กล้ามเนื้ออ่อนแรง" },
      { name: "พาร์กินสัน" },
    ]
  },
  {
    url: "/services/5",
    icon: "solar:virus-outline",
    title: "โรคติดเชื้อเรื้อรังอื่นๆ",
    items: [
      { name: "ริดสีดวงทวาร" },
      { name: "เริม / ฝี / งูสวัส" },
      { name: "โรคเรื้อรังอื่นๆ" },
     ]
  },
]

const profile_path = "/profiles"
const profiles = ref([])

const { data: resProfiles } = await useAsyncData(profile_path,
  () => queryContent(profile_path)
    .find()
)
profiles.value = resProfiles.value

const pageContent = {
  title: "สุรพรรณคลินิกการแพทย์แผนไทย ฟื้นฟูสุขภาพผู้ป่วยโรคเรื้อรังทุกระดับอย่างยั่งยืน",
  desc: [
    "สุรพรรณคลินิกการแพทย์แผนไทย ดูแลสุขภาพผู้ป่วยโรคเรื้อรังในทุกระดับต่อเนื่องมายาวนานกว่า 60 ปี ฟื้นฟูสุขภาพอย่างยั่งยืนแบบองค์รวมทั้งระบบ ตั้งตำรับยาโดยอาจารย์แพทย์แผนไทยผู้เชี่ยวชาญ อาจารย์หมอสุรพรรณ ศิริธรรมวานิช มีตำรับยากว่า 30 ตำรับครอบคลุมการดูแลโรคเรื้อรังในทุกระดับ", "ได้รับอนุญาตถูกต้องจากกรมการแพทย์แผนไทยและการแพทย์ทางเลือก กระทรวงสาธารณสุข การดูแลผู้ป่วยของสุรพรรณคลินิกเน้นมุ่งตรงแก้ไขตั้งแต่จุดกำเนิดสาเหตุของโรค ตำรับยาช่วยบำรุงอวัยวะภายใน ตับ ไต ให้แข็งแรงทั้งระบบไม่มีอันตรายจากการสะสมของเคมี และ มีงานวิจัยจากคณะเภสัชศาสตร์มหาวิทยาลัยมหิดลรับรอง (ผลและระยะเวลาการรักษาขึ้นอยู่กับอาการของแต่ละบุคคล)"
  ],
  image: "/thumbnail.webp"
}

</script>

<template>
  <FlexY>

    <Banner :src="bannerImage" />

    <VideoPanel :url="videoURL" />

    <FlexY class="bg-app-green/30 text-white">

      <TextTitle>บริการของเรา</TextTitle>

      <Container>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-10">
          <CardService 
            v-for="(service, index) in services" :key="index"
            :url="service.url"
            :color="`green`"
            :icon="service.icon"
            :iconColor="`green`"
            :title="service.title"
            :items="service.items"
          />
        </div>
      </Container>

      <Container>
        <FlexX 
          class="w-full xl:w-4/5 mx-auto justify-center items-center gap-10 pb-10"
          responsive="true"
        >
          <FlexX class="w-full sm:w-3/5 lg:w-1/2 mx-auto">
            <CardMenu 
              color="green"
              title="Our Article"
              subtitle="สาระความรู้"
              image="/article-thumbnail.webp"
              url="/knowledge"
            />
          </FlexX>
          <FlexX class="w-full sm:w-3/5 lg:w-1/2 mx-auto">
            <CardMenu 
              color="blue"
              title="Customer Review"
              subtitle="ผู้ป่วย"
              image="/customer-review-thumbnail.webp"
              url="/videos"
            />
          </FlexX>
        </FlexX>
      </Container>

      <Container>
        <AssessmentButton />
      </Container>
      
      <Container>
        <TextTitle>ประวัติการก่อตั้ง และผู้บริหาร สุรพรรณคลินิกการแพทย์แผนไทย</TextTitle>
        <FlexX 
          class="justify-center items-center gap-10 pb-10 px-0 sm:px-16 lg:px-0"
          responsive="true"
        >
          <CardProfile 
            v-for="(profile, index) in profiles" :key="index"
            :image="profile.image"
            :name_th="profile.name_th"
            :name_en="profile.name_en"
            :description="profile.description"
            :url="profile.url"
          />
        </FlexX>
      </Container>
      
    </FlexY>

    <FlexY class="py-10 space-y-10">
      <Container>
        <FlexX 
          class="items-center"
          responsive="true"
          reverse="true"
        >
          <FlexY class="w-full lg:w-1/2 space-y-4">
            <TextBold class="text-xl">
              <TextGreen>
                {{ pageContent.title }}
              </TextGreen>
            </TextBold>
            <FlexY class="gap-4">
              <FlexX
                v-for="(item, index) in pageContent.desc" :key="index"
              >
                {{ item }}
              </FlexX>
            </FlexY>
          </FlexY>
          <div class="w-full sm:w-1/3 mx-auto aspect-square mb-10 lg:mb-0">
            <img :src="pageContent.image" alt="" class="w-full">
          </div>
        </FlexX>
      </Container>
      <Container>
        <ImageSlider 
          :images="slideImages"
          :isCarousal="true"
        />
      </Container>
    </FlexY>

  </FlexY>
</template>