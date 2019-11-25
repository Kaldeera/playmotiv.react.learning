
import React from 'react'

import { Button } from 'antd';
import 'antd/dist/antd.less';

const App = () => {

  return (
    <div className="App">
      <h1>Ant design themes</h1>
      <Button type={'danger'}>Danger</Button>
      <Button type={'primary'}>Primary</Button>
      <Button type={'secondary'}>Secondary</Button>
    </div>
  )
}

export default App