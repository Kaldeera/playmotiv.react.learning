
export const UI_MESSAGE = 'UI_MESSAGE'
export const uiMessage = message => { 
  
  return { 
    type: UI_MESSAGE,
    payload: {
      message: message
    }
  }
}

export const UI_MESSAGE_CLEAR = 'UI_MESSAGE_CLEAR'
export const uiMessageClear = () => { 
  
  return { type: UI_MESSAGE_CLEAR }
}

