const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

const configs = require('./webpack.config')
const app = require('express')()

configs.forEach(c => {
  const compiler = webpack(c)
  const devMiddleware = WebpackDevMiddleware(compiler, {
    publicPath: c.output.publicPath,
    quiet: true
  })
  const hotMiddleware = WebpackHotMiddleware(compiler, { log: false, heartbeat: 2000 });
  app.use(devMiddleware)
  app.use(hotMiddleware)
})

app.listen(3000, err => {
  if (err) throw err
  console.log('Compiled successfully!')
  console.log('You can view the application in browser.')
  console.log()
  console.log()
  console.log('Local: http://localhost:3000')
})
