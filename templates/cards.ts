/* 
=============================================================
TEMPLATE COMPONENT CARDS
All reusable HTML components for landing page templates.
=============================================================
*/

export const Meta_SEO_CARD = `
<title>{{pageTitle}}</title>
<meta name="description" content="{{metaDescription}}">
<meta property="og:title" content="{{pageTitle}}">
<meta property="og:description" content="{{metaDescription}}">
<meta property="og:image" content="{{og_image}}">
`;

export const TOP_SLIDER_CARD_TOW = `
<div class="header">
  <div class="swiper header-swiper">
    <div class="swiper-wrapper">
      {{#images}}
        <div class="swiper-slide" style="background-image:url('{{url}}')"></div>
      {{/images}}
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="header-overlay">
    <h1>{{productName}}</h1>
    <p>Timeless Beauty • Natural Ingredients • Cruelty-Free</p>
  </div>
</div>
`;

export const TOP_SLIDER_CARD = `
<style>  
  
  .hero-slider .swiper-slide img {
  width: 100%;
  
  object-fit: cover;
  border-radius: var(--radius);
}</style>
<div class="hero-slider swiper">
  <div class="swiper-wrapper">
    {{#images}}
    <div class="swiper-slide"><img src="{{url}}" alt=""></div>
    {{/images}}
  
  </div>
  <div class="swiper-pagination"></div>
</div>
`;

export const ABOUT_BRAND_CARD = `
<div class="section card">
  <h2>About Our Brand</h2>
  <p>{{description}}</p>
</div>
`;

export const PRODUCT_SPOTLIGHT_CARD = `
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

export const SPECS_CARD = `
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

export const OUR_COLLECTION_CARD = `
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

export const YOUTUBE_CARD = `
<div class="section card">
  <h2>Watch Our Story</h2>

  <div class="video-wrapper">
    <iframe 
      src="{{videoEmbedUrl}}" 
      frameborder="0" 
      allowfullscreen
    ></iframe>
  </div>

</div>
`;


export const FEATURED_PRODUCTS_CARD = `
<div class="section card">
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

export const JOIN_BEAUTY_CLUB_CARD = `
<div class="section card">
  <h2>Join the Beauty Club</h2>
  <p>Get 15% off your first order + exclusive access to new launches</p>
  <a href="#" class="cta-btn">Register Now</a>
</div>
`;

export const NATURAL_INGREDIENTS_CARD = `
<div class="section card">
  <h2>Perfect for Everyday Wear</h2>
  <p>Stylish, versatile, and durable—ideal for work, travel, and casual outings.</p>
  <img src="/F4.jpg"
    style="width:100%; border-radius:12px; margin-top:15px;">
</div>
`;

export const SOCIAL_MEDIA_CARD = `
<style>
.section p {text-align:left; color:#666; margin:5px 0 0;}
</style>
<div class="section card">
<h2>Follow Us</h2>
<ul class="social-list">
  <li class="social-item">
    <a href="https://facebook.com" class="social-link">
      <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/fb_icon@72x.png')"></div>
      <div class="social-text"><h1>Facebook</h1><p>Follow us for tips & offers</p></div>
      <i class="fas fa-chevron-right"></i>
    </a>
  </li>
  <li class="social-item">
    <a href="https://instagram.com" class="social-link">
      <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/insta_icon@72x.png')"></div>
      <div class="social-text"><h1>Instagram</h1><p>See our latest looks</p></div>
      <i class="fas fa-chevron-right"></i>
    </a>
  </li>
</ul>
</div>`;

export const CONTACT_CARD = `
<style>
.section p{
  line-height: 1;
}

</style>
<div class="section qrc_contact qr_cc_card" data-index="8">
<div class="qrc_contact_header">
   <div class="qrc_contact_hdr_img" style="background-image: url('//cdn0070.qrcodechimp.com/images/digitalCard/contactus.png?v=1763098999');"></div>
   <h1>Contact Us</h1>
</div>
<div class="qrc_contact_info">
   <div class="qrc_contact_info_title"><p>Call Us</p></div>
   <div class="qrc_contact_number"><a href="tel:123 456 7890"><p>123 456 7890</p></a></div>
</div><div class="qrc_email_info">
<div class="qrc_email_info_title "><p>Email</p></div>
<div class="qrc_email_id"><a href="mailto:contactme@domain.com"><p>contactme@domain.com</p></a></div>
</div><div class="qrc_address_info">
   <div class="qrc_address_info_title ">Address</div>
   <div class="qrc_address_text"><p>817 N Ave<br>California, Chicago, 60622<br>US</p></div>
   <a class="cta-btn" type="direction" href="//#" target="_blank" style="text-align:center"><span class="icon-direction_1">Direction</span></a>
</div>

</div>`;

export const RATE_EXPERIENCE_CARD = `
 
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

export const HEADER_LOGO_CARD = `<div class="premium-header-section">
 
  <div class="logo-wrapper">
    <img 
      src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_logo.png?v=1763098999" 
      alt="Brand Logo" 
      >
  </div>
 
  <div class="title-desc">
    <h1  >{{product.productName}}</h1>
    <p >Description – premium quality since 1985</p>
  </div>
  <div class="header-divider"></div>
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

 
export const HEADER_LOGO_CARD_TOW = `
<div class="header">
  <img src="{{brandLogo}}" class="logo" />
  <h1>{{productName}}</h1>
  <p>Description – premium quality since 1985</p>
</div>
`;

export const  GLOBAL_CSS=` :root {
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
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Desktop 16:9 ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* 👉 Mobile override */
@media (max-width: 640px) {
  .video-wrapper {
    padding-bottom: 65%; /* slightly taller on mobile */
    border-radius: 8px;
  }
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
