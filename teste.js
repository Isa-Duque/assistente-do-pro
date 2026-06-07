const { chromium } = require('playwright');

(async () => {

  console.log('Abrindo navegador...');

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(
    'https://saladofuturo.educacao.sp.gov.br'
  );

  const titulo = await page.title();

  console.log('Título encontrado:');
  console.log(titulo);

  await page.screenshot({
    path: 'home.png'
  });

  console.log('Screenshot salva.');

  await browser.close();

})();