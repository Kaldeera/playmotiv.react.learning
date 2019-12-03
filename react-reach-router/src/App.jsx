
import React from 'react'

import { Router } from '@reach/router'
import 'antd/dist/antd.less'
import './app.scss'

import Nav from './components/Nav'
import Bread from './components/Bread'

//COMPONENTS
let Home = () => <div>Bienvenido</div>
let Plantas = () => <div>Plantas</div>
let Animales = () => <div>Animales</div>
let Animal = props => <div>ID: {props.animalId}</div>

const App = () => {

  return (
    <div className='App'>
      <h1>React Router</h1>
      <Nav/>
      <Bread/>
      <Router>
        <Home path='/' />
        <Plantas path='plantas' />
        <Animales path='animales' />
        <Animal path='animales/:animalId' />
      </Router>
    </div>
  )
}

export default App