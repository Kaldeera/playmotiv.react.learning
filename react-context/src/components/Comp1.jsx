import React, {
  useEffect,
  useState,
  useContext
} from 'react'

import globalContext from '../globalContext'

const Comp1 = () => {

  const { methods, setMethods } = useContext(globalContext)

  const [ randomNum, setRandomNum ] = useState(Math.random())

  const randomize = ()=>setRandomNum(Math.random())

  useEffect(() => {

    setMethods({...methods, comp1: { randomize }}) //add methods to global context
  }, [])

  return (
    <>
      <h2>Component 1</h2>
      <p>{randomNum}</p>
    </>
  )
}

export default Comp1