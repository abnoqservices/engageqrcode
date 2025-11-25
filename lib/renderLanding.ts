import templates from "@/templates/allTemplates";

type TemplateMap = Record<string, string>;
const TEMPLATES: TemplateMap = templates;

type Spec = { label?: string; name?: string; value: string };

type Product = {
  id: string | number;

  pageTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaAuthor?: string;

  brandLogo?: string;
  productName?: string;
  productSubtitle?: string;
  styleName?: string;
  category?: string;
  price?: string;

  images?: string[];
  thumbnails?: string[];
  custom_fields_meta?: Spec[];
  bulletPoints?: string[];

  companyTitle?: string;
  companyDescription?: string;
  focusTitle?: string;
  focusDescription?: string;
  finalNote?: string;

  pdfDownloadUrl?: string;
  pdfButtonText?: string;

  footerLogo?: string;
  companyName?: string;
  contactPhone?: string;
  contactWhatsapp?: string;
  contactEmail?: string;
  footerCopyright?: string;

  customStyles?: string;
  externalCSS?: string;
  externalJS?: string;
  og_image?: string;

  description?: string;
  videoUrl?: string;
};

/* ---------------------------------------------
   JSON → PRODUCT FORMAT MAPPER
---------------------------------------------- */
export function mapJsonToProduct(json: any): Product {
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
    images: json.images?.map((img: any) => img.url) || [],

    // Gallery thumbnails
    thumbnails: json.gallery?.map((g: any) => g.url) || [],

    // Specifications
    custom_fields_meta: json.custom_fields_meta || [],

    // PDFs
    pdfDownloadUrl: json.pdfs?.[0]?.url || "",
    pdfButtonText: "Download PDF",

    // OG image
    og_image: json.images?.[0]?.url || ""
  };
}

/* ---------------------------------------------
   GET ALL TEMPLATE NAMES
---------------------------------------------- */
export function getAvailableTemplates(): string[] {
  return Object.keys(TEMPLATES);
}

/* ---------------------------------------------
   GET SINGLE TEMPLATE
---------------------------------------------- */
export function getTemplate(templateName: string): string | null {
  return TEMPLATES[templateName] || null;
}

function convertToEmbedUrl(url: string): string {
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

/* ---------------------------------------------
   MAIN TEMPLATE RENDER FUNCTION (DYNAMIC)
---------------------------------------------- */
export function renderLanding(raw: any, templateName?: string): string {
  const product = mapJsonToProduct(raw);

  const selectedTemplate =
    templateName && TEMPLATES[templateName]
      ? TEMPLATES[templateName]
      : TEMPLATES.modern;

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

  fields.forEach((k) => {
    const val = (product as any)[k] ?? "";
    output = output.replaceAll(`{{${k}}}`, String(val));
  });

  // Product ID
  output = output.replaceAll("{{productId}}", String(product.id ?? ""));

  /* ---------------------------------------------
     SEO TAGS
  ---------------------------------------------- */
  const Meta_SEO_CARD = `
<title>${product.pageTitle}</title>
<meta name="description" content="${product.metaDescription}">
<meta property="og:title" content="${product.pageTitle}">
<meta property="og:description" content="${product.metaDescription}">
<meta property="og:image" content="${product.og_image}">
`;

  /* ---------------------------------------------
     DYNAMIC TOP SLIDER IMAGES
  ---------------------------------------------- */
  const TOP_SLIDER_CARD = `
<div class="header">
  <div class="swiper header-swiper">
    <div class="swiper-wrapper">
      ${product.images
        .map(
          (img) =>
            `<div class="swiper-slide" style="background-image:url('${img}')"></div>`
        )
        .join("")}
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="header-overlay">
    <h1>${product.productName}</h1>
    <p>Timeless Beauty • Natural Ingredients • Cruelty-Free</p>
  </div>
</div>`;

  /* ---------------------------------------------
     ABOUT BRAND -1
  ---------------------------------------------- */
  const ABOUT_BRAND_CARD = `
<div class="section card">
  <h2>About Our Brand</h2>
  <p>${product.description || ""}</p>
</div>`;

const TOP_HEADER_LOGO = `
<div class="header">
<img src="https://cdn0070.qrcodechimp.com/images/defaultImages/product-page/luxury_wine_logo.png" alt="Logo" class="logo">
<h1>Luxury Wines</h1>
<p>Exquisite Taste Since 1985</p>
</div>`;

  /* ---------------------------------------------
     PRODUCT SPOTLIGHT
  ---------------------------------------------- */


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
    ${PRODUCT_SPOTLIGHT_DATA.map(item => `
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
  ---------------------------------------------- */
  const SPECS_CARD =
    product.custom_fields_meta && product.custom_fields_meta.length > 0
      ? `
<div class="section card">
  <h2>Specifications</h2>
  <table class="specs-table">
    ${product.custom_fields_meta
      .map(
        (f) => `
      <tr>
        <td class="product--properties-label">${f.name}</td>
        <td class="product--properties-value">${f.value}</td>
      </tr>`
      )
      .join("")}
  </table>
</div>`
      : "";

  /* ---------------------------------------------
     OUR COLLECTION – DYNAMIC GALLERY
  ---------------------------------------------- */
  const OUR_COLLECTION_CARD = `
<div class="section">
  <h2>Our Collection</h2>
  <div class="swiper gallery-swiper">
    <div class="swiper-wrapper">
      ${
        product.thumbnails
          ?.map((thumb) => `<div class="swiper-slide"><img src="${thumb}" /></div>`)
          .join("") || ""
      }
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>`;

  /* ---------------------------------------------
     STATIC CARDS (NO CHANGE)
  ---------------------------------------------- */
  const videoEmbedUrl = convertToEmbedUrl(product.videoUrl || "");

  const YOUTUBE_CARD = `
  <div class="section card">
    <h2>Watch Our Story</h2>
    <div class="video-wrapper">
      <iframe 
        src="${videoEmbedUrl || "https://www.youtube.com/embed/bOuLmR8K5Tk"}" 
        allowfullscreen
      ></iframe>
    </div>
  </div>`;
  
  const FEATURED_PRODUCTS_CARD = `
<div class="section">
  <h2>Featured Products</h2>
  <div class="swiper products-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="product">
          <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_1.png" alt="Serum">
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
          <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_2.png" alt="Cream">
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
          <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/watch_gallery_3_3.png" alt="Mask">
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
  <h2>100% Natural Ingredients</h2>
  <p>We believe in clean beauty. No parabens, sulfates, or synthetic fragrances.</p>
  <img src="//cdn0070.qrcodechimp.com/images/defaultImages/product-page/cosmatic_gallery_2.png"
    style="width:100%; border-radius:12px; margin-top:15px;">
</div>`;

  const SOCIAL_MEDIA_CARD = `
<div class="section card">
  <h2>Follow Us</h2>
  <ul class="social-list">
    <li class="social-item">
      <a href="https://facebook.com" class="social-link">
        <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/fb_icon@72x.png')"></div>
        <div class="social-text"><h4>Facebook</h4><p>Follow us for tips & offers</p></div>
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
    <li class="social-item">
      <a href="https://instagram.com" class="social-link">
        <div class="social-icon" style="background-image:url('//cdn0070.qrcodechimp.com/images/digitalCard/insta_icon@72x.png')"></div>
        <div class="social-text"><h4>Instagram</h4><p>See our latest looks</p></div>
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
  <p>How satisfied are you with our brand?</p>
  <div class="stars">
    <div onclick="rate(1)"><i class="far fa-star"></i><span>Lowest</span></div>
    <div onclick="rate(2)"><i class="far fa-star"></i></div>
    <div onclick="rate(3)"><i class="far fa-star"></i></div>
    <div onclick="rate(4)"><i class="far fa-star"></i></div>
    <div onclick="rate(5)"><i class="far fa-star"></i><span>Highest</span></div>
  </div>
</div>`;

  /* ---------------------------------------------
     REPLACE TEMPLATE BLOCKS
  ---------------------------------------------- */
  output = output
    .replace("{{meta_seo}}", Meta_SEO_CARD)
    .replace("{{top_slider_card}}", TOP_SLIDER_CARD)
    .replace("{{about_brand}}", ABOUT_BRAND_CARD)
    .replace('{{product_spotlight}}', PRODUCT_SPOTLIGHT_CARD)
    .replace("{{specifications}}", SPECS_CARD)
    .replace("{{our_collection}}", OUR_COLLECTION_CARD)
    .replace("{{youtube}}", YOUTUBE_CARD)
    .replace("{{featured_products}}", FEATURED_PRODUCTS_CARD)
    .replace("{{join_club}}", JOIN_BEAUTY_CLUB_CARD)
    .replace("{{natural_ingredients}}", NATURAL_INGREDIENTS_CARD)
    .replace("{{social_media}}", SOCIAL_MEDIA_CARD)
    .replace("{{contact}}", CONTACT_CARD)
    .replace("{{rate_experience}}", RATE_EXPERIENCE_CARD);

  return output;
}

/* ---------------------------------------------
   RENDER PREVIEW (ADMIN)
---------------------------------------------- */
export function renderLandingPreview(
  product: any,
  templateName: string
): { html: string; templateName: string; isValid: boolean } {
  const isValid = !!TEMPLATES[templateName];
  const html = renderLanding(product, templateName);

  return {
    html,
    templateName: isValid ? templateName : "ecommerce",
    isValid
  };
}
