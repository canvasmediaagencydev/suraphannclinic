<script setup>

const props = defineProps({
  relate_items: Array,
})

const contents = ref([])
const relateNum = ref(3)
if (props.relate_items.length < relateNum.value) {
  relateNum.value = props.relate_items.length
}

for (var i = 0; i < relateNum.value; i++) {
  var randomIndex = Math.floor(Math.random() * props.relate_items.length);
  contents.value.push(props.relate_items[randomIndex]);
}

</script>

<template>

  <FlexY class="gap-4 py-2 lg:py-10">
    <TextBold class="text-app-darkgreen text-xl lg:text-3xl">วิดีโออื่นๆ</TextBold>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <CardBlogs
        v-for="(article, index) in contents" :key="index"
        :url="article.url"
        :image="article.image"
        :title="article.title"
        :description="article.description"
      />
    </div> 
  </FlexY>
  
</template>