import React, {useContext} from 'react'
import {LanguageContext} from './LanguageContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function LanguageButtons({children}) {
  const {setLangCode} = useContext(LanguageContext)

  return (
    <div>
      <Button size="sm" className="mb-4 mr-2" onClick={() => setLangCode('sv')}>
        SE
      </Button>
      <Button size="sm" className="mb-4" onClick={() => setLangCode('en')}>
        EN
      </Button>
      <div>{children}</div>
    </div>
  )
}
