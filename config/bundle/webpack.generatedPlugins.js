/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
			template: './src/pages/coming-soon/coming-soon.pug',          
			filename: 'pages/coming-soon.html'          
		}),                    
		new HtmlWebpackPlugin({          
			template: './src/molecules/coming-soon-image/coming-soon-image.pug',          
			filename: 'molecules/coming-soon-image.html'          
		}),
    new HtmlWebpackPlugin({
      template: './src/molecules/footer-icons/footer-icons.pug',
      filename: 'molecules/footer-icons.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/molecules/footer-copyright/footer-copyright.pug',
      filename: 'molecules/footer-copyright.html'
    }),
  ];
};
