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

  console.log('\nTÍTULO');
  console.log(await page.title());

  console.log('\nURL');
  console.log(page.url());

  const elementos = await page.locator('*').evaluateAll(
    els => {
      return els
        .filter(e => {
          const texto = e.innerText || '';

          return (
            texto.includes('Estudante') ||
            texto.includes('Servidor') ||
            texto.includes('Responsável')
          );
        })
        .map(e => ({
          tag: e.tagName,
          texto: e.innerText,
          classe: e.className,
          id: e.id
        }));
    }
  );

  console.log('\nELEMENTOS DE PERFIL');
  console.log(JSON.stringify(elementos, null, 2));

  await browser.close();

})();