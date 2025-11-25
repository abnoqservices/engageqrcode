const templates = {
  modern: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cool Watches | Digital Business Card</title>
      <meta name="description" content="Discover our premium watch collection">
      
      <!-- Swiper CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
      <!-- Swiper CSS -->

      <!-- Font Awesome -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
      <style>
          :root {
              --primary: #FF5800;
              --text: #333;
              --light: #f9f9f9;
              --dark: #000;
              --radius: 16px;
          }
          * { margin:0; padding:0; box-sizing:border-box; }
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background: #fff;
              color: var(--text);
              line-height: 1.5;
              overflow-x: hidden;
          }
          .container {
              max-width: 480px;
              margin: 0 auto;
              padding: 0 15px;
          }
          .header {
              text-align: center;
              padding: 30px 0 20px;
          }
          .header img.logo {
              width: 90px;
              height: 90px;
              border-radius: 50%;
              object-fit: cover;
              border: 4px solid #fff;
              box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }
          .header h1 {
              font-size: 26px;
              margin: 15px 0 8px;
              color: var(--primary);
          }
          .header p {
              font-size: 16px;
              color: #666;
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
  
          /* Products */
          .product {
              background: #fff;
              border-radius: var(--radius);
              overflow: hidden;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
              margin-bottom: 15px;
          }
          .product img {
              width: 100%;
              height: 220px;
              object-fit: cover;
          }
          .product-info {
              padding: 15px;
          }
          .product-title {
              font-weight: bold;
              font-size: 18px;
          }
          .price {
              color: var(--primary);
              font-size: 20px;
              font-weight: bold;
              margin: 8px 0;
          }
          .btn {
              display: block;
              width: 100%;
              padding: 14px;
              background: var(--primary);
              color: white;
              border: none;
              border-radius: 50px;
              font-size: 16px;
              font-weight: bold;
              text-align: center;
              text-decoration: none;
              margin-top: 10px;
          }
  
          /* Social Links */
          .social-list {
              list-style: none;
          }
          .social-list li {
              margin: 12px 0;
          }
          .social-list a {
              display: flex;
              align-items: center;
              padding: 15px;
              background: #f8f8f8;
              border-radius: var(--radius);
              text-decoration: none;
              color: var(--text);
          }
          .social-icon {
              width: 50px;
              height: 50px;
              background: var(--primary);
              border-radius: 12px;
              margin-right: 15px;
              background-size: 30px;
              background-position: center;
              background-repeat: no-repeat;
          }
          .fb { background-image: url('https://cdn.qrcodechimp.com/images/digitalCard/fb_icon@72x.png'); background-color:#1877f2; }
          .ig { background-image: url('https://cdn.qrcodechimp.com/images/digitalCard/insta_icon@72x.png'); background: linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
  
          /* Contact */
          .contact-info {
              text-align: center;
              padding: 20px;
              background: #f8f8f8;
              border-radius: var(--radius);
          }
          .contact-info a {
              color: var(--primary);
              text-decoration: none;
              font-weight: bold;
          }
  
          /* Footer Buttons */
          .footer-btns {
              position: fixed;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              gap: 15px;
              z-index: 100;
          }
          .footer-btns button {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: var(--primary);
              color: white;
              border: none;
              font-size: 24px;
              box-shadow: 0 5px 20px rgba(255,88,0,0.4);
          }
          .add-contact {
              position: fixed;
              bottom: 20px;
              right: 20px;
              background: #fff;
              color: var(--primary);
              border: 2px solid var(--primary);
              padding: 12px 20px;
              border-radius: 50px;
              font-weight: bold;
              box-shadow: 0 5px 20px rgba(0,0,0,0.15);
              z-index: 100;
          }
      </style>
  </head>
  <body>
  
  <div class="container">
  
      <!-- Header -->
      <div class="header">
          <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/furniture_logo.png" alt="Logo" class="logo">
          <h1>Cool Watches</h1>
          <p>Premium Timepieces Since 1990</p>
      </div>
  
      <!-- Main Gallery (Coverflow) -->
      <div class="gallery-header swiper">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2.png" alt="Watch 1"></div>
              <div class="swiper-slide"><img src="https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_1.png" alt="Watch 2"></div>
              <div class="swiper-slide"><img src="https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3.png" alt="Watch 3"></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
  
      <!-- About -->
      <div class="section">
          <h2>About Us</h2>
          <p>We craft timeless watches with precision engineering and elegant design. Every piece tells a story.</p>
      </div>
  
      <!-- Image Gallery -->
      <div class="section">
          <div class="swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_1.png" alt=""></div>
                  <div class="swiper-slide"><img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_2.png" alt=""></div>
                  <div class="swiper-slide"><img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_3.png" alt=""></div>
              </div>
          </div>
      </div>
  
      <!-- Video -->
      <div class="section">
          <h2>Watch Our Story</h2>
          <iframe width="100%" height="230" src="https://www.youtube.com/embed/bOuLmR8K5Tk" frameborder="0" allowfullscreen></iframe>
      </div>
  
      <!-- Products -->
      <div class="section">
          <h2>Featured Collection</h2>
          <div class="swiper products-swiper">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <div class="product">
                          <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_1.png" alt="Watch">
                          <div class="product-info">
                              <div class="product-title">Chronos Elite</div>
                              <div>★★★★☆</div>
                              <div class="price">$899</div>
                              <a href="https://example.com" class="btn">Buy Now</a>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="product">
                          <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_2.png" alt="Watch">
                          <div class="product-info">
                              <div class="product-title">Lunar Phase</div>
                              <div>★★★★★</div>
                              <div class="price">$1,299</div>
                              <a href="https://example.com" class="btn">Buy Now</a>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="product">
                          <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_3.png" alt="Watch">
                          <div class="product-info">
                              <div class="product-title">Titanium Diver</div>
                              <div>★★★★☆</div>
                              <div class="price">$699</div>
                              <a href="https://example.com" class="btn">Buy Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
      <!-- CTA -->
      <div class="section">
          <h2>Join the Club</h2>
          <p>Get exclusive offers and early access to new releases</p>
          <a href="#" class="btn">Register Now</a>
      </div>
  
      <!-- Social Links -->
      <div class="section">
          <h2>Follow Us</h2>
          <ul class="social-list">
              <li><a href="https://facebook.com"><div class="social-icon fb"></div> <strong>Facebook</strong> - Follow us</a></li>
              <li><a href="https://instagram.com"><div class="social-icon ig"></div> <strong>Instagram</strong> - See our latest</a></li>
          </ul>
      </div>
  
      <!-- Contact -->
      <div class="section contact-info">
          <h2>Contact Us</h2>
          <p><strong>Call:</strong> <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p><strong>Email:</strong> <a href="mailto:hello@coolwatches.com">hello@coolwatches.com</a></p>
          <p><strong>Address:</strong> 817 N Ave, California, Chicago, 60622, US</p>
      </div>
  
  </div>
  
  <!-- Floating Action Buttons -->
  <div class="footer-btns">
      <button onclick="alert('QR Code')">QR</button>
      <button onclick="navigator.share ? navigator.share({title: 'Cool Watches', url: location.href}) : alert('Share not supported')">Share</button>
  </div>
  <a href="#" class="add-contact">Add to Contacts</a>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script>
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
        --text: #292929;
        --bg: #ffffff;
        --radius: 14px;
        --shadow: 0 6px 20px rgba(0,0,0,.08);
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
        background: white;
        min-height: 100vh;
        overflow-x: hidden;
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

    </style>
  </head>
  
  <body>
  
  <div class="container">
  
    {{top_slider_card}}
  
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
    new Swiper(".header-swiper", {
      loop:true,
      autoplay:{delay:3500},
      pagination:{el:".swiper-pagination"},
    });
  
    new Swiper(".gallery-swiper", {
      slidesPerView:1.15,
      spaceBetween:12,
      loop:true,
      centeredSlides:true
    });
  
    new Swiper(".products-swiper", {
      slidesPerView:1.15,
      spaceBetween:12,
    });
  
    function rate(n){
      document.querySelectorAll('.stars i').forEach((star,i)=>{
        star.className = i < n ? "fas fa-star active" : "far fa-star";
      });
    }
  </script>
  
  </body>
  </html>`,

  standerd:`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Luxury Cosmetics | Premium Beauty Products</title>
    <meta name="description" content="Discover luxury skincare and cosmetics made with natural ingredients."/>
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  
    <style>
      :root {
        --primary: #061244;
        --primary-light: #B7E6FF;
        --text: #292929;
        --bg: #ffffff;
        --radius: 16px;
        --shadow: 0 7px 29px rgba(100,100,111,.2);
      }
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background:#f9f9fb; color:var(--text); line-height:1.6; }
      .container { max-width: 480px; margin: 0 auto; background: white; min-height: 100vh; overflow-x: hidden; }
  
      /* Header */
      .header { position:relative; border-radius: 0 0 20px 20px; overflow:hidden; }
      .header-swiper .swiper-slide { height: 340px; background-size: cover; background-position: center; }
      .header-overlay { position:absolute; bottom:0; left:0; right:0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding:40px 20px 20px; color:white; text-align:center; }
      .header-overlay h1 { font-size:28px; margin-bottom:8px; }
      .header-overlay p { font-size:16px; opacity:0.9; }
  
      /* Sections */
      .section { padding:30px 20px; text-align:center; }
      .card { background:var(--bg); border-radius:var(--radius); box-shadow:var(--shadow); padding:24px; margin-bottom:20px; }
      h2 { font-size:22px; color:var(--primary); margin-bottom:12px; font-weight:700; }
      p { font-size:15px; color:#555; }
  
      /* Gallery */
      .gallery-swiper .swiper-slide { border-radius:12px; overflow:hidden; }
      .gallery-swiper img { width:100%; height:220px; object-fit:cover; }
  
      /* Video */
      .video-wrapper { position:relative; padding-bottom:56.25%; height:0; border-radius:12px; overflow:hidden; box-shadow:var(--shadow); }
      .video-wrapper iframe { position:absolute; top:0; left:0; width:100%; height:100%; }
  
      /* Products */
      .product { background:white; border-radius:12px; overflow:hidden; box-shadow:var(--shadow); margin:10px; }
      .product img { width:100%; height:200px; object-fit:cover; }
      .product-info { padding:15px; text-align:left; }
      .product-title { font-weight:600; font-size:16px; margin-bottom:8px; }
      .rating { color:#ffc107; font-size:14px; margin-bottom:8px; }
      .price { font-size:18px; font-weight:bold; color:var(--primary); }
      .buy-btn { width:100%; padding:12px; background:var(--primary); color:white; border:none; border-radius:8px; font-size:16px; margin-top:10px; cursor:pointer; }
  
      /* CTA */
      .cta-btn { display:block; margin:20px auto; padding:16px 40px; background:var(--primary); color:white; text-decoration:none; border-radius:50px; font-size:18px; max-width:90%; box-shadow:0 4px 15px rgba(6,18,68,.3); }
  
      /* Social & Contact */
      .social-list { list-style:none; }
      .social-item { background:#f8f9fa; border-radius:12px; margin:12px 0; overflow:hidden; }
      .social-link { display:flex; align-items:center; padding:16px; text-decoration:none; color:var(--text); }
      .social-icon { width:50px; height:50px; background-size:cover; margin-right:16px; border-radius:8px; }
      .social-text h4 { font-size:16px; }
      .social-text p { font-size:13px; color:#777; }
  
      .contact { background:var(--primary); color:white; border-radius:var(--radius); padding:30px 20px; margin:20px; text-align:center; }
      .contact a { color:#B7E6FF; text-decoration:underline; }
      .contact { background:#111; color:#fff; padding:30px 20px; border-radius:12px; margin:20px; }
      .contact h3 { display:flex; align-items:center; font-size:20px; margin-bottom:20px; }
      .contact h3 i { margin-right:10px; font-size:24px; }
      .contact a { color:#e91e63; text-decoration:none; }
      /* Review */
      .stars { display:flex; justify-content:center; gap:20px; margin:20px 0; }
      .stars div { text-align:center; cursor:pointer; }
      .stars i { font-size:44px; color:#ddd; transition:all .3s; }
      .stars i.active { color:#ffc107; }
      .stars span { display:block; font-size:12px; margin-top:6px; color:#777; }
  
      /* Footer Buttons */
      .footer-actions { position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:white; padding:12px; border-radius:50px; box-shadow:0 8px 25px rgba(0,0,0,.15); display:flex; gap:20px; z-index:100; }
      .footer-actions button { background:transparent; border:none; font-size:24px; padding:12px; color:var(--primary); }
  
      @media (min-width:768px) {
        .container { max-width:420px; border-radius:20px; margin:20px auto; box-shadow:0 10px 40px rgba(0,0,0,.1); }
      }
    </style>
  </head>
  <body>
  
  <div class="container">
  
    <!-- Header Carousel -->
    <div class="header">
      <div class="swiper header-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image:url('https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2.png')"></div>
          <div class="swiper-slide" style="background-image:url('https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_1.png')"></div>
          <div class="swiper-slide" style="background-image:url('https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3.png')"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="header-overlay">
        <h1>Luxury Cosmetics</h1>
        <p>Timeless Beauty • Natural Ingredients • Cruelty-Free</p>
      </div>
    </div>
  
    <!-- About -->
    <div class="section card">
      <h2>About Our Brand</h2>
      <p>We create premium skincare and makeup using only the finest natural and ethically sourced ingredients. Beauty that cares — for you and the planet.</p>
    </div>
  
    <!-- Gallery -->
    <div class="section">
      <h2>Our Collection</h2>
      <div class="swiper gallery-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_1.png" alt="Product"></div>
          <div class="swiper-slide"><img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_2.png" alt="Product"></div>
          <div class="swiper-slide"><img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_3.png" alt="Product"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  
    <!-- Video -->
    <div class="section card">
      <h2>Watch Our Story</h2>
      <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/bOuLmR8K5Tk" allowfullscreen></iframe>
      </div>
    </div>
  
    <!-- Products -->
    <div class="section">
      <h2>Featured Products</h2>
      <div class="swiper products-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="product">
              <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_1.png" alt="Serum">
              <div class="product-info">
                <div class="product-title">Radiant Glow Serum</div>
                <div class="rating">★★★★☆</div>
                <div class="price">$89.00</div>
                <button class="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="product">
              <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_2.png" alt="Cream">
              <div class="product-info">
                <div class="product-title">Hydrating Night Cream</div>
                <div class="rating">★★★★★</div>
                <div class="price">$74.50</div>
                <button class="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="product">
              <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_3.png" alt="Mask">
              <div class="product-info">
                <div class="product-title">Detox Clay Mask</div>
                <div class="rating">★★★★☆</div>
                <div class="price">$42.00</div>
                <button class="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  
    <!-- CTA -->
    <div class="section card">
      <h2>Join the Beauty Club</h2>
      <p>Get 15% off your first order + exclusive access to new launches</p>
      <a href="#" class="cta-btn">Register Now</a>
    </div>
  
    <!-- Image + Text -->
    <div class="section card">
      <h2>100% Natural Ingredients</h2>
      <p>We believe in clean beauty. No parabens, sulfates, or synthetic fragrances.</p>
      <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/cosmatic_gallery_2.png" alt="Natural" style="width:100%; border-radius:12px; margin-top:15px;">
    </div>
  
    <!-- Social -->
    <div class="section card">
      <h2>Follow Us</h2>
      <ul class="social-list">
        <li class="social-item">
          <a href="https://facebook.com" class="social-link">
            <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/fb_icon@72x.png')"></div>
            <div class="social-text">
              <h4>Facebook</h4>
              <p>Follow us for tips & offers</p>
            </div>
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
        <li class="social-item">
          <a href="https://instagram.com" class="social-link">
            <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/insta_icon@72x.png')"></div>
            <div class="social-text">
              <h4>Instagram</h4>
              <p>See our latest looks</p>
            </div>
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
  
    <!-- Contact -->
    <div class="contact">
      <h2>Contact Us</h2>
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
       
   </div>
    </div>
  
    <!-- Review -->
    <div class="section card">
      <h2>Rate Your Experience</h2>
      <p>How satisfied are you with our brand?</p>
      <div class="stars">
        <div onclick="rate(1)"><i class="far fa-star"></i><span>Lowest</span></div>
        <div onclick="rate(2)"><i class="far fa-star"></i><span></span></div>
        <div onclick="rate(3)"><i class="far fa-star"></i><span></span></div>
        <div onclick="rate(4)"><i class="far fa-star"></i><span></span></div>
        <div onclick="rate(5)"><i class="far fa-star"></i><span>Highest</span></div>
      </div>
    </div>
  
  </div>
  
  <!-- Floating Action Buttons -->
  <div class="footer-actions">
    <button onclick="alert('QR Code Shown')"><i class="fas fa-qrcode"></i></button>
    <button onclick="if(navigator.share){navigator.share({title:'Luxury Cosmetics',url:location.href})}"><i class="fas fa-share-alt"></i></button>
  </div>
  
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script>
    // Initialize Swipers
    new Swiper(".header-swiper", { loop:true, autoplay:{delay:4000}, pagination:{el:".swiper-pagination"} });
    new Swiper(".gallery-swiper", { slidesPerView:1.3, centeredSlides:true, spaceBetween:10, loop:true, pagination:{el:".swiper-pagination"} });
    new Swiper(".products-swiper", { slidesPerView:1.2, spaceBetween:15, pagination:{el:".swiper-pagination"} });
  
    // Star Rating
    function rate(n) {
      document.querySelectorAll('.stars i').forEach((star, i) => {
        star.className = i < n ? 'fas fa-star active' : 'far fa-star';
      });
    }
  </script>
  
  </body>
  </html>`,
  protemplete:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luxury Wine Collection</title>
    <meta name="description" content="Discover our exclusive wine collection">

    <!-- Swiper.js CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <style>
        :root {
            --primary: #C1284B;
            --radius: 16px;
            --shadow: 0 7px 29px rgba(100,100,100,0.2);
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #fff;
            color: #333;
            line-height: 1.5;
            overflow-x: hidden;
        }
        .container { max-width: 480px; margin: 0 auto; padding: 0 15px; }

        /* Header */
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

        /* Hero Slider (Fade Effect) */
        .hero-slider .swiper-slide img {
            width: 100%;
            height: 488px;
            object-fit: cover;
            border-radius: var(--radius);
        }

        /* Section Cards */
        .section {
            background: #fff;
            margin: 20px 0;
            border-radius: var(--radius);
            padding: 20px;
            box-shadow: var(--shadow);
            text-align: center;
        }
        .section h2 {
            font-size: 22px;
            color: var(--primary);
            margin-bottom: 10px;
        }

        /* Gallery & Products */
        .gallery-swiper .swiper-slide,
        .products-swiper .swiper-slide {
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .gallery-swiper img,
        .product-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        /* Product Card */
        .product {
            background: #fff;
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }
        .product-info {
            padding: 15px;
        }
        .product-title { font-weight: bold; font-size: 18px; }
        .price { color: var(--primary); font-size: 20px; font-weight: bold; margin: 8px 0; }
        .btn {
            display: block;
            width: 100%;
            padding: 14px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            margin-top: 10px;
        }

        /* Video */
        .video-wrapper iframe {
            border-radius: var(--radius);
            width: 100%;
            height: 220px;
        }

        /* Image + Text */
        .img-text img {
            width: 100%;
            border-radius: var(--radius);
            margin-top: 15px;
        }

        /* Social Links */
        .social-list {
            list-style: none;
        }
        .social-list a {
            display: flex;
            align-items: center;
            padding: 15px;
            background: #f8f8f8;
            border-radius: var(--radius);
            margin: 10px 0;
            text-decoration: none;
            color: #333;
        }
        .social-icon {
            width: 50px;
            height: 50px;
            margin-right: 15px;
            background-size: 32px;
            background-repeat: no-repeat;
            background-position: center;
        }
        .fb { background: #1877f2 url('https://cdn.qrcodechimp.com/images/digitalCard/fb_icon@72x.png') center/32px no-repeat; border-radius: 12px; }
        .ig { background: linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); border-radius: 12px; background-image: url('https://cdn.qrcodechimp.com/images/digitalCard/insta_icon@72x.png'); background-size: 32px; }

        /* Contact */
        .contact { text-align: center; padding: 20px; background: #f8f8f8; border-radius: var(--radius); }
        .contact a { color: var(--primary); text-decoration: none; font-weight: bold; }

        /* Floating Buttons */
        .fab {
            position: fixed;
            bottom: 20px;
            z-index: 1000;
        }
        .fab-qr { left: 20px; }
        .fab-share { left: 90px; }
        .fab button {
            width: 60px; height: 60px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            border: none;
            font-size: 24px;
            box-shadow: 0 5px 20px rgba(193,40,75,0.4);
        }
        .add-contact {
            right: 20px;
            background: white;
            color: var(--primary);
            border: 2px solid var(--primary);
            padding: 12px 20px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: var(--shadow);
        }
    </style>
</head>
<body>

<div class="container">

    <!-- Header -->
    <div class="header">
        <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/luxury_wine_logo.png" alt="Logo" class="logo">
        <h1>Luxury Wines</h1>
        <p>Exquisite Taste Since 1985</p>
    </div>

    <!-- Hero Slider (Fade) -->
    <div class="hero-slider swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2.png" alt="Wine 1"></div>
            <div class="swiper-slide"><img src="https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_1.png" alt="Wine 2"></div>
            <div class="swiper-slide"><img src="https://www.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3.png" alt="Wine 3"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <!-- About -->
    <div class="section">
        <h2>About Our Winery</h2>
        <p>Handcrafted wines from the finest vineyards. Every bottle tells a story of passion and tradition.</p>
    </div>

    <!-- Gallery -->
    <div class="section gallery-swiper swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_1.png" alt=""></div>
            <div class="swiper-slide"><img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_2.png" alt=""></div>
            <div class="swiper-slide"><img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_2_3.png" alt=""></div>
        </div>
    </div>

    <!-- Video -->
    <div class="section video-wrapper">
        <h2>Our Story</h2>
        <iframe src="https://www.youtube.com/embed/bOuLmR8K5Tk" frameborder="0" allowfullscreen></iframe>
    </div>

    <!-- Products -->
    <div class="section">
        <h2>Featured Wines</h2>
        <div class="products-swiper swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="product">
                        <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_1.png" class="product-img" alt="Wine">
                        <div class="product-info">
                            <div class="product-title">Reserve Cabernet 2018</div>
                            <div>★★★★★</div>
                            <div class="price">$149</div>
                            <a href="https://example.com" class="btn">Buy Online</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="product">
                        <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_2.png" class="product-img" alt="Wine">
                        <div class="product-info">
                            <div class="product-title">Chardonnay Grand Cru</div>
                            <div>★★★★☆</div>
                            <div class="price">$99</div>
                            <a href="https://example.com" class="btn">Buy Online</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="product">
                        <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_3.png" class="product-img" alt="Wine">
                        <div class="product-info">
                            <div class="product-title">Pinot Noir Limited</div>
                            <div>★★★★★</div>
                            <div class="price">$179</div>
                            <a href="https://example.com" class="btn">Buy Online</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA -->
    <div class="section">
        <h2>Join the Wine Club</h2>
        <p>Exclusive access to rare vintages and member events</p>
        <a href="#" class="btn">Register Now!</a>
    </div>

    <!-- Image + Text -->
    <div class="section img-text">
        <h2>Our Vineyard</h2>
        <p>Nestled in the heart of Napa Valley</p>
        <img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/wine_1.png" alt="Vineyard">
    </div>

    <!-- Social -->
    <div class="section">
        <h2>Follow Us</h2>
        <ul class="social-list">
            <li><a href="https://facebook.com"><div class="social-icon fb"></div> <strong>Facebook</strong> – Follow our journey</a></li>
            <li><a href="https://instagram.com"><div class="social-icon ig"></div> <strong>Instagram</strong> – Beautiful moments</a></li>
        </ul>
    </div>

    <!-- Contact -->
    <div class="contact section">
        <h2>Contact Us</h2>
        <p><strong>Call:</strong> <a href="tel:1234567890">123 456 7890</a></p>
        <p><strong>Email:</strong> <a href="mailto:contactme@domain.com">contactme@domain.com</a></p>
        <p><strong>Address:</strong><br>817 N Ave, California, Chicago, 60622, US</p>
    </div>

</div>

<!-- Floating Action Buttons -->
<div class="fab fab-qr"><button onclick="alert('Show QR Code')">QR</button></div>
<div class="fab fab-share"><button onclick="navigator.share?.({title:'Luxury Wines',url:location.href})">Share</button></div>
<div class="fab add-contact"><a href="#">Add to Contacts</a></div>

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
</script>

</body>
</html>`,
protemplete2:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Name - Digital Business Card</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>



  <style>
    :root {
      --primary: #FD8031;
      --secondary: #061244;
      --text-primary: #FD8031;
      --text-secondary: #656b6c;
      --bg: #ffffff;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #f5f5f5;
      color: #333;
      line-height: 1.5;
      overflow-x: hidden;
    }
    .container {
      max-width: 480px;
      margin: 0 auto;
      background: var(--bg);
      min-height: 100vh;
      position: relative;
    }

    /* Header / Hero Section */
    .hero {
      position: relative;
      height: 420px;
      background: linear-gradient(rgba(6,18,68,0.8), rgba(6,18,68,0.9)), url('https://cdn0070.qrcodechimp.com/images/digitalCard/dbcv2/bg_19.webp') center/cover no-repeat;
      color: white;
      text-align: center;
      overflow: hidden;
    }
    .profile-pic {
      position: absolute;
      bottom: -80px;
      left: 20px;
      width: 160px;
      height: 160px;
      background: url('https://cdn0070.qrcodechimp.com/images/digitalCard/dbcv2/profile_13.webp') center/cover;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      border: 6px solid white;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 10;
    }
    .brand-logo {
      position: absolute;
      top: 60px;
      right: 15px;
      width: 80px;
      height: 80px;
      background: white url('https://cdn0070.qrcodechimp.com/images/digitalCard/dbcv2/barand_logo_2.webp') center/70% no-repeat;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      border: 4px solid white;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      z-index: 10;
    }
    .hero-info {
      padding-top: 140px;
      padding-bottom: 100px;
    }
    .hero h1 {
      font-size: 34px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .hero p {
      font-size: 18px;
      opacity: 0.95;
    }

    /* Quick Actions */
    .quick-actions {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 90px 0 30px;
    }
    .quick-actions a {
      width: 56px;
      height: 56px;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(253,128,49,0.4);
    }

    /* Content Cards */
    .section {
      margin: 20px;
      background: white;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 7px 29px rgba(100,100,111,0.2);
    }
    h2 {
      font-size: 24px;
      color: var(--secondary);
      margin-bottom: 12px;
      text-align: center;
    }
    p { color: #555; text-align: center; margin-bottom: 16px; }

    /* Contact Info */
    .contact-item {
      display: flex;
      align-items: center;
      padding: 14px 0;
      border-bottom: 1px solid #eee;
    }
    .contact-item:last-child { border-bottom: none; }
    .contact-item i {
      font-size: 22px;
      width: 50px;
      color: var(--primary);
    }
    .contact-item a {
      color: #333;
      text-decoration: none;
      margin-left: 10px;
    }

    /* Gallery */
    .gallery {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 16px;
    }
    .gallery img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 12px;
    }

    /* Web Links & Buttons */
    .btn {
      display: block;
      background: var(--primary);
      color: white;
      text-align: center;
      padding: 16px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      margin: 12px 0;
    }

    /* Footer Buttons */
    .footer-actions {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 16px;
      z-index: 100;
    }
    .footer-actions button {
      background: white;
      border: none;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      font-size: 24px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      color: var(--primary);
    }
    .add-contact {
      background: var(--primary);
      color: white;
      padding: 14px 24px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      box-shadow: 0 5px 20px rgba(253,128,49,0.4);
    }
  </style>
</head>
<body>

<div class="container">

  <!-- Hero Section -->
  <div class="hero">
    <div class="brand-logo"></div>
   
    <div class="qrc_profile_inner_info">
      <h1>Name</h1>
      <p style="color:#fff">Title</p>
      <p style="color:#fff"><strong>Company</strong></p>

      <div class="quick-actions">
        <a href="tel:0000000000"><i class="fas fa-phone"></i></a>
        <a href="mailto:youremail@domain.com"><i class="fas fa-envelope"></i></a>
        <a href="sms:0000000000"><i class="fas fa-sms"></i></a>
      </div>
    </div>
  </div>

  <!-- About -->
  <div class="section">
    <h2>About Me</h2>
    <p>Description goes here. Write something compelling about yourself, your expertise, and what you do.</p>
  </div>

  <!-- Contact Info -->
  <div class="section">
    <h2>Contact Information</h2>
    <div class="contact-item">
      <i class="fas fa-phone"></i>
      <a href="tel:1234567890">123 456 7890</a>
    </div>
    <div class="contact-item">
      <i class="fas fa-envelope"></i>
      <a href="mailto:contactme@domain.com">contactme@domain.com</a>
    </div>
    <div class="contact-item">
      <i class="fas fa-map-marker-alt"></i>
      <div>
        Street<br>City, State, Zipcode<br>Country
        <a href="https://maps.google.com/?q=Your+Address" style="color:var(--primary);font-size:14px;display:block;margin-top:8px;">
          → Get Directions
        </a>
      </div>
    </div>
  </div>

  <!-- Gallery -->
  <div class="section">
    <h2>Gallery</h2>
    <div class="gallery">
      <img src="https://cdn0070.qrcodechimp.com/images/digitalCard/image_1.png" alt="">
      <img src="https://cdn0070.qrcodechimp.com/images/digitalCard/image_2.png" alt="">
      <img src="https://cdn0070.qrcodechimp.com/images/digitalCard/image_1.png" alt="">
      <img src="https://cdn0070.qrcodechimp.com/images/digitalCard/image_2.png" alt="">
    </div>
  </div>

  <!-- Web Links -->
  <div class="section">
    <h2>Web Links</h2>
    <a href="https://www.mycoolbrand.com" class="btn">My Website</a>
    <a href="#" class="btn">Portfolio</a>
  </div>

  <!-- Schedule Meeting -->
  <div class="section">
    <h2>Schedule a Meeting</h2>
    <p>Schedule a meeting to discuss potential opportunities for collaboration</p>
    <a href="https://calendly.com/your-link" class="btn">Book on Calendly</a>
  </div>

  <!-- Floating Action Buttons -->
  <div class="footer-actions">
    <button onclick="alert('Share functionality')"><i class="fas fa-share-alt"></i></button>
    <a href="data:text/vcard;charset=utf-8,BEGIN:VCARD%0AVERSION:3.0%0AFN:Name%0AORG:Company%0ATITLE:Title%0ATEL:0000000000%0AEMAIL:youremail@domain.com%0AEND:VCARD" download="contact.vcf" class="add-contact">
      Add to Contacts
    </a>
  </div>

</div>

</body>
</html>`,


  // Add more templates here...
};

export default templates;


