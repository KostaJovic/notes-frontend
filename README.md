# notes-frontend

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## NoteItem
NoteItem({ note, onDelete, onUpdate }):\
&nbsp;&nbsp;&nbsp;&nbsp;A functional component that renders a single note item. \
&nbsp;&nbsp;&nbsp;&nbsp;It takes in three props:\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;note: an object containing the title and content of the note\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onDelete: a function to delete the note from the list\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onUpdate: a function to update the note\

## NoteForm
NoteForm({ onCreate }): \
&nbsp;&nbsp;&nbsp;&nbsp;A functional component that renders a form for creating new notes. \
&nbsp;&nbsp;&nbsp;&nbsp;It takes in one prop: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onCreate: a function to create a new note\

## NoteList
&nbsp;&nbsp;&nbsp;&nbsp;NoteList(): A functional component that renders a list of notes. \
&nbsp;&nbsp;&nbsp;&nbsp;It fetches the notes from the server using an HTTP GET request, \
&nbsp;&nbsp;&nbsp;&nbsp;and provides functions to add, update, and delete notes. \
&nbsp;&nbsp;&nbsp;&nbsp;It has the following functions: \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fetchNotes(): \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;makes an HTTP GET request to fetch the list of notes from the server \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handleCreate(newNote):  \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adds a new note to the list and makes an HTTP POST request to create the note on the server \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handleDelete(id): \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deletes a note from the list and makes an HTTP DELETE request to delete the note from the server \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;handleUpdate(id, updatedNote): \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updates a note in the list and makes an HTTP PUT request to update the note on the server

## App
App(): The main functional component that renders the entire application. It has the following components:
NoteList: a component that renders the list of notes
NoteForm: a component that renders the form to create new notes
