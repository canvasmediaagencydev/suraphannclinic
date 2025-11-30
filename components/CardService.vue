<script setup>

const props = defineProps({
  url: String,
  color: String,
  image: String,
  icon: String,
  iconColor: String,
  title: String,
  subtitle: String,
  items: Array,
})

</script>

<template>
  <NuxtLink 
    :to="url"
    class="w-full flex flex-col rounded-xl p-0.5 cursor-pointer"
    :class="{
      'text-app-green bg-white border border-app-green' : color === 'white',
      'text-white bg-app-green border-app-green' : color === 'green',
      'text-white bg-blue-600 border-blue-600' : color === 'blue',
    }"
  >
    <FlexX 
      class="justify-center items-center rounded-t-xl"
      :class="color === 'white' ? 'bg-app-green' : 'bg-white'"
    >
      
      <div 
        v-if="image"
        class="aspect-square"
      >
        <img :src="image" class="h-72 rounded-t-lg">
      </div>
      <Icon
        v-else
        size="156px"
        :name="icon" 
        class="my-6"
        :class="{
          'text-white' : iconColor === 'white',
          'text-app-green' : iconColor === 'green',
          'text-blue-600' : iconColor === 'blue',
        }"
      />

    </FlexX>
    <FlexY 
      class="items-center px-4 py-4 rounded-md"
      :class="{
        'bg-white' : color === 'white',
        'bg-app-green' : color === 'green',
        'bg-blue-600' : color === 'blue',
      }"
    >
      <TextBold>{{ title }}</TextBold>
      <TextBold>{{ subtitle }}</TextBold>
      <FlexY class="w-full items-start">
        <div v-for="item in items" :key="item.id">
          - {{ item.name }}
        </div>
      </FlexY>
    </FlexY>
  </NuxtLink>
</template>