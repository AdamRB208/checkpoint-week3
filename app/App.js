
import { NoteController } from './controllers/NoteAppController.js';

class App {
  noteAppController = new NoteController()


}

window['app'] = new App()


