const browserSync = require('browser-sync')

const server = browserSync.create()

server.init({
  proxy: 'https://simonfan.com.br/turquia-2019/',
  injectChanges: true,
  port: 80,
  open: false,
  ui: false
})
