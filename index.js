const puppeteer = require('puppeteer');

(async () => {
    // Launch headless Chrome browser
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Set to false if you want to see the browser UI
    });

    // Create a new page
    const page = await browser.newPage();

    try {
        // Navigate to a website
        await page.goto('https://google.com');

        // Take a screenshot
        await page.screenshot({ path: 'screenshot.png' });

        // Get and print the page title
        const pageTitle = await page.title();
        console.log('Page Title:', pageTitle);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the browser
        await browser.close();
    }
})();
