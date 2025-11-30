<script setup>

const props = defineProps({
  menus: Array
})

const footer_menus = props.menus.slice(1, -1)

const locations = [
  {
    name: "สุรพรรณคลินิกการแพทย์แผนไทย (กรุงเทพ)",
    address: "8/3 ม.ชวนชื่นโมดัสวิภาวดี แขวงสนามบิน เขตดอนเมือง กรุงเทพ 10210",
    available: "คุณหมอออกตรวจ วันศุกร์-เสาร์ เวลา 11.00-15.00 น.",
    phone: "02 197-2699 / 097-459-6565",
    map_url: "https://goo.gl/maps/hZgco1swVSH1rwe86",
  },
  {
    name: "คลินิกบ้านหมอแผนไทย (ราชบุรี)",
    address: "10/31 ถนนสมบูรณ์กุล ตำบลหน้าเมือง อำเภอเมือง จังหวัดราชบุรี 70000",
    available: "คุณหมอออกตรวจ วันอาทิตย์ เวลา 10.00-16.00 น.",
    phone: "032-338-275",
    map_url: "https://goo.gl/maps/5YxbCmgt4agvxUB37",
  },
  {
    name: "สุรพรรณคลินิกการแพทย์แผนไทย (เชียงใหม่)",
    address: "371/22 หมู่ 1 ตึกแถวกาญกนก ตำบลท่าศาลา อำเภอเมือง จังหวัดเชียงใหม่ 50000",
    available: "คุณหมอออกตรวจ วันพฤหัสบดี (อาทิตย์เว้นอาทิตย์) เวลา 13.00 - 18.00 น.",
    phone: "053-117-470 / 080-445-5624",
    map_url: "https://goo.gl/maps/EY3hL9jCN475XGa47",
  },
]

const contacts = [
  { 
    icon: "uil:facebook-f", 
    url: "https://www.facebook.com/morsuraphan" 
  },
  // { 
  //   icon: "mdi:twitter", 
  //   url: "https://nuxtjs.org" 
  // },
  { 
    icon: "mdi:instagram", 
    url: "https://www.instagram.com/suraphan.clinic/" 
  },
  { 
    icon: "ps:youtube", 
    url: "https://www.youtube.com/@suraphanclinic" 
  },
  { 
    icon: "mingcute:line-app-fill", 
    url: "https://line.me/ti/p/~@suraphan-clinic" 
  },
]

</script>

<template>

  <FlexY class="relative">
    <!-- <div class="absolute -top-12 left-48">
      <img src="/footer-heart.webp" alt="" class="w-36">
    </div> -->
    <div class="bg-app-green/80 text-white">
      <Container>
        <FlexX 
          class="justify-center items-start divide-x-0 lg:divide-x divide-white py-5 lg:py-12 text-sm xl:text-base"
          responsive
        >
          <FlexY 
            v-for="(item, index) in locations" :key="index"
            class="flex-1 h-64 w-full lg:w-1/3 justify-between px-2 lg:px-4 py-4 lg:py-0"  
          >
            <FlexY class="w-full">
              <TextBold class="text-lg sm:text-xl h-10 xl:h-8">
                {{ item.name }}
              </TextBold>
              <FlexY class="py-2 lg:py-4 gap-2 lg:gap-4">
                <FlexX class="items-center space-x-2">
                  <Icon name="mdi:address-marker" size="24px"/>
                  <div>{{ item.address }}</div>
                </FlexX>
                <FlexX class="items-center space-x-2">
                  <Icon name="ic:baseline-access-time-filled" size="24px"/>
                  <div>{{ item.available }}</div>
                </FlexX>
                <FlexX class="items-center space-x-2">
                  <Icon name="carbon:phone-filled" size="24px"/>
                  <div>{{ item.phone }}</div>
                </FlexX>
              </FlexY>
            </FlexY>
            <Button 
              color="white"
              :to="item.map_url"
              class="w-1/4 lg:w-1/2 lg:mx-0"
            >
              <FlexX 
                class="justify-center items-center gap-2"
              >
                <div>Map</div>
                <Icon name="logos:google-maps" />
              </FlexX>
            </Button>
          </FlexY>
        </FlexX>
      </Container>
    </div>

    <div class="bg-app-darkgreen text-white">
      <Container>
        <FlexX 
          class="justify-around items-center lg:items-start py-10" 
          responsive="true" 
        >
          <FlexY class="items-center pb-10 lg:pb-0">
            <ImageSquare>
              <img src="/logo-white.webp" alt="" class="h-48">
            </ImageSquare>
            <FlexY class="items-center pb-4">
              <div class="text-xl lg:text-2xl">รักษาโรคเรื้อรังทุกระดับด้วยสมุนไพร</div>
              <div>ปลอดภัย ไม่ต้องกินยาตลอดชีวิต</div>
            </FlexY>
            <FlexX class="justify-center items-center space-x-4">
              <NuxtLink 
                v-for="(item, index) in contacts" :key="index"
                :to="item.url" 
                target="_blank" 
              >
                <Icon :name="item.icon" size="32px" />
              </NuxtLink>
            </FlexX>
          </FlexY>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-10"> 
            <FlexY 
              v-for="(menu, index) in footer_menus" :key="index"
            >
              <TextBold class="text-lg sm:text-xl pb-4">{{ menu.name }}</TextBold>
              <FlexY class="space-y-2">
                <NuxtLink 
                  v-for="(item, i) in menu.items" :key="i"
                  :to="item.url"
                >
                  {{ item.name }}
                </NuxtLink>
              </FlexY>
            </FlexY>
          </div>

        </FlexX>
      </Container>
    </div>
  </FlexY>
  
</template>