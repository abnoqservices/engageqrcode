import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Optional: set width of the page before screenshot
    await page.setViewport({ width: 1200, height: 800 });

    await page.goto(url, { waitUntil: "networkidle0" });

    // 📌 Capture ONLY the top part of the page
    const screenshot = await page.screenshot({
      type: "png",
      clip: {
        x: 0,
        y: 0,
        width: 1200,   // MUST match viewport width
        height: 800   // <-- how much of the top you want
      }
    });

    await browser.close();

    return new NextResponse(screenshot, {
      headers: { "Content-Type": "image/png" },
    });

  } catch (e) {
    console.error("Screenshot error:", e);
    return NextResponse.json({ error: "Screenshot failed" }, { status: 500 });
  }
}
