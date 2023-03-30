# Note Taking App

This is a simple note taking app that allows you to create, update, and delete notes. It is built using React and communicates with a server using HTTP requests.

## Components

### `NoteItem`

`NoteItem({ note, onDelete, onUpdate })`: A functional component that renders a single note item. It takes in three props:

- `note`: an object containing the title and content of the note
- `onDelete`: a function to delete the note from the list
- `onUpdate`: a function to update the note

### `NoteForm`

`NoteForm({ onCreate })`: A functional component that renders a form for creating new notes. It takes in one prop:

- `onCreate`: a function to create a new note

### `NoteList`

`NoteList()`: A functional component that renders a list of notes. It fetches the notes from the server using an HTTP GET request, and provides functions to add, update, and delete notes. It has the following functions:

- `fetchNotes()`: makes an HTTP GET request to fetch the list of notes from the server
- `handleCreate(newNote)`: adds a new note to the list and makes an HTTP POST request to create the note on the server
- `handleDelete(id)`: deletes a note from the list and makes an HTTP DELETE request to delete the note from the server
- `handleUpdate(id, updatedNote)`: updates a note in the list and makes an HTTP PUT request to update the note on the server

### `App`

`App()`: The main functional component that renders the entire application. It has the following components:

- `NoteList`: a component that renders the list of notes
- `NoteForm`: a component that renders the form to create new notes
