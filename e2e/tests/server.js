import express from 'express';
import path from 'path';
import driver from '../chromeDriver';

let listeningServer;

before(
    () =>
        new Promise((resolve, reject) => {
            const server = express();
            server.use(
                '/',
                express.static(
                    path.join(__dirname, '../../packages/ra-example')
                )
            );

            listeningServer = server.listen(8083, err => {
                if (err) {
                    return reject(err);
                }

                resolve();
            });
        })
);

before(() =>
    driver
        .manage()
        .window()
        .setSize(1200, 800)
);

after(async () => {
    listeningServer.close();
    return driver.quit();
});
