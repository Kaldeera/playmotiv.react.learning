
import React, { useState } from 'react'

import { Link } from '@reach/router'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

const Nav = () => {

  const [current, setCurrent] = useState(['home'])
  
  return (
    <Menu onClick={e => setCurrent([e.key])} selectedKeys={current} mode='horizontal'>
      <Menu.Item key='home'>
        <Link to='/'>Inicio</Link>
      </Menu.Item>
      <Menu.Item key='plantas'>
        <Link to='plantas'>Plantas</Link>
      </Menu.Item>
      <SubMenu
          title={
            <span className='submenu-title-wrapper'>
              <Icon type="caret-down" />Animales
            </span>
          }
        >
          <Menu.Item key='animales'>
            <Link to='animales'>Todos</Link>
          </Menu.Item>
          <Menu.ItemGroup title='Mamíferos'>
            <Menu.Item key='mamiferos:zebra'>
              <Link to='animales/zebra'>Zebra</Link>
            </Menu.Item>
            <Menu.Item key='mamiferos:leon'>
              <Link to='animales/leon'>León</Link> 
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Reptíles'>
            <Menu.Item key='reptiles:cocodrilo'>
              <Link to='animales/cocodrilo'>Cocodrilo</Link>
            </Menu.Item>
            <Menu.Item key='reptiles:tortuga'>
              <Link to='animales/tortuga'>Tortuga</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
    </Menu>
  )
}


export default Nav