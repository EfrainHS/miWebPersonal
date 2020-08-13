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

router.get('/experiencia', (req, res) =>{
    res.render('experiencia.html');
});

router.get('/login', (req, res) =>{
    res.render('login.html');
});

router.get('/add', (req, res) =>{
    res.render('add.html');
});

module.exports =router;