import React from 'react'

export function AgregarVehiculo() {
  return (
    <div className="container">
      <div className="div_login">
        <h1>Agregar vehiculo</h1>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
        ></input>
        <input
          type="text"
          name="marca"
          id="marca"
          placeholder="Marca"
        ></input>
        <input
          type="text"
          name="modelo"
          id="modelo"
          placeholder="Modelo"
        ></input>
        <input
          type="text"
          name="color"
          id="color"
          placeholder="Color"
        ></input>
        <button id="login" className="button_primary">
          Agregar vehiculo
        </button>
      </div>
    </div>
  )
}
