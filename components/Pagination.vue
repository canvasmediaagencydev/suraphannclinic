<script setup>
const props = defineProps(["page"])

const currentPage = computed(() => {
  return parseInt(useRoute().query.page ? useRoute().query.page : 1)
})

const next = computed(() => {
  return currentPage.value + 1
})

const prev = computed(() => {
  return currentPage.value - 1
})

const nextPage = async () => {
  await navigateTo(`?page=${next.value}`)
}
const prevPage = async () => {
  await navigateTo(`?page=${prev.value}`)
}
</script>

<template>

  <div 
    v-if="page > 0"
    class="flex flex-row justify-center items-stretch text-center pt-10"
  >

    <div 
      v-if="currentPage > 1"
      @click="prevPage()"
      class="rounded-l-lg px-4 py-2 bg-app-green text-white border-app-green cursor-pointer"
    >
      Prev
    </div>
    <div 
      v-else
      class="rounded-l-lg px-4 py-2 bg-gray-100 text-gray-600 border border-gray-200"
    >
      Prev
    </div>

    <div class="px-4 py-2 border border-y-gray-100">{{ currentPage }}/{{ page }}</div>

    <div 
      v-if="currentPage === page"
      class="rounded-r-lg px-4 py-2 bg-gray-100 text-gray-600 border border-gray-200"
    >
      Next
    </div>
    <div 
      v-else
      @click="nextPage()"
      class="rounded-r-lg px-4 py-2 bg-app-green text-white cursor-pointer"
    >
      Next
    </div>

  </div>
</template>