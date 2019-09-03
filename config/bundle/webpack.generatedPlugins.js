/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return [          
		new HtmlWebpackPlugin({          
			template: './src/pages/home/home.pug',          
			filename: 'pages/home.html'          
		}),          
	];          
};
