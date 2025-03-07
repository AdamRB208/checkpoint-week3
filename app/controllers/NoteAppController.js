import { AppState } from "../AppState.js";
import { notesAppService } from "../services/NoteAppService.js";


export class NoteController {
  constructor() {
    AppState.on('notes', this.drawNotes)

    notesAppService.loadNotes()

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


    // let notesFormContent = ''

    // notes.forEach(note => notesFormContent += note.noteHTMLForm)

    // const createNoteElem = document.getElementById('createNote')

    // createNoteElem.innerHTML = notesFormContent

  }

  createNewNote() {
    event.preventDefault()
    const form = event.target
    //@ts-ignore
    let formColor = event.target.color.value
    console.log('Form color value:', formColor);
    //@ts-ignore
    let formCreateTitle = event.target.createTitle.value
    console.log('title created', form);
    //@ts-ignore
    let formContent = event.target.createTitle.value
    //@ts-ignore
    let formSubmit = event.target.submit.button
    console.log('note submitted', formSubmit);

    notesAppService.createNewNote(form)

  }

  deleteNote(noteId) {
    const confirmed = confirm('Are you sure you want to delete this note? This cannot be undone.')
    console.log('deleting', noteId);
    if (confirmed == false) return
    notesAppService.deleteNote(noteId)
  }
}

console.log(NoteController)