
import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, Location } from '@reach/router'

const Bread = () => {

  const pathNames = {
    'plantas':'Plantas',
    'animales':'Animales',
    'animales/zebra':'Zebra',
    'animales/leon':'León',
    'animales/cocodrilo':'Cocodrilo',
    'animales/tortuga':'Tortuga',
  }  
  
  return (
    <Location>
      {
        ({location}) => {

          const path = location.pathname.split('/').filter(i=>i)
          const extraItems = path.map((item, idx) => {

            const url = path.slice(0, idx + 1).join('/')
            return (
              <Breadcrumb.Item key={idx}>
                <Link to={url}>{pathNames[url]}</Link>
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