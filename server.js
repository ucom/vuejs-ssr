const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const template = fs.readFileSync(
  path.join(__dirname, './index.html'),
  'utf-8',
);
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
  inject: false,
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (+err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        console.log('error:', err);
        res.status(500).end('Internal Server Error');
      }
    }

    res.end(html);
  });
}); 

const port = process.env.PORT || 3000;
console.log('listening on port ' + port);
server.listen(port);