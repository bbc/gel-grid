var fs = require('fs')
var path = require('path')
var sass = require('node-sass')

var file = path.join(__dirname, 'src/gel-grid.scss')

module.exports = {
  generate: function() {
    var minified = sass.renderSync({
      file: file,
      outputStyle: 'compressed',
    })

    var expanded = sass.renderSync({
      file: file,
      outputStyle: 'expanded'
    })

    return {
      css: expanded.css.toString(),
      min: minified.css.toString()
    }
  }
}
