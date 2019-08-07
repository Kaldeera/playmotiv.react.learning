
export const SLOT2_CHANGE_DATA = 'SLOT2_CHANGE_DATA'
export const slot2ChangeData = value => { 
  
  return {
    type: SLOT2_CHANGE_DATA,
    payload: {
      value: value
    }
  }
}