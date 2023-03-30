const notesContainer = document.querySelector('.notes-container');
const addButton = document.querySelector('.add-button');


function createNote() {
  const note = document.createElement('div');
  const noteArea = document.createElement('textarea');
  const deleteButton = document.createElement('button');
  
  note.classList.add('note');
  noteArea.classList.add('note-area');
  deleteButton.classList.add('delete-button');
  
  noteArea.setAttribute('placeholder', 'Type your note here...');
  deleteButton.textContent = 'Delete';
  
  note.appendChild(noteArea);
  note.appendChild(deleteButton);
  notesContainer.appendChild(note);
  
  // add event listener to the new note's delete button
  deleteButton.addEventListener('click', function(){
    note.remove();
    saveNotes();
  });
  
  // add event listener to the new note's text area
  noteArea.addEventListener('input', function(){
    saveNotes();
  });
  
  note.push(note);
  saveNotes();
}


// save the notes to local storage
function saveNotes() {
  const notes = [];
  const noteAreas = document.querySelectorAll('.note-area');
  noteAreas.forEach(function(noteArea){
  notes.push(noteArea.value);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  }
  
  // load the notes from local storage
  function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes'));
  if (notes) {
  notes.forEach(function(noteText){
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `<textarea class="note-area">${noteText}</textarea> <button class="delete-button">Delete</button>` ;
  notesContainer.insertBefore(note, addButton);

  const deleteButton = note.querySelector('.delete-button');
  deleteButton.addEventListener('click', function(){
    note.remove();
    saveNotes();
  });
  
  const noteArea = note.querySelector('.note-area');
  noteArea.addEventListener('input', function(){
    saveNotes();
  });
});
}
}

// load the notes when the page loads
loadNotes();

// add event listener to the add button
addButton.addEventListener('click', function(){
createNote();
saveNotes();
});
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
