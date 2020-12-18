import React, {useState, useContext} from 'react'
import {getNotes} from '../utils/noteHelpers'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import List from './List'
import Form from './Editor'
import {NoteContext} from '../context/NoteContext'
import LanguageButtons from '../context/LanguageButtons'
import {LanguageContext} from '../context/LanguageContext'

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const {notes, setNotes} = useContext(NoteContext)
  const {language} = useContext(LanguageContext)
  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
    
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <Container fluid="md">
        <Container fluid="md">
          <h1>Create a note</h1>
          <h4>Mattias Källström</h4>
        </Container>
      <LanguageButtons />
      <Row fluid="md">
        <Col fluid="md">
            <Button onClick={onClickNewNote} variant="secondary" size="md" block>
              {language['newNote']}
            </Button>
          <List
            notes={notes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
        </Col>
        <Col>
          <Form refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}
