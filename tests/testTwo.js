const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

const chromeDriver = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");

async function example() {
  //To set chromeOptions
  var options = new chromeDriver.Options();
  options.setUserPreferences({
    "download.default_directory": "D:\\Test",
  });

  //To wait for browser to build and launch properly
  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    //To go to the test website from the browser with our code.
    await driver.get("http://demo.automationtesting.in/FileDownload.html");

    //To enter data inside the text area
    await driver
      .findElement(By.id("textbox"))
      .sendKeys("I love testing!", Key.RETURN);

    //To click on "Generate File" button
    await driver.findElement(By.id("createTxt")).click();

    //To click on "Download" link

    await driver.findElement(By.id("link-to-download")).click();

    //Wait for 5s till download is completed
    await driver.sleep(5000);
  } catch (e) {
    console.log("Error Occured:", e.name);
  }
  //It is always a safe practice to quit the browser after execution
  await driver.quit();
}

example();
