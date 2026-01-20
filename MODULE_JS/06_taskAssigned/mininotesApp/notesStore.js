 class storeNote {
    #notes;

    constructor() {
        this.#notes = []
    }

    add(note) {
        this.#notes.push(note);
    }

    getAll(){
        return [...this.#notes]     //we are returing a copy of the array to maintain security
    }
}

const noteStore = new storeNote()
export default noteStore;