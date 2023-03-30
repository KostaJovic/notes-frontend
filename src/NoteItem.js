import React, { useState } from "react";
import axios from "axios";

function NoteItem({ note, onDelete, onUpdate }) {
  // Define state variables for editing, title, and content
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  // Define function to handle deletion of a note
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/notes/${note.id}`).then(() => {
      onDelete(note.id);
    });
  };
  // Define function to handle updating of a note
  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/api/notes/${note.id}`, {
        title,
        content,
      })
      .then(() => {
        onUpdate(note.id, title, content);
        setEditing(false);
      });
  };
  // Return a div with either an editing view or a read-only view depending on whether or not editing is enabled
  return (
    <div className="bg-[#78938A] max-w-[300px] w-72 mt-3 rounded-xl p-2">
      {editing ? (
        /*When editing is false, the component displays the title and content fields as non-editable text fields, along with edit and delete buttons.*/
        <div className="whitespace-normal flex flex-col h-full mb-3">
          <div
          className=" break-words text-center border-b border-dashed border-[#ffffff] border-1"
            contentEditable
            onBlur={(event) => setTitle(event.target.innerText)}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className=" break-words text-center"
            contentEditable
            onBlur={(event) => setContent(event.target.innerText)}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mt-auto flex justify-center space-x-2">
            <button className="bg-green-500 p-1 rounded-md" onClick={handleUpdate}>speichern</button>
            <button className="bg-yellow-500 p-1 rounded-md" onClick={() => setEditing(false)}>abbrechen</button>
          </div>
        </div>
      ) : (
        // When editing is true, the component displays the title and content fields as editable text fields, along with save and cancel buttons.
        <div className="flex flex-col h-full mb-3">
          <div className="whitespace-normal">
            <h3 className="break-words text-center border-b border-dashed border-[#ffffff] border-1 text-lg">{title}</h3>
            <p className="break-words text-center">{content}</p>
          </div>
          <div className="mt-auto flex justify-center space-x-2">
            <button className=" bg-yellow-500 p-1 rounded-md" onClick={() => setEditing(true)}>bearbeiten</button>
            <button className=" bg-red-500 p-1 rounded-md" onClick={handleDelete}>löschen</button>
          </div>          
        </div>
      )}
    </div>
  );
}

export default NoteItem;
