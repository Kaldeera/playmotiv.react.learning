import React, {
  useState
} from 'react'
import {
  useTransition,
  animated
} from 'react-spring'

import './scss/transition.scss'

const components = [
  ({ style }) => <animated.div style={style}>Component 1</animated.div>,
  ({ style }) => <animated.div style={style}>Component 2</animated.div>,
  ({ style }) => <animated.div style={style}>Component 3</animated.div>,
]

const Transition = () => {

  const [index, setIndex] = useState(0)
  const exampleTransition = useTransition(index, p => p, {
    from: { position: 'absolute', opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' }
  })

  const onClick = () => setIndex(state => (state + 1) % 3)

  return (
    <div>
      <h2>useTransition</h2>
      <div className='transitionContainer' >
      {
        exampleTransition.map(({ item, props, key }) => {
          
          const Component = components[item]
          return <Component key={key} style={props} />
        })
      }
      </div>
      <button onClick={onClick}>next >></button>
    </div>
  )
}

export default Transition