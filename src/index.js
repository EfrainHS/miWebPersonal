 const express = require('express');
 const app = express();
 const path = require('path');

 //Configuraciones
 app.set('port', 3000);
 app.set('views', path.join(__dirname, 'views'));
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'ejs');

 //Middleware

 //Rutas
 app.use(require('./routes/index')); 
 
 //Archivos estaticos
 app.use(express.static(path.join(__dirname, 'public')));

 //Escuchando el servidor
 app.listen(app.set('port'), () => {
     console.log('Server en puerto', app.set('port'));
 });