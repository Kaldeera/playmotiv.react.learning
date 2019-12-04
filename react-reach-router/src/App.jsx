
import React from 'react'

import { 
  Router,
  createHistory,
  createMemorySource,
  LocationProvider
} from '@reach/router'
import 'antd/dist/antd.less'
import './App.scss'

import Nav from './components/Nav'
import Bread from './components/Bread'

//COMPONENTS
let Home = () => <div>ESTADISTICAS DE LA PARTIDA</div>
let Metaboxes = () => <div>TODOS LOS METABOXES</div>
let Metabox = props => <div>METABOX ID: {props.metaboxId}</div>

const App = () => {

  let source = createMemorySource("/")
  let history = createHistory(source)

  return (
    <div className='App'>
      <h1>React Router</h1>
      <LocationProvider history={history}>
        <Nav/>
        <Bread/>
        <Router>
          <Home path='/' />
          <Metaboxes path='metaboxes' />
          <Metabox path='metaboxes/:metaboxId' />
        </Router>
      </LocationProvider>
    </div>
  )
}

export default App