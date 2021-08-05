const express = require('express')
const mysqlConnection = require('../database.js')

const router = express.Router();

//Constante con la ruta para usuarios
const URI_ARREGLOS = '/arreglos'


router.get(`${URI_ARREGLOS}`, (req, res) => {

    try {
        mysqlConnection.query('SELECT * FROM arreglo', [], (err, rows) => {
            if (!err) {
                res.json({
                    status: true,
                    message: 'Exitoso',
                    data: rows
                })
            } else {
                res.json({
                    status: false,
                    message: 'Error al obtener datos'
                })
            }
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: false,
            message: 'Error al obtener datos'
        })
    }

});


router.post(`${URI_ARREGLOS}/agregar`, (req, res) => {
    const {
        vehiculo,
        fecha,
        tipo_arreglo,
        taller
    } = req.body

    mysqlConnection.query('INSERT INTO arreglo (vehiculo, fecha, tipo_arreglo, taller) VALUES (?,?,?,?)', [vehiculo, fecha, tipo_arreglo, taller], (err, rows) => {
        if (!err) {
            res.json({
                status: true,
                message: 'Su arreglo ha sido agendado correctamente'
            })
        } else {
            console.log(err);
            res.json({
                status: true,
                message: 'Ocurrió un error al agendar, intente nuevamente, por favor'
            })
        }
    })

});


router.get(`${URI_ARREGLOS}/:idvehiculo`, (req, res) => {
    const {
        idvehiculo
    } = req.params

    try {
        mysqlConnection.query('SELECT * from arreglo as arr INNER JOIN vehiculo as veh ON arr.vehiculo = veh.idvehiculo WHERE idvehiculo = ?;', [idvehiculo], (err, rows) => {
            if (!err) {
                res.json({
                    status: true,
                    message: 'Su arreglo ha sido agendado correctamente',
                    data: rows
                })

            } else {
                console.log(err);
                res.json({
                    status: true,
                    message: 'Ocurrió un error al agendar, intente nuevamente, por favor'
                })
            }
        })
    } catch (error) {
        console.log(err);
        res.json({
            status: true,
            message: 'Ocurrió un error al agendar, intente nuevamente, por favor'
        })
    }
});



module.exports = router;