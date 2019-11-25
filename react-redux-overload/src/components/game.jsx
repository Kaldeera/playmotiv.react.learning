import React from 'react'
import { store } from '../store/store'
import ReactJson from 'react-json-view'
import { 
  dataLoadGame,
  dataToggleViewGameData
} from '../actions/data'

const Game = props =>  {

  const cargarDatos = ID => {

    store.dispatch(dataLoadGame(ID))
  }
  
  const toggleData = ID => {

    store.dispatch(dataToggleViewGameData(ID))
  }

  return <div className="Game">
    <div className="Title">
      <span className="Index">{ props.index + 1 }</span>
      <span className="Text">{ 
        props.internal_name ||
        props.internalname
     }</span>
    </div>
    <div className="Tools">
      {
        <span className="VerDatos"
          onClick={ () => toggleData(props.ID) }>Toggle Data</span>
      }
      {
        !props.dataloaded && 
        <span className="CargarDatos"
          onClick={ () => cargarDatos(props.ID) }>Load Data</span>
      }
    </div>
    {
      props.datavisible &&
      <ReactJson
        src={ props }
        collapsed={ true }
      />
    }
  </div>
};

export default Game
