


// /app/landing-html/[id]/route.ts
import { loadTemplate } from "@/server/loadTemplates";
import { NextRequest, NextResponse } from "next/server";
import { renderLanding } from "@/lib/renderLanding";
import  productsDatabase  from "@/data/products.json";


export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const templateName = searchParams.get("template") || "";
    const rawData = searchParams.get("data") || "";
    const { slug } = await params as { slug: keyof typeof productsDatabase };
    // Fetch product data (replace with your database query)
   
    const productData = productsDatabase[slug];

    if (!productData) {
      return new NextResponse(
        `<html><body><h1>Product Not Found</h1><p>Product ID: ${slug} does not exist.</p></body></html>`,
        { 
          status: 404,
          headers: { "Content-Type": "text/html" }
        }
      );
    }
    let templateHtml = "";
    try {
      templateHtml = await loadTemplate(templateName);
    } catch (e) {
      console.warn("Template load failed, using fallback:", templateName);
      templateHtml = await loadTemplate("modern");
    }
    // Render the landing page with selected template
    const html = renderLanding(productData, templateHtml, rawData);

    // Return HTML response
    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error("Error generating landing page:", error);
    
    return new NextResponse(
      `<html><body><h1>Internal Server Error</h1><p>Failed to generate landing page.</p></body></html>`,
      { 
        status: 500,
        headers: { "Content-Type": "text/html" }
      }
    );
  }
}