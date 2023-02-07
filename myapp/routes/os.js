const express = require('express')

var os = require("os");
var router = express.Router();


router.get('/', (req, res, next)=> {
    res.json( {
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform()
    }) ;
});
//question 3
router.get('/cpus', (req, res, next)=> {
    res.json( {
        model: os.cpus()
    }) ;
});
//question 4
router.get('/cpus/:id', (req, res, next)=> {
    res.json( {
    model: os.cpus()[req.params.id]
    }) ;
});



module.exports=router;
