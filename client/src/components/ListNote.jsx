import React, { Fragment, useState, useEffect } from 'react';
import EditNote from './EditNote';
import axios from 'axios';
const ListNote = () => {
//s
  const [note, setNote] = useState([]);
console.log(note);
  //Delete note
  const deleteNote = (id) => {
      axios.delete(`http://localhost:3001/notes/${id}`)
      .then(res => {
        setNote(note.filter(notes => notes.notes_id !== id));
      })

  }

  //Getting all notes
  useEffect(() => {
    axios.get('http://localhost:3001/notes')
    .then(res => {
      setNote(res.data);
    })
  }, []);


    // //Delete note
    // const deleteNote = async (id) => {
    //   try {
    //     const response = await fetch(`http://localhost:3001/notes/${id}`, {
    //       method:"DELETE"
    //     });
    //     setNote(note.filter(notes => notes.notes_id !== id));
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // }
  
    // async function getNotes() {
    //   const res = await fetch("http://localhost:3001/notes");
  
    //   const notesArray = await res.json();
    //   setNote(notesArray);
    // }
    // console.log(note);
    // useEffect(() => {
    //   getNotes();
    // }, []);
    
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