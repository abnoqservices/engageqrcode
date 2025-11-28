// /lib/renderLanding.ts
// object of templates (TEMPLATES)
import { SECTION_MAP } from "./sectionMap";
import { removeDuplicates, filterEnabled } from "./sectionUtils";
import * as CARDS from "@/templates/cards"; // imports all exported card strings

type Product = any;

function applyTemplate(template: string, data: any): string {
  if (!template) return "";
  // handle array blocks {{#arr}}...{{/arr}}
  template = template.replace(/{{#(\w+)}}([\s\S]*?){{\/\1}}/g, (_, arrKey, block) => {
    const arr = data[arrKey];
    if (!arr || !Array.isArray(arr)) return "";
    return arr
      .map((item: any) => {
        if (typeof item === "string") {
          return block.replace(/{{\.}}/g, item);
        }
        return block.replace(/{{(.*?)}}/g, (_, k) => {
          const key = k.trim();
          return item[key] ?? "";
        });
      })
      .join("");
  });

  // replace simple {{field}} placeholders
  template = template.replace(/{{(.*?)}}/g, (_, key) => {
    const k = key.trim();
    // allow nested values like product.images? Not needed here — use flat map
    return (data as any)[k] ?? "";
  });

  return template;
}

export function mapJsonToProduct(json: any): Product {
  console.log("Mapping JSON to Product:", json);
  return {
    id: json.id,
    pageTitle: json.formData?.metaTitle || json.formData?.name || "",
    metaDescription: json.formData?.metaDescription || "",
    metaKeywords: json.formData?.keywords || "",
    productName: json.formData?.name || "",
    productSubtitle: json.formData?.subtitle || "",
    category: json.formData?.category || "",
    price: json.formData?.price || "",
    description: json.formData?.description || "",
    videoUrl: json.formData?.videoUrl || "",
    brandLogo: json.images?.[0]?.url || "",
    images: json.images?.map((i: any) => ({ url: i.url })) || [],
    thumbnails: json.gallery?.map((g: any) => g.url) || [],
    custom_fields_meta: json.custom_fields_meta || [],
    pdfDownloadUrl: json.pdfs?.[0]?.url || "",
    pdfButtonText: "Download PDF",
    og_image: json.images?.[0]?.url || ""
  };
}
function convertToEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("/embed/")) return url;
  return url;
}

export function renderLanding(raw: any, templateHtml?: string, rawDataBase64?: string): string {
  const product = mapJsonToProduct(raw);

  const selectedTemplate = templateHtml;
  let output = selectedTemplate;

  // Standard simple replacements that don't depend on sections
  const fields = [
    "pageTitle", "metaDescription", "metaKeywords", "brandLogo", "productName", "price",
    "description", "videoUrl", "category", "pdfDownloadUrl", "pdfButtonText", "og_image"
  ];
  fields.forEach(k => {
    const val = (product as any)[k] ?? "";
    output = output.replaceAll(`{{${k}}}`, String(val));
  });

  // decode fullData (sections + styles) if provided as base64
  let fullData: any = null;
  if (rawDataBase64) {
    try {
      fullData = JSON.parse(Buffer.from(rawDataBase64, "base64").toString("utf-8"));
    } catch (e) {
      console.error("Invalid Base64 JSON:", e);
    }
  } 

  console.log("Full data for rendering:", fullData);
  // build a dynamic data map used by applyTemplate
  const dynamicValues = {
    ...product,
    images: product.images || [],
    custom_fields_meta: product.custom_fields_meta || [],
    videoEmbedUrl: convertToEmbedUrl(product.videoUrl || ""),
    // override with styles from fullData if present
    ...(fullData?.styles || {})
  };
console.log("Full data for rendering:", fullData);
  // inject global css vars (use either fullData.styles or url params)
  const globalCssInjected = applyTemplate(CARDS.GLOBAL_CSS, {
    primaryColor: (fullData?.styles?.primaryColor || "6366f1").replace("#", ""),
    backgroundColor: (fullData?.styles?.backgroundColor || "0f0a0a").replace("#", ""),
    textColor: (fullData?.styles?.textColor || "a97d38").replace("#", ""),
    hsize: fullData?.styles?.headlineSize || 28,
    psize: fullData?.styles?.paragraphSize || 16
  });
  output = output.replaceAll("{{global_css}}", globalCssInjected);

  // If fullData.sections is provided, process it
  if (fullData && Array.isArray(fullData.sections)) {
    // remove duplicates, keep first occurrence
    const cleaned = removeDuplicates(fullData.sections);
    // keep only enabled items
    const enabled = filterEnabled(cleaned);

    // for each enabled section, replace the corresponding placeholder using SECTION_MAP
    for (const sec of enabled) {
      const placeholder = SECTION_MAP[sec.section];
      if (!placeholder) continue; // no mapping for this named section
      // find corresponding card in CARDS by placeholder name
      // map placeholder -> card content string; we can use a switch or mapping:
      console.log("Processing section:", placeholder);

      let cardHtml = "";
      switch (placeholder) {
        case "{{meta_seo}}":
          cardHtml = applyTemplate(CARDS.Meta_SEO_CARD, dynamicValues);
          break;
        case "{{top_slider_card}}":
          cardHtml = applyTemplate(CARDS.TOP_SLIDER_CARD, dynamicValues);
          break;
        case "{{about_brand}}":
          cardHtml = applyTemplate(CARDS.ABOUT_BRAND_CARD, dynamicValues);
          break;
        case "{{product_spotlight}}":
          cardHtml = applyTemplate(CARDS.PRODUCT_SPOTLIGHT_CARD, dynamicValues);
          break;
        case "{{our_collection}}":
          cardHtml = applyTemplate(CARDS.OUR_COLLECTION_CARD, dynamicValues);
          break;
        case "{{youtube}}":
          cardHtml = applyTemplate(CARDS.YOUTUBE_CARD, dynamicValues);
          break;
        case "{{featured_products}}":
          cardHtml = applyTemplate(CARDS.FEATURED_PRODUCTS_CARD, dynamicValues);
          break;
        case "{{join_club}}":
          cardHtml = applyTemplate(CARDS.JOIN_BEAUTY_CLUB_CARD, dynamicValues);
          break;
        case "{{natural_ingredients}}":
          cardHtml = applyTemplate(CARDS.NATURAL_INGREDIENTS_CARD, dynamicValues);
          break;
        case "{{social_media}}":
          cardHtml = applyTemplate(CARDS.SOCIAL_MEDIA_CARD, dynamicValues);
          break;
        case "{{contact}}":
          cardHtml = applyTemplate(CARDS.CONTACT_CARD, dynamicValues);
          break;
        case "{{rate_experience}}":
          cardHtml = applyTemplate(CARDS.RATE_EXPERIENCE_CARD, dynamicValues);
          break;
        case "{{header_logo_card}}":
          cardHtml = applyTemplate(CARDS.HEADER_LOGO_CARD, dynamicValues);
          break;
       
        default:
          cardHtml = "";
      }

      // Replace only the first occurrence of placeholder with component HTML
      output = output.replace(placeholder, cardHtml);
    }
  }

  // After processing enabled ones, remove any leftover placeholders (disabled or unused)
  const allPlaceholders = Object.values(SECTION_MAP);
  for (const ph of allPlaceholders) {
    output = output.replace(new RegExp(ph, "g"), "");
  }

  // finally replace any remaining simple dynamic placeholders (images array, etc.)
  output = applyTemplate(output, dynamicValues);

  // product id
  output = output.replaceAll("{{productId}}", String(product.id ?? ""));

  return output;
}
