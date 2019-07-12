
import React from "react"
import ReactDOM from "react-dom"

let verdadero = false

const AppLoop = () => {

  const CambioBtn = (props) => {

    return <button onClick={ props.cambiar }>{ props.verdadero ? 'falso' : 'verdadero' }</button>
  }
  
  const VerdaderoFalso = () => {

    const cambiar = () => {
      verdadero = !verdadero
      AppLoop()
    }
  
    return (
      <>
        <p>{ verdadero ? 'verdadero' : 'falso' }</p>
        <CambioBtn cambiar={ cambiar } verdadero={ verdadero }/>
      </>
    )
  }
  
  ReactDOM.render(<VerdaderoFalso />, document.querySelector("#root"))
}

AppLoop()