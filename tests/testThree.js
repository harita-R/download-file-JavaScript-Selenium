const USERNAME = "YOUR_USERNAME"; //replace with your username
const KEY = "YOUR_ACCESSKEY"; //replace with your accesskey

const GRID_HOST = "hub.lambdatest.com/wd/hub";

const { By, Key, Builder } = require("selenium-webdriver");

async function example() {

  var capabilities = {
    "LT:Options": {
      user: USERNAME,
      accessKey: KEY,
      build: "JavaScript and Selenium Testing",
      name: "Download File",
      platformName: "Windows 11",
      selenium_version: "4.1.0",
      driver_version: "99.0",
    },
    browserName: "Chrome",
    browserVersion: "99.0",
  };

  const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

  //To wait for browser to build and launch properly
  let driver = await new Builder()
    .usingServer(gridUrl)
    .withCapabilities(capabilities)
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
