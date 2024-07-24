import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18next
.use(HttpApi)
.use(initReactI18next)
    .init({
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      lng: "fa",
      fallbackLng: "en",

      interpolation: {
        escapeValue: false
      }
    })

export default i18next;