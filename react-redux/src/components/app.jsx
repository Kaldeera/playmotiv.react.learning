
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
<<<<<<< HEAD
    <Message otraprop="OtraProp"/>
=======
    <User />
    <Message />
>>>>>>> c08036dac14394fb0c171980c144d1bf86fd0fbc
  </>
}

export default APP 