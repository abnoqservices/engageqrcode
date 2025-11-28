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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/server/loadTemplates.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadTemplate",
    ()=>loadTemplate
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function loadTemplate(templateName) {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "templates", `${templateName}.html`);
    try {
        return await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, "utf-8");
    } catch (err) {
        console.error("Template file not found:", filePath);
        throw err;
    }
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/sectionMap.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SECTION_MAP",
    ()=>SECTION_MAP
]);
const SECTION_MAP = {
    "Hero Banner": "{{top_slider_card}}",
    "Hero Banner 2": "{{top_slider_card_tow}}",
    "About Brand": "{{about_brand}}",
    "Product Spotlight": "{{product_spotlight}}",
    "Specifications Grid": "{{specifications}}",
    "Our Collection": "{{our_collection}}",
    "Video Demo": "{{youtube}}",
    "Featured Products": "{{featured_products}}",
    "Join Club": "{{join_club}}",
    "Natural Ingredients": "{{natural_ingredients}}",
    "Social Media": "{{social_media}}",
    "Contact Form": "{{contact}}",
    "Rate Experience": "{{rate_experience}}",
    "Header Logo": "{{header_logo_card}}",
    "Header Logo 2": "{{header_logo_card_tow}}"
};
}),
"[project]/templates/cards.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* 
=============================================================
TEMPLATE COMPONENT CARDS
All reusable HTML components for landing page templates.
=============================================================
*/ __turbopack_context__.s([
    "ABOUT_BRAND_CARD",
    ()=>ABOUT_BRAND_CARD,
    "CONTACT_CARD",
    ()=>CONTACT_CARD,
    "FEATURED_PRODUCTS_CARD",
    ()=>FEATURED_PRODUCTS_CARD,
    "GLOBAL_CSS",
    ()=>GLOBAL_CSS,
    "HEADER_LOGO_CARD",
    ()=>HEADER_LOGO_CARD,
    "HEADER_LOGO_CARD_TOW",
    ()=>HEADER_LOGO_CARD_TOW,
    "JOIN_BEAUTY_CLUB_CARD",
    ()=>JOIN_BEAUTY_CLUB_CARD,
    "Meta_SEO_CARD",
    ()=>Meta_SEO_CARD,
    "NATURAL_INGREDIENTS_CARD",
    ()=>NATURAL_INGREDIENTS_CARD,
    "OUR_COLLECTION_CARD",
    ()=>OUR_COLLECTION_CARD,
    "PRODUCT_SPOTLIGHT_CARD",
    ()=>PRODUCT_SPOTLIGHT_CARD,
    "RATE_EXPERIENCE_CARD",
    ()=>RATE_EXPERIENCE_CARD,
    "SOCIAL_MEDIA_CARD",
    ()=>SOCIAL_MEDIA_CARD,
    "SPECS_CARD",
    ()=>SPECS_CARD,
    "TOP_SLIDER_CARD",
    ()=>TOP_SLIDER_CARD,
    "TOP_SLIDER_CARD_TOW",
    ()=>TOP_SLIDER_CARD_TOW,
    "YOUTUBE_CARD",
    ()=>YOUTUBE_CARD
]);
const Meta_SEO_CARD = `
<title>{{pageTitle}}</title>
<meta name="description" content="{{metaDescription}}">
<meta property="og:title" content="{{pageTitle}}">
<meta property="og:description" content="{{metaDescription}}">
<meta property="og:image" content="{{og_image}}">
`;
const TOP_SLIDER_CARD = `
<div class="header">
  <div class="swiper header-swiper">
    <div class="swiper-wrapper">
      {{#sliderImages}}
        <div class="swiper-slide" style="background-image:url('{{img}}')"></div>
      {{/sliderImages}}
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="header-overlay">
    <h1>{{productName}}</h1>
    <p>Timeless Beauty • Natural Ingredients • Cruelty-Free</p>
  </div>
</div>
`;
const TOP_SLIDER_CARD_TOW = `
<div class="hero-slider swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/F2.jpg" alt=""></div>
    <div class="swiper-slide"><img src="/F1.jpg" alt=""></div>
    <div class="swiper-slide"><img src="/F3.jpg" alt=""></div>
  </div>
  <div class="swiper-pagination"></div>
</div>
`;
const ABOUT_BRAND_CARD = `
<div class="section card">
  <h2>About Our Brand</h2>
  <p>{{description}}</p>
</div>
`;
const PRODUCT_SPOTLIGHT_CARD = `
<div class="section card" style="text-align:left">
  <h2 style="font-size:22px; margin:0 0 20px; font-weight:800;">
    Product Spotlights
  </h2>
  
  {{#custom_fields_meta}}
  <div style="margin-bottom:18px; line-height:1.7; font-size:15px;">
    <strong>{{name}}:</strong> 
    <span style="color:#000;">{{value}}</span>
  </div>
  {{/custom_fields_meta}}
</div>
`;
const SPECS_CARD = `
<div class="section card">
  <h2>Specifications</h2>
  <table class="specs-table">
    {{#custom_fields_meta}}
    <tr>
      <td class="product--properties-label">{{name}}</td>
      <td class="product--properties-value">{{value}}</td>
    </tr>
    {{/custom_fields_meta}}
  </table>
</div>
`;
const OUR_COLLECTION_CARD = `
<div class="section">
  <h2>Our Collection</h2>
  <div class="swiper gallery-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="/F1.jpg"></div>
      <div class="swiper-slide"><img src="/F2.jpg"></div>
      <div class="swiper-slide"><img src="/F3.jpg"></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
`;
const YOUTUBE_CARD = `
<div class="section card">
  <h2>Watch Our Story</h2>
  <iframe src="{{videoEmbedUrl}}" allowfullscreen></iframe>
</div>
`;
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
</div>
`;
const JOIN_BEAUTY_CLUB_CARD = `
<div class="section card">
  <h2>Join the Beauty Club</h2>
  <p>Get 15% off your first order + exclusive access to new launches</p>
  <a href="#" class="cta-btn">Register Now</a>
</div>
`;
const NATURAL_INGREDIENTS_CARD = `
<div class="section card">
  <h2>Perfect for Everyday Wear</h2>
  <p>Stylish, versatile, and durable—ideal for work, travel, and casual outings.</p>
  <img src="/F4.jpg"
    style="width:100%; border-radius:12px; margin-top:15px;">
</div>
`;
const SOCIAL_MEDIA_CARD = `
<div class="section card">
  <h2>Follow Us</h2>
  <ul class="social-list">
    <li class="social-item">
      <a href="https://facebook.com" class="social-link">
        <div class="social-icon" style="background-image:url('/icons/fb.png')"></div>
        <div class="social-text"><h3>Facebook</h3><p>Follow us</p></div>
      </a>
    </li>
    <li class="social-item">
      <a href="https://instagram.com" class="social-link">
        <div class="social-icon" style="background-image:url('/icons/ig.png')"></div>
        <div class="social-text"><h3>Instagram</h3><p>See our feed</p></div>
      </a>
    </li>
  </ul>
</div>
`;
const CONTACT_CARD = `
<div class="section card">
  <h2>Contact Us</h2>
  <p>Phone: 123 456 7890</p>
  <p>Email: contact@domain.com</p>
  <p>Address: 123 Main Street, USA</p>
</div>
`;
const RATE_EXPERIENCE_CARD = `
<div class="section card">
  <h2>Rate Your Experience</h2>
  <p>How satisfied are you?</p>
  <div class="stars">
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
  </div>
</div>
`;
const HEADER_LOGO_CARD = `
<div class="premium-header-section">
  <div class="logo-wrapper">
    <img src="{{brandLogo}}" class="brand-logo" />
  </div>
  <h1 class="brand-title">{{productName}}</h1>
  <p class="brand-tagline">Premium quality since 1985</p>
</div>
`;
const HEADER_LOGO_CARD_TOW = `
<div class="header">
  <img src="{{brandLogo}}" class="logo" />
  <h1>{{productName}}</h1>
  <p>Description – premium quality since 1985</p>
</div>
`;
const GLOBAL_CSS = ` :root {
  --theme-bg: #{{backgroundColor}}; /* background */
  --theme-text: #{{textColor}}; /* text color */
  --theme-heading-size: {{hsize}}px; /* heading size */
  --theme-para-size:  {{psize}}px;    /* pare size */
  --theme-primary: #{{primaryColor}};    
  --primary: #{{primaryColor}};           /* button */
  --radius: 0.875rem;            /* 14px */
  --shadow: 0 0.375rem 1.25rem rgba(0, 0, 0, 0.08);
 }
 body {
  background: var(--theme-bg) !important;
  color: var(--theme-text) !important;
}

h1, h2, h3 {
  color: var(--theme-text) !important;
  font-size: var(--theme-heading-size) !important;
}

p {
  font-size: var(--theme-para-size) !important;

}

.container {
  background: var(--theme-bg) !important;
}

* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  color:var(--text);
  line-height:1.5;
}

.container {
  max-width: 520px;
  margin: 0 auto;
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
`;
}),
"[project]/lib/renderLanding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /lib/renderLanding.ts
__turbopack_context__.s([
    "renderLanding",
    ()=>renderLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sectionMap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sectionMap.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/templates/cards.ts [app-route] (ecmascript)");
;
;
function renderLanding(raw, templateHtml, rawDataBase64) {
    const product = mapJsonToProduct(raw);
    let output = templateHtml || ""; // fallback if no template
    // Decode fullData from base64 (contains sections order + styles)
    let fullData = null;
    if (rawDataBase64) {
        try {
            fullData = JSON.parse(Buffer.from(rawDataBase64, "base64").toString("utf-8"));
        } catch (e) {
            console.error("Invalid Base64 JSON:", e);
        }
    }
    // Build dynamic data object for template replacement
    const dynamicValues = {
        ...product,
        images: product.images || [],
        thumbnails: product.thumbnails || [],
        custom_fields_meta: product.custom_fields_meta || [],
        videoEmbedUrl: convertToEmbedUrl(product.videoUrl || ""),
        ...fullData?.styles || {}
    };
    // === 1. Inject Global CSS ===
    const globalCssInjected = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GLOBAL_CSS"], {
        primaryColor: (fullData?.styles?.primaryColor || "#061244").replace("#", ""),
        backgroundColor: (fullData?.styles?.backgroundColor || "#ffffff").replace("#", ""),
        textColor: (fullData?.styles?.textColor || "#000000").replace("#", ""),
        hsize: fullData?.styles?.headlineSize || 28,
        psize: fullData?.styles?.paragraphSize || 16
    });
    output = output.replace("{{global_css}}", globalCssInjected);
    // === 2. Simple field replacements (pageTitle, etc.) ===
    const simpleFields = [
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
        "og_image",
        "productId"
    ];
    simpleFields.forEach((k)=>{
        const val = product[k] ?? dynamicValues[k] ?? "";
        output = output.replaceAll(`{{${k}}}`, String(val));
    });
    // === 3. DYNAMIC SECTION RENDERING WITH CORRECT ORDER ===
    if (fullData && Array.isArray(fullData.sections)) {
        const enabledSections = fullData.sections.filter((s)=>s.enabled === true) // Only enabled
        .map((s)=>s.section); // Keep original order!
        let renderedSectionsHtml = "";
        for (const sectionName of enabledSections){
            const placeholder = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sectionMap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTION_MAP"][sectionName];
            if (!placeholder) continue;
            let cardHtml = "";
            // Map section name → correct card template
            switch(placeholder){
                case "{{meta_seo}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Meta_SEO_CARD"], dynamicValues);
                    break;
                case "{{header_logo_card}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HEADER_LOGO_CARD"], dynamicValues);
                    break;
                case "{{header_logo_card_tow}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HEADER_LOGO_CARD_TOW"], dynamicValues);
                    break;
                case "{{top_slider_card}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TOP_SLIDER_CARD"], dynamicValues);
                    break;
                case "{{top_slider_card_tow}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TOP_SLIDER_CARD_TOW"], dynamicValues);
                    break;
                case "{{about_brand}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ABOUT_BRAND_CARD"], dynamicValues);
                    break;
                case "{{product_spotlight}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PRODUCT_SPOTLIGHT_CARD"], dynamicValues);
                    break;
                case "{{specifications}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SPECS_CARD"], dynamicValues);
                    break;
                case "{{our_collection}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OUR_COLLECTION_CARD"], dynamicValues);
                    break;
                case "{{youtube}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["YOUTUBE_CARD"], dynamicValues);
                    break;
                case "{{featured_products}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FEATURED_PRODUCTS_CARD"], dynamicValues);
                    break;
                case "{{join_club}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOIN_BEAUTY_CLUB_CARD"], dynamicValues);
                    break;
                case "{{natural_ingredients}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NATURAL_INGREDIENTS_CARD"], dynamicValues);
                    break;
                case "{{social_media}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SOCIAL_MEDIA_CARD"], dynamicValues);
                    break;
                case "{{contact}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CONTACT_CARD"], dynamicValues);
                    break;
                case "{{rate_experience}}":
                    cardHtml = applyTemplate(__TURBOPACK__imported__module__$5b$project$5d2f$templates$2f$cards$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RATE_EXPERIENCE_CARD"], dynamicValues);
                    break;
                default:
                    continue; // skip unknown
            }
            renderedSectionsHtml += cardHtml + "\n";
        }
        // === CRITICAL: Replace ALL section placeholders in one go with dynamic content ===
        // First remove all old placeholders
        output = output.replace(/{{meta_seo}}[\s\S]*?{{rate_experience}}/g, ""); // rough clean (optional)
        // Better: Remove all known section placeholders first
        const allPlaceholders = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sectionMap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SECTION_MAP"]).filter((p)=>typeof p === "string");
        allPlaceholders.forEach((ph)=>{
            output = output.replace(new RegExp(ph.replace(/[{}]/g, "\\$&"), "g"), "");
        });
        // Now inject all rendered sections in correct order at a single insertion point
        // You must have ONE anchor in your template where sections go!
        output = output.replace("{{dynamic_sections}}", renderedSectionsHtml.trim());
    }
    // Final cleanup: remove any leftover {{something}} (safety)
    output = applyTemplate(output, dynamicValues);
    return output;
}
}),
"[project]/data/products.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"1\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"},\"2\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"},\"3\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"},\"4\":{\"id\":\"product-1763964582961\",\"formData\":{\"name\":\"Allen Cooper Ankle Boot S3\",\"sku\":\"25006\",\"category\":\"accessories\",\"price\":\"45858\",\"description\":\"MacBook Pro Landing\\nA Global powerhouse in leather, footwear, garments, PPE, safety gear, equestrian products, and premium accessories.\",\"videoUrl\":\"https://youtu.be/lNZq7ElGCxw?si=BTgC2LsAIOqfNGdd\",\"metaTitle\":\"EngageIQ\",\"metaDescription\":\"EngageIQ Description\",\"keywords\":\"keyword1\",\"urlSlug\":\"engageI\",\"isActive\":true},\"images\":[{\"id\":\"img-1763964915601-0\",\"name\":\"IMG-20250728-WA0007.jpg\",\"url\":\"/upload/productgallery/product-1763965014902-fk1s9f.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014902-fk1s9f.jpg\"},{\"id\":\"img-1763964915602-1\",\"name\":\"IMG-20250728-WA0017.jpg\",\"url\":\"/upload/productgallery/product-1763965014903-kju0k2.jpg\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/product-1763965014903-kju0k2.jpg\"}],\"pdfs\":[{\"id\":\"pdf-1763964927975-0\",\"name\":\"0bfc8d08faaa7ecf2d6fc4a7c362724c.pdf\",\"url\":\"/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\",\"size\":62220,\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productdocs/0bfc8d08faaa7ecf2d6fc4a7c362724c-1763965014905-mrp9xy.pdf\"}],\"gallery\":[{\"id\":\"gallery-1763964934913-2\",\"name\":\"CZM-X5002GX-WHITE_1_aed6bd10-a6e2-4425-b0ea-26166b945f97.webp\",\"url\":\"/upload/productgallery/gallery-1763965014904-afndfu.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014904-afndfu.webp\"},{\"id\":\"gallery-1763964934913-3\",\"name\":\"CZM-X5002GX-WHITE_3_be88aba7-0f03-4d1f-b7b2-44becff36338.webp\",\"url\":\"/upload/productgallery/gallery-1763965014905-5bvua4.webp\",\"savedPath\":\"/Volumes/D/next/engage-update/public/upload/productgallery/gallery-1763965014905-5bvua4.webp\"}],\"tags\":[\"myshoe\"],\"custom_fields\":{\"9\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\",\"10\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\",\"11\":\"Breathable Functional Textile Lining\",\"12\":\"PU Cushioned Custom Fit\",\"13\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\",\"14\":\"Non-Metal Fittings\",\"15\":\"\"},\"custom_fields_meta\":[{\"id\":9,\"name\":\"Protection\",\"type\":\"text\",\"required\":false,\"value\":\"Fiberglass Toe Cap and Metal-Free, Anti Puncture & Penetration Protection\"},{\"id\":10,\"name\":\"Upper\",\"type\":\"text\",\"required\":true,\"value\":\"Genuine Full Grain Nubuck Leather with Cushioned Lycra\"},{\"id\":11,\"name\":\"Lining\",\"type\":\"text\",\"required\":true,\"value\":\"Breathable Functional Textile Lining\"},{\"id\":12,\"name\":\"Footbed\",\"type\":\"text\",\"required\":false,\"value\":\"PU Cushioned Custom Fit\"},{\"id\":13,\"name\":\"Sole\",\"type\":\"text\",\"required\":false,\"value\":\"Dual-Density PU Outsole – Slip & Abrasion Resistant\"},{\"id\":14,\"name\":\"Fitting\",\"type\":\"text\",\"required\":false,\"value\":\"Non-Metal Fittings\"},{\"id\":15,\"name\":\"Price\",\"type\":\"number\",\"required\":true,\"value\":\"\"}],\"createdAt\":\"2025-11-24T06:16:54.881Z\",\"updatedAt\":\"2025-11-24T06:16:54.881Z\",\"version\":\"1.0\",\"status\":\"published\",\"landing_page_id\":\"2\"}}"));}),
"[project]/app/api/landing-html/[slug]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/landing-html/[id]/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$loadTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/server/loadTemplates.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$renderLanding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/renderLanding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/products.json (json)");
;
;
;
;
async function GET(request, { params }) {
    try {
        // Get query parameters
        const { searchParams } = new URL(request.url);
        const templateName = searchParams.get("template") || "";
        const rawData = searchParams.get("data") || "";
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
        let templateHtml = "";
        try {
            templateHtml = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$loadTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadTemplate"])(templateName);
        } catch (e) {
            console.warn("Template load failed, using fallback:", templateName);
            templateHtml = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$server$2f$loadTemplates$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadTemplate"])("modern");
        }
        // Render the landing page with selected template
        const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$renderLanding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["renderLanding"])(productData, templateHtml, rawData);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__b4029283._.js.map