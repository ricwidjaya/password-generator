// Load express.js
const express = require('express')
const app = express()
const generatePassword = require('./generate_password')
const port = 3000

// Set template engine to handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

// Serve static files
app.use(express.static('public'))

// Body parser
app.use(express.urlencoded({ extended: true }))

// Landing page
app.get('/', (req, res) => {
  res.render('index', {
    style: 'index.css'
  })
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', {
    style: 'index.css',
    options,
    password
  })
})


// Listen requests and start server
app.listen(port, () => {
  console.log('Server Started')
})