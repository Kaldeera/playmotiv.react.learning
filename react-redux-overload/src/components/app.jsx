
import React from 'react'
import List from './list'
import Message from './message'
import { store } from '../store/store'
import { dataLoadGamesList } from '../actions/data'

const APP = () => {
  
  store.dispatch(dataLoadGamesList())

  return <>
    <List />
    <Message />
  </>
}

export default APP 