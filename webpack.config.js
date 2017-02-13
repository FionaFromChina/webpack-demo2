/**
 * Created by fiona on 13/2/2017.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : {
        admin:'./admin/index.js',
        consumer :'./consumer/index.js'
    },
    output:{
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/',
        filename:'[name].bundle.js'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.SourceMapDevToolPlugin()
    ]
};
