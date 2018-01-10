import express from 'express';
import path from 'path';
import driver from '../chromeDriver';

let listeningServer;

before(
    () =>
        new Promise((resolve, reject) => {
            const server = express();
            console.log('Initialize express');
            server.use(
                '/',
                express.static(
                    path.join(__dirname, '../../packages/ra-example')
                )
            );
            console.log('Configure express');

            listeningServer = server.listen(8083, err => {
                if (err) {
                    console.err(err);
                    return reject(err);
                }

                console.log('Express ready on 8083');
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
