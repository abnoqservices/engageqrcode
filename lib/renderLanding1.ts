import templates from "@/templates/allTemplates";

type TemplateMap = Record<string, string>;

const TEMPLATES: TemplateMap = templates;

type Spec = { label: string; value: string };

type Product = {
  id: number;
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
  specifications?: Spec[];
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
};

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

/* ---------------------------------------------
   MAIN TEMPLATE RENDER FUNCTION (DYNAMIC)
---------------------------------------------- */
export function renderLanding(product: Product, templateName?: string): string {
  // Load template from TEMPLATES dynamically
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
    "metaAuthor",
    "brandLogo",
    "productName",
    "productSubtitle",
    "styleName",
    "category",
    "price",
    "companyTitle",
    "companyDescription",
    "focusTitle",
    "focusDescription",
    "finalNote",
    "pdfDownloadUrl",
    "pdfButtonText",
    "footerLogo",
    "companyName",
    "contactPhone",
    "contactWhatsapp",
    "contactEmail",
    "footerCopyright"
  ];

  fields.forEach((k) => {
    const val = (product as any)[k] ?? "";
    output = output.replaceAll(`{{${k}}}`, String(val));
  });

  // Product ID
  output = output.replaceAll("{{productId}}", String(product.id ?? ""));

  /* ---------------------------------------------
     MAIN IMAGES
  ---------------------------------------------- */
  const images = product.images || [];
  const mainImagesHTML = images
    .map(
      (img) =>
        `<div class="swiper-slide"><a data-fancybox="gallery" href="${img}"><img src="${img}" alt="Product Image"/></a></div>`
    )
    .join("");

  output = output.replaceAll("{{mainImages}}", mainImagesHTML);

  /* ---------------------------------------------
     THUMBNAILS
  ---------------------------------------------- */
  const thumbs =
    product.thumbnails && product.thumbnails.length
      ? product.thumbnails
      : images;

  const thumbHTML = thumbs
    .map((t) => `<div class="swiper-slide"><img src="${t}" alt="Thumbnail"/></div>`)
    .join("");

  output = output.replaceAll("{{thumbnailImages}}", thumbHTML);

  /* ---------------------------------------------
     SPECIFICATIONS TABLE
  ---------------------------------------------- */
  const specs = (product.specifications || [])
    .map(
      (s) =>
        `<tr class="product--properties-row">
          <td class="product--properties-label">${s.label}</td>
          <td class="product--properties-value">${s.value}</td>
        </tr>`
    )
    .join("");

  output = output.replaceAll("{{specifications}}", specs);

  /* ---------------------------------------------
     BULLET POINTS
  ---------------------------------------------- */
  const bullets = (product.bulletPoints || [])
    .map((b: string) => `<li>${b}</li>`)
    .join("");

  output = output.replaceAll("{{bulletPoints}}", bullets);

  /* ---------------------------------------------
     EXTERNAL CSS & JS
  ---------------------------------------------- */
  const externalStyles = [
    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">`,
    `<link rel="stylesheet" href="/premium-landing/bootstrap.min.css">`,
    `<link rel="stylesheet" href="/premium-landing/font-awesome.min.css">`,
    `<link rel="stylesheet" href="/premium-landing/swiper.min.css">`,
    `<link rel="stylesheet" href="/premium-landing/fancybox.min.css">`,
    `<link rel="stylesheet" href="/premium-landing/aos.min.css">`,
    `<link rel="stylesheet" href="/premium-landing/style.css">`,
    `<link rel="stylesheet" href="/stylecss.css">`,
    product.externalCSS || ""
  ].join("\n");

  output = output.replaceAll("{{externalStyles}}", externalStyles);

  const externalScripts = [
    `<script src="/premium-landing/jquery-main.js"></script>`,
    `<script src="/premium-landing/bootstrap.min.js"></script>`,
    `<script src="/premium-landing/swiper.min.js"></script>`,
    `<script src="/premium-landing/aos.min.js"></script>`,
    `<script src="/premium-landing/fancybox.min.js"></script>`,
    `<script src="/premium-landing/custom.js"></script>`,
    product.externalJS || ""
  ].join("\n");

  output = output.replaceAll("{{externalScripts}}", externalScripts);

  /* ---------------------------------------------
     CUSTOM STYLES
  ---------------------------------------------- */
  output = output.replaceAll("{{customStyles}}", product.customStyles || "");

  return output;
}

/* ---------------------------------------------
   RENDER PREVIEW (ADMIN)
---------------------------------------------- */
export function renderLandingPreview(
  product: Product,
  templateName: string
): { html: string; templateName: string; isValid: boolean } {
  const isValid = !!TEMPLATES[templateName];
  const html = renderLanding(product, templateName);

  return {
    html,
    templateName: isValid ? templateName : "modern",
    isValid
  };
}
