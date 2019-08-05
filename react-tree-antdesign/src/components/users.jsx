import React,
{
  useState
} from 'react'
import {
  Table,
  Divider,
  Select,
  Spin
} from 'antd'
import debounce from 'lodash/debounce';
import {
  IconButton,
  FormFileUpload
} from '@wordpress/components'
const { Option } = Select

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Unique name',
    dataIndex: 'slug',
    key: 'slug'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-Mail',
    dataIndex: 'user_email',
    key: 'user_email',
  }
]

// Remote select

const UserRemoteSelect = props => {

  const [data, setData] = useState([])
  const [value, setValue] = useState([])
  const [fetching, setFetching] = useState(false)
  const fetchUser = value => {

    setFetching(true)

    fetch(`https://dev.playmotiv.cloud/wp-json/wp/v2/users?search=${ value }`)
      .then(response => response.json())
      .then(body => {

        setData(
          body.map(
            user => ({
              text: user.name,
              value: user.slug,
            }
          ))
          .filter(user => {
            
            return !props.selectedGroup.users
            .find(groupUser => groupUser.slug == user.slug)
          })
        )

        setFetching(false)
      });
  };
  const fetchUserDeb = debounce(fetchUser, 400)  
  const handleChange = value => {

    setValue(value)
    setData([])
    setFetching(false)
  }
  const addUsers = () => {

    props.addUsers(value)
    setValue([])
  }

  return <div className="MoreUsers">
    <Select
      mode="multiple"
      labelInValue
      value={ value }
      placeholder="Select users"
      notFoundContent={ fetching ? <Spin size="small" /> : null }
      filterOption={ false }
      onSearch={ fetchUserDeb }
      onChange={ handleChange }
      style={{ width: '100%' }}
    >
      { data.map(d => <Option key={d.value}>{d.text}</Option> ) }
    </Select>    
    <IconButton
      icon="plus"
      title="Añadir users"
      onClick={ addUsers }
    />
  </div>
}

const Users = props => {  
  
  const [fileName, setFileName] = useState('')
  const handleChange = (event) => {

    setFileName(event.target.value.split('\\')[2])

    props.uploadGroupUsersFile(event.target.files[0])
  }

  return (
    <>
      <div className="Group">
        { (props.selectedGroup && props.selectedGroup.name) || 'Grupo' }
      </div>
      <div className={ `Upload ${ props.uploadingGroupUsersFile ? 'Disabled' : '' }` }>
        <FormFileUpload
          accept={ props.accept }
          onChange={ handleChange }
          disabled={ props.uploadingGroupUsersFile }
        >
          Upload
        </FormFileUpload>
        <div className="FileName">{ fileName }</div>
      </div>
      <UserRemoteSelect { ...props }/>
      <Table
        rowKey='slug'       
        columns={ columns }
        dataSource={ (props.selectedGroup && props.selectedGroup.users) || []  }      
      />
    </>
  )
}

export default Users