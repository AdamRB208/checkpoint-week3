import { AppState } from "../AppState.js";
import { Note } from "../models/NoteAppModel.js";
import { Pop } from "../utils/Pop.js";


class NoteService {
  createNewNote(data) {
    const note = new Note(data);
    AppState.notes.push(note);
    this.saveNotes();

  }

  deleteNote(noteId) {
    const noteToDelete = AppState.notes.find(note => note.id == noteId);
    const indexToRemove = AppState.notes.indexOf(noteToDelete)
    console.log('deleted note', noteToDelete)
    AppState.notes.splice(indexToRemove, 1)
    Pop.toast(`deleted ${noteToDelete.title}`)
    this.saveNotes()
  }


  saveNotes() {
    const notes = AppState.notes
    const notesString = JSON.stringify(notes)
    console.log('notes string', notesString)
    localStorage.setItem('redacted_notes', notesString)

  }

  loadNotes() {
    const notesString = localStorage.getItem('redacted_notes')
    console.log('load notes string', notesString)

    const notesData = JSON.parse(notesString)
    console.log('saved notes', notesData)
    if (notesData == null) return

    const notes = notesData.map(noteData => new Note(noteData))
    AppState.notes = notes

  }
}

export const notesAppService = new NoteService()