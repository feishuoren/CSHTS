module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname + '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: 'style!css'},
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
    ]
  }
};
