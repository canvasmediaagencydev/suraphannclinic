<script setup>

const menus = ref([
  { url: "/", name: "หน้าหลัก", dropdown: false },
  { url: "/about", name: "เกี่ยวกับเรา", dropdown: false,
    items: [
      { url: "/profiles", name: "ประวัติคุณหมอ" },
    ]
  },
  { url: "/services", name: "บริการของเรา", dropdown: false,
    items: [
      { 
        url: "/services/1", 
        name: "กลุ่มโรคเรื้อรัง NCDs" 
      },
      { 
        url: "/services/2", 
        name: "กลุ่มโรคตับ" 
      },
      { 
        url: "/services/3", 
        name: "กลุ่มโรคเกี่ยวกับภูมิคุ้มกัน" 
      },
      { 
        url: "/services/4", 
        name: "กลุ่มระบบประสาท ไขข้อ กระดูก" 
      },
      { 
        url: "/services/5", 
        name: "กลุ่มโรคเรื้อรังอื่นๆ" 
      },
    ]
  },
  { url: "#", name: "ข่าวสาร", dropdown: true,
    items: [
      { url: "/news", name: "ข่าวสาร" },
      { url: "/faqs", name: "คำถามที่พบบ่อย" },
    ]
  },
  { url: "#", name: "สาระความรู้", dropdown: true,
    items: [
      { url: "/knowledge", name: "ทั้งหมด"},
      { url: "/blogs", name: "บทความ"},
      { url: "/videos", name: "วิดีโอ"},
    ]
  },
  { url: "/contact", name: "ติดต่อเรา", dropdown: false },
])

</script>

<template>
  <div class="font-body text-sm sm:text-base">
    <FlexY>
      <NavMenu :menus="menus" />
      <slot />
      <Footer :menus="menus" />
      <SocialScroll />
    </FlexY>
  </div>
</template>