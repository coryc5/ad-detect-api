module.exports = {
  entry: './client/lib/index.js',
  output: {
    filename: './client/public/bundle.js'
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
