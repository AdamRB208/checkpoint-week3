import { AppState } from "../AppState.js";
import { notesAppService } from "../services/NoteAppService.js";


export class NoteController {
  constructor() {
    AppState.on('notes', this.drawNotes)


    // On page load do this
    this.drawNotes()
    console.log('note controller initiated', NoteController)

    console.log('new note initiated', this.createNewNote)
  }

  drawNotes() {

    const notes = AppState.notes

    let notesCardContent = ''

    notes.forEach(note => notesCardContent += note.noteHTMLTemplate)

    const savedNotesElem = document.getElementById('savedNotes')

    savedNotesElem.innerHTML = notesCardContent



  }

  createNewNote() {
    event.preventDefault()
    const form = event.target
    let formColor = event.target.color.value
    console.log('Form color value:', formColor);
    let formCreateTitle = event.target.createTitle.placeholder
    console.log('title created', form);
    let formSubmit = event.target.submit.button
    console.log('note submitted', formSubmit);

    notesAppService.createNewNote(form)

    // this.drawNotes()
  }


}

console.log(NoteController)