const path = require(`path`);
const webpack = require(`webpack`);

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
                useBuiltIns: `entry`,
                corejs: 3,
              }]]
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: `jquery`,
      jQuery: `jquery`
    }),
  ],
  devtool: `source-map`
};
