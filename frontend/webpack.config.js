const isProd = false;//(process.env.NODE_ENV === 'production');

if (!isProd) {
    module.exports = require('./webpack.dev.js');
} else {
    module.exports = require("./webpack.prod.js");
}