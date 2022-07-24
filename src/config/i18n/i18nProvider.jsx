import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import labelsES from './locales/es.json';
import labelsEN from './locales/en.json';

import errorsES from './errors/es.json';
import errorsEN from './errors/en.json';

export const locales = [
  {
    key: 'es',
    value: 'es_ES',
    desc: 'LOCALE.SPANISH',
    json: { ...labelsES, ...errorsES },
  },
  {
    key: 'en',
    value: 'en_EN',
    desc: 'LOCALE.ENGLISH',
    json: { ...labelsEN, ...errorsEN },
  },
];

let language = {};
locales.map(
  (leng) =>
    (language = { ...language, [leng.value]: { translation: leng.json } })
);

const resources = language;

i18n.use(initReactI18next).init({
  resources,
  lng: locales[0].value,
  fallbackLng: [locales[0].value],

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'b'],
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
});

export default i18n;
