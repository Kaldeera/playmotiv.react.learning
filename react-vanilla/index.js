const el = React.createElement

function render() {
  
  const value = Math.floor(Math.random() * 10000)

  const App = el(
    'div',
    {
      className: 'App Otra',
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
          el('span', { key: 2 }, 'LEVEL 1'),
          el(
            'div',
            {
              className: 'Level 2',
              key: 3
            },
            el('span', { key: 4 }, 'LEVEL 2'),
            el(
              'div',
              {
                className: 'Level 3',
                key: 5
              },
              [
                el('span', { key: 6 }, 'LEVEL 3'),
                el(
                  'button',
                  {
                    onClick: render,
                    key: 7
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
