
import { NoteController } from './controllers/NoteAppController.js';

class App {
  noteController = new NoteController()

}

window['app'] = new App()


