const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(
    'https://saladofuturo.educacao.sp.gov.br',
    { waitUntil: 'domcontentloaded' }
  );

  await page.waitForTimeout(5000);

  await page.getByText('Servidor').click();

  await page.waitForTimeout(8000);

  console.log('\nURL APÓS CLIQUE');
  console.log(page.url());

  console.log('\nTÍTULO');
  console.log(await page.title());

  await page.screenshot({
    path: 'screenshots/apos_servidor.png',
    fullPage: true
  });

  await browser.close();

})();