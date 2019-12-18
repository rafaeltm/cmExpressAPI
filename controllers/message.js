'use strict'

// Cargamos los modelos para usarlos posteriormente
var Message = require('../models/message');


exports.getMessages = function (req, res) {
    Message.find({}).sort('-date').exec(function (err, MessagesObj) {
        if (err) {
            console.log(err);
            res.status(404).send({
                error: 'NOT FOUND'
            })
        } else {
            return res.status(200).send({
                MessagesObj
            });
        }
    });
}

// Get messages por UID
// ...

exports.postMessage = function (req, res) {
    Message.create(req.body, function (err, newMessage) {
        if (err) {
            return res.status(500).send({
                body: req.body,
                error: 'Server error'
            });
        }
        return res.status(201).send({
            newMessage
        });
    })
}