 //Rutas

 const express = require('express');
 const router = express.Router();

 router.get('/', (req, res) =>{
    res.render('index.html');
});

router.get('/contact', (req, res) =>{
    res.render('contact.html');
});

router.get('/portafolio', (req, res) =>{
    res.render('portafolio.html');
});

module.exports =router;