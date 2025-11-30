<script setup>

const qr_code = "/qrcode.webp"

</script>

<template>
  

  <div class="bg-app-green/80 text-white p-10">
    <Container>
      <FlexX 
        class="justify-center items-center bg-white/70 p-10 gap-6"
        responsive="true"  
      >

        <FlexX 
          class="w-full sm:w-1/2 lg:w-3/5 justify-center items-center divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-app-darkgreen gap-4 lg:gap-0"
          responsive="true"  
        >
          <ImageSquare>
            <img src="/logo.webp">
          </ImageSquare>
          <FlexY class="text-sm lg:text-2xl justify-center items-start text-app-green/80 px-0 lg:px-10 py-4 lg:py-0">
            <div>รักษาโรคเรื้อรัง</div>
            <div>ด้วยสมุนไพร</div>
            <div>ปลอดภัย ไม่ต้องกินยาตลอดชีวิต</div>
          </FlexY>
        </FlexX>

        <FlexX class="w-full lg:w-2/5 justify-center items-center">
          <ImageSquare>
            <img :src="qr_code" class="w-64">
          </ImageSquare>
        </FlexX>

      </FlexX>
    </Container>
  </div>

</template>