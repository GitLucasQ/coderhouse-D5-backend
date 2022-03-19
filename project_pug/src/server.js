const express = require('express')
const { getAllProducts, createNewProduct, } = require('./apis')

const app = express()
const PORT = 8080

// USES AND SETS
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/nuevoProducto', (req, res) => {
    res.render('nuevoProducto.pug')
})

app.get('/productos', (req, res) => {
    res.render('listaProductos.pug', { data: getAllProducts() })
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