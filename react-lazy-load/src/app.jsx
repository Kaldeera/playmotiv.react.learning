import React, {
  Suspense
} from 'react'

const App = props => {

  const comp1 = 'components/componente1' 
  const Componente1 = React.lazy(() =>
    import(
      /* webpackMode: "eager" */
      /* webpackChunkName: "[request]" */ 
      `./${comp1}`
    )
  )

  return (
    <div>
      <h1>APP</h1>
      <Suspense fallback="Loading...">
        <Componente1 />
      </Suspense>
    </div>
  )
}

export default App