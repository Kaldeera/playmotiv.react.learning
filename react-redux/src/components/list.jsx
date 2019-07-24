
// https://community.devexpress.com/blogs/oliver/archive/2017/07/06/devextreme-react-grid-reduxified.aspx
// https://community.devexpress.com/blogs/oliver/archive/2017/07/12/devextreme-react-grid-plugin-basics.aspx

import {
  GroupingState,
  IntegratedGrouping,
} from '@devexpress/dx-react-grid';
import { 
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  TableColumnResizing,
  GroupingPanel 
} from '@devexpress/dx-react-grid-material-ui';
import { connect } from 'react-redux';
import { 
  useEffect,
  useState
} from 'react'
import { store } from '../store/store'
import { loadData } from '../actions/data'

const Component = (props) =>  {

  useEffect(() =>{ 
    store.dispatch(loadData())
  }, [loadData])

  const [ columnWidths, setColumnWidths ] = useState([
    { columnName: 'ID', width: 50 },
    { columnName: 'user_login', width: 120 },
    { columnName: 'display_name', width: 160 },
    { columnName: 'user_email', width: 240 },
    { columnName: 'roles', width: 120 }
  ])

  return <Grid
    rows={ props.list }
    columns={[
      { name: 'ID', title: 'ID' },
      { name: 'user_login', title: 'Login' },
      { name: 'display_name', title: 'Name' },
      { name: 'user_email', title: 'EMail' },
      { name: 'roles', title: 'Roles' }
    ]}>
    <GroupingState
      grouping={[
        { columnName: 'roles' } 
      ]}
    />
    <IntegratedGrouping />
    <Table />
    <TableColumnResizing
      columnWidths={ columnWidths }
      onColumnWidthsChange={ setColumnWidths } 
    />
    <TableHeaderRow />
    <TableGroupRow />
  </Grid>
};

const mapStateToProps = state => ({ list: state.data.list })
const List = connect(mapStateToProps)(Component)

export default List
