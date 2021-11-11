// Load express.js
const express = require('express')
const app = express()
const port = 3000

// Set template engine to handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

// Serve static files
app.use(express.static('public'))


// Landing page
app.get('/', (req, res) => {
  res.render('index', {
    style: 'index.css'
  })
})


// Listen requests and start server
app.listen(port, () => {
  console.log('Server Started')
})