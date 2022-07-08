import axios from 'axios';
import React, { Fragment, useState } from 'react';

const EditNote = ({ note }) => {

  const [description, setDescription] = useState(note.description)

  // const editNote = async (id) => {
  //   try {
  //     const body = { description };
  //     const response = await fetch(`http://localhost:3001/notes/${id}`, {
  //       method:"PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body)
  //   });
  //   window.location="/";
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }

  const editNote = (id) => {
    axios.put(`http://localhost:3001/notes/${id}`, {description})
    .then(res => {
      console.log("updated");
    })
    .catch(err => console.log(err));
    window.location = "/";
  }
   
  return (
  <Fragment>
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${note.notes_id}`}>
      Edit
    </button>

    <div class="modal fade" id={`id${note.notes_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={() => setDescription(note.description)}>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(note.description)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" onClick={() => editNote(note.notes_id)}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  );
}

export default EditNote;