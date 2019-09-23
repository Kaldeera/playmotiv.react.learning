import React, {
  useState
} from 'react'
import {useTransition, animated} from 'react-spring'
import Componente from './componente'

const App = () => {

  const [items, setItems] = useState([<Componente />])
  const [visible, setVisible] = useState(true)
  const toggle = () => {

    const newVisible = !visible

    newVisible ?

      (setItems([<Componente />]))
      : 
      (setItems([]))

    setVisible(newVisible);
  }

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })

  return (
    <div className="App">
      <h1>APP</h1>
      <button onClick={ toggle }>TOGGLE</button>
      {
        transitions.map(({ item, props, key }) =>

          <animated.div key={key} style={props}>{ item }</animated.div>
        )
      }
    </div>
  )
}

export default App