<script setup>

const socials = ref([
	{ 
		icon: "mingcute:line-app-fill", 
		url: "https://lin.ee/W6BJCAB" 
	},
	{ 
		icon: "carbon:phone-filled", 
		url: "tel:+021972699" 
	},
	{ 
		icon: "uil:facebook-f", 
		url: "https://www.facebook.com/morsuraphan" 
	},
	{ 
		icon: "mdi:youtube", 
		url: "https://www.youtube.com/@suraphanclinic" 
	},
])

</script>

<template>
	<div class="fixed right-0 bottom-1/3">
		<FlexY class="text-white items-center py-3 bg-blue-600/80 first:rounded-tl-xl last:rounded-bl-xl">
			<NuxtLink 
				v-for="(social, index) in socials" :key="index"
				:to="social.url" target="_blank"
				class="px-2 py-2 sm:px-3 transition-all duration-300 hover:bg-blue-600"
			>
				<Icon :name="social.icon" size="24px" />
			</NuxtLink>
		</FlexY>
	</div>
</template>