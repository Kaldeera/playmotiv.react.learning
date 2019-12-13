export const START = 'fibbonacci/START'
export const NUMBER_GENERATED = 'fibbonacci/NUMBER_GENERATED'
export const DONE = 'fibbonacci/DONE'

const add = async (a, b) => {

  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  return a + b
}

export const generate = num => {

  return async dispatch => {

    let a = 1, b = 0, temp

    dispatch(start())
    
    while (num >= 0){
      temp = a
      a = await add(a, b)
      b = temp
      num--
      dispatch(numberGenerated(a))
    }

    dispatch(done())
  }

}

const numberGenerated = number => {

  return {
    type: NUMBER_GENERATED,
    payload: {
      number
    }
  }
}

const start = () => {

  return {
    type: START
  }
}

const done = () => {

  return {
    type: DONE
  }
}


