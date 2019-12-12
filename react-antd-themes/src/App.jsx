
import React, { useState } from 'react'

import { Drawer, Button, Carousel } from 'antd'
import 'antd/dist/antd.less'

const App = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <div className="App">
      <h1>Ant design themes</h1>
      <Button type="primary" onClick={()=>setOpen(true)}>
          Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={()=>setOpen(false)}
        visible={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Carousel autoplay>
        <div>
          <h3>Slide1</h3>
        </div>
        <div>
          <h3>Slide2</h3>
        </div>
        <div>
          <h3>Slide3</h3>
        </div>
        <div>
          <h3>Slide4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default App