import { AppState } from "../AppState.js";


export class NoteController {
  constructor() {
    AppState.on('notes', this.drawNotes)

  }

  drawNotes() {
    console.log('notes drawn')
    const notes = AppState.notes

    let notesCardContent = ''

    notes.forEach(note => notesCardContent += note.noteHTMLTemplate)


  }
}