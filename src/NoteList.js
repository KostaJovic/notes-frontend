import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";

function NoteForm({ onCreate }) {
  // Define state variable for notes
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Handler for form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send POST request to server with new note data
    axios
      .post("http://localhost:8080/api/notes", { title, content })
      .then((response) => {
        onCreate(response.data);
        setTitle("");
        setContent("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    {/*Form container which is hidden on start*/}
      <div className="bg-[#78938A] w-72 flex flex-col items-center rounded-lg p-3 whitespace-normal">
        <div
          className=" break-words text-center  border-b border-dashed border-[#ffffff] border-1 min-w-[150px] max-w-[250px]"
            contentEditable
            onBlur={(event) => setTitle(event.target.innerText)}
            dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
            className="break-words text-center min-w-[150px] max-w-[250px] mb-3"
            contentEditable
            onBlur={(event) => setContent(event.target.innerText)}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        <button className=" w-40 bg-green-500 p-1 rounded-md" type="submit">+</button>
      </div>      
    </form>
  );
}

function NoteList() {
  // Define state variables for notes and loading status
  const [notes, setNotes] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Load initial data from server on component mount
  useEffect(() => {
    axios.get("http://localhost:8080/api/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  // Handler for creating new note
  const handleCreate = (note) => {
    // Add new note to notes array
    setNotes([...notes, note]);
    // Hide form
    setIsFormVisible(false);
  };

  // Handler for updating note
  const handleUpdate = (id, title, content) => {
    // Update note with matching id
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title: title, content: content } : note
      )
    );
  };

  // Handler for deleting note
  const handleDelete = (id) => {
    // Remove note with matching id
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Handler for toggling visibility of form
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      {/* The NoteForm component creates new notes on submission.*/}      
      <div className="flex flex-col items-center">
        <div className=" mb-2 bg-orange-500 rounded-[20px] w-[40px] h-[40px] text-center flex justify-center justify-items-center" onClick={toggleFormVisibility}>
          {/* The button toggles the visibility of the NoteForm component.*/}
          <button >
            {isFormVisible ? "X" : "+"}
          </button>
        </div>
        {isFormVisible && <NoteForm onCreate={handleCreate} />}
      </div>

      {/*Render a div containing NoteItem components for each note object in the notes array.*/}
      {/*Pass the note object, the handleDelete function and the handleUpdate function as props.*/}
      <div className="flex flex-row flex-wrap justify-around">
        {notes.map((note) => (
          <NoteItem
            className="flex flex-row"
            key={note.id}
            note={note}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
