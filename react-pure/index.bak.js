
const listItems = [
  'Elemento1',
  'Elemento2',
  'Elemento3',
  'Elemento4'
]

const rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "React Vanilla"),
    React.createElement('ul', {},
      listItems.map( (item, index) => (
        React.createElement(
          'li',
          { key: index },
          React.createElement(
            'a',
            { href: '#' },
            item,
          ),
        )
      ))
    )
  )

ReactDOM.render(
  rootElement,
  document.querySelector('#root')
)