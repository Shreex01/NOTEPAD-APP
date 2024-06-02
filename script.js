const notesContainer = document.querySelector(".notes-container");
const createNote = document.querySelector(".btn");
let notes = document.querySelectorAll(".notes");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes-container")
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}


createNote.addEventListener("click", () => {
    let note = document.createElement("p");
    let img = document.createElement("img");
    note.className = "notes";
    note.setAttribute("contenteditable", "true");
    img.src = "https://img.icons8.com/?size=100&id=67884&format=png&color=000000"
    notesContainer.appendChild(note).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".notes-container");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }})
        }
    }
)
