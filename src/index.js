const browserSync = require('browser-sync')

const server = browserSync.create()

server.init({
  proxy: 'https://simonfan.com.br/turquia-2019/',
  injectChanges: true,
  port: 8000,
  ui: {
    port: 8001
  }
})
