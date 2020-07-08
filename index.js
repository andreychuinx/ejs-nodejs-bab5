const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product')
const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', 'view')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'view')))
app.use('/admin', productRoutes)

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'view', '404.ejs'))
  res.status(404).render('404', { pageTitle: 'Page Not Found', pageHeader: 'test'})
})
app.listen(3000)