

export class Note {
  constructor(data) {
    // this.id = generateID()
    this.color = data.color
    this.title = data.title
    this.date = data.date
    this.content = data.content

  }

  get noteHTMLTemplate() {
    return `
    <button class="d-flex flex-column m-2 note-card">
    <article>
            <span class="mdi mdi-fountain-pen fs-4" style="color:${this.color}"></span>
            <div class="fs-3">${this.title}</div>
            <p class="date fs-5">${this.date}</p>
            <p class="fs-4">${this.content}</p>
          </article>
          </button>
    `
  }

}

console.log(Note)