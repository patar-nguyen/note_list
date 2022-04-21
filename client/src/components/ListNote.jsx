import React, { Fragment, useState, useEffect } from 'react';
import EditNote from './EditNote';
const ListNote = () => {
//s
  const [note, setNote] = useState([]);

  //Delete note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/notes/${id}`, {
        method:"DELETE"
      });
      setNote(note.filter(notes => notes.notes_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getNotes() {
    const res = await fetch("http://localhost:3001/notes");

    const notesArray = await res.json();
    setNote(notesArray);
  }
  console.log(note);
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {note.map(x => (
            <tr key={x.notes_id}>
              <td>{x.notes_id}</td>
              <td>{x.description}</td>
              <td><EditNote note={x}/></td>
              <td><button className="btn btn-danger" onClick={() => deleteNote(x.notes_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
export default ListNote;