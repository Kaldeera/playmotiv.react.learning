import React, { useState } from 'react'
import 'regenerator-runtime/runtime'
import 'antd/dist/antd.less'

import CustomForm from './customform'

const App = () => {

  const onChange = (changedFields) => {

    setFields({
      ...fields,
      ...changedFields
    })
  }

  const [fields, setFields] = useState({
    username: {
      value: 'user',
      label: 'Usuario',
      rules: [{ required: true, message: 'El nombre de usuario es obligatorio!' }]
    },
    password: {
      value: 'abcdef',
      label: 'Contraseña',
      rules: [{ required: true, message: 'La contraseña debe tener 6 caracteres como minimo!', min: 6 }]
    },
    quiz: {
      value: '',
      label: 'Cuanto es 1 + 1?',
      rules: [
          { required: true, message: 'Respuesta incorrecta', validator: async (rule, value, callback) => {
                
        const valid = await new Promise((resolve) => {setTimeout(()=>resolve((/^2$/g).test(value)), 3000)})

        if(!valid) callback('not valid')
        }}
      ]
    }
  })

  return (
    <div className='App'>
      <CustomForm fields={fields} onChange={ onChange } />
      <pre className='language-bash'>{JSON.stringify(fields, null, 2)}</pre>
    </div>
  )
}

export default App