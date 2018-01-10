import 'chromedriver';
import webdriver from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

const options = new Options();
options.setChromeBinaryPath('/usr/bin/google-chrome-stable');
options.addArguments('--headless');
options.addArguments('--disable-gpu');
options.addArguments('--start-maximized');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

export default driver;
