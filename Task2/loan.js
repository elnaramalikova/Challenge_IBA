const { Builder, By, Key, util } = require('selenium-webdriver');
async function searchPage() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://abb-bank.az/');
    let money = await driver.findElement(By.xpath("//input[@id='js-range-slider-output-0']"))
    money.clear();
    money.sendKeys("7500");
    let months = await driver.findElement(By.xpath("//input[@id='js-range-slider-output-01']"))
    months.clear();
    months.sendKeys("12");
    let percent = await driver.findElement(By.xpath("//input[@id='js-range-slider-output-02']"))
    percent.clear();
    percent.sendKeys("20");
    await driver.findElement(By.xpath("//body/section[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]")).click();
    // await driver.findElement(By.name('q')).sendKeys("Selenium", Key.RETURN)
    // await driver.findElement(By.xpath("//button[@type='button' and contains(text(),'AZ')]")).click();
    // await driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[2]/span[1]")).click().then(function() {
    //     driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[3]/div[1]/ul[1]/li[1]")).click()
    // driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[3]/div[1]/ul[1]/li[2]")).click()
    // driver.findElement(By.xpath("//header/section[1]/div[1]/div[1]/div[3]/span[2]/div[1]/div[3]/div[1]/ul[1]/li[3]")).click()
    // })

    await driver.sleep(100000)
}
searchPage();
searchPage();
