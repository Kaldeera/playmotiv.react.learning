import React, {
  useState
} from 'react'
import {
  useTrail,
  animated
} from 'react-spring'

const components = [
  ({ style }) => <animated.div style={style}>Component 1</animated.div>,
  ({ style }) => <animated.div style={style}>Component 2</animated.div>,
  ({ style }) => <animated.div style={style}>Component 3</animated.div>,
  ({ style }) => <animated.div style={style}>Component 4</animated.div>,
  ({ style }) => <animated.div style={style}>Component 5</animated.div>,
]

const Trail = () => {

  const [visible, setVisible] = useState(true)
  const exampleTrail = useTrail(components.length, {
    opacity: visible?1:0,
    transform: visible?'translate3d(0,0,0)':'translate3d(10%,0,0)',
    from: {
      transform: 'translate3d(10%,0,0)'
    }
  })

  const onClick = () => setVisible(state => !state)

  return (
    <div>
      <h2>useTrail</h2>
      {
        exampleTrail.map((props, index) => {
          
          const Component = components[index]
          return <Component key={index} style={props} />
        })
      }
      <button onClick={onClick}>Toggle</button>
    </div>
  )
}

export default Trail