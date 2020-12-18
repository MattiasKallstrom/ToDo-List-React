import React from 'react'
import Notes from './components/Notes'
import NotesProvider from './context/NoteContext'
import LanguageProvider from './context/LanguageContext'

export default function App() {
  return (
    <NotesProvider>
      <LanguageProvider initLangCode="en">
        <NoteWrapper />
      </LanguageProvider>
    </NotesProvider>
  )
}
function NoteWrapper() {
  return <Notes />
}
