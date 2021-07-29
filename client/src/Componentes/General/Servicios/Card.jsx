import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'

export function Card({ info }) {
  const { titulo, descripcion, imagen } = info

  return (
    <div className="card">
      <div><img className="card_img" src={imagen} alt={titulo}/></div>
      <div><h3>{titulo}</h3></div>
      <div>{descripcion}</div>
    </div>
  )
}
