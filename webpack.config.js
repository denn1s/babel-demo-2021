
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
      }
    ],
  },
  devServer: {
    contentBase: './dist',
  },
}