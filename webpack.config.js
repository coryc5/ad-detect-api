module.exports = {
  entry: './src/index.js',
  output: {
    filename: './example/public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
