import React, {
  useState
} from 'react'
import { 
  Drawer, 
  Button
} from 'antd'
import 'antd/dist/antd.less'

const App = () => {

  const width = 600

  const [visible, setVisible] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  })  

  const setState = (index, state) => setVisible({
    ...visible,
    [index]: state
  }) 

  return (
    <div className="App">
      <div className="Drawers">
        <div className="Drawer">
          <Drawer
            title="Level 1"
            width={ width }
            closable={ true }
            onClose={ () => setState(0, false) }
            visible={ visible[0] }
            getContainer={ false }
          >
            <div className="Drawer">
              <Drawer
                title="Level 2"
                width={ width }
                closable={ true }
                onClose={ () => setState(1, false) }
                visible={ visible[1] }
                getContainer={ false }
              >
                <div className="Drawer">
                  <Drawer
                    title="Level 3"
                    width={ width }
                    closable={ true }
                    onClose={ () => setState(2, false) }
                    visible={ visible[2] }
                    getContainer={ false }
                  >
                    <div className="Drawer">
                      <Drawer
                        title="Level 4"
                        width={ width }
                        closable={ true }
                        onClose={ () => setState(3, false) }
                        visible={ visible[3] }
                        getContainer={ false }
                      >
                      </Drawer>
                    </div>
                  </Drawer>
                </div>
              </Drawer>
            </div>
          </Drawer>
        </div>
      </div>
      <div className="Nav">
        <div className="Level Level1">
          {
            visible[0] &&
            <div className="Level Level2">
              {
                visible[1] &&                
                <div className="Level Level3">
                  {
                    visible[2] &&
                    <div className="Level Level4">
                      <button onClick={ () => setState(3, true)}>3</button>
                    </div>
                  }  
                  <button onClick={ () => setState(2, true)}>3</button>     
                </div>   
              }        
              <button onClick={ () => setState(1, true)}>2</button>   
            </div>
          }       
          <button onClick={ () => setState(0, true)}>1</button>  
        </div>
      </div>
    </div>
  )
}

export default App