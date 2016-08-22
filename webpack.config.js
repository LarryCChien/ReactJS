var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');


var config = {
    entry: {
		main: [
			path.resolve(__dirname, 'app/main.js'),
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:9527',
		],
		todo: [
			path.resolve(__dirname, 'app/todo.js'),
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:9527',
		],
		todo: [
			path.resolve(__dirname, 'app/flux_todo.js'),
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:9527',
		]
	},
	resolve: {
        alias: {
			'react': pathToReact,
			'react-dom': pathToReactDOM
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
	module: {
		loaders: [{
			test: /\.jsx?$/, // 用正則表達式來匹配路徑，這段意思是匹配 js 或者 jsx
			exclude: /node_modules/,
			loader: 'babel-loader' // 加載模組 "babel-loader"
		}, {
			test: /\.css$/, // Only .css files
			loader: 'style!css' // Run both loaders
		}, {
			test: /\.scss$/,
			loader: 'style!css!sass'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000' //25kb以下的圖檔會轉成base64,大於的則會透過file-loader這個package載入
		}],
		noParse: [pathToReact]
	}
};

module.exports = config;