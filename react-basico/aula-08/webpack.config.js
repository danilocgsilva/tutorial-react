const webpack = require('webpack');
const path = require('path');

const config = {
	target: 'web',
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:8081',
			'webpack/hot/only-dev-server',
			path.join(__dirname, '/app/index.js'),
		],
	},

	output: {
		path: path.join(__dirname),
		filename: '[name].js',
		publicPath: '/',
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'source-map',
	debug: true,
	module: {
		loaders: [
				{
					test: /\.js(x)?$/,
					loaders: ['react-hot','babel-loader?stage=0',],
					exclude: /(node_modules)/,
					include: path.join(__dirname,'/app'),
				},
				{
					test: /\.json$/,
					loader: 'json-loader',
				},

		],
	},
};

module.exports = config;
