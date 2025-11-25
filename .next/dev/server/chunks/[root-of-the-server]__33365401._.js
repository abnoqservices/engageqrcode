module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/templates/allTemplates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const templates = {
    modern: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    {{meta_seo}}
  
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <style>
      :root {
        --primary: #061244;
        --primary-light: #B7E6FF;
      
        --text: #091042;
        --bg: #ffffff;
      
        --radius: 0.875rem;            /* 14px */
        --shadow: 0 0.375rem 1.25rem rgba(0, 0, 0, 0.08);
      
        --h2: 1.5rem;                  /* 24px */
        --qrc_contact_hdr_text: 1.875rem; /* 30px */
        --p: 1.625rem;                 /* 26px */
      }
      
  
      * { margin:0; padding:0; box-sizing:border-box; }
      body {
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
        background:#f4f6f9;
        color:var(--text);
        line-height:1.5;
      }
    
      .container {
        max-width: 520px;
        margin: 0 auto;
        background: #061244;
        min-height: 100vh;
        overflow-x: hidden;
        padding:2vh;
      }
  
      /* HEADER */
      .header { position:relative; overflow:hidden; border-radius:0 0 18px 18px; }
      .header-swiper .swiper-slide {
        height: 300px;
        background-size: cover;
        background-position: center;
      }
  
      @media (max-width: 390px) {
        .header-swiper .swiper-slide { height: 240px; }
      }
    
      .header-overlay {
        position:absolute;
        bottom:0; left:0; right:0;
        background: linear-gradient(transparent, rgba(0,0,0,0.7));
        padding: 30px 15px;
        text-align:center;
        color:white;
      }
  
      .header-overlay h1 { font-size:24px; }
      .header-overlay p { font-size:14px; opacity:.9; }
  
      /* SECTIONS */
      .section {
        padding: 20px 16px;
        text-align:center;
      }
  
      .card {
        background:white;
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        padding:18px;
        margin-bottom:18px;
      }
  
      h2 {
        font-size:20px;
        color:var(--primary);
        margin-bottom:10px;
        font-weight:700;
      }
  
      p { font-size:14px; color:#555; }
  
      /* GALLERY */
      .gallery-swiper img {
        width:100%; height:300px; object-fit:cover;
        border-radius:12px;
      }
  
      @media (max-width:480px) {
        .gallery-swiper img 
      }
  
      /* VIDEO */
      .video-wrapper {
        position:relative; padding-bottom:56%; height:0;
        border-radius:12px; overflow:hidden; box-shadow:var(--shadow);
        margin-bottom:20px;
      }
  
      /* PRODUCTS */
      .product {
        border-radius:12px;
        overflow:hidden;
        box-shadow:var(--shadow);
        background:white;
        margin:12px 8px;
      }
  
      .product img {
        width:100%;  object-fit:cover;
      }
  
      .product-info { padding:16px; text-align:center; }
  
      .product-title { font-weight:600; font-size:15px; margin-bottom:6px; }
      .rating { font-size:13px; color:#ffc107; }
      .price { font-size:18px; font-weight:bold; color:var(--primary); }
  
      .buy-btn {
        width:100%; padding:12px;
        background:var(--primary); color:white;
        border:none; border-radius:8px;
        font-size:15px; cursor:pointer;
        margin-top:12px;
      }
  
      /* CTA BUTTON */
      .cta-btn {
        display:block;
        margin:20px auto;
        padding:15px 40px;
        background:var(--primary);
        color:white;
        text-decoration:none;
        border-radius:40px;
        font-size:17px;
        box-shadow:0 4px 12px rgba(6,18,68,.25);
      }
  
      /* SOCIAL LINKS */
      .social-item {
       
        background:#f7f7f7;
        padding:14px;
        margin:10px 0;
        border-radius:12px;
        align-items:center;
      }
  
      .social-icon {
        width:42px; height:42px;
        background-size:cover;
        border-radius:10px;
      }
  
      .social-text { margin-left:14px; flex:1; text-align:left; }
      .social-text h4 { font-size:15px; font-weight:600; }
      .social-text p { font-size:12px; color:#777; }
  
      /* CONTACT CARD */
      .ql-contact-wrapper {
        padding:20px; margin:20px; border-radius:12px;
        background:white; box-shadow:var(--shadow);
      }
  
      .qrc_contact_hdr_text { font-size:18px; font-weight:700; }
  
      .qrc_contact_number a, .qrc_email_id a {
        font-size:13px; color:#666; text-decoration:none;
      }
  
      /* RATING */
      .stars { display:flex; justify-content:center; gap:12px; margin-top:20px; }
      .stars i {
        font-size:34px;
        color:#ddd;
        transition:.3s;
      }
      .stars i.active { color:#ffc107; }
  
      /* FLOATING BUTTONS */
      .footer-actions {
        position:fixed; bottom:18px; left:50%;
        transform:translateX(-50%);
        background:white;
        border-radius:50px;
        box-shadow:0 8px 20px rgba(0,0,0,.15);
        padding:10px 20px;
        display:flex; gap:25px;
        z-index:100;
      }
  
      .footer-actions i {
        font-size:22px;
        color:var(--primary);
      }
      /* FOLLOW US SECTION */
.section.card {
  padding: 22px 18px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.section.card h2 {
  font-size: 20px;
  font-weight: 700;
  color: #061244;
  margin-bottom: 16px;
}

/* SOCIAL LIST */
.social-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-item {
  margin-bottom: 14px;
}

.social-link {
  display: flex;
  align-items: center;
  background: #f8f9fc;
  border-radius: 14px;
  padding: 14px;
  text-decoration: none;
  color: #222;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

/* Hover / Mobile Tap Feel */
.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

/* ICON */
.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-right: 14px;
}

/* TEXT */
.social-text {
  flex: 1;
  text-align: left;
}

.social-text h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.social-text p {
  font-size: 13px;
  color: #777;
}

/* ARROW ICON */
.social-link i {
  font-size: 16px;
  color: #999;
}

/* MOBILE OPTIMIZED */
@media (max-width: 480px) {
  .social-link {
    padding: 12px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-text h4 {
    font-size: 14px;
  }

  .social-text p {
    font-size: 12px;
  }
}
/* CONTACT CARD WRAPPER */
.qrc_contact.qr_cc_card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 18px;
  margin: 20px 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: "Inter", "SF Pro Text", sans-serif;
  text-align: left;  /* LEFT ALIGN EVERYTHING */
}

/* HEADER */
.qrc_contact_header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px dashed #e6e7ef;
}

.qrc_contact_hdr_img {
  width: 48px;
  height: 48px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.qrc_contact_hdr_text {
  font-size: 20px;
  font-weight: 700;
  color: #111;
}

/* INFO BLOCKS (Call, Email, Address) */
.qrc_contact_info,
.qrc_email_info,
.qrc_address_info {
  margin-bottom: 20px;
}

.qrc_contact_info_title,
.qrc_email_info_title,
.qrc_address_info_title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

/* TEXT VALUES */
.qrc_contact_number a,
.qrc_email_id a {
  font-size: 14px;
  color: #777;
  text-decoration: none;
  display: block;
  margin-top: 2px;
}

.qrc_contact_number a:hover,
.qrc_email_id a:hover {
  text-decoration: underline;
}

/* ADDRESS TEXT */
.qrc_address_text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 12px;
}

/* DIRECTION BUTTON */
.qrc_direction_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0b57cf;
  color: #fff !important;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background .2s ease;
}

.qrc_direction_btn:hover {
  background: #0947ad;
}

.qrc_direction_btn .icon-direction_1 {
  font-size: 16px;
}

/* MOBILE OPTIMIZATION */
@media (max-width: 480px) {
  .qrc_contact.qr_cc_card {
    padding: 16px;
  }

  .qrc_contact_hdr_text {
    font-size: 18px;
  }

  .qrc_contact_hdr_img {
    width: 42px;
    height: 42px;
  }

  .qrc_address_text,
  .qrc_contact_number a,
  .qrc_email_id a {
    font-size: 13px;
  }
}
.premium-header-section {
  text-align: center;
  padding: 40px 20px 30px;
  
}

.logo-wrapper {
  margin-bottom: 20px;
}

.brand-logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(6, 18, 68, 0.15);
  padding: 12px;
  background: #188ca2;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
}

.brand-title {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.brand-tagline {
  font-size: 16px;
  color: #555;
  margin: 0;
  line-height: 1.5;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Subtle bottom divider */
.header-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e0e0e0 30%, #e0e0e0 70%, transparent);
  margin: 35px auto 0;
  width: 60%;
  border-radius: 1px;
}

/* Extra polish on small phones */
@media (max-width: 480px) {
  .premium-header-section { padding: 35px 15px 25px; }
  .brand-logo { width: 100px; height: 100px; }
  .brand-title { font-size: 26px; }
  .brand-tagline { font-size: 15.5px; }
}
.luxury-floating-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  padding: 12px 0 18px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
  z-index: 999;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  color: #333;
  font-weight: 500;
  gap: 6px;
  min-width: 50px;
}

.footer-item i {
  font-size: 22px;
  color: var(--primary);
}

.main-cta {
  transform: translateY(-18px);
}

.main-cta a {
  background: linear-gradient(135deg, #25d366, #128c7e);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
  70% { box-shadow: 0 10px 40px rgba(37,211,102,0.6); }
  100% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
}
    </style>
  </head>
  
  <body>
  
  <div class="container">
    {{header_logo_card}}
    {{top_slider_card_tow}}
  
    {{about_brand}}
  
    {{our_collection}}
  
   
  
    {{product_spotlight}}
  
    {{featured_products}}
  
    {{join_club}}
  
    {{natural_ingredients}}
    {{youtube}}
    {{social_media}}
  
    {{contact}}
  
    {{rate_experience}}
  
  </div>
  
  <!-- Floating Buttons -->
  <div class="footer-actions">
    <button onclick="alert('QR Code Shown')"><i class="fas fa-qrcode"></i></button>
    <button onclick="if(navigator.share){navigator.share({title:'Page', url:location.href})}">
      <i class="fas fa-share-alt"></i>
    </button>
  </div>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
  <script>
    // Hero Fade Slider
    new Swiper('.hero-slider', {
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4000 },
        pagination: { el: '.swiper-pagination', clickable: true }
    });

    // Gallery & Products
    new Swiper('.gallery-swiper, .products-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        autoplay: { delay: 3500 }
    });
        new Swiper('.gallery-header', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          autoplay: { delay: 3000 },
          coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
          },
          pagination: { el: '.swiper-pagination' },
      });
  
      new Swiper('.products-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          pagination: { el: '.swiper-pagination' },
      });
      function rate(n) {
        document.querySelectorAll('.stars i').forEach((star, i) => {
          star.className = i < n ? 'fas fa-star active' : 'far fa-star';
        });
      }
</script>
  
  </body>
  </html>`,
    ecommerce: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    {{meta_seo}}
  
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <style>
      :root {
        --primary: #061244;
        --primary-light: #B7E6FF;
      
        --text: #091042;
        --bg: #ffffff;
      
        --radius: 0.875rem;            /* 14px */
        --shadow: 0 0.375rem 1.25rem rgba(0, 0, 0, 0.08);
      
        --h2: 1.5rem;                  /* 24px */
        --qrc_contact_hdr_text: 1.875rem; /* 30px */
        --p: 1.625rem;                 /* 26px */
      }
      
  
      * { margin:0; padding:0; box-sizing:border-box; }
      body {
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
        background:#f4f6f9;
        color:var(--text);
        line-height:1.5;
      }
    
      .container {
        max-width: 520px;
        margin: 0 auto;
        background: #241313;
        min-height: 100vh;
        overflow-x: hidden;
        padding:2vh;
      }
  
      /* HEADER */
      .header { position:relative; overflow:hidden; border-radius:0 0 18px 18px; }
      .header-swiper .swiper-slide {
        height: 300px;
        background-size: cover;
        background-position: center;
      }
  
      @media (max-width: 390px) {
        .header-swiper .swiper-slide { height: 240px; }
      }
    
      .header-overlay {
        position:absolute;
        bottom:0; left:0; right:0;
        background: linear-gradient(transparent, rgba(0,0,0,0.7));
        padding: 30px 15px;
        text-align:center;
        color:white;
      }
  
      .header-overlay h1 { font-size:24px; }
      .header-overlay p { font-size:14px; opacity:.9; }
  
      /* SECTIONS */
      .section {
        padding: 20px 16px;
        text-align:center;
      }
  
      .card {
        background:white;
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        padding:18px;
        margin-bottom:18px;
      }
  
      h2 {
        font-size:20px;
        color:var(--primary);
        margin-bottom:10px;
        font-weight:700;
      }
  
      p { font-size:14px; color:#555; }
  
      /* GALLERY */
      .gallery-swiper img {
        width:100%; height:300px; object-fit:cover;
        border-radius:12px;
      }
  
      @media (max-width:480px) {
        .gallery-swiper img 
      }
  
      /* VIDEO */
      .video-wrapper {
        position:relative; padding-bottom:56%; height:0;
        border-radius:12px; overflow:hidden; box-shadow:var(--shadow);
        margin-bottom:20px;
      }
  
      /* PRODUCTS */
      .product {
        border-radius:12px;
        overflow:hidden;
        box-shadow:var(--shadow);
        background:white;
        margin:12px 8px;
      }
  
      .product img {
        width:100%;  object-fit:cover;
      }
  
      .product-info { padding:16px; text-align:center; }
  
      .product-title { font-weight:600; font-size:15px; margin-bottom:6px; }
      .rating { font-size:13px; color:#ffc107; }
      .price { font-size:18px; font-weight:bold; color:var(--primary); }
  
      .buy-btn {
        width:100%; padding:12px;
        background:var(--primary); color:white;
        border:none; border-radius:8px;
        font-size:15px; cursor:pointer;
        margin-top:12px;
      }
  
      /* CTA BUTTON */
      .cta-btn {
        display:block;
        margin:20px auto;
        padding:15px 40px;
        background:var(--primary);
        color:white;
        text-decoration:none;
        border-radius:40px;
        font-size:17px;
        box-shadow:0 4px 12px rgba(6,18,68,.25);
      }
  
      /* SOCIAL LINKS */
      .social-item {
       
        background:#f7f7f7;
        padding:14px;
        margin:10px 0;
        border-radius:12px;
        align-items:center;
      }
  
      .social-icon {
        width:42px; height:42px;
        background-size:cover;
        border-radius:10px;
      }
  
      .social-text { margin-left:14px; flex:1; text-align:left; }
      .social-text h4 { font-size:15px; font-weight:600; }
      .social-text p { font-size:12px; color:#777; }
  
      /* CONTACT CARD */
      .ql-contact-wrapper {
        padding:20px; margin:20px; border-radius:12px;
        background:white; box-shadow:var(--shadow);
      }
  
      .qrc_contact_hdr_text { font-size:18px; font-weight:700; }
  
      .qrc_contact_number a, .qrc_email_id a {
        font-size:13px; color:#666; text-decoration:none;
      }
  
      /* RATING */
      .stars { display:flex; justify-content:center; gap:12px; margin-top:20px; }
      .stars i {
        font-size:34px;
        color:#ddd;
        transition:.3s;
      }
      .stars i.active { color:#ffc107; }
  
      /* FLOATING BUTTONS */
      .footer-actions {
        position:fixed; bottom:18px; left:50%;
        transform:translateX(-50%);
        background:white;
        border-radius:50px;
        box-shadow:0 8px 20px rgba(0,0,0,.15);
        padding:10px 20px;
        display:flex; gap:25px;
        z-index:100;
      }
  
      .footer-actions i {
        font-size:22px;
        color:var(--primary);
      }
      /* FOLLOW US SECTION */
.section.card {
  padding: 22px 18px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.section.card h2 {
  font-size: 20px;
  font-weight: 700;
  color: #061244;
  margin-bottom: 16px;
}

/* SOCIAL LIST */
.social-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-item {
  margin-bottom: 14px;
}

.social-link {
  display: flex;
  align-items: center;
  background: #f8f9fc;
  border-radius: 14px;
  padding: 14px;
  text-decoration: none;
  color: #222;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

/* Hover / Mobile Tap Feel */
.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

/* ICON */
.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-right: 14px;
}

/* TEXT */
.social-text {
  flex: 1;
  text-align: left;
}

.social-text h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.social-text p {
  font-size: 13px;
  color: #777;
}

/* ARROW ICON */
.social-link i {
  font-size: 16px;
  color: #999;
}

/* MOBILE OPTIMIZED */
@media (max-width: 480px) {
  .social-link {
    padding: 12px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-text h4 {
    font-size: 14px;
  }

  .social-text p {
    font-size: 12px;
  }
}
/* CONTACT CARD WRAPPER */
.qrc_contact.qr_cc_card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 18px;
  margin: 20px 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: "Inter", "SF Pro Text", sans-serif;
  text-align: left;  /* LEFT ALIGN EVERYTHING */
}

/* HEADER */
.qrc_contact_header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px dashed #e6e7ef;
}

.qrc_contact_hdr_img {
  width: 48px;
  height: 48px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.qrc_contact_hdr_text {
  font-size: 20px;
  font-weight: 700;
  color: #111;
}

/* INFO BLOCKS (Call, Email, Address) */
.qrc_contact_info,
.qrc_email_info,
.qrc_address_info {
  margin-bottom: 20px;
}

.qrc_contact_info_title,
.qrc_email_info_title,
.qrc_address_info_title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

/* TEXT VALUES */
.qrc_contact_number a,
.qrc_email_id a {
  font-size: 14px;
  color: #777;
  text-decoration: none;
  display: block;
  margin-top: 2px;
}

.qrc_contact_number a:hover,
.qrc_email_id a:hover {
  text-decoration: underline;
}

/* ADDRESS TEXT */
.qrc_address_text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 12px;
}

/* DIRECTION BUTTON */
.qrc_direction_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0b57cf;
  color: #fff !important;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background .2s ease;
}

.qrc_direction_btn:hover {
  background: #0947ad;
}

.qrc_direction_btn .icon-direction_1 {
  font-size: 16px;
}

/* MOBILE OPTIMIZATION */
@media (max-width: 480px) {
  .qrc_contact.qr_cc_card {
    padding: 16px;
  }

  .qrc_contact_hdr_text {
    font-size: 18px;
  }

  .qrc_contact_hdr_img {
    width: 42px;
    height: 42px;
  }

  .qrc_address_text,
  .qrc_contact_number a,
  .qrc_email_id a {
    font-size: 13px;
  }
}
.premium-header-section {
  text-align: center;
  padding: 40px 20px 30px;
  
}

.logo-wrapper {
  margin-bottom: 20px;
}

.brand-logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(6, 18, 68, 0.15);
  padding: 12px;
  background: #188ca2;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
}

.brand-title {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.brand-tagline {
  font-size: 16px;
  color: #555;
  margin: 0;
  line-height: 1.5;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Subtle bottom divider */
.header-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e0e0e0 30%, #e0e0e0 70%, transparent);
  margin: 35px auto 0;
  width: 60%;
  border-radius: 1px;
}

/* Extra polish on small phones */
@media (max-width: 480px) {
  .premium-header-section { padding: 35px 15px 25px; }
  .brand-logo { width: 100px; height: 100px; }
  .brand-title { font-size: 26px; }
  .brand-tagline { font-size: 15.5px; }
}
.luxury-floating-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  padding: 12px 0 18px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
  z-index: 999;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  color: #333;
  font-weight: 500;
  gap: 6px;
  min-width: 50px;
}

.footer-item i {
  font-size: 22px;
  color: var(--primary);
}

.main-cta {
  transform: translateY(-18px);
}

.main-cta a {
  background: linear-gradient(135deg, #25d366, #128c7e);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
  70% { box-shadow: 0 10px 40px rgba(37,211,102,0.6); }
  100% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
}
    </style>
  </head>
  
  <body>
  
  <div class="container">
    {{header_logo_card}}
  
    {{top_slider_card_tow}}
  
    {{about_brand}}
  
    {{our_collection}}
  
   
  
    {{product_spotlight}}
  

  
    {{join_club}}
  
    {{natural_ingredients}}
   
    {{social_media}}
  
    {{contact}}
  
    {{rate_experience}}
  
  </div>
  
  <!-- Floating Buttons -->
  <div class="footer-actions">
    <button onclick="alert('QR Code Shown')"><i class="fas fa-qrcode"></i></button>
    <button onclick="if(navigator.share){navigator.share({title:'Page', url:location.href})}">
      <i class="fas fa-share-alt"></i>
    </button>
  </div>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
  <script>
    // Hero Fade Slider
    new Swiper('.hero-slider', {
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4000 },
        pagination: { el: '.swiper-pagination', clickable: true }
    });

    // Gallery & Products
    new Swiper('.gallery-swiper, .products-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        autoplay: { delay: 3500 }
    });
        new Swiper('.gallery-header', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          autoplay: { delay: 3000 },
          coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
          },
          pagination: { el: '.swiper-pagination' },
      });
  
      new Swiper('.products-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          pagination: { el: '.swiper-pagination' },
      });
      function rate(n) {
        document.querySelectorAll('.stars i').forEach((star, i) => {
          star.className = i < n ? 'fas fa-star active' : 'far fa-star';
        });
      }
</script>
  
  </body>
  </html>`,
    protemplete: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    {{meta_seo}}
  
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <style>
      :root {
        --primary: #061244;
        --primary-light: #B7E6FF;
      
        --text: #091042;
        --bg: #ffffff;
      
        --radius: 0.875rem;            /* 14px */
        --shadow: 0 0.375rem 1.25rem rgba(0, 0, 0, 0.08);
      
        --h2: 1.5rem;                  /* 24px */
        --qrc_contact_hdr_text: 1.875rem; /* 30px */
        --p: 1.625rem;                 /* 26px */
      }
      
  
      * { margin:0; padding:0; box-sizing:border-box; }
      body {
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
        background:#a43232;
        color:var(--text);
        line-height:1.5;
      }
    
      .container {
        max-width: 520px;
        margin: 0 auto;
        background: #061244;
        min-height: 100vh;
        overflow-x: hidden;
        padding:2vh;
      }
  
      /* HEADER */
      .header { position:relative; overflow:hidden; border-radius:0 0 18px 18px; }
      .header-swiper .swiper-slide {
        height: 300px;
        background-size: cover;
        background-position: center;
      }
  
      @media (max-width: 390px) {
        .header-swiper .swiper-slide { height: 240px; }
      }
    
      .header-overlay {
        position:absolute;
        bottom:0; left:0; right:0;
        background: linear-gradient(transparent, rgba(0,0,0,0.7));
        padding: 30px 15px;
        text-align:center;
        color:white;
      }
  
      .header-overlay h1 { font-size:24px; }
      .header-overlay p { font-size:14px; opacity:.9; }
  
      /* SECTIONS */
      .section {
        padding: 20px 16px;
        text-align:center;
      }
  
      .card {
        background:white;
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        padding:18px;
        margin-bottom:18px;
      }
  
      h2 {
        font-size:20px;
        color:var(--primary);
        margin-bottom:10px;
        font-weight:700;
      }
  
      p { font-size:14px; color:#555; }
  
      /* GALLERY */
      .gallery-swiper img {
        width:100%; height:300px; object-fit:cover;
        border-radius:12px;
      }
  
      @media (max-width:480px) {
        .gallery-swiper img 
      }
  
      /* VIDEO */
      .video-wrapper {
        position:relative; padding-bottom:56%; height:0;
        border-radius:12px; overflow:hidden; box-shadow:var(--shadow);
        margin-bottom:20px;
      }
  
      /* PRODUCTS */
      .product {
        border-radius:12px;
        overflow:hidden;
        box-shadow:var(--shadow);
        background:white;
        margin:12px 8px;
      }
  
      .product img {
        width:100%;  object-fit:cover;
      }
  
      .product-info { padding:16px; text-align:center; }
  
      .product-title { font-weight:600; font-size:15px; margin-bottom:6px; }
      .rating { font-size:13px; color:#ffc107; }
      .price { font-size:18px; font-weight:bold; color:var(--primary); }
  
      .buy-btn {
        width:100%; padding:12px;
        background:var(--primary); color:white;
        border:none; border-radius:8px;
        font-size:15px; cursor:pointer;
        margin-top:12px;
      }
  
      /* CTA BUTTON */
      .cta-btn {
        display:block;
        margin:20px auto;
        padding:15px 40px;
        background:var(--primary);
        color:white;
        text-decoration:none;
        border-radius:40px;
        font-size:17px;
        box-shadow:0 4px 12px rgba(6,18,68,.25);
      }
  
      /* SOCIAL LINKS */
      .social-item {
       
        background:#f7f7f7;
        padding:14px;
        margin:10px 0;
        border-radius:12px;
        align-items:center;
      }
  
      .social-icon {
        width:42px; height:42px;
        background-size:cover;
        border-radius:10px;
      }
  
      .social-text { margin-left:14px; flex:1; text-align:left; }
      .social-text h4 { font-size:15px; font-weight:600; }
      .social-text p { font-size:12px; color:#777; }
  
      /* CONTACT CARD */
      .ql-contact-wrapper {
        padding:20px; margin:20px; border-radius:12px;
        background:white; box-shadow:var(--shadow);
      }
  
      .qrc_contact_hdr_text { font-size:18px; font-weight:700; }
  
      .qrc_contact_number a, .qrc_email_id a {
        font-size:13px; color:#666; text-decoration:none;
      }
  
      /* RATING */
      .stars { display:flex; justify-content:center; gap:12px; margin-top:20px; }
      .stars i {
        font-size:34px;
        color:#ddd;
        transition:.3s;
      }
      .stars i.active { color:#ffc107; }
  
      /* FLOATING BUTTONS */
      .footer-actions {
        position:fixed; bottom:18px; left:50%;
        transform:translateX(-50%);
        background:white;
        border-radius:50px;
        box-shadow:0 8px 20px rgba(0,0,0,.15);
        padding:10px 20px;
        display:flex; gap:25px;
        z-index:100;
      }
  
      .footer-actions i {
        font-size:22px;
        color:var(--primary);
      }
      /* FOLLOW US SECTION */
.section.card {
  padding: 22px 18px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.section.card h2 {
  font-size: 20px;
  font-weight: 700;
  color: #061244;
  margin-bottom: 16px;
}

/* SOCIAL LIST */
.social-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-item {
  margin-bottom: 14px;
}

.social-link {
  display: flex;
  align-items: center;
  background: #f8f9fc;
  border-radius: 14px;
  padding: 14px;
  text-decoration: none;
  color: #222;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

/* Hover / Mobile Tap Feel */
.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

/* ICON */
.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-right: 14px;
}

/* TEXT */
.social-text {
  flex: 1;
  text-align: left;
}

.social-text h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.social-text p {
  font-size: 13px;
  color: #777;
}

/* ARROW ICON */
.social-link i {
  font-size: 16px;
  color: #999;
}

/* MOBILE OPTIMIZED */
@media (max-width: 480px) {
  .social-link {
    padding: 12px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-text h4 {
    font-size: 14px;
  }

  .social-text p {
    font-size: 12px;
  }
}
/* CONTACT CARD WRAPPER */
.qrc_contact.qr_cc_card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 18px;
  margin: 20px 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: "Inter", "SF Pro Text", sans-serif;
  text-align: left;  /* LEFT ALIGN EVERYTHING */
}

/* HEADER */
.qrc_contact_header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px dashed #e6e7ef;
}

.qrc_contact_hdr_img {
  width: 48px;
  height: 48px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.qrc_contact_hdr_text {
  font-size: 20px;
  font-weight: 700;
  color: #111;
}

/* INFO BLOCKS (Call, Email, Address) */
.qrc_contact_info,
.qrc_email_info,
.qrc_address_info {
  margin-bottom: 20px;
}

.qrc_contact_info_title,
.qrc_email_info_title,
.qrc_address_info_title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

/* TEXT VALUES */
.qrc_contact_number a,
.qrc_email_id a {
  font-size: 14px;
  color: #777;
  text-decoration: none;
  display: block;
  margin-top: 2px;
}

.qrc_contact_number a:hover,
.qrc_email_id a:hover {
  text-decoration: underline;
}

/* ADDRESS TEXT */
.qrc_address_text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 12px;
}

/* DIRECTION BUTTON */
.qrc_direction_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0b57cf;
  color: #fff !important;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background .2s ease;
}

.qrc_direction_btn:hover {
  background: #0947ad;
}

.qrc_direction_btn .icon-direction_1 {
  font-size: 16px;
}

/* MOBILE OPTIMIZATION */
@media (max-width: 480px) {
  .qrc_contact.qr_cc_card {
    padding: 16px;
  }

  .qrc_contact_hdr_text {
    font-size: 18px;
  }

  .qrc_contact_hdr_img {
    width: 42px;
    height: 42px;
  }

  .qrc_address_text,
  .qrc_contact_number a,
  .qrc_email_id a {
    font-size: 13px;
  }
}
.premium-header-section {
  text-align: center;
  padding: 40px 20px 30px;
  
}

.logo-wrapper {
  margin-bottom: 20px;
}

.brand-logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(6, 18, 68, 0.15);
  padding: 12px;
  background: #188ca2;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
}

.brand-title {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.brand-tagline {
  font-size: 16px;
  color: #555;
  margin: 0;
  line-height: 1.5;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Subtle bottom divider */
.header-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e0e0e0 30%, #e0e0e0 70%, transparent);
  margin: 35px auto 0;
  width: 60%;
  border-radius: 1px;
}

/* Extra polish on small phones */
@media (max-width: 480px) {
  .premium-header-section { padding: 35px 15px 25px; }
  .brand-logo { width: 100px; height: 100px; }
  .brand-title { font-size: 26px; }
  .brand-tagline { font-size: 15.5px; }
}
.luxury-floating-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  padding: 12px 0 18px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
  z-index: 999;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  color: #333;
  font-weight: 500;
  gap: 6px;
  min-width: 50px;
}

.footer-item i {
  font-size: 22px;
  color: var(--primary);
}

.main-cta {
  transform: translateY(-18px);
}

.main-cta a {
  background: linear-gradient(135deg, #25d366, #128c7e);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
  70% { box-shadow: 0 10px 40px rgba(37,211,102,0.6); }
  100% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
}
    </style>
  </head>
  
  <body>
  
  <div class="container">
    {{header_logo_card}}
    {{top_slider_card_tow}}
  
    {{about_brand}}
  
   
  
   
  
    {{product_spotlight}}
  
   
  
    {{join_club}}
  
    
    {{youtube}}
    {{social_media}}
  
    {{contact}}
  
    
  
  </div>
  
  <!-- Floating Buttons -->
  <div class="footer-actions">
    <button onclick="alert('QR Code Shown')"><i class="fas fa-qrcode"></i></button>
    <button onclick="if(navigator.share){navigator.share({title:'Page', url:location.href})}">
      <i class="fas fa-share-alt"></i>
    </button>
  </div>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
  <script>
    // Hero Fade Slider
    new Swiper('.hero-slider', {
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4000 },
        pagination: { el: '.swiper-pagination', clickable: true }
    });

    // Gallery & Products
    new Swiper('.gallery-swiper, .products-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        autoplay: { delay: 3500 }
    });
        new Swiper('.gallery-header', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          autoplay: { delay: 3000 },
          coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
          },
          pagination: { el: '.swiper-pagination' },
      });
  
      new Swiper('.products-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          pagination: { el: '.swiper-pagination' },
      });
      function rate(n) {
        document.querySelectorAll('.stars i').forEach((star, i) => {
          star.className = i < n ? 'fas fa-star active' : 'far fa-star';
        });
      }
</script>
  
  </body>
  </html>`,
    protemplete2: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    {{meta_seo}}
  
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <style>
      :root {
        --primary: #061244;
        --primary-light: #B7E6FF;
      
        --text: #091042;
        --bg: #ffffff;
      
        --radius: 0.875rem;            /* 14px */
        --shadow: 0 0.375rem 1.25rem rgba(0, 0, 0, 0.08);
      
        --h2: 1.5rem;                  /* 24px */
        --qrc_contact_hdr_text: 1.875rem; /* 30px */
        --p: 1.625rem;                 /* 26px */
      }
      
  
      * { margin:0; padding:0; box-sizing:border-box; }
      body {
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
        background:#edeef4;
        color:var(--text);
        line-height:1.5;
      }
    
      .container {
        max-width: 520px;
        margin: 0 auto;
        background: #061244;
        min-height: 100vh;
        overflow-x: hidden;
        padding:2vh;
      }
  
      /* HEADER */
      .header { position:relative; overflow:hidden; border-radius:0 0 18px 18px; }
      .header-swiper .swiper-slide {
        height: 300px;
        background-size: cover;
        background-position: center;
      }
  
      @media (max-width: 390px) {
        .header-swiper .swiper-slide { height: 240px; }
      }
    
      .header-overlay {
        position:absolute;
        bottom:0; left:0; right:0;
        background: linear-gradient(transparent, rgba(0,0,0,0.7));
        padding: 30px 15px;
        text-align:center;
        color:white;
      }
  
      .header-overlay h1 { font-size:24px; }
      .header-overlay p { font-size:14px; opacity:.9; }
  
      /* SECTIONS */
      .section {
        padding: 20px 16px;
        text-align:center;
      }
  
      .card {
        background:white;
        border-radius:var(--radius);
        box-shadow:var(--shadow);
        padding:18px;
        margin-bottom:18px;
      }
  
      h2 {
        font-size:20px;
        color:var(--primary);
        margin-bottom:10px;
        font-weight:700;
      }
  
      p { font-size:14px; color:#555; }
  
      /* GALLERY */
      .gallery-swiper img {
        width:100%; height:300px; object-fit:cover;
        border-radius:12px;
      }
  
      @media (max-width:480px) {
        .gallery-swiper img 
      }
  
      /* VIDEO */
      .video-wrapper {
        position:relative; padding-bottom:56%; height:0;
        border-radius:12px; overflow:hidden; box-shadow:var(--shadow);
        margin-bottom:20px;
      }
  
      /* PRODUCTS */
      .product {
        border-radius:12px;
        overflow:hidden;
        box-shadow:var(--shadow);
        background:white;
        margin:12px 8px;
      }
  
      .product img {
        width:100%;  object-fit:cover;
      }
  
      .product-info { padding:16px; text-align:center; }
  
      .product-title { font-weight:600; font-size:15px; margin-bottom:6px; }
      .rating { font-size:13px; color:#ffc107; }
      .price { font-size:18px; font-weight:bold; color:var(--primary); }
  
      .buy-btn {
        width:100%; padding:12px;
        background:var(--primary); color:white;
        border:none; border-radius:8px;
        font-size:15px; cursor:pointer;
        margin-top:12px;
      }
  
      /* CTA BUTTON */
      .cta-btn {
        display:block;
        margin:20px auto;
        padding:15px 40px;
        background:var(--primary);
        color:white;
        text-decoration:none;
        border-radius:40px;
        font-size:17px;
        box-shadow:0 4px 12px rgba(6,18,68,.25);
      }
  
      /* SOCIAL LINKS */
      .social-item {
       
        background:#f7f7f7;
        padding:14px;
        margin:10px 0;
        border-radius:12px;
        align-items:center;
      }
  
      .social-icon {
        width:42px; height:42px;
        background-size:cover;
        border-radius:10px;
      }
  
      .social-text { margin-left:14px; flex:1; text-align:left; }
      .social-text h4 { font-size:15px; font-weight:600; }
      .social-text p { font-size:12px; color:#777; }
  
      /* CONTACT CARD */
      .ql-contact-wrapper {
        padding:20px; margin:20px; border-radius:12px;
        background:white; box-shadow:var(--shadow);
      }
  
      .qrc_contact_hdr_text { font-size:18px; font-weight:700; }
  
      .qrc_contact_number a, .qrc_email_id a {
        font-size:13px; color:#666; text-decoration:none;
      }
  
      /* RATING */
      .stars { display:flex; justify-content:center; gap:12px; margin-top:20px; }
      .stars i {
        font-size:34px;
        color:#ddd;
        transition:.3s;
      }
      .stars i.active { color:#ffc107; }
  
      /* FLOATING BUTTONS */
      .footer-actions {
        position:fixed; bottom:18px; left:50%;
        transform:translateX(-50%);
        background:white;
        border-radius:50px;
        box-shadow:0 8px 20px rgba(0,0,0,.15);
        padding:10px 20px;
        display:flex; gap:25px;
        z-index:100;
      }
  
      .footer-actions i {
        font-size:22px;
        color:var(--primary);
      }
      /* FOLLOW US SECTION */
.section.card {
  padding: 22px 18px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.section.card h2 {
  font-size: 20px;
  font-weight: 700;
  color: #061244;
  margin-bottom: 16px;
}

/* SOCIAL LIST */
.social-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-item {
  margin-bottom: 14px;
}

.social-link {
  display: flex;
  align-items: center;
  background: #f8f9fc;
  border-radius: 14px;
  padding: 14px;
  text-decoration: none;
  color: #222;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

/* Hover / Mobile Tap Feel */
.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

/* ICON */
.social-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-right: 14px;
}

/* TEXT */
.social-text {
  flex: 1;
  text-align: left;
}

.social-text h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.social-text p {
  font-size: 13px;
  color: #777;
}

/* ARROW ICON */
.social-link i {
  font-size: 16px;
  color: #999;
}

/* MOBILE OPTIMIZED */
@media (max-width: 480px) {
  .social-link {
    padding: 12px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-text h4 {
    font-size: 14px;
  }

  .social-text p {
    font-size: 12px;
  }
}
/* CONTACT CARD WRAPPER */
.qrc_contact.qr_cc_card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 18px;
  margin: 20px 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: "Inter", "SF Pro Text", sans-serif;
  text-align: left;  /* LEFT ALIGN EVERYTHING */
}

/* HEADER */
.qrc_contact_header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  margin-bottom: 22px;
  border-bottom: 1px dashed #e6e7ef;
}

.qrc_contact_hdr_img {
  width: 48px;
  height: 48px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
}

.qrc_contact_hdr_text {
  font-size: 20px;
  font-weight: 700;
  color: #111;
}

/* INFO BLOCKS (Call, Email, Address) */
.qrc_contact_info,
.qrc_email_info,
.qrc_address_info {
  margin-bottom: 20px;
}

.qrc_contact_info_title,
.qrc_email_info_title,
.qrc_address_info_title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

/* TEXT VALUES */
.qrc_contact_number a,
.qrc_email_id a {
  font-size: 14px;
  color: #777;
  text-decoration: none;
  display: block;
  margin-top: 2px;
}

.qrc_contact_number a:hover,
.qrc_email_id a:hover {
  text-decoration: underline;
}

/* ADDRESS TEXT */
.qrc_address_text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 12px;
}

/* DIRECTION BUTTON */
.qrc_direction_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0b57cf;
  color: #fff !important;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background .2s ease;
}

.qrc_direction_btn:hover {
  background: #0947ad;
}

.qrc_direction_btn .icon-direction_1 {
  font-size: 16px;
}

/* MOBILE OPTIMIZATION */
@media (max-width: 480px) {
  .qrc_contact.qr_cc_card {
    padding: 16px;
  }

  .qrc_contact_hdr_text {
    font-size: 18px;
  }

  .qrc_contact_hdr_img {
    width: 42px;
    height: 42px;
  }

  .qrc_address_text,
  .qrc_contact_number a,
  .qrc_email_id a {
    font-size: 13px;
  }
}
.premium-header-section {
  text-align: center;
  padding: 40px 20px 30px;
  
}

.logo-wrapper {
  margin-bottom: 20px;
}

.brand-logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(6, 18, 68, 0.15);
  padding: 12px;
  background: #188ca2;
  border: 1px solid #f0f0f0;
  transition: all 0.4s ease;
}

.brand-title {
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.brand-tagline {
  font-size: 16px;
  color: #555;
  margin: 0;
  line-height: 1.5;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

/* Subtle bottom divider */
.header-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #e0e0e0 30%, #e0e0e0 70%, transparent);
  margin: 35px auto 0;
  width: 60%;
  border-radius: 1px;
}

/* Extra polish on small phones */
@media (max-width: 480px) {
  .premium-header-section { padding: 35px 15px 25px; }
  .brand-logo { width: 100px; height: 100px; }
  .brand-title { font-size: 26px; }
  .brand-tagline { font-size: 15.5px; }
}
.luxury-floating-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  padding: 12px 0 18px;
  box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
  z-index: 999;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  color: #333;
  font-weight: 500;
  gap: 6px;
  min-width: 50px;
}

.footer-item i {
  font-size: 22px;
  color: var(--primary);
}

.main-cta {
  transform: translateY(-18px);
}

.main-cta a {
  background: linear-gradient(135deg, #25d366, #128c7e);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
  70% { box-shadow: 0 10px 40px rgba(37,211,102,0.6); }
  100% { box-shadow: 0 10px 30px rgba(37,211,102,0.4); }
}
    </style>
  </head>
  
  <body>
  
  <div class="container">
    
    {{top_slider_card_tow}}
  
    {{about_brand}}
  
   
  
   
  
    {{product_spotlight}}
  
    {{featured_products}}
  
    {{join_club}}
  
  
    {{social_media}}
  
    {{contact}}
  
    {{rate_experience}}
  
  </div>
  
  <!-- Floating Buttons -->
  <div class="footer-actions">
    <button onclick="alert('QR Code Shown')"><i class="fas fa-qrcode"></i></button>
    <button onclick="if(navigator.share){navigator.share({title:'Page', url:location.href})}">
      <i class="fas fa-share-alt"></i>
    </button>
  </div>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
  <script>
    // Hero Fade Slider
    new Swiper('.hero-slider', {
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4000 },
        pagination: { el: '.swiper-pagination', clickable: true }
    });

    // Gallery & Products
    new Swiper('.gallery-swiper, .products-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
        loop: true,
        autoplay: { delay: 3500 }
    });
        new Swiper('.gallery-header', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop: true,
          autoplay: { delay: 3000 },
          coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
          },
          pagination: { el: '.swiper-pagination' },
      });
  
      new Swiper('.products-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          pagination: { el: '.swiper-pagination' },
      });
      function rate(n) {
        document.querySelectorAll('.stars i').forEach((star, i) => {
          star.className = i < n ? 'fas fa-star active' : 'far fa-star';
        });
      }
</script>
  
  </body>
  </html>`
};
const __TURBOPACK__default__export__ = templates;
}),
"[project]/lib/renderLanding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAvailableTemplates",
    ()=>getAvailableTemplates,
    "getTemplate",
    ()=>getTemplate,
    "mapJsonToProduct",
    ()=>mapJsonToProduct,
    "renderLanding",
    ()=>renderLanding,
    "renderLandingPreview",
    ()=>renderLandingPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$allTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/allTemplates.ts [app-route] (ecmascript)");
;
const TEMPLATES = __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$allTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
function mapJsonToProduct(json) {
    return {
        id: json.id,
        pageTitle: json.formData?.metaTitle || json.formData?.name || "",
        metaDescription: json.formData?.metaDescription || "",
        metaKeywords: json.formData?.keywords || "",
        productName: json.formData?.name || "",
        category: json.formData?.category || "",
        price: json.formData?.price || "",
        description: json.formData?.description || "",
        videoUrl: json.formData?.videoUrl || "",
        // Primary image
        brandLogo: json.images?.[0]?.url || "",
        // All images for slider
        images: json.images?.map((img)=>img.url) || [],
        // Gallery thumbnails
        thumbnails: json.gallery?.map((g)=>g.url) || [],
        // Specifications
        custom_fields_meta: json.custom_fields_meta || [],
        // PDFs
        pdfDownloadUrl: json.pdfs?.[0]?.url || "",
        pdfButtonText: "Download PDF",
        // OG image
        og_image: json.images?.[0]?.url || ""
    };
}
function getAvailableTemplates() {
    return Object.keys(TEMPLATES);
}
function getTemplate(templateName) {
    return TEMPLATES[templateName] || null;
}
function convertToEmbedUrl(url) {
    if (!url) return "";
    // Format: https://youtu.be/XXXXXXXX
    if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
    }
    // Format: https://www.youtube.com/watch?v=XXXXXXXX
    if (url.includes("watch?v=")) {
        const id = url.split("watch?v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${id}`;
    }
    // If already embed format, return as-is
    if (url.includes("/embed/")) {
        return url;
    }
    return url;
}
function renderLanding(raw, templateName) {
    const product = mapJsonToProduct(raw);
    const selectedTemplate = templateName && TEMPLATES[templateName] ? TEMPLATES[templateName] : TEMPLATES.modern;
    let output = selectedTemplate;
    // Field replacements
    const fields = [
        "pageTitle",
        "metaDescription",
        "metaKeywords",
        "brandLogo",
        "productName",
        "price",
        "description",
        "videoUrl",
        "category",
        "pdfDownloadUrl",
        "pdfButtonText",
        "og_image"
    ];
    fields.forEach((k)=>{
        const val = product[k] ?? "";
        output = output.replaceAll(`{{${k}}}`, String(val));
    });
    // Product ID
    output = output.replaceAll("{{productId}}", String(product.id ?? ""));
    /* ---------------------------------------------
     SEO TAGS
  ---------------------------------------------- */ const Meta_SEO_CARD = `
<title>${product.pageTitle}</title>
<meta name="description" content="${product.metaDescription}">
<meta property="og:title" content="${product.pageTitle}">
<meta property="og:description" content="${product.metaDescription}">
<meta property="og:image" content="${product.og_image}">
`;
    /* ---------------------------------------------
     DYNAMIC TOP SLIDER IMAGES
  ---------------------------------------------- */ const TOP_SLIDER_CARD = `
<div class="header">
  <div class="swiper header-swiper">
    <div class="swiper-wrapper">
      ${product.images.map((img)=>`<div class="swiper-slide" style="background-image:url('${img}')"></div>`).join("")}
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="header-overlay">
    <h1>${product.productName}</h1>
    <p>Timeless Beauty • Natural Ingredients • Cruelty-Free</p>
  </div>
</div>`;
    const TOP_SLIDER_CARD_TOW = `
<style>  .hero-slider .swiper-slide img {
  width: 100%;
  
  object-fit: cover;
  border-radius: var(--radius);
}</style>
<div class="hero-slider swiper">
<div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/F2.jpg" alt="Wine 1"></div>
    <div class="swiper-slide"><img src="/F1.jpg" alt="Wine 2"></div>
    <div class="swiper-slide"><img src="/F3.jpg" alt="Wine 3"></div>
</div>
<div class="swiper-pagination"></div>
</div>`;
    /* ---------------------------------------------
     ABOUT BRAND -1
  ---------------------------------------------- */ const ABOUT_BRAND_CARD = `
<div class="section card">
  <h2>About Our Brand</h2>
  <p>${product.description || ""}</p>
</div>`;
    const TOP_HEADER_LOGO = `
<style>
.header {
  position: relative;
  text-align: center;
  padding: 40px 0 20px;
}
.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.header h1 {
  font-size: 28px;
  margin: 20px 0 10px;
  color: var(--primary);
}
.header p { font-size: 17px; color: #666; }
</style>
<div class="header">
<img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/luxury_wine_logo.png" alt="Logo" class="logo">
<h1>Luxury Wines</h1>
<p>Exquisite Taste Since 1985</p>
</div>`;
    /* ---------------------------------------------
     PRODUCT SPOTLIGHT
  ---------------------------------------------- */ const HEADER_LOGO_CARD_TOW = ` <div class="header">
  <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/luxury_wine_logo.png" alt="Logo" class="logo">
  <h1>Luxury Wines</h1>
  <p>Exquisite Taste Since 1985</p>
</div>`;
    // 2. Specifications (dynamic – same as your example)
    const PRODUCT_SPOTLIGHT_DATA = product.custom_fields_meta || [];
    const PRODUCT_SPOTLIGHT_CARD = product.custom_fields_meta.length > 0 ? `
<div class="section card" style="text-align:left">
  <!-- AI Badge -->
 

  <div>
    <h2 style="font-size:22px; margin:0 0 20px; font-weight:800;">
      Product Spotlights
    </h2>

    <!-- Dynamic Label : Value Rows -->
    ${PRODUCT_SPOTLIGHT_DATA.map((item)=>`
      <div style="margin-bottom:18px; line-height:1.7; font-size:15px;">
        <strong >${item.name}:</strong> 
        <span style="color:#333;">${item.value}</span>
      </div>`).join('')}

    <!-- Stats Grid (last 3 items) -->
   
    <div style="font-size:12px; color:#999; text-align:center; margin-top:12px;">
      *Based on data from top e-commerce marketplace
    </div>
  </div>
</div>` : '';
    /* ---------------------------------------------
     SPECIFICATIONS TABLE
  ---------------------------------------------- */ const SPECS_CARD = product.custom_fields_meta && product.custom_fields_meta.length > 0 ? `
<div class="section card">
  <h2>Specifications</h2>
  <table class="specs-table">
    ${product.custom_fields_meta.map((f)=>`
      <tr>
        <td class="product--properties-label">${f.name}</td>
        <td class="product--properties-value">${f.value}</td>
      </tr>`).join("")}
  </table>
</div>` : "";
    /* ---------------------------------------------
     OUR COLLECTION – DYNAMIC GALLERY
  ---------------------------------------------- */ const OUR_COLLECTION_CARD = `
  <style>
  /* Swiper Gallery */
  .swiper {
      width: 100%;
      padding: 20px 0;
  }
  .gallery-header .swiper-slide {
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  .gallery-header img, .slide {
      width: 100%;
      height: 300px;
      object-fit: cover;
  }
  .section {
      background: #fff;
      margin: 20px 0;
      border-radius: var(--radius);
      padding: 20px;
      box-shadow: 0 7px 29px rgba(100,100,100,0.1);
  }
  .section h2 {
      font-size: 22px;
      text-align: center;
      margin-bottom: 10px;
      color: var(--primary);
  }
  .section p {
      text-align: center;
      color: #666;
      margin-bottom: 15px;
  }

  </style>
<div class="section">
  <h2>Our Collection</h2>
  <div class="swiper gallery-swiper">
    <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/F1.jpg" alt="Product"></div>
    <div class="swiper-slide"><img src="/F2.jpg" alt="Product"></div>
    <div class="swiper-slide"><img src="/F3.jpg" alt="Product"></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>`;
    const OUR_COLLECTION_CARD_TWO = `
  <style>
  /* Swiper Gallery */
  .swiper {
      width: 100%;
      padding: 20px 0;
  }
  .gallery-header .swiper-slide {
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  .gallery-header img, .slide {
      width: 100%;
      height: 300px;
      object-fit: cover;
  }
  .section {
      background: #fff;
      margin: 20px 0;
      border-radius: var(--radius);
      padding: 20px;
      box-shadow: 0 7px 29px rgba(100,100,100,0.1);
  }
  .section h2 {
      font-size: 22px;
      text-align: center;
      margin-bottom: 10px;
      color: var(--primary);
  }
  .section p {
      text-align: center;
      color: #666;
      margin-bottom: 15px;
  }

  </style>

 
  <div class="section">
          <div class="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="F1.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="F2.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="F3.jpg" alt=""></div>
              </div>
          </div>
      
</div>`;
    /* ---------------------------------------------
     STATIC CARDS (NO CHANGE)
  ---------------------------------------------- */ const videoEmbedUrl = convertToEmbedUrl(product.videoUrl || "");
    const YOUTUBE_CARD = `
  <div class="section card">
    <h2>Watch Our Story</h2>
    
      <iframe 
        src="${videoEmbedUrl || "https://www.youtube.com/embed/bOuLmR8K5Tk"}" 
        allowfullscreen
      ></iframe>
   
  </div>`;
    const FEATURED_PRODUCTS_CARD = `
<div class="section">
  <h2>Featured Products</h2>
  <div class="swiper products-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="product">
          <img src="/F1.jpg" alt="Serum">
          <div class="product-info">
            <div class="product-title">Radiant Glow Serum</div>
            <div class="rating">4.0 stars</div>
            <div class="price">$89.00</div>
            <button class="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="product">
          <img src="/F2.jpg" alt="Cream">
          <div class="product-info">
            <div class="product-title">Hydrating Night Cream</div>
            <div class="rating">5.0 stars</div>
            <div class="price">$74.50</div>
            <button class="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="product">
          <img src="/F3.jpg" alt="Mask">
          <div class="product-info">
            <div class="product-title">Detox Clay Mask</div>
            <div class="rating">4.0 stars</div>
            <div class="price">$42.00</div>
            <button class="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>`;
    const JOIN_BEAUTY_CLUB_CARD = `
<div class="section card">
  <h2>Join the Beauty Club</h2>
  <p>Get 15% off your first order + exclusive access to new launches</p>
  <a href="#" class="cta-btn">Register Now</a>
</div>`;
    const NATURAL_INGREDIENTS_CARD = `
<div class="section card">
<h2>Perfect for Everyday Wear</h2>
<p>Stylish, versatile, and durable—ideal for work, travel, and casual outings.</p>

  <img src="/F4.jpg"
    style="width:100%; border-radius:12px; margin-top:15px;">
</div>`;
    const SOCIAL_MEDIA_CARD = `
  <style>
  .section p {text-align:left; color:#666; margin:5px 0 0;}
  </style>
<div class="section card">
  <h2>Follow Us</h2>
  <ul class="social-list">
    <li class="social-item">
      <a href="https://facebook.com" class="social-link">
        <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/fb_icon@72x.png')"></div>
        <div class="social-text"><h3>Facebook</h3><p>Follow us for tips & offers</p></div>
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li class="social-item">
      <a href="https://instagram.com" class="social-link">
        <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/insta_icon@72x.png')"></div>
        <div class="social-text"><h3>Instagram</h3><p>See our latest looks</p></div>
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
  </ul>
</div>`;
    const CONTACT_CARD = `
  <div class="section qrc_contact qr_cc_card" data-index="8">
  <div class="qrc_contact_header">
     <div class="qrc_contact_hdr_img" style="background-image: url('//cdn0070.qrcodechimp.com/images/digitalCard/contactus.png?v=1763098999');"></div>
     <div class="qrc_contact_hdr_text ">Contact Us</div>
 </div>
 <div class="qrc_contact_info">
     <div class="qrc_contact_info_title ">Call Us</div>
     <div class="qrc_contact_number"><a href="tel:123 456 7890">123 456 7890</a></div>
 </div><div class="qrc_email_info">
 <div class="qrc_email_info_title ">Email</div>
 <div class="qrc_email_id"><a href="mailto:contactme@domain.com">contactme@domain.com</a></div>
</div><div class="qrc_address_info">
     <div class="qrc_address_info_title ">Address</div>
     <div class="qrc_address_text">817 N Ave<br>California, Chicago, 60622<br>US</div>
     <a class="qrc_direction_btn link_click" type="direction" href="//#" target="_blank"><span class="icon-direction_1"></span>Direction</a>
 </div>
 
</div>`;
    const RATE_EXPERIENCE_CARD = `
 
<div class="section card">
  <h2>Rate Your Experience</h2>
  <p style="text-align:center;">How satisfied are you with our brand?</p>
  <div class="stars">
    <div onclick="rate(1)"><i class="far fa-star"></i></div>
    <div onclick="rate(2)"><i class="far fa-star"></i></div>
    <div onclick="rate(3)"><i class="far fa-star"></i></div>
    <div onclick="rate(4)"><i class="far fa-star"></i></div>
    <div onclick="rate(5)"><i class="far fa-star"></i></div>
  </div>
</div>`;
    const HEADER_LOGO_CARD = `<div class="premium-header-section">
 
 <div class="logo-wrapper">
   <img 
     src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_logo.png?v=1763098999" 
     alt="Brand Logo" 
     >
 </div>

 <div class="title-desc">
   <h1 style="color:#fff" >${product.productName}</h1>
   <p  style="color:#928787">Description – premium quality since 1985</p>
 </div>
 <div class="header-divider"></div>
</div>`;
    /* ---------------------------------------------
     REPLACE TEMPLATE BLOCKS
  ---------------------------------------------- */ output = output.replace("{{meta_seo}}", Meta_SEO_CARD).replace("{{top_slider_card}}", TOP_SLIDER_CARD).replace("{{top_slider_card_tow}}", TOP_SLIDER_CARD_TOW).replace("{{about_brand}}", ABOUT_BRAND_CARD).replace('{{product_spotlight}}', PRODUCT_SPOTLIGHT_CARD).replace("{{specifications}}", SPECS_CARD).replace("{{our_collection}}", OUR_COLLECTION_CARD).replace("{{youtube}}", YOUTUBE_CARD).replace("{{featured_products}}", FEATURED_PRODUCTS_CARD).replace("{{join_club}}", JOIN_BEAUTY_CLUB_CARD).replace("{{natural_ingredients}}", NATURAL_INGREDIENTS_CARD).replace("{{social_media}}", SOCIAL_MEDIA_CARD).replace("{{contact}}", CONTACT_CARD).replace("{{rate_experience}}", RATE_EXPERIENCE_CARD).replace("{{header_logo_card}}", HEADER_LOGO_CARD).replace("{{header_logo_card_tow}}", HEADER_LOGO_CARD_TOW);
    return output;
}
function renderLandingPreview(product, templateName) {
    const isValid = !!TEMPLATES[templateName];
    const html = renderLanding(product, templateName);
    return {
        html,
        templateName: isValid ? templateName : "ecommerce",
        isValid
    };
}
}),
"[project]/data/products.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"1\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"},\"2\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"},\"3\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"},\"4\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"}}"));}),
"[project]/app/api/landing-html/[slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/api/landing-html/[id]/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$renderLanding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/renderLanding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/products.json (json)");
;
;
;
async function GET(request, { params }) {
    try {
        // Get query parameters
        const { searchParams } = new URL(request.url);
        const templateName = searchParams.get("template") || "";
        const { slug } = await params;
        // Fetch product data (replace with your database query)
        const productData = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$json__$28$json$29$__["default"][slug];
        if (!productData) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](`<html><body><h1>Product Not Found</h1><p>Product ID: ${slug} does not exist.</p></body></html>`, {
                status: 404,
                headers: {
                    "Content-Type": "text/html"
                }
            });
        }
        // Render the landing page with selected template
        const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$renderLanding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["renderLanding"])(productData, templateName);
        // Return HTML response
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](html, {
            status: 200,
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "Cache-Control": "public, max-age=3600"
            }
        });
    } catch (error) {
        console.error("Error generating landing page:", error);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](`<html><body><h1>Internal Server Error</h1><p>Failed to generate landing page.</p></body></html>`, {
            status: 500,
            headers: {
                "Content-Type": "text/html"
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__33365401._.js.map