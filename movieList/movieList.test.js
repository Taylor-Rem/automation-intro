const { Builder, Capabilities, By } = require('selenium-webDriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(
  async () => await driver.get('http://127.0.0.1:5500/movieList/index.html')
);

afterAll(async () => await driver.quit());

test('element appears, can be crossed off and deleted', async () => {
  await driver.findElement(By.xpath('//input')).sendKeys('woah bro');
  await driver.sleep(1000);
  await driver.findElement(By.xpath('//button')).click();
  await driver.sleep(1000);
  await driver.findElement(By.xpath('//span')).click();
  await driver.sleep(1000);
  await driver.findElement(By.xpath('//button[contains(., "x")]')).click();
  await driver.sleep(1000);
});
