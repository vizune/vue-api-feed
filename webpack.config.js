module.exports = {
    module: {
      rules: [
            {
              test: /\.js?$/,
              loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // plugin omitted
  }