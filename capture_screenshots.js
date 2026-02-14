import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the apps and their routes
const apps = [
    { name: 'ai-assistant', route: '/ai-assistant', outputDir: '../projects/ai-assistant/assets' },
    { name: 'ar-vr-learning', route: '/ar-vr-learning', outputDir: '../projects/ar-vr-learning/assets' },
    { name: 'eco-living', route: '/eco-living', outputDir: '../projects/eco-living/assets' },
    { name: 'healthcare', route: '/healthcare', outputDir: '../projects/healthcare/assets' },
    { name: 'smart-city', route: '/smart-city', outputDir: '../projects/smart-city/assets' }
];

const BASE_URL = 'http://localhost:5173'; // Vite default port

async function captureScreenshots() {
    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: { width: 390, height: 844, isMobile: true, hasTouch: true } // iPhone 12 Pro dimensions
    });

    for (const app of apps) {
        const page = await browser.newPage();
        const url = `${BASE_URL}${app.route}`;

        console.log(`Navigating to ${url}...`);
        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

            // Wait a bit for any animations to settle
            await new Promise(r => setTimeout(r, 2000));

            const outputDir = path.resolve(__dirname, app.outputDir);
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }

            const outputPath = path.join(outputDir, 'screen.png');
            await page.screenshot({ path: outputPath });
            console.log(`Captured screenshot for ${app.name} at ${outputPath}`);

        } catch (e) {
            console.error(`Error capturing ${app.name}:`, e);
        }

        await page.close();
    }

    await browser.close();
}

captureScreenshots();
