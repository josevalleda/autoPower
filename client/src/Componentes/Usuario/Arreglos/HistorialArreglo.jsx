import React from 'react'

let data = [
  {
    idarreglo: 1,
    vehiculo: 3,
    fecha: '2021-08-02T05:00:00.000Z',
    tipo_arreglo: 'asdasda',
    taller: 1,
    precio: 0,
    idvehiculo: 3,
    nombre: 'Carro2',
    marca: 'mazda',
    modelo: '2012',
    color: 'rojo',
    propietario: 2,
    estado: 0,
  },
  {
    idarreglo: 3,
    vehiculo: 3,
    fecha: '2021-08-06T05:00:00.000Z',
    tipo_arreglo: 'Arreglo de nada',
    taller: 1,
    precio: 0,
    idvehiculo: 3,
    nombre: 'Carro2',
    marca: 'mazda',
    modelo: '2012',
    color: 'rojo',
    propietario: 2,
    estado: 0,
  },
]

export function HistorialArreglo() {
  return (
    <div className="container">
      <table>
        <thead>
          <th>Automovil</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Taller</th>
          <th>Fecha</th>
          <th>Precio</th>
        </thead>
        <tbody>
          {data.map((arreglo) => (
            <tr>
              <td>{arreglo.nombre}</td>
              <td>{arreglo.marca}</td>
              <td>{arreglo.modelo}</td>
              <td>{arreglo.taller}</td>
              <td>{arreglo.fecha}</td>
              <td>${arreglo.precio} COP</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
