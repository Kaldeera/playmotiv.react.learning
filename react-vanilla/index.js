const el = React.createElement

function render() {
  
  const value = Math.floor(Math.random() * 10000)

  const App = el(
    'div',
    {
      className: 'App Otra'
    },
    [
      el('h1', { key: 0 }, `React Functions [ ${value} ]`),
      el(
        'div',
        {
          className: 'Level 1',
           key: 1
        },
        el('div', {}, [
          'LEVEL 1',
          el(
            'div',
            {
              className: 'Level 2'
            },
            'LEVEL 2',
            el(
              'div',
              {
                className: 'Level 3'
              },
              [
                'LEVEL 3',
                el(
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
