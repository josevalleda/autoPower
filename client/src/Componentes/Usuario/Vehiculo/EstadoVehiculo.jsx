import React from 'react'


let data = {
  estado: 3,
}

let estados = [
  {
    titulo: 'Agendamiento',
    estado: false
  },
  {
    titulo: 'Recepción del vehículo',
    estado: false
  },
  {
    titulo: 'Mecánico asignado',
    estado: false
  },
  {
    titulo: 'Recepción del vehículo',
    estado: false
  },
  {
    titulo: 'Revisión en progreso',
    estado: false
  },
  {
    titulo: 'Revisión completada',
    estado: false
  },
  {
    titulo: 'Entrega de vehículo',
    estado: false
  },
]

export function EstadoVehiculo() {

    estados = estados.map(function (dato, index) {
      if(index+1 === data.estado){
        dato.estado = true;
      }
      return dato;
    })

  return (
    <div className="container">
      <table>
        <tbody>
          {estados.map((estado,index) => (
            <tr key={index}>
              <td>{estado.estado ? 'X' : '' }</td>
              <td>{estado.titulo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
