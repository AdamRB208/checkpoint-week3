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

  createNewNote() {
    console.log(event)
    event.preventDefault()
    // let noteColor = event.target.color.value

    // const form = event.target


  }


}

console.log(NoteController)