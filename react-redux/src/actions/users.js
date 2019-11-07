export const USER_LOAD_DATA = 'USER_LOAD_DATA'
export const userLoadData = () => { 
  
  return { type: USER_LOAD_DATA }
}

export const USER_LOAD_DATA_SUCCESS = 'USER_LOAD_DATA_SUCCESS'
export const userLoadDataSuccess = (users) => { 
  
  return { 
    type: USER_LOAD_DATA_SUCCESS,
    payload: {
      users: users
    }
  }
}