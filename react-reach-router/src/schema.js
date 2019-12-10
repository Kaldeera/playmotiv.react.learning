
const schema = {
  common: {
    title: 'Common',
    component: 'common'
  },
  configuration: {
    title: 'Configuration',
    children: {
      todos: {
        title: 'Todos',
        component: 'all'
      },
      list: {
      }
    }
  }
}

export default schema