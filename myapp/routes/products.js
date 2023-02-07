const express = require('express');
var router = express.Router();
var Products = require('../products.json');

//question 6
router.get('/', function(req, res, next) {
    res.json(Products)
  });

//question 7
router.get('/:id', (req, res, next)=> {
    res.json( Products[req.params.id] ) ;
});

//question 8
router.get('/:id/:qt', (req, res, next)=> {
    res.json({
        id: req.params.id,
        qt: req.params.qt,
        unit_price: Products[req.params.id].price,
        total_price: Products[req.params.id].price * req.params.qt
    }

        ) ;
});

//question 9
  router.get('/instock/:qt', (req, res, next) => {
    const foudedProducts = Object.values(Products).filter(prod => prod.stock > req.params.qt);
    res.json(foudedProducts);
});
module.exports = router;