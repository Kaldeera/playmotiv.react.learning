
export const SLOT1_CHANGE_DATA = 'SLOT1_CHANGE_DATA'
export const slot1ChangeData = value => { 
  
  return {
    type: SLOT1_CHANGE_DATA,
    payload: {
      value: value
    }
  }
}