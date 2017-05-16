
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].bundle.js',
	},
	module:{
		rules:[
			{
				test: /\.js$/,
			    loader: 'babel-loader',
			    exclude: /node_modules/
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
	        template: './index.html',
	        inject: 'body'
	      }),
		new CopyWebpackPlugin([{
	        from: './index.html'
	    }])

	]
}