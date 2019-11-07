
import React from 'react'
import List from './list'
import Message from './message'
import { store } from '../store/store'
import { uiMessage } from '../actions/ui'
import { dataLoadData } from '../actions/data'

const APP = () => {
  
  store.dispatch(dataLoadData())

  return <>
    <List />
    <Message otraprop="OtraProp"/>
  </>
}

export default APP 