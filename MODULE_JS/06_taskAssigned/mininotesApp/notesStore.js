 class storeNote {
    #notes;

    constructor() {
        this.#notes = []
    }

    add(note) {
        this.#notes.push(note);
    }

    getAll(){
        return [...this.#notes]
    }
}

const noteStore = new storeNote()
export default noteStore;