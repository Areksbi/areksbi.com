class Generator {
  constructor() {
    this.fs = require('fs');

    const args = process.argv.slice(2);
    this.type = args[0];
    this.name = args[1];

    const options = args.filter((el, index) => index !== 0 && index !== 1);
    this.noHtml = options.includes('no-html');
    this.noCss = options.includes('no-css');
    this.noJs = options.includes('no-js');

    this.src = './src';
    this.node = '>=10.3.0';


    this.pugTemplate = require('./templates/pug.template');
    this.scssTemplate = require('./templates/scss.template');
    this.jsTemplate = require('./templates/js.template');
  }

  start() {
    const semver = require('semver');

    switch (true) {
      case !semver.satisfies(process.version, this.node):
        return this.handleError(`Your Node.js version is too old, \
          please update at least to ${this.node}!`);

      case !this.type:
        return this.handleError('Missing component type');

      case !this.name:
        return this.handleError('Missing component name');

      default:
        return this.createFiles();
    }
  }

  async createFiles() {
    try {
      const folder = `${this.src}/${this.type}s/${this.name}`;
      await this.createFolder(folder);
      await this.createPugFile(folder, this.name);
      await this.createScssFile(folder, this.name);
      await this.createJsFile(folder, this.name);
      this.handleSuccess();
    } catch (e) {
      this.handleError(e);
    }
  }

  createFolder(path) {
    if (this.fs.existsSync(path)) {
      const name = this.type.charAt(0).toUpperCase() + this.type.slice(1);
      this.handleError(`${name} already exists!`);
      return;
    }

    return this.fs.promises
        .mkdir(path, {recursive: true})
        .catch(this.handleError);
  }

  createFile(path, data) {
    return this.fs.promises.writeFile(path, data).catch(this.handleError);
  }

  appendInFile(fileToOpen, content) {
    let file;

    try {
      file = this.fs.openSync(fileToOpen, 'a');
      this.fs.appendFileSync(file, content, 'utf8');
    } catch (err) {
      this.handleError(err);
    } finally {
      if (file) {
        this.fs.closeSync(file);
      }
    }
  }

  createPugFile(path) {
    if (this.noHtml) return;

    const file = './config/bundle/webpack.generatedPlugins.js';
    const encoding = 'utf8';

    this.fs.readFile(file, encoding, (err, data) => {
      if (err) return console.error(err);

      const pugPath = `${path}/${this.name}.pug`;
      const filename = this.type === 'page'
        ? `${this.name}.html`
        : `${this.type}s/${this.name}.html`;

      const result = data
          .replace(/(\n\t)?]([\S\s]*?)};/, `\
          \n\t\tnew HtmlWebpackPlugin({\
          \n\t\t\ttemplate: '${pugPath}',\
          \n\t\t\tfilename: '${filename}'\
          \n\t\t}),\
          \n\t];\
          \n};`);

      this.fs.writeFile(file, result, encoding, (err) => {
        if (err) return console.error(err);
      });

      return this.createFile(pugPath, this.pugTemplate(this.name));
    });
  }

  createScssFile(path) {
    if (this.noCss) return;

    const scssPath = `${path}/_${this.name}.scss`;
    return this.createFile(scssPath, this.scssTemplate(this.name));
  }

  createJsFile(path) {
    if (this.noJs) return;

    const reworkedName = this.name
        .split(/[^\w\s]/gi)
        .filter((el) => !!el && el.length)
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
        .join('');

    const cleanedPath = path.replace(this.src, '.');
    this.appendInFile(
        `${this.src}/index.js`,
        `import ${reworkedName} from '${cleanedPath}/${reworkedName}';\
        \ntry { new ${reworkedName}().render(); } \
        catch (err) { console.error(err); }\n`
    );
    return this.createFile(
        `${path}/${reworkedName}.js`,
        this.jsTemplate(this.name, reworkedName)
    );
  }

  handleSuccess() {
    const type = this.type.charAt(0).toUpperCase() + this.type.slice(1);
    console.log(`${type} '${this.name}' was successfully created!\n`);
    process.exit(0);
  }

  handleError(error) {
    console.error(`${error}!\n`);
    process.exit(1);
  }
}

new Generator().start();
