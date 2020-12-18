import React, {useState} from 'react'
import en from './i18n/en.json'
import sv from './i18n/sv.json'

export const LanguageContext = React.createContext(null)

const getLanguageFromString = {
  sv,
  en,
}

export default function Provider({children, initLangCode}) {
  const [langCode, setLangCode] = useState(initLangCode)

  const language = getLanguageFromString[langCode]

  return <LanguageContext.Provider value={{language, setLangCode}}>{children}</LanguageContext.Provider>
}
