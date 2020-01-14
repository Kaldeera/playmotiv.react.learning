import React from 'react'
import { Form, Input } from 'antd'

const CustomForm = Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {

    props.onChange({...props.fields,...changedFields})
  },
  mapPropsToFields(props) {

    const result = {}
    const { fields } = props

    Object.keys(fields).forEach(key => {
      result[key] = Form.createFormField({
            ...fields[key],
            value: fields[key].value,
          })
    })
    
    return result
  },
  onValuesChange(_, values) {

    console.log(values)
  },
})(props => {

  const { getFieldDecorator } = props.form
  const { fields } = props

  return (
    <Form layout='inline'>
      {
        Object.keys(fields).map(key => (
          <Form.Item key={key} label={fields[key].label}>
              {getFieldDecorator(key, {
                rules: fields[key].rules
              })(<Input />)}
          </Form.Item>
        ))
      }
    </Form>
  )
})

export default CustomForm