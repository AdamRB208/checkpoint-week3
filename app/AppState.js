import { Note } from './models/NoteAppModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  notes = [
    new Note({
      color: 'red',
      title: 'text',
      date: '02/28/2025'
    }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())