// Funcionalidades del Ecmascript 6
'use strict'

// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');

// *Cargamos el fichero app.js con la configuración de Express
var app = require('./app');

// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;

// Le indicamos a Mongoose que haremos la conexión con Promises
mongoose.Promise = global.Promise;

// Leemos un archivo llamado bbdd_conf en el que tenemos la ruta de conexion a nuestra base de datos
var fs = require('fs');
const bbdd_info = fs.readFileSync('bbdd_conf','utf8');


// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect(bbdd_info, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {

        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos se ha realizado correctamente")

        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(port, () => {
            console.log("servidor funcionando en http://localhost:"+port);
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));