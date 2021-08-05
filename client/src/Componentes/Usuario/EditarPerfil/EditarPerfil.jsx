import React from 'react'
export function EditarPerfil() {
  return (
    <div className="container">
      <div className="div_login">
        <h1>Editar pefil</h1>
        <input
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Usuario"
        ></input>
        <input
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Nombres"
        ></input>
        <input type="email" name="email" id="email" placeholder="Email"></input>
        <input
          type="password"
          name="clave"
          id="clave"
          placeholder="Contraseña"
        ></input>
        <button id="login" className="button_primary">
          Editar
        </button>
      </div>
    </div>
  )
}
