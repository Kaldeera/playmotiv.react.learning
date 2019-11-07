
import React from 'react'
import List from './list'
import User from './users'
import Message from './message'
import { store } from '../store/store'
import { uiMessage } from '../actions/ui'
import { dataLoadData } from '../actions/data'
import { userLoadData } from '../actions/users'

const APP = () => {
  
  //store.dispatch(dataLoadData())
  store.dispatch(userLoadData())

  return <>
    <List />
    <User />
    <Message />
  </>
}

export default APP 