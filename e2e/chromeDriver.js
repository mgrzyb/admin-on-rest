import 'chromedriver';
import webdriver from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

const options = new Options();
options.addArguments('--start-maximized');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build()
    .catch(error => {
        console.error(error);
    });

export default driver;
