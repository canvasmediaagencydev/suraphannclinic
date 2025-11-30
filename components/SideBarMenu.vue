<script setup>

const props = defineProps({
  menus: Array
})

</script>

<template>
  <aside class="fixed top-0 right-0 z-10 h-screen bg-white w-4/6 md:w-3/6 lg:w-2/6 xl:w-0 visible xl:invisible xl:hidden text-gray-700 overflow-y-auto">
    <div class="overflow-hidden px-4 pt-10">
      <FlexY class="w-full">
        <FlexX
          v-for="(menu, index) in menus" :key="index"
          class="w-full"
        >

          <NuxtLink
            v-if="!menu.dropdown"
            :to="menu.url"
            class="w-full"
          >
            <TextGreen class="p-3">
              <TextBold>{{ menu.name }}</TextBold>
            </TextGreen>
          </NuxtLink>

          <FlexY
            v-else
            class="w-full"
          >
            <TextGreen class="px-4 pt-4">
              <TextBold>{{ menu.name }}</TextBold>
            </TextGreen>

            <NuxtLink
              v-for="(item, i) in menu.items" :key="i"
              :to="item.url"
              class="py-0.5 px-4"
            >
              {{ item.name }}
            </NuxtLink>

          </FlexY>

        </FlexX>
      </FlexY>
    </div>
  </aside>
</template>