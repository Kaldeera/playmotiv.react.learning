import React from 'react'
import { Form, Input } from 'antd'


const CustomForm = props => {

  const { getFieldDecorator } = props.form
  const { fields } = props
  return (
    <Form layout='inline'>
      {
        Object.keys(fields).map(key => (
          <Form.Item
            key={key}
            label={fields[key].label}
            hasFeedback
            validateStatus={fields[key].validating ? 'validating' : undefined}>
              {getFieldDecorator(key, {
                rules: fields[key].rules
              })(<Input />)}
          </Form.Item>
        ))
      }
    </Form>
  )
}

export default Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {

    props.onChange(changedFields)
  },
  mapPropsToFields(props) {

    const { fields } = props

    return Object.keys(fields)
    .reduce((result, key) => {

      result[key] = Form.createFormField({
        ...fields[key]
      })

      return result
    }, {})
  }
})(CustomForm)