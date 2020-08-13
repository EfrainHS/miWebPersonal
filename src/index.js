 const express = require('express');
 const app = express();
 const path = require('path');
 const morgan = require('morgan');

 //Configuraciones
 app.set('port', 3000);
 app.set('views', path.join(__dirname, 'views'));
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'ejs');

 //Middleware
app.use(morgan('dev'));

//Variables globales
app.use((req, res, next)=>{
    next();
});
 //Rutas
 app.use(require('./routes/index')); 
 app.use(require('./routes/authentications'));
 
 //Archivos estaticos
 app.use(express.static(path.join(__dirname, 'public')));

 //Escuchando el servidor
 app.listen(app.set('port'), () => {
     console.log('Server en puerto', app.set('port'));
 });