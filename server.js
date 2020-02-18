// server.js
  
  const express = require('express')
  const app = express()
  var os = require('os')
  
  app.get('/', (req, res) => {
      res.send(os.hostname())
  })
  
  app.listen(3000, () => {
      console.log('Server is up on 3000')
  })
