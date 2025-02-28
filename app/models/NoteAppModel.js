

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
    <article class="note-card">
            <span class="mdi mdi-fountain-pen fs-4" style="color:blue"></span>
            <div class="fs-3">Note Title</div>
            <p class="date fs-5">date</p>
            <p class="fs-4">note content</p>
          </article>
    `
  }

}

console.log(Note)