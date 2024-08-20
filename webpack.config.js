const path = require('path');

module.exports = {
  entry: './assets/index.js',  // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,  // Apply this rule to all .scss files
        use: [
          'style-loader',  // Injects styles into the DOM
          'css-loader',    // Resolves CSS imports
          {
            loader: 'postcss-loader',  // Process CSS with PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),  // Add vendor prefixes
                ],
              },
            },
          },
          'sass-loader',   // Compiles Sass to CSS
        ],
      },
    ],
  },
  devtool: 'source-map',  // Optional: For debugging
  mode: 'development',    // Set mode to 'production' for optimized builds
};
