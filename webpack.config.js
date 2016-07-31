var path = require('path');


module.exports = {
    entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:9527',
		path.resolve(__dirname, 'app/main.js')
	],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};