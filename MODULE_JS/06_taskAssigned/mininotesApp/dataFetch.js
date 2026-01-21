import noteStore from "./notesStore.js"

export async function saveNote(data) {
        if(data){
            return new Promise((resolve,reject) => {
            setTimeout(() => {
                noteStore.add(data)
                resolve(data)
                console.log(data);
                
            }, 1000)
            })
        }else{
            console.log("please enter some value !");
            
        }
        
}