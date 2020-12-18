function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}

export function getNotes() {
  let notes = localStorage.getItem('notes')
  if (!notes) {
    return initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function createNote(body) {
  const notes = getNotes()
  const newNote = {id: Date.now(), body}
  notes.push(newNote)
  console.log('about to save', notes)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function getNote(id) {
  const notes = getNotes()
  return notes.find((note) => note.id === id)
}

export function updateNote(id, body) {
  const notes = getNotes()
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    body,
  }

  notes.splice(indexToUpdate, 1)
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

export function deleteNote(id) {
  const notes = getNotes()
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

