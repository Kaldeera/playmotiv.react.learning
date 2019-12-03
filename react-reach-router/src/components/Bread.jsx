
import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, Location } from '@reach/router'

import FIELDSCONFIG from '../fieldsconfig'

const Bread = () => {
  
  return (
    <Location>
      {
        ({location}) => {

          const path = location.pathname.split('/').filter(i=>i)
          const extraItems = path.map((name, idx) => {

            const url = path.slice(0, idx + 1).join('/')
            const metabox = FIELDSCONFIG.Data[FIELDSCONFIG.Data.findIndex(item => item.id === name)]
            const label = metabox ? metabox.title : name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <Breadcrumb.Item key={idx}>
                <Link to={url}>{label}</Link>
              </Breadcrumb.Item>
            )
          })
          const items = [
            <Breadcrumb.Item key={'home'}>
              <Link to={'/'}>Inicio</Link>
            </Breadcrumb.Item>
          ].concat(extraItems)

          return (
            <Breadcrumb style={{marginTop: 10, marginBottom: 10}}>
              {
                items
              }
            </Breadcrumb>
          )
        }
      }
    </Location>
  )
}


export default Bread