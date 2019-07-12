const createElement = React.createElement

function render() {
  const value = Math.floor(Math.random() * 10000)

  const App = createElement(
    'div',
    {
      className: 'App'
    },
    [
      createElement('h1', {}, `React Functions [ ${value} ]`),
      createElement(
        'div',
        {
          className: 'Level 1'
        },
        createElement('div', {}, [
          'LEVEL 1',
          createElement(
            'div',
            {
              className: 'Level 2'
            },
            'LEVEL 2',
            createElement(
              'div',
              {
                className: 'Level 3'
              },
              [
                'LEVEL 3',
                createElement(
                  'button',
                  {
                    onClick: render
                  },
                  'CHANGE'
                )
              ]
            )
          )
        ])
      )
    ]
  )

  ReactDOM.render(App, document.querySelector('#root'))
}

render()
