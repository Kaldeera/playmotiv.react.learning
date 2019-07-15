import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as hollowHeart } from "@fortawesome/free-regular-svg-icons"

import './scss/Like.scss'

const Like = props => {

  const [liked, setLiked] = useState(false)

  return (
    <div className='likeComponent'>
      <FontAwesomeIcon
        icon={liked ? solidHeart : hollowHeart}
        style={ { color: liked ? props.color.liked : props.color.unliked } }
        onClick={()=>{ setLiked(!liked) }}
      />
    </div>
  )
}

export default Like
