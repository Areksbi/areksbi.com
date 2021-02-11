const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  site_name: 'areksbi.com',
  site_description: 'Roman "Areksbi" Baran - Personal Website',
  site_url: 'https://areksbi.com"',
  googleAnalyticsUA: '',
  viewport: 'width=device-width,initial-scale=1',
  favicon: path.join(ROOT, '/src/assets/images/favicon.png'),
  dev_host: 'localhost',
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;
