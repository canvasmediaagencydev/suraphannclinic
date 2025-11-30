<script setup>

const profile_path = "/profiles"
const profiles = ref([])

const { data: resProfiles } = await useAsyncData(profile_path,
    () => queryContent(profile_path)
      .find()
  )
  profiles.value = resProfiles.value

</script>

<template>
  <Container>
    <FlexY>
      <PageTitle>เกี่ยวกับเรา</PageTitle>

      <Container>
        <FlexY class="gap-4">

          <Card bgcolor="green">
            <FlexX 
              class="justify-between items-center gap-10"
              responsive="true"
            >
              <FlexX class="w-3/5 sm:w-1/5 mx-auto aspect-square bg-white rounded-full p-10">
                <img src="/logo.webp" alt="">
              </FlexX>
              <FlexY class="w-full lg:w-4/5 text-center lg:text-start">
                <TextBold>สุรพรรณคลินิก</TextBold>
                <div class="text-center lg:text-start">
                  รักษาโรคเรื้อรังด้วยตำรับยาสมุนไพร ศาสตร์การแพทย์ทางเลือก ผสมผสาน อายุรเวชอินเดีย การแพทย์แผนจีน และการแพทย์แผนไทย เพื่อการดูแลสุขภาพผู้ป่วยให้แข็งแรงแบบยั่งยืน
                </div>
              </FlexY>
            </FlexX>
          </Card>

          <Card bgcolor="white">
            <FlexX 
              class="justify-between items-center gap-4 lg:gap-10"
              responsive="true"  
            >
              <FlexX class="w-1/2 lg:w-1/5 mx-auto">
                <img src="/profile-1.webp" alt="">
              </FlexX>
              <FlexY class="w-full lg:w-4/5">
                <div class="text-center lg:text-start">
                  สุรพรรณคลินิกสืบทอดเจตนารมณ์จากคุณหมอ สุรพรรณ ศิริธรรมวานิช เจ้าตำรับแพทย์แผนตะวันออก ที่ค้นคว้าและศึกษาความเกี่ยว เนื่องของวิชาแพทย์แผนตะวันออก ทั้งอายุรเวทอินเดีย แพทย์แผนไทย และแพทย์แผนจีน จนมีความล้ำลึกเชี่ยวชาญในทุกศาสตร์อย่างแท้จริง ผสมผสาน กับการวิเคราะห์โรคด้วยการแพทย์แผนตะวันตก โดยการนำหลักการด้านเภสัชกรรม วิทยาศาสตร์และเทคโนโลยีสมัยใหม่มาประยุกต์ใช้ ในการเตรียมยาสมุนไพรและพัฒนารูปแบบให้รับประทานง่าย เน้นยามีคุณภาพดี ส่งผลดีต่อการรักษา ตำรับยาที่คิดค้นเพื่อใช้ในการรักษาจะไม่เกิดผลข้างเคียงหรือส่งผลต่ออวัยวะภายในร่างกาย แต่กลับช่วยปรับร่างกายให้เข้าสู่ความสมดุลอย่างเป็นระบบ ผู้ป่วยจะสุขภาพแข็งแรงจากภายในและหายจากอาการของโรคอย่างยั่งยืน
                </div>
              </FlexY>
            </FlexX>
          </Card>

          <Card bgcolor="white">
            <FlexX 
              class="justify-between items-center gap-4 lg:gap-10"
              responsive="true"  
            >
              <FlexX class="w-1/2 lg:w-1/5 mx-auto">
                <img src="/herb.webp" alt="">
              </FlexX>
              <FlexY class="w-full lg:w-4/5">
                <div class="text-center lg:text-start">
                  ตำรับยาของคลินิกสุรพรรณการแพทย์แผนไทย เกิดจากการค้นคว้าในการรักษาผู้ป่วยมาเป็นเวลากว่า 60 ปี ด้วยการปรับปรุงและพัฒนา ตำรับยาที่ผสมผสานประสิทธิภาพของสมุนไพรตามหลัก วิชาการแพทย์แผนตะวันออกอย่างลงตัว ทำให้ผลการรักษาผู้ป่วยโรคเรื้อรังทุกชนิดหายยั่งยืน ซึ่งเน้นการวินิจฉัยและการรักษาโรคโดยใช้วิชาพลังปราณจักระ เป็นศาสตร์ของการแพทย์แผนตะวันออกซึ่งทางการแพทย์แผนไทยเรียกว่า 'การตรวจประตูลม'  ทางจีนเรียกว่า 'แมะ'  อินเดียเรียกว่า 'กูรูนาดี'  วิธีนี้จะทำให้ทราบถึงสาเหตุของโรคว่ามาจากที่ใด จากนั้นจึงเลือกใช้ตำรับยาที่มีมากกว่า 30 ตำรับเพื่อทำการรักษาที่ต้นเหตุอย่างแท้จริง
                </div>
              </FlexY>
            </FlexX>
          </Card>

        </FlexY>
        
      </Container>
      
      <Container>
        <FlexY class="justify-center items-center text-center py-16 gap-4">
          <TextBold class="text-2xl text-app-darkgreen">"คำแนะคำสำหรับผู้ที่สนใจ และศรัทธาในการรักษาโรคแบบแผนโบราณ"</TextBold>
          <div class="text-lg text-app-green">
            ให้ผู้ป่วยพิจารณารับการรักษาจากหมอที่มีใบประกอบโรคศิลปะ ที่มีความชำนาญและประสบการณ์ในโรคนั้นๆเพราะในปัจจุบันมีหมอแผนโบราณ เปิดให้บริการรักษาอยู่ทั่วไป หากเข้าไปรับบริการจากหมอแผนโบราณที่ไม่มีความรู้จริงๆการรักษาก็จะไม่ส่งผลดีตามที่ควรเป็น และอย่าได้ไปหลงเชื่อคำโฆษณา ชวนเชื่อเกี่ยวกับสรรพคุณของยาสมุนไพรต่างๆควรปรึกษาหารือความรู้เพิ่มเติมก่อนการตัดสินใจใช้
          </div>
        </FlexY>
      </Container>
      
    </FlexY>
  </Container>

  <FlexY class="bg-app-green/30 text-white p-4">
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

</template>