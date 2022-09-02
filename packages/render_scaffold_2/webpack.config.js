const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const exmapleEntries = glob.sync('./examples/**/*.ts');

let multipleHtmlPlugins = [];
const entriesMap = {};

exmapleEntries.forEach(entry => {
  const filename = path.parse(entry).name;
  
  multipleHtmlPlugins.push(
    new HtmlWebpackPlugin({
      template: 'examples/index.html',
      filename: `${filename}.html`,
      chunks: [`${filename}`],
    })
  );

  entriesMap[`${filename}`] = entry;
});


module.exports = {
  mode: 'development',
  entry: entriesMap,
  devServer: {
    hot: true,
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateContent: `
        <html>
          <body>
            <h1>Vital examples</h1>
            <ul>
              ${Object.keys(entriesMap).map(entry => `<li><a href="./${entry}.html">${entry}</a>`).join('\n')}
            </ul>
          </body>
        </html>
      `
    })
  ].concat(multipleHtmlPlugins),
};