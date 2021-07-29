import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'



export function LoginUsuario(params) {
    return(
        <div className="div_login">
            <h1>Inciar Sesión</h1>
            <p className="text_secondary">Ingrese sus credenciales de usuario</p>
            <input type="text" name="usuario" id="usuario" placeholder="Usuario"></input>
            <input type="password" name="clave" id="clave" placeholder="Contraseña"></input>
            <button id="login" className="button_primary">Inciar Sesión</button>
            <Link to="/registro">¿Usuario nuevo ? <br/>¡Registrate dando click aquí!</Link>
            <Link to="/loginMecanico">Incio sesión mecánico</Link>
        </div>
    );
}