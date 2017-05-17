
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname,'src/public/app.js'),
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].[hash].bundle.js',
	},
	devtool: 'source-map',
	module:{
		rules:[
			{
				test: /\.js$/,
			    loader: 'babel-loader',
			    exclude: /node_modules/
			},
			{
				test:/\.scss$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader:[
						{ loader:'css-loader', query:{sourceMap:true} },
						{ loader:'sass-loader' },//no preprocessor
					]
				})
			},
			{
		      include: /\.pug/,
		      loader: ['raw-loader', 'pug-html-loader']
		    }
		]
		
	},
	plugins:[
		new HtmlWebpackPlugin({
	        template: path.resolve(__dirname,'src/public/index.html'),
	        inject: 'body'
	      }),
		new CopyWebpackPlugin([{
	        from: path.resolve(__dirname,'src/public/index.html'),
	    }]),
	    new ExtractTextPlugin("styles.css")

	]
}