
import React,
{
  useState,
  useEffect
} from 'react'
import Groups from './groups';
import Users from './users';

import '../scss/app.scss'  

/* group / users structure */

const groupSchema = {
  id: 0,
  slug: 'newgroup',
  name: 'New Group',
  parent: 0,
  managers: [],
  users: []
}

const userSchema = {
  id: 0,
  slug: 'user',
  name: 'User Name',
  user_email: 'email@domain.com'
}

/* fake Data */

const fakeGroupsList = [1,2,3,4,5,6,7,8,9]
.map(id => {

  let newGroup = { ...groupSchema }

  newGroup.id = id
  newGroup.name = `Group ${ id }`
  newGroup.slug = `group${ id }`

  newGroup.managers = [1,2]
  .map(subid => {
    
    let manager = { ...userSchema }
    manager.id = `${ id }${ subid }`
    manager.slug = `manager${ id }${ subid }`
    manager.name = `Manager ${ id } ${ subid }`

    return manager
  })

  newGroup.users = [1, 2, 3, 4, 5, 6]
  .map(subid => {
    
    let user = { ...userSchema }
    user.id = `${ id }${ subid }`
    user.slug = `manager${ id }${ subid }`
    user.name = `Manager ${ id } ${ subid }`

    return user
  })

  return newGroup
})

const App = props => {

  const [groupsList, setGroupsList] = useState([])
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [uploadingGroupUsersFile, setUploadingGroupUsersFile] = useState(false)

  /* Groups manager > convertir en redux actions/reducers */

  const updateGroup = updatedGroup => {

    const newGroupsList = [ ...groupsList ]
    const groupIndex = newGroupsList.findIndex(group => group.id == updatedGroup.id )
    newGroupsList[groupIndex] = updatedGroup

    setGroupsList(newGroupsList)
  }

  const moveGroup = (
    movedGroup,
    dropIndex,
    dropPosition
  ) => {

    const newGroupsList = [ ...groupsList ]

    const groupIndex = newGroupsList.findIndex(group => group.id == movedGroup.id )
    newGroupsList[groupIndex] = movedGroup
    const newMovedGroup = newGroupsList.splice(groupIndex, 1)
    const dropNewIndex = dropPosition > 0 ? dropIndex+ 1 : dropIndex
    newGroupsList.splice(dropNewIndex, 0, newMovedGroup[0])

    setGroupsList(newGroupsList)
  }

  const removeGroup = removedGroup => {

    const newGroupsList = [ ...groupsList ]

    const groupIndex = newGroupsList.findIndex(group => group.id == removedGroup.id )
    const groupParent = removedGroup.parent
    const groupChildren = newGroupsList.filter(group => group.parent == removedGroup.id )    
    newGroupsList.splice(groupIndex, 1)
    groupChildren.forEach(group => group.parent = groupParent)

    setGroupsList(newGroupsList)
  }

  const addGroup = (newGroupName) => {

    const newGroupsList = [ ...groupsList ]   

    let newId = 1;
    const IDs = newGroupsList.map(item => item.id)
    while(IDs.indexOf(newId) != -1) newId++
    const newGroup = { ...groupSchema }
    newGroup.id = newId
    newGroup.name = newGroupName
    newGroupsList.push(newGroup)

    setGroupsList(newGroupsList)
  }

  const addUsers = users => {
    
    const newGroupsList = [ ...groupsList ]

    const groupIndex = newGroupsList.findIndex(group => group.id == selectedGroup.id )
    newGroupsList[groupIndex].users.concat(users)

    setGroupsList(newGroupsList)
  }

  const uploadGroupUsersFile = file => {

    setUploadingGroupUsersFile(true)

    const data = new FormData() 
    data.append('file', file)
    data.append('group_slug', selectedGroup.slug)

    fetch(
      'https://dev.playmotiv.cloud/wp-json/playmotivcloud/upload-group-users',
      { 
        method: 'POST',
        body: data
      }
    )
    .then(response => response.json())
    .then(data => { 

      console.log(data) 
      setUploadingGroupUsersFile(false)  
    })
    .catch(function(error) {

      console.log(error)
      setUploadingGroupUsersFile(false)
    })
  }

  useEffect(() => {
    
    setGroupsList(fakeGroupsList)
  }, []) 

  return (
    <div className="App">
      <div className="Groups">
        <Groups        
          groupsList={ groupsList }
          addGroup={ addGroup}
          moveGroup= { moveGroup }
          updateGroup= { updateGroup }
          removeGroup= { removeGroup }
          selectGroup={ setSelectedGroup }
        />
      </div>
      <div className="Users">
        { 
          selectedGroup && 
          <Users  
            selectedGroup={ selectedGroup }
            addUsers={ addUsers }
            uploadGroupUsersFile={ uploadGroupUsersFile } 
            uploadingGroupUsersFile={ uploadingGroupUsersFile }
          />
        }
      </div>
      <pre style={ { fontSize: '10px' } }>
        { JSON.stringify(setGroupsList, null, 4) }
      </pre>
    </div>
  )
}

export default App