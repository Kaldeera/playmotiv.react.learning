import React, { 
  useState,
  useEffect
} from "react"

const Comp = props => {

  const [slot, setSlot] = useState(Math.random()) 
  const [cambio, setCambio] = useState('valor inicial')

  useEffect(() => {

    console.log(cambio)

    const Interval = setInterval(() => {

      setSlot(Math.random())
    }, 1000)

    return () => {

      console.log('end')
    }

  }, [cambio])

  return (
    <div className='Comp'>
      Comp { slot }
      <a href="#" onClick={ () => setCambio(`otro valor ${ Math.random() }`) }>INVERT</a>
    </div>
  )
}

export default Comp
