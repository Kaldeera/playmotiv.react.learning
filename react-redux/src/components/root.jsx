
import React, { useEffect} from 'react'
import { loadData } from '../actions/data'
import { store } from '../store/store';
import List from './list'
import Message from './message'

const Root = () => {

  useEffect(() => {

    store.dispatch(loadData())

    /*
    store.dispatch(uiMessage({
      type: 'info',
      'text': 'Runnn'
    }))
    */
  }, [])

  return <>
    <List />
    <Message /> 
  </>
}

export default Root 