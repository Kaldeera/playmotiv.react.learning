import React,
{
  useState
} from 'react'
import { 
  Tree,
  Select,
  Spin
} from 'antd'
import debounce from 'lodash/debounce';
import 'antd/dist/antd.css'
import {
  IconButton
} from '@wordpress/components'
const { TreeNode } = Tree
const { Option } = Select

// Remote select

const UserRemoteSelect = props => {

  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState(props.item.managers)
  const [fetching, setFetching] = useState(false)

  let lastFetchId = 0
  const fetchUser = value => {

    lastFetchId += 1;

    const fetchId = lastFetchId;

    setUsers([])
    setFetching(true)

    fetch('https://dev.playmotiv.cloud/wp-json/wp/v2/users')
      .then(response => response.json())
      .then(body => {

        if (fetchId !== lastFetchId) return

        const loadedUsers = body.map(user => ({
          text: user.name,
          value: user.slug,
        }));
        setUsers(users)
        setFetching(false)
      });
  };
  const fetchUserDeb = debounce(fetchUser, 800)  
  const handleChange = value => {

    setValue(value)
    setData([])
    setFetching(false)
  }

  return <Select
    mode="multiple"
    labelInValue
    value={ selectedUsers.map(user => {

        return {
          key: user.slug,
          label: user.name
        }
      })
    }
    placeholder="Select users"
    notFoundContent={ fetching ? <Spin size="small" /> : null }
    filterOption={ false }
    onSearch={ fetchUserDeb }
    onChange={ handleChange }
    style={{ width: '100%' }}
  >
    { 
      users.map(user => <Option
        key={ user.slug }>
        { user.name }
      </Option>) 
    }
  </Select>
}

// Tree Editor

const GroupEditor = props => {

  if(!props.item) return <></>

  const [name, setName] = useState(props.item.name)
  const [editingManagers, setEditingManagers] = useState(false)

  return <>
    <input
      type="text"
      value={ name }
      placeholder="Group name"
      onChange={ event => setName(event.target.value) }
      onBlur={ event => props.updateGroup({ 
        ...props.item,
        title: event.target.value
      }) }
    />    
    { editingManagers && <UserRemoteSelect item={ props.item }/> }
    <IconButton
      icon="no-alt"
      title="Remove"
      onClick={ event => props.removeGroup(props.item) }
    />
    { !editingManagers && <IconButton
      icon="admin-users"
      title="Manager/s"
      onClick={ event => setEditingManagers(true) }
    /> }
    { editingManagers && <IconButton
      icon="yes"
      title="Manager/s"
      onClick={ event => setEditingManagers(false) }
    /> }
    <IconButton
      icon="groups"
      title="Users"
      onClick={ event => props.selectGroup(props.item) }
    />
  </>
}

// List to tree nodes

const treeData = (props, id) => {

  const itemId = id || 0
  const children = props.groupsList.filter(item => item.parent == itemId)

  return children.map(item => <TreeNode 
    key={ item.id }
    title={ 
     <GroupEditor
      { ...props }
      item={ item } /> 
    }>
    { treeData(props, item.id) }
  </TreeNode>)
}

const Groups = props => {
  
  const [newGroupName, setNewGroupName] = useState('New Group')

  const onDrop = info => { 
    
    const dragKey = info.dragNode.props.eventKey; // Id del nodo en movimiento
    const dropKey = info.node.props.eventKey; // id del nodo destino  

    if(dragKey == dropKey) return

    const dragNode = props.groupsList.find(item => item.id == dragKey)
    const dropNode = props.groupsList.find(item => item.id == dropKey) 
    const dropNodeIndex = props.groupsList.findIndex(item => item.id == dropKey)
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const parent = dropPosition == 0 ? dropKey : dropNode.parent

    props.moveGroup(
      { 
        ...dragNode,
        parent: parent
      },
      dropNodeIndex,
      dropPosition
    )
  }

  return (
    <>
      <div className="AddGroup">
        <input 
          type="text"
          value={ newGroupName }
          onChange={ event => setNewGroupName(event.target.value) }
          />
        <IconButton
          icon="plus"
          title="Add Group"
          onClick={ event => props.addGroup(newGroupName) }
        />        
      </div>
      <Tree          
        draggable
        blockNode
        defaultExpandAll
        onDrop={ onDrop }
      >
        {
          treeData(props)
        }
      </Tree>
    </>
  )
}

export default Groups