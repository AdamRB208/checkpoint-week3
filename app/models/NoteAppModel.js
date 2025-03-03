import { generateId } from "../utils/GenerateId.js";


export class Note {
  constructor(data) {
    this.id = generateId
    this.color = data.color;
    this.title = data.title;
    this.date = data.date;
    this.content = data.content;

  }

  // get noteHTMLForm() {
  //   return `
  //   <form onsubmit="app.noteAppController.createNewNote(event)">
  //           <div></div>
  //           <label for="color">Classification Color:</label>
  //           <input class="color-button" name="color" type="color" id="color" value="${this.color}">
  //           <div> </div>
  //           <label class="mb-2" for="createTitle">Create a Classified Document</label>
  //           <div></div>
  //           <input class="mb-3" id="createTitle" name="note" type="text" required minlength="3" maxlength="15"
  //             placeholder="${this.title}">
  //           <button type="submit" class="mb-3"><s><i> Create</i></s> Document</button>
  //         </form>
  //   `
  // }

  get noteHTMLTemplate() {
    return `
    <button class="note-card">
            <article>
              <span class="mdi mdi-fountain-pen fs-4" style="color:${this.color}"></span>
              <div class="fs-3">${this.title}</div>
              <p class="date fs-5">${this.date}</p>
              <p class="fs-4">${this.content}</p>
              <button onclick="app.noteAppController.deleteNote(${this.id})" class="mdi mdi-delete">Delete Note</button>
            </article>
          </button>
    `;
  }

}

console.log(Note)