let verdadero = false

function AppLoop() {

  function cambiar() {
    verdadero = !verdadero
    AppLoop()
  }

  const VerdaderoFalso =
  React.createElement('div', {},
  [
    React.createElement('p', {}, verdadero ? 'verdadero' : 'falso'),
    React.createElement(CambioBtn, 
      {
       cambiar: cambiar,
       verdadero: verdadero 
      }, 
      React.createElement('button', 
      {
        onClick={cambiar}
      },
      'btn'
      ) 
    ),
  ]
  )

  ReactDOM.render(
    VerdaderoFalso,
    document.querySelector('#root')
  )
}