const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

// var chromeCapabilities = webdriver.Capabilities.chrome();
let chromeDriver = require("selenium-webdriver/chrome");
var webdriver = require("selenium-webdriver");

async function example() {
  //To wait for browser to build and launch properly

  // let driver = await new Builder().forBrowser("chrome").build();

  // var driver = new Builder()
  // .withCapabilities(webdriver.Capabilities.chrome())
  //   .forBrowser("chrome")
  //   .setChromeOptions(
  //     new chrome.Options().setUserPreferences({
  //       "download.default_directory": "Desktop",
  //     })
  //   )
  //   .build();

  var options = new chromeDriver.Options();
  options.addArguments("start-maximized");
  options.addArguments("incognito");
  options.setUserPreferences({
    "download.default_directory": "D:\\Test",
  });

  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("http://demo.automationtesting.in/FileDownload.html");
    await driver
      .findElement(By.id("textbox"))
      .sendKeys("Hello world", Key.RETURN);
    await driver.findElement(By.id("createTxt")).click();
    await driver.findElement(By.id("link-to-download")).click();
    await driver.sleep(5000);
  } catch (e) {
    console.log("Error Occured:", e.name);
  }
  await driver.quit();
}

example();
