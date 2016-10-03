module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["react", "es2015"],
        plugins: ["transform-object-rest-spread"]
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '/api': {
        target: {
          host: "0.0.0.0",
          protocol: 'http:',
          port: 8000
        },
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
