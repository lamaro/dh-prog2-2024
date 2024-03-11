const express = require('express')
const router = express.Router()


const autos = {
    lista: [
      { marca: 'Toyota', modelo: 'Corolla', anio: 2020, color: 'Rojo' },
      { marca: 'Ford', modelo: 'Mustang', anio: 2019, color: 'Azul' },
      { marca: 'Honda', modelo: 'Civic', anio: 2022, color: 'Negro' },
      { marca: 'Toyota', modelo: 'Camry', anio: 2021, color: 'Blanco' },
      { marca: 'Ford', modelo: 'Fusion', anio: 2020, color: 'Rojo' },
      { marca: 'Chevrolet', modelo: 'Malibu', anio: 2021, color: 'Azul' },
      { marca: 'Honda', modelo: 'Accord', anio: 2019, color: 'Negro' },
      { marca: 'Toyota', modelo: 'RAV4', anio: 2022, color: 'Blanco' },
      { marca: 'Chevrolet', modelo: 'Cruze', anio: 2020, color: 'Rojo' },
      { marca: 'Ford', modelo: 'Escape', anio: 2021, color: 'Azul' },
    ],
  };
  

const getAllProducts = function (req, res){
    res.send(`Hola estos son los productos`)
}

const destacados = function (req, res){
    res.send(`Hola estos son los productos destacados`)
}

router.get('/', getAllProducts)
router.get('/featured', destacados)

router.get('/:productId',function (req, res){
    const id = req.params.productId
    res.send(`Estos son los datos del producto ${id}`)
})
router.get('/details/:productId?',function (req, res){
    const id = req.params.productId
    res.send(`Estos son los detalles del producto ${id}`)
})

module.exports = router;
