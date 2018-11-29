import express from 'express';
import Config from './src/Config.js';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(Config.port, () => {
    console.log('Listening');
});

function gracefulShutdown() {
    console.log('*** KILLED ***');
    process.kill(process.pid, 'SIGUSR2');
    process.exit(0);
};

process.once('SIGUSR2', gracefulShutdown);
process.once('SIGTERM', gracefulShutdown);
process.once('SIGHUP', gracefulShutdown);
process.once('SIGINT', gracefulShutdown);

setTimeout(() => {
    console.log(`\nserver is running @ http://127.0.0.1:${Config.port}\n`);
}, 2000);
