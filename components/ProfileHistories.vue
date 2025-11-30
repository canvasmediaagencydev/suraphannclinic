<script setup>

defineProps({
  histories: Array
})

</script>

<template>
  <FlexY class="w-full gap-4 text-base lg:text-xl py-10">
    <FlexX>
      <TextDarkGreen class="font-bold text-lg lg:text-2xl">
        ประวัติการทำงาน
      </TextDarkGreen>
    </FlexX>
    <FlexX 
      v-for="(history, index) in histories" :key="index"
      responsive
    >
      <TextGreen 
        v-if="history.year !== ''"
        class="font-bold w-64"
      >
        {{ history.year }}
      </TextGreen>
      <FlexY class="w-full gap-1">
        <FlexX
         v-for="(item, i) in history.items" :key="i"
        >
          - {{ item }}
        </FlexX>
      </FlexY>
    </FlexX>
  </FlexY>
</template>