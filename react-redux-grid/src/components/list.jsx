
import { createElement } from 'react'
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux'
import 'react-tabulator/lib/styles.css'
import 'react-tabulator/lib/css/tabulator_simple.min.css' // theme
import { ReactTabulator } from 'react-tabulator'
import React, { 
  useEffect,
  useRef
} from 'react'
import { store } from '../store/store'
import { loadData } from '../actions/data'

// http://tabulator.info/docs/4.2/columns

const columns = [
  { field: 'ID', title: 'ID', width: 60},
  { field: 'user_login', title: 'Login', width: 120 },
  { field: 'display_name', title: 'Name', width: 150 },
  { field: 'user_email', title: 'EMail' },
  { field: 'comments', title: 'Comments', editor: 'input' }
]

const ListComponent = (props) =>  {
    
  const tabulator = useRef(null)

  useEffect(() =>{

    store.dispatch(loadData())

    const table = tabulator.current.table

  }, [loadData])

  return <div className="Grid">
    <ReactTabulator
      ref={ tabulator }
      data={ props.list }
      columns={ columns }
      options={{
        height: '100%',
        tooltips: true,
        groupBy: ['Level 1', 'Level 2'],
        layout: 'fitColumns',
        responsiveLayout: 'collapse',
        groupHeader: (value, count, data) => {
            
          const el = createElement(
            'span',
            {
              className: 'HEADER'
            },
            'HEADER'
          )

          return ReactDOMServer.renderToString(el)
        }
      }}
    />
  </div>
}

const mapStateToProps = state => ({ list: state.data.list })
const List = connect(mapStateToProps)(ListComponent)

export default List
