const cheerio = require('cheerio');
const playwright = require('playwright');
const fs = require('fs');

const products = [];
let count = 0;

const uniqlo_sale = async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto('https://www.uniqlo.com/au/en/feature/sale/men?path=6991&flagCodes=discount');

  await page.waitForTimeout(5000);

  async function loadMore() {

    while (true) {
      let link = page.locator('a:has-text("Load more")');

      if (await link.isVisible()) {
        await link.click();
        await page.waitForTimeout(2000);
      } else {
        break;
      }
    }
  }

  await loadMore();

  const htmlContent = await page.content();

  await browser.close();

  const $ = cheerio.load(htmlContent);
    $('.product-tile').each((i, element) => {
      const productId = count++;
      const productName = $(element).find('.product-tile-product-description').text().trim()
      const imageURL = $(element).find('.thumb-img').attr('src');
      const salePrice = $(element).find('.price-limited-ER .fr-price-currency').text().trim();
      const originalPrice = $(element).find('.dual-price-original-ER .fr-price-currency').text().trim();
      const salesPercentage = ((parseFloat(salePrice.replace("$", ""))/parseFloat(originalPrice.replace("$", ""))) * 100).toFixed(2) + "%";
      let type = 'Other';
      if (productName.toLocaleLowerCase().includes('shirt')) {
        type = 'Shirt';
      } else if (productName.toLocaleLowerCase().includes('pants') || productName.toLocaleLowerCase().includes('jeans') || productName.toLocaleLowerCase().includes('chino')) {
        type = 'Pants';
      } else if (productName.toLocaleLowerCase().includes('short')) {
        type = 'Shorts';
      } else if (productName.toLocaleLowerCase().includes('fleece') || productName.toLocaleLowerCase().includes('sweater')) {
        type = 'Fleece';
      } else if (productName.toLocaleLowerCase().includes('jacket') || productName.toLocaleLowerCase().includes('coat') || productName.toLocaleLowerCase().includes('parka')) {
        type = 'Jacket';
      }
      const link = 'https://www.uniqlo.com' + $('a[href*="/products/"]').attr('href');
      products.push({ productId, productName, imageURL, salePrice, originalPrice, salesPercentage, type, link });
    });

    console.log(products);
}

const uniqlo_limited = async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto('https://www.uniqlo.com/au/en/feature/limited-offers/men?path=6990&flagCodes=limitedOffer');

  await page.waitForTimeout(5000);

  async function loadMore() {

    while (true) {
      let link = page.locator('a:has-text("Load more")');

      if (await link.isVisible()) {
        await link.click();
        await page.waitForTimeout(2000);
      } else {
        break;
      }
    }
  }

  await loadMore();

  const htmlContent = await page.content();

  await browser.close();

  const $ = cheerio.load(htmlContent);
    $('.product-tile').each((i, element) => {
      const productId = count++;
      const productName = $(element).find('.product-tile-product-description').text().trim()
      const imageURL = $(element).find('.thumb-img').attr('src');
      const salePrice = $(element).find('.price-limited-ER .fr-price-currency').text().trim();
      const originalPrice = $(element).find('.dual-price-original-ER .fr-price-currency').text().trim();
      const salesPercentage = ((parseFloat(salePrice.replace("$", ""))/parseFloat(originalPrice.replace("$", ""))) * 100).toFixed(2) + "%";
      let type = 'Other';
      if (productName.toLocaleLowerCase().includes('shirt')) {
        type = 'Shirt';
      } else if (productName.toLocaleLowerCase().includes('pants') || productName.toLocaleLowerCase().includes('jeans') || productName.toLocaleLowerCase().includes('chino')) {
        type = 'Pants';
      } else if (productName.toLocaleLowerCase().includes('short')) {
        type = 'Shorts';
      } else if (productName.toLocaleLowerCase().includes('fleece') || productName.toLocaleLowerCase().includes('sweater')) {
        type = 'Fleece';
      } else if (productName.toLocaleLowerCase().includes('jacket') || productName.toLocaleLowerCase().includes('coat') || productName.toLocaleLowerCase().includes('parka')) {
        type = 'Jacket';
      }
      const link = 'https://www.uniqlo.com' + $('a[href*="/products/"]').attr('href');
      products.push({ productId, productName, imageURL, salePrice, originalPrice, salesPercentage, type, link });
    });

    console.log(products);
}

const cottonOn = async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto('https://cottonon.com/AU/co/co-sale/sale-mens/');

  await page.waitForTimeout(5000);

  async function loadMore() {

    while (true) {
      let link = page.locator('a:has-text("Load More")');

      if (await link.isVisible()) {
        await link.click();
        await page.waitForTimeout(2000);
      } else {
        break;
      }
    }
  }

  await loadMore();

  const htmlContent = await page.content();

  console.log(htmlContent)

  await browser.close();

  const $ = cheerio.load(htmlContent);
    $('.product-tile').each((i, element) => {
      const productId = count++;
      const productName = $(element).find('a.name-link').text().trim();
      const imageURL = $(element).find('img').attr('data-srcset');
      const salePrice = $(element).find('.product-pricing .product-sales-price').text().trim();
      const originalPrice = $(element).find('.product-pricing .product-standard-price').text().trim();
      const salesPercentage = ((parseFloat(salePrice.replace("$", ""))/parseFloat(originalPrice.replace("$", ""))) * 100).toFixed(2) + "%";
      let type = 'Other';
      if (productName.toLocaleLowerCase().includes('shirt')) {
        type = 'Shirt';
      } else if (productName.toLocaleLowerCase().includes('short')) {
        type = 'Shorts';
      } else if (productName.toLocaleLowerCase().includes('pants') || productName.toLocaleLowerCase().includes('pant') || productName.toLocaleLowerCase().includes('jeans') || productName.toLocaleLowerCase().includes('chino')) {
        type = 'Pants';
      } else if (productName.toLocaleLowerCase().includes('fleece') || productName.toLocaleLowerCase().includes('sweater')) {
        type = 'Fleece';
      } else if (productName.toLocaleLowerCase().includes('jacket') || productName.toLocaleLowerCase().includes('coat') || productName.toLocaleLowerCase().includes('parka') || productName.toLocaleLowerCase().includes('blouson')) {
        type = 'Jacket';
      }
      const link = $(element).find('a.name-link').attr('href');
      products.push({ productId, productName, imageURL, salePrice, originalPrice, salesPercentage, type, link });
    });

    console.log(products);
};

(async () => {
  await uniqlo_sale();
  await uniqlo_limited();
  //await cottonOn();
  console.log(products);

  const JSONToFile = (obj, filename) => {
    fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
  };

  JSONToFile(products, 'sales');
})();