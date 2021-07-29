import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'


export function RegistroUsuario(params) {
    return(
        <div className="div_login">
            <h1>Registro</h1>
            <input type="text" name="usuario" id="usuario" placeholder="Usuario"></input>
            <input type="text" name="nombres" id="nombres" placeholder="Nombres"></input>
            <input type="email" name="email" id="email" placeholder="Email"></input>
            <input type="password" name="clave" id="clave" placeholder="Contraseña"></input>
            <button id="login" className="button_primary">Registrarme</button>
        </div>
    );
}