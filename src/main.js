let addNoteBtn = document.querySelector('#addNoteBtn');
addNoteBtn.onclick = () => {

    //input forms
    let newNoteInput =document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes');   
   //new elements
    let note = document.createElement('li');
    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    note.classList.add('note');
    note.innerHTML =newNoteInput.value;
    note.appendChild(checkbox);
    newNoteInput.value = '';
    notes.appendChild(note);
}