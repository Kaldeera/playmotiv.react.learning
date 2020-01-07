
import React from 'react'
import { useTranslation } from 'react-i18next';

const App = () => {

  const {t, i18n} = useTranslation(['ns1', 'ns2'], { useSuspense: false })

  return (
      <div className='App'>
        <div>
          <button onClick={()=>i18n.changeLanguage('es')}>Español</button>
          <button onClick={()=>i18n.changeLanguage('en')}>English</button>
        </div>
        <h1>{t('ns1:Translation with react-i18next')}</h1> 
        <p>{t('ns2:Hello world')}</p> 
      </div>
  )
}

export default App