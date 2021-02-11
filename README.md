# Static Site Boilerplate

## Installation

```bash
git clone https://github.com/Areksbi/static-site-boilerplate.git
 ```

 ```bash
cd static-site-boilerplate
 ```

 ```bash
rm -rf .git && git init
 ```

## Main scripts

Install and generate new project:
```bash
npm install
 ```

Only install node_modules:
```bash
SKIP_SETUP=true npm install
 ```

Start the local server:
```bash
npm start
 ```

Build project:
```bash
npm run build:dist
 ```

## Features

* **Modern Technologies:** Full support for HTML5 (Pug), JavaScript (Vanilla and ES6) and CSS (Sass and PostCSS)
* **Built-in Server:** Local development server with hot reloading
* **Performance Tuning:** CSS and JavaScript transpilation, bundling, autoprefixing, and minification
* **Image Optimization:** Optimizes images for loading speed
* **Favicon Generation:** Automatically generates all favicons for Web, Apple and Android devices from one image file
* **Code Linting:** Full support for JavaScript (ESLint) and CSS (StyleLint) linting
* **Sitemap & Robots.txt Generation:** Automatically generates a sitemap.xml and robots.txt files
* **Setup Wizard:** Optionally install helpful libraries and snippets including:
	* CSS Resets: `normalize.css` `reset.css` or `sanitize.css`
	* jQuery
	* Google Analytics
* **Cutting Edge:** Uses Webpack for processing and bundling your code
* **Deployment:** Built-in support for deployment via FTP or Netlify

## License

The code is available under the [MIT license](LICENSE).

## Credits

All the credit go to: https://staticsiteboilerplate.com/ 
