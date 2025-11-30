<script setup>

const showSection = ref(false)

const toggleSection = () => {
  showSection.value = !showSection.value
}

</script>

<template>

  <FlexY
    @click="toggleSection()"
    class="text-app-darkgreen px-4 py-6 border-b border-app-darkgreen cursor-pointer transition-all duration-500 hover:lg:bg-app-green/10 gap-4"
  >
    <FlexX class="justify-between items-center">
      <div class="font-bold">
        <slot name="title" />
      </div>
      <Icon 
        v-if="!showSection"
        name="material-symbols:keyboard-arrow-down-rounded" 
        class="text-3xl"
      />
      <Icon 
        v-else
        name="material-symbols:keyboard-arrow-up-rounded" 
        class="text-3xl"
      />
    </FlexX>
    <div 
      v-show="showSection"
      class="pr-0 lg:pr-48"
    >
      <slot name="text-body" />
    </div>

  </FlexY>

</template>