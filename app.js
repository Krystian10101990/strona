function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        displayNotes();
    }
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayNotes();
});