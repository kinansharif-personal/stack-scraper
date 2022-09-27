var express = require("express");
var router = express.Router();
var puppeteer = require("puppeteer");

// understanding certain naunces of puppeteer before commence refactor

router.get("/", async (req, res, next) => {
  try {
    const imageUrl = await scrapeProfileImage(
      "https://stackoverflow.com/users/4/joel-spolsky"
    );
    const name = await scrapeProfileName(
      "https://stackoverflow.com/users/4/joel-spolsky"
    );
    const country = await scrapeProfileCountry(
      "https://stackoverflow.com/users/4/joel-spolsky"
    );
    res.send({ image: imageUrl, name, country });
  } catch (error) {
    return next(error);
  }
});

async function scrapeProfileImage(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const [el] = await page.$x(
    '//*[@id="mainbar-full"]/div[1]/div[1]/a/div[1]/div/img'
  );
  const src = await el.getProperty("src");
  const srcTxt = src.jsonValue();
  return srcTxt;
}
async function scrapeProfileName(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const [el] = await page.$x(
    '//*[@id="mainbar-full"]/div[1]/div[1]/div/div/div[1]'
  );

  let value = await page.evaluate((el) => el.textContent, el);
  //const srcTxt = src.jsonValue();
  return value;
}
async function scrapeProfileCountry(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const [el] = await page.$x(
    '//*[@id="mainbar-full"]/div[1]/div[1]/div/ul[2]/li[4]/div/div[2]/div'
  );
  let value = await page.evaluate((el) => el.textContent, el);
  return value;
}

module.exports = router;
