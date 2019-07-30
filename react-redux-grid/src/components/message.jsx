
import React, { useEffect} from 'react'
import { connect } from 'react-redux'

const MessageComponent = (props) => <div className={ `Message ${ props.message.type }` }>
  { props.message.text }
</div>
const messageMapStateToProps = state => ({ message: state.ui.message })
const Message = connect(messageMapStateToProps)(MessageComponent)

export default Message