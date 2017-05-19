module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: "/Users/jamo/sites/travel-hut/app/temp/scripts",
    filename: "App.js"
  },
  module: {
    loaders: [
        {
         loader: 'babel-loader',
         query: {
           presets: ['es2015']
         },
         test: /\.js$/,
         exclude: /node_modules/
        }
    ]
  }
}
