var fs = require('fs')
var path = require('path')
var sass = require('node-sass')

var file = path.join(__dirname, 'src/gel-grid.scss')
var includeNodeModules = path.join(__dirname, 'node_modules')

module.exports = {
  generate: function() {
    var minified = sass.renderSync({
      file: file,
      includePaths: [includeNodeModules],
      outputStyle: 'compressed',
    })

    var expanded = sass.renderSync({
      file: file,
      includePaths: [includeNodeModules],
      outputStyle: 'expanded'
    })

    return {
      css: expanded.css.toString(),
      min: minified.css.toString()
    }
  }
}
