<script setup>

const props = defineProps({
  menus: Array
})

const sidebarToggle = ref(false)

const closeSidebar = () => {
  sidebarToggle.value = false
}

const route = useRoute()

watch(
  () => route.name, () => {
    sidebarToggle.value = false
  }
)

const contacts = [
  { 
    url: "https://lin.ee/W6BJCAB", 
    icon: "mingcute:line-app-fill" 
  },
  { 
    url: "https://www.facebook.com/morsuraphan", 
    icon: "uil:facebook-f" 
  },
  { 
    url: "tel:+021972699", 
    icon: "carbon:phone-filled" 
  },
]

</script>

<template>
  <FlexY class="w-full">
    <div class="bg-app-green">
      <Container class="py-0.5">
        <FlexX class="justify-end space-x-4 text-white">
          <NuxtLink 
            v-for="(item, index) in contacts" :key="index"
            :to="item.url" 
            target="_blank"
          >
            <Icon :name="item.icon" />
          </NuxtLink>
        </FlexX>
      </Container>
    </div>

    <Container class="bg-white">
      <FlexX class="justify-between items-center py-0.5">
        <FlexX class="items-center divide-x divide-app-green">
          <ImageSquare>
            <img src="/logo.webp" alt="" class="h-10 lg:h-12">
          </ImageSquare>
          <FlexY class="px-2 text-xs lg:text-sm">
            <TextGreen class="font-base">
              รักษาโรคเรื้อรังทุกระดับด้วยสมุนไพร
            </TextGreen>
            <TextGreen class="font-semibold">
              ปลอดภัย ไม่ต้องกินยาตลอดชีวิต
            </TextGreen>
          </FlexY>
        </FlexX>

        <FlexX class="hidden lg:flex" responsive="true">
          <div v-for="(menu, index) in menus" :key="index" class="relative">

            <NuxtLink :to="menu.url"
              class="peer pl-3 pr-4 md:bg-transparent md:p-0 md:py-2 group-hover:border-b-red-500 group-hover:border-b-2">
              <TextGreen class="px-4 cursor-pointer hover:text-app-darkgreen">
                {{ menu.name }}
              </TextGreen>
            </NuxtLink>

            <div v-if="menu.dropdown"
              class="hidden peer-hover:flex hover:flex w-40 flex-col py-2 bg-white shadow-lg border border-gray-100 rounded-md absolute top-6 z-50">
              <NuxtLink v-for="(item, i) in  menu.items" :key="i"
                class="text-app-darkgreen hover:text-app-green py-2 px-4 hover:bg-gray-50" :to="item.url">
                {{ item.name }}
              </NuxtLink>
            </div>

          </div>
        </FlexX>

        <!-- <ul class="flex flex-col items-center px-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li v-for="(m, k) in menu"
              :key="k"
              :class="m.to != '/member_directory' ? 'block' : 'hidden'"
              class="group relative">
              <NuxtLink :to="m.to"
                        class="peer pl-3 pr-4 md:bg-transparent md:p-0 md:py-2 group-hover:border-b-red-500 group-hover:border-b-2">
                  {{ m.title }}
              </NuxtLink>
              <div v-if="m.sub"
                    class="hidden peer-hover:flex hover:flex flex-col py-2 bg-white shadow-lg border border-gray-100 rounded-md absolute top-6 -left-1 z-50">
                  <NuxtLink v-for="(s, i) in  m.sub"
                            :key="i"
                            class="hover:text-red-600 py-2 px-4 hover:bg-gray-50"
                            :to="s.to">{{ s.title }}</NuxtLink>
              </div>
          </li>
          <li v-if="user.isAuthen == true">
              <NuxtLink to="/member_directory/ocean"
                        class="block py-2 pl-3 pr-4 md:bg-transparent md:p-0">
                  Member Directory
              </NuxtLink>
          </li>
          <li>
              <div class="rounded-full p-2 bg-gray-200 cursor-pointer"
                    @click="search()">
                  <Icon name="material-symbols:search"
                        size="20px" />
              </div>
          </li>
        </ul> -->

        <FlexX @click="sidebarToggle = !sidebarToggle" class="flex lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </FlexX>

      </FlexX>
    </Container>
  </FlexY>

  <SideBarMenu v-if="sidebarToggle === true" v-click-outside="closeSidebar" :menus="menus" />
</template>