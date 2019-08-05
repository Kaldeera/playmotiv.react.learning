import React, { useEffect, useState } from 'react'
import {
  FormFileUpload
} from '@wordpress/components'

const Upload = props => {

  const [
    fileName,
    setFileName
  ] = useState(props.values && props.values.length > 0 ? props.values[0] : '')

  useEffect(()=>{
    
    let input = document.querySelector(`div.field.${props.id} > div > div > input[type=file]`);
    if(input) {
      
      input.setAttribute('id', props.id || 'playcloud_data_excel')
      input.setAttribute('name', props.id || 'playcloud_data_excel')
    }
  }, [])

  const handleChange = (event) => {

    setFileName(event.target.value.split('\\')[2])
    props.onChange && props.onChange(event)
  }

  return (
  <>
    { props.label && <label>{ props.label }</label> }
    <FormFileUpload
      accept={ props.accept }
      onChange={ handleChange }
    >
      { props.text || 'Upload' }
    </FormFileUpload>
    <div class="FileName">{ fileName }</div>
  </>
  )
}

export default Upload