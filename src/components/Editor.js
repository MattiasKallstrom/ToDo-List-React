import React, {useState, useEffect, useContext} from 'react'
import Forms from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from '../utils/noteHelpers'
import Alert from 'react-bootstrap/Alert'
import {LanguageContext} from '../context/LanguageContext'

const STATUS_INITIAL_VALUE = ''

export default function Form({selectedNote, setSelectedNote, refreshList}) {
  console.log(selectedNote)
  const [body, setBody] = useState('')
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)
  const [variant, setVariant] = useState('')
  const {language} = useContext(LanguageContext)


  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 3000)
  }, [status])

  const onChangeBody = (e) => setBody(e.target.value)
  const onSave = (e) => {
    e.preventDefault()
    setBody('')
    setStatus(language['saved'])
    setVariant('success')
    if (selectedNote) {
      updateNote(selectedNote.id, body)
      return refreshList()
    }

    console.log('Saving new note:')
    createNote(body)
    refreshList()
    console.log(getNotes())
  }

  const onDelete = (e) => {
    e.preventDefault()
    const {id} = selectedNote
    deleteNote(id)
    refreshList()
    setBody('')
    setStatus(language['deleted'])
    setVariant('danger')
  }

  

  return (
    <Forms>
      <Forms.Group>
        <Forms.Label>{language['body']}</Forms.Label>
        <Forms.Control value={body} onChange={onChangeBody} />
      </Forms.Group>
      <Button onClick={onSave} variant="success" style={style.button}>
        {language['save']}
      </Button>
      {selectedNote && (
        <Button onClick={onDelete} variant="danger" style={style.button}>
          {language['delete']} <i class="fas fa-trash-alt"></i>
        </Button>
      )}
      
      {status && (
        <Alert className="mt-1" variant={variant}>
          {status}
        </Alert>
      )}
    </Forms>
  )
}

const style = {
  button: {marginRight: 10},
}
