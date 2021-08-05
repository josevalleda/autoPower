import React from 'react'

let autos = [
  {
    idvehiculo: 3,
    nombre: 'Carro2',
    marca: 'mazda',
    modelo: '2012',
    color: 'rojo',
    propietario: 2,
    estado: 0,
  },
  {
    idvehiculo: 4,
    nombre: 'Carro2',
    marca: 'mazda',
    modelo: '2012',
    color: 'rojo',
    propietario: 2,
    estado: 0,
  },
]

let tipo_arreglo = [
    {
        titulo: "Mecánica básica"
    },
    {
        titulo: "Mecánica especializada"
    },
    {
        titulo: "Revisión Automotriz"
    },
    {
        titulo: "Estética Automotriz"
    }
]

let talleres = [
    {
        id: 1,
        descripcion: 'Cienaga, Calle 3'
    },
    {
        id: 2,
        descripcion: 'Cienaga, Calle 2'
    },
    {
        id: 3,
        descripcion: 'Cienaga, Calle 1'
    },
]

export function AgendarArreglo() {
  return (
    <div className="container">
      <select id="auto_agendar">
        <option disabled>Seleccione un auto</option>
        {autos.map((auto) => (
          <option value={auto.idvehiculo}>
            {auto.nombre + ' - ' + auto.marca}
          </option>
        ))}
      </select>
      <select id="tipo_arreglo_agendar">
        <option disabled>Seleccione un tipo de arreglo</option>
        {tipo_arreglo.map((tipo) => (
          <option value={tipo.titulo}>
            {tipo.titulo}
          </option>
        ))}
      </select>
      <select id="taller_agendar">
        <option disabled>Seleccione un taller</option>
        {talleres.map((taller) => (
          <option value={taller.id}>
            {taller.descripcion}
          </option>
        ))}
      </select>

      <input type="date" id="start" name="trip-start"></input>

      <button className="button_primary">Agendar</button>
    </div>
  )
}
