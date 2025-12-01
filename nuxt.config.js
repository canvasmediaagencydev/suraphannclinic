// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Suraphan Clinic - สุรพรรณคลินิกการแพทย์แผนไทย',
      titleTemplate: '%s | Suraphan Clinic',
      htmlAttrs: {
        lang: 'th'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },

        // SEO Meta Tags
        {
          hid: 'description',
          name: 'description',
          content: 'รักษาโรคเรื้อรังด้วยสมุนไพร ปลอดภัย ไม่ต้องกินยาตลอดชีวิต คลินิกการแพทย์แผนไทยแห่งแรกในประเทศไทย รักษาโรคเบาหวาน ความดัน ตับแข็ง ภูมิแพ้ ปวดข้อ และโรคเรื้อรังอื่นๆ'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'สุรพรรณคลินิก, การแพทย์แผนไทย, รักษาโรคเรื้อรัง, สมุนไพร, โรคเบาหวาน, ความดันโลหิตสูง, ตับแข็ง, ภูมิแพ้, ปวดข้อ, แพทย์แผนไทย, Suraphan Clinic, Traditional Thai Medicine'
        },
        { name: 'author', content: 'Suraphan Clinic' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph Meta Tags
        { hid: 'og:site_name', property: 'og:site_name', content: 'Suraphan Clinic' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://suraphanclinic.com/' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Suraphan Clinic - สุรพรรณคลินิกการแพทย์แผนไทย'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'รักษาโรคเรื้อรังด้วยสมุนไพร ปลอดภัย ไม่ต้องกินยาตลอดชีวิต'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://suraphanclinic.com/banner.webp'
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'th_TH' },

        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Suraphan Clinic - สุรพรรณคลินิกการแพทย์แผนไทย'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'รักษาโรคเรื้อรังด้วยสมุนไพร ปลอดภัย ไม่ต้องกินยาตลอดชีวิต'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://suraphanclinic.com/banner.webp'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.webp' },
        { rel: 'canonical', href: 'https://suraphanclinic.com' }
      ],
      script: [
        // Google Tag Manager
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3PSJBKP');`,
          type: 'text/javascript'
        },
        { src: '/js/fb.js', defer: true },
        { src: '/js/analytics.js', defer: true }
      ],
      noscript: [
        {
          children: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N3PSJBKP" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          body: true
        }
      ]
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-icon', '@nuxt/content', 'nuxt-simple-sitemap', '@nuxt/image'],

  sitemap: {
    hostname: 'https://suraphanclinic.com',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const routes = []

      // Add static routes
      routes.push('/', '/about', '/benefits', '/contact', '/faqs', '/knowledge')
      routes.push('/blogs', '/news', '/profiles', '/services', '/videos')

      return routes
    }
  },

  // content: {
  // https://content.nuxtjs.org/api/configuration
  // }
  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: '2024-09-18'
})