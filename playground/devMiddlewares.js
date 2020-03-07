/* eslint-disable global-require */
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const argv = require('./argv');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    watchOptions: {
      poll: 3000,
      aggregateTimeout: 1000,
      ignored: /node_modules/,
    },
    stats: 'errors-only',
  });
}

const wsProxy = createProxyMiddleware({
  target: `https://${argv.proxyHost}${
    typeof argv.proxyPort === 'string' ? `:${argv.proxyPort}` : ''
  }`,
  changeOrigin: true,
  secure: false,
  ws: true,
  onError: (err, req, res) => {
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    console.log(err.stack || err);
    res.end('HMR WS proxy error. Keep calm.');
  },
});

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );
  const fs = middleware.fileSystem;

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.use(['/ws'], wsProxy);

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};
