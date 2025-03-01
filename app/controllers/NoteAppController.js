import { AppState } from "../AppState.js";


export class NoteController {
  constructor() {
    AppState.on('notes', this.drawNotes)


    // On page load do this
    this.drawNotes()

  }

  drawNotes() {

    const notes = AppState.notes

    let notesCardContent = ''

    notes.forEach(note => notesCardContent += note.noteHTMLTemplate)

    const savedNotesElem = document.getElementById('savedNotes')

    savedNotesElem.innerHTML = notesCardContent

  }

}

console.log(NoteController)