export const LOADED = 'person/LOADED';

export const loadPerson = () => {

  return (dispatch) => {
    
    fetch('https://randomuser.me/api/').then(res => res.json())
    .then(data => dispatch(loaded(data.results[0])))
  }
}

const loaded = data => {

  return {
    type: LOADED,
    payload: {
      data
    }
  }
}


