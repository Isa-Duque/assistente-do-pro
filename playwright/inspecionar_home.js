const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(
    'https://saladofuturo.educacao.sp.gov.br'
  );

  console.log('\nTÍTULO');
  console.log(await page.title());

  console.log('\nURL');
  console.log(page.url());

  const inputs = await page.locator('input').count();
  console.log('\nINPUTS ENCONTRADOS');
  console.log(inputs);

  const buttons = await page.locator('button').count();
  console.log('\nBOTÕES ENCONTRADOS');
  console.log(buttons);

  const placeholders = await page.locator('input').evaluateAll(
    els => els.map(e => ({
      placeholder: e.placeholder,
      id: e.id,
      name: e.name,
      type: e.type
    }))
  );

  console.log('\nDETALHES DOS INPUTS');
  console.log(JSON.stringify(placeholders, null, 2));

  await browser.close();

})();