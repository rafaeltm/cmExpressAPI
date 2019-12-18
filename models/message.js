"use strict"; 

// Cargamos el módulo de mongoose
var mongoose = require("mongoose"); 
// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var MessageSchema = Schema({
  title: String,
  date: {type: Date, 'default': Date.now},
  body: String,
  uid: String
}); 

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model("Message", MessageSchema);
