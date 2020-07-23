const path = require(`path`);

module.exports = {

  entry: {
    app: `./source/js/index.js`,
  },
  mode: `production`,
  output: {
    path: path.resolve(__dirname, `build/js`),
    filename: `script.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: `babel-loader`,
            options: {
              presets: [[`@babel/preset-env`, {
                debug: true,
                useBuiltIns: `usage`,
                corejs: 3
              }]]
            }
          }
        ]
      },
    ],
  },
  devtool: `source-map`
};
