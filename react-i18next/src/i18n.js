import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: 'es',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });


export default i18n