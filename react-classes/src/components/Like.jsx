import React, { Component } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as hollowHeart } from "@fortawesome/free-regular-svg-icons"

import './scss/Like.scss'

class Like extends Component {

  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() { 
    return (
      <div className='likeComponent'>
        <FontAwesomeIcon
          icon={ this.state.liked ? solidHeart : hollowHeart }
          style={ { color: this.state.liked ? this.props.color.liked : this.props.color.unliked } }
          onClick={()=>{ this.setState({ liked: !this.state.liked }) }}
        />
      </div>
    )
  }
}

export default Like
