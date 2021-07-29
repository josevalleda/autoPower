import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { BarraSup } from './Componentes/General/Navbar/BarraSup'
import { BarraInf } from './Componentes/General/Footer/BarraInf'
import { Home } from './Componentes/General/Home/Home'
import { Servicios } from './Componentes/General/Servicios/Servicios'
import { LoginUsuario } from './Componentes/General/Login/LoginUsuario'
import { LoginMecanico } from './Componentes/General/Login/LoginMecanico'
import { RegistroUsuario } from './Componentes/General/Registro/RegistroUsuario'







function App() {
  return (
    <Router>
      <div className="container_general">
        <BarraSup />
        <Switch>
          <Route path="/servicios">
            <Servicios/>
          </Route>
          <Route path="/como_funciona">
            <p>Como funciona</p>
          </Route>
          <Route path="/loginUsuario">
            <LoginUsuario/>
          </Route>
          <Route path="/loginMecanico">
            <LoginMecanico/>
          </Route>
          <Route path="/registro">
            <RegistroUsuario/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <BarraInf/>
      </div>
    </Router>
  )
}

export default App
