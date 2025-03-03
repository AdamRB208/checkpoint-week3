import { AppState } from "../AppState.js";
import { Note } from "../models/NoteAppModel.js";


class NoteService {
  createNewNote(data) {
    const notes = new Note(data)
    AppState.notes.push(notes)

  }


}

export const notesAppService = new NoteService()