/* //import chrome from "chrome-aws-lambda";
import chromium from "@sparticuz/chromium";
//import edgeChromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export default async function screenshot(url: string) {
  const options = process.env.AWS_REGION
    ? {
        args: chromium.args,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
              ? "/usr/bin/google-chrome"
              : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920 });
  await page.goto(url, { waitUntil: "networkidle0" });
  return await page.screenshot({ type: "png" });
}
 */