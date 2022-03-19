const express = require('express')
const handlebars = require('express-handlebars')
const { getAllProducts, createNewProduct, } = require('./apis')

const app = express()
const PORT = 6060

// USES AND SETS
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: false,
    layoutsDir: __dirname + '/views/layouts'
}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/nuevoProducto', (req, res) => {
    res.render('nuevoProducto')
})

app.get('/productos', (req, res) => {
    res.render('listaProductos', { data: getAllProducts() })
})

app.post('/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    createNewProduct(title, price, thumbnail)
    res.redirect('/productos')
})

// SERVER
app.listen(PORT, () => {
    console.log('server a la escucha en el puerto', PORT)
})

app.on('error', () => {
    console.log('Sucedió un error al iniciar el servidor')
})