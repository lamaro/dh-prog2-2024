const autos = require('../db/autos.js')
const controller = {
    index: function (req, res) {
    return res.render('listaAutos', {title: 'Lista de autos', autos: autos});
  },
    brand: function ( req, res ) {
        const brand = req.params.brand
        const result = []

        for (let i = 0; i < autos.length; i++) {
            if(autos[i].marca.toLowerCase() === brand.toLowerCase()){
                result.push(autos[i])
            } 
        }
        if(result.length == 0 ){
            return res.send('no hay autos encontrados')
        }
        return res.send(result)
    }
  
};

module.exports = controller;
