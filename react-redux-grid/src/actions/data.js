
export const LOAD_DATA = 'LOAD_DATA'
export const DATA_LOADED = 'DATA_LOADED'

export const loadData = () => { 
  
  return { type: LOAD_DATA }
}

export const dataLoaded = (data) => {
  
  return { 
    type: DATA_LOADED,
    payload: {
      data: data
    }
  }
}