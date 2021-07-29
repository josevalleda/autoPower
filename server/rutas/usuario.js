const express = require('express')
const bcrypt = require('bcryptjs')
const mysqlConnection = require('../database.js')

const router = express.Router();

//Constante con la ruta para usuarios
const URI_USUARIOS = '/usuario'


//Ruta para crear un usuario
router.post(`${URI_USUARIOS}/registro`, (req, res) => {
    const {
        nombres,
        email,
        password,
        usuario
    } = req.body;
    const query = `INSERT INTO usuarios (nombres, email, password, usuario) VALUES (?, ?, ?, ?);`
    mysqlConnection.query(query, [nombres, email, bcrypt.hashSync(password, 10), usuario], (err, rows, fields) => {
        if (!err) {
            res.json({
                status: true,
                message: 'Registrado correctamente'
            })
        } else {
            console.log(err)
        }
    });
});



//Ruta para consultar todos los usuarios
router.get(`${URI_USUARIOS}`, (req, res) => {
    try {
        mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        });
    } catch (error) {
        console.error(error);
    }
});


//Ruta para consultar un usuario
router.get(`${URI_USUARIOS}/:usuario`, (req, res) => {
    try {
        const {
            usuario
        } = req.params
        mysqlConnection.query('SELECT nombres, email, usuario FROM usuarios WHERE usuario = ?;', [usuario], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0])
            } else {
                console.log(err)
            }
        });
    } catch (error) {
        console.error(error);
    }
});

//Ruta para loguear un usuario
router.post(`${URI_USUARIOS}/login`, (req, res) => {
    try {
        const {
            usuario,
            password
        } = req.body
        mysqlConnection.query('SELECT usuario, password FROM usuarios WHERE usuario = ?;', [usuario], (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0) {
                    bcrypt.compare(password, rows[0].password).then((result) => {
                        res.json({
                            tipo: rows[0].tipo,
                            result: result
                        })
                    })
                } else {
                    res.json({
                        result: false
                    })
                }
            } else {
                console.log(err)
            }
        });
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;