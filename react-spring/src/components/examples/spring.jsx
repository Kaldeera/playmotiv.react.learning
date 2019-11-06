import React, {
  useState
} from 'react'
import {
  useSpring,
  animated
} from 'react-spring'

const Spring = () => {

  const [visible, setVisible] = useState(true)
  const exampleSpring = useSpring({
    opacity: visible?1:0
  })

  const onClick = () => setVisible(state => !state)

  return (
    <div>
      <h2>useSpring</h2>
      <animated.div style={exampleSpring}>
        Fade component
      </animated.div>
      <button onClick={onClick}>Toggle</button>
    </div>
  )
}

export default Spring