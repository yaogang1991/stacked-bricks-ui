const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/sb', createProxyMiddleware({ 
    target: 'http://140.143.94.99:8888/',
    changeOrigin: true
  }));
};