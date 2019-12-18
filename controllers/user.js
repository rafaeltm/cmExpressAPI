'use strict'

// Cargamos los modelos para usarlos posteriormente
var User = require('../models/user');

// Obtener un usuario dado un ID
exports.getUser = function (req, res) {
    User.findById(req.params.id).exec(function (err, userObj) {
        // Si la peticion tiene algun error...
        if (err) {
            console.log(err);
            res.status(500).send({
                error: 'Request error'
            })
        } else if (!userObj) { // Si no encontramos el objeto
            res.status(404).send({
                error: 'Not found'
            })
        } else { // Podemos modificar el objeto antes de devolverlo, por ejemplo, quitando elementos.
            userObj.password = undefined;
            return res.status(200).send({
                userObj
            });
        }
    });
}

// Introducir un nuevo usuario
exports.postUser = function (req, res) {
    var uName = req.body.name;
    var uMail = req.body.email;
    var uHash = req.body.pHash;
    if (!(uName && uMail && uHash) || uName.length === 0 || uMail.length === 0 || uHash.length === 0) {
        return res.status(400).send({
            error: 'Missing fields'
        })
    } else {
        User.create(req.body, function(err, newUser) {
            if(err) {
                return res.status(500).send({
                    body: req.body,
                    error: 'Server error'
                });
            } else {
                res.status(201).send({
                    newUser
                })
            }
        })
    }
} 
