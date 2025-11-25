const templates = {
 

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
        --text: #292929;
        --bg: #ffffff;
        --radius: 14px;
        --shadow: 0 6px 20px rgba(0, 0, 0, .08);
     
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
        width:100%; height:200px; object-fit:cover;
        border-radius:12px;
      }
  
      @media (max-width:480px) {
        .gallery-swiper img { height:180px; }
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
        width:100%; height:180px; object-fit:cover;
      }
  
      .product-info { padding:16px; text-align:left; }
  
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
  
    {{youtube}}
  
    {{product_spotlight}}
  
    {{featured_products}}
  
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

};

export default templates;


