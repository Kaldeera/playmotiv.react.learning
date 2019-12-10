
import React from 'react'

import { Router } from '@reach/router'
import 'antd/dist/antd.less'
import './app.scss'

import Nav from './components/Nav'
import Bread from './components/Bread'

//COMPONENTS

let Home = () => <div>ESTADISTICAS DE LA PARTIDA</div>
let Metaboxes = () => <div>TODOS LOS METABOXES</div>
let Metabox = props => <div>METABOX ID: {props.metaboxId}</div>

const App = () => {

  return (
    <div className='App'>
      <h1>React Router</h1>
      <Nav/>
      <Bread/>
      <Router>
        <Home path='/' />
        <Metaboxes path='metaboxes' />
        <Metabox path='metaboxes/:metaboxId' />
      </Router>
    </div>
  )
}

export default App