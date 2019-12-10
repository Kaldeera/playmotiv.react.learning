
import React, { useState } from 'react'

import { Link } from '@reach/router'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

import FIELDSCONFIG from '../fieldsconfig'

const Nav = () => {

  const [current, setCurrent] = useState(['home'])

  return (
    <Menu onClick={e => setCurrent([e.key])} selectedKeys={current} mode='horizontal'>
      <Menu.Item key='home'>
        <Link to='/'>Inicio</Link>
      </Menu.Item>
      <SubMenu
          title={
            <span className='submenu-title-wrapper'>
              <Icon type="caret-down" />Configuración
            </span>
          }
        >
          <Menu.Item key='metaboxes'>
            <Link to='metaboxes'>Todos</Link>
          </Menu.Item>
          {
            FIELDSCONFIG.Data.map(metabox => (
              <Menu.Item key={metabox.id}>
                <Link to={`metaboxes/${metabox.id}`}>{metabox.title}</Link>
              </Menu.Item>
            ))
          }
        </SubMenu>
    </Menu>
  )
}


export default Nav