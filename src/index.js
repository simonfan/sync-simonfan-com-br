const path = require('path')
const browserSync = require('browser-sync')

const server = browserSync.create()

server.init({
  // proxy: 'https://simonfan.com.br/turquia-2019/',
  server: path.join(__dirname, '../build'),
  injectChanges: true,
  port: process.env.PORT || 4000,
  open: false,
  ui: false
})
