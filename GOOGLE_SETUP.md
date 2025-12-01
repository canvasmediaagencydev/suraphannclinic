# Google Services Setup Guide

คู่มือการตั้งค่า Google Services สำหรับ Suraphan Clinic Website

## 1. Google Search Console

### ขั้นตอนการตั้งค่า:

1. เข้าไปที่ [Google Search Console](https://search.google.com/search-console)
2. คลิก "Add Property" หรือ "เพิ่มพร็อพเพอร์ตี้"
3. เลือก "URL prefix" และใส่: `https://suraphanclinic.com`
4. เลือกวิธี Verify แบบ "HTML file"
5. ดาวน์โหลดไฟล์ verification จาก Google
6. แทนที่ไฟล์ `public/google-site-verification.html` ด้วยไฟล์ที่ดาวน์โหลดมา
7. Deploy ขึ้น Vercel
8. กลับไปที่ Google Search Console แล้วคลิก "Verify"

### หลังจาก Verify สำเร็จ:

1. Submit Sitemap: `https://suraphanclinic.com/sitemap.xml`
2. ตรวจสอบ Coverage และ Performance ของเว็บไซต์
3. ดู Search Queries และ Click-through rates

## 2. Google Analytics

### ขั้นตอนการตั้งค่า:

1. เข้าไปที่ [Google Analytics](https://analytics.google.com)
2. สร้าง Property ใหม่
3. เลือก "Web" platform
4. ใส่ข้อมูล:
   - Website name: Suraphan Clinic
   - Website URL: https://suraphanclinic.com
   - Industry: Health
   - Time zone: Thailand

5. คัดลอก Measurement ID (รูปแบบ `G-XXXXXXXXXX`)
6. เปิดไฟล์ `public/js/analytics.js`
7. แก้ไขบรรทัดที่ 6:
   ```javascript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ใส่ Measurement ID ที่คัดลอกมา
   ```
8. ลบ comment (`/*` และ `*/`) ออกเพื่อเปิดใช้งาน Google Analytics
9. Deploy ขึ้น Vercel

### การทดสอบ:

1. เปิด Chrome DevTools (F12)
2. ไปที่ Tab "Network"
3. Filter: `google-analytics.com`
4. โหลดหน้าเว็บใหม่
5. ตรวจสอบว่ามี request ไปที่ Google Analytics หรือไม่

## 3. Google Tag Manager

Google Tag Manager ได้ถูกติดตั้งและกำหนดค่าเรียบร้อยแล้ว!

**Container ID**: `GTM-N3PSJBKP`

### สิ่งที่ได้ทำไปแล้ว:

1. ✅ เพิ่ม GTM script ใน `nuxt.config.js`
2. ✅ เพิ่ม GTM noscript iframe สำหรับผู้ใช้ที่ปิด JavaScript

### การใช้งาน Google Tag Manager:

1. เข้าไปที่ [Google Tag Manager](https://tagmanager.google.com)
2. เลือก Container `GTM-N3PSJBKP`
3. เพิ่ม Tags ต่างๆ ที่ต้องการ เช่น:
   - Google Analytics 4
   - Facebook Pixel
   - Google Ads Conversion Tracking
   - Hotjar
   - หรือ tracking tools อื่นๆ

### ข้อดีของการใช้ GTM:

- จัดการ tracking codes ทั้งหมดในที่เดียว
- ไม่ต้องแก้ไขโค้ดเว็บไซต์ทุกครั้งที่ต้องการเพิ่ม/ลบ tags
- มี Preview Mode สำหรับทดสอบก่อน publish
- Version control และ rollback ได้

### การทดสอบ GTM:

1. เปิดเว็บไซต์
2. กด F12 เปิด Chrome DevTools
3. ไปที่ Tab "Console"
4. พิมพ์: `dataLayer`
5. ควรเห็น Array ของ GTM events

หรือใช้ [Google Tag Assistant](https://tagassistant.google.com/) extension

## 4. Structured Data (Schema.org)

เว็บไซต์ควรมี Structured Data เพื่อ SEO ที่ดีขึ้น:

### LocalBusiness Schema:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Suraphan Clinic",
  "alternateName": "สุรพรรณคลินิกการแพทย์แผนไทย",
  "url": "https://suraphanclinic.com",
  "image": "https://suraphanclinic.com/logo.webp",
  "description": "รักษาโรคเรื้อรังด้วยสมุนไพร ปลอดภัย ไม่ต้องกินยาตลอดชีวิต",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TH"
  }
}
```

สามารถเพิ่ม Schema นี้ในหน้า Home หรือหน้า About ได้

## 5. Checklist หลัง Deploy

- [ ] ตรวจสอบว่า sitemap.xml โหลดได้: `https://suraphanclinic.com/sitemap.xml`
- [ ] ตรวจสอบว่า robots.txt โหลดได้: `https://suraphanclinic.com/robots.txt`
- [ ] Verify Google Search Console สำเร็จ
- [ ] Submit Sitemap ใน Google Search Console
- [ ] Google Analytics ทำงานได้ปกติ
- [ ] ทดสอบ Meta Tags ด้วย [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] ทดสอบ Meta Tags ด้วย [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] ตรวจสอบ Mobile-Friendly ด้วย [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] ทดสอบ Performance ด้วย [PageSpeed Insights](https://pagespeed.web.dev/)

## Resources

- [Nuxt 3 SEO Documentation](https://nuxt.com/docs/getting-started/seo-meta)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
