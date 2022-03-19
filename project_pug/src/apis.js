const { listaProductos } = require('./productos')

const getAllProducts = () => {
    try {
        return listaProductos
    } catch (error) {
        console.log(error)
        return []
    }
}


const createNewProduct = (title, price, thumbnail) => {
    try {
        let idUltimoProducto = Math.max(...listaProductos.map(producto => producto.id))
        idUltimoProducto = idUltimoProducto += 1

        const nuevoProducto = {
            title,
            price,
            thumbnail,
            id: idUltimoProducto
        }
        listaProductos.push(nuevoProducto)
    } catch (error) {
        console.log('error:', error)
    }
}


module.exports = {
    getAllProducts,
    createNewProduct
}