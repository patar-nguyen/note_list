const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");
app.use(cors());
app.use(express.json());

const database = require('./db.js');

//Get all notes
app.get("/notes", async (req, res) => {
  try {
    const getNotes = await pool.query("SELECT * FROM notes");
    res.json(getNotes.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//Get specific note
app.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await pool.query("SELECT * FROM notes WHERE notes_id = $1", [id]);
    res.json(note.rows[0]);
  } catch (err){
    console.error(err.message);
  }
})

//Make a note
app.post("/notes", async (req, res) => {
  try {
    const { description } = req.body;
    const newNote = await pool.query("INSERT INTO notes (description) VALUES ($1) RETURNING *", [description]);
    res.json(newNote.rows[0]);

  } catch (err){
    console.error(err.message);
  }
});

//Update note
app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateNote = await pool.query("UPDATE notes SET description = $1 WHERE notes_id = $2", [description, id]);
    res.json("Note updated");
  } catch (err) { 
    console.error(err.message);
  }
});

//Delete note
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await pool.query("DELETE from notes WHERE notes_id = $1", [id]);
    res.json("Deleted note")
  } catch (err) {
    console.error(err.message);
  }
})
app.listen(3001, () => {
  console.log("server running on 3001");
});