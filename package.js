const fs = require('fs')
const pug = require('pug')
const requireDir = require('require-dir')

const content = requireDir('./content', {recurse: true})

// render and write file
fs.writeFile('./public/index.html', pug.renderFile('./public/components/app/index.pug', content.home), error => {
  if (error) console.log('Error rendering HTML', error)
  else console.log('Rendered HTML')
})
