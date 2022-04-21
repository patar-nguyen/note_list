import React, { Fragment, useState } from 'react';

const InputNote = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description }
      const response = await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center my-5">Notes</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input 
        type="text" 
        placeholder="add note" 
        className="form-control" 
        value={description}
        onChange={e => {setDescription(e.target.value)
        }}

        />
        <button className="btn btn-primary ml-2">Add</button>
      </form> 
    </Fragment>
  );
};

export default InputNote;