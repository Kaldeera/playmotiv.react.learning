
export const DATA_LOAD_DATA = 'DATA_LOAD_DATA'
export const dataLoadData = () => { 
  
  return { type: DATA_LOAD_DATA }
}

export const DATA_LOAD_DATA_SUCCESS = 'DATA_LOAD_DATA_SUCCESS'
export const dataLoadDataSuccess = (data) => {
  
  return { 
    type: DATA_LOAD_DATA_SUCCESS,
    payload: {
      data: data
    }
  }
}