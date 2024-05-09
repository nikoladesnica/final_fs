const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  initializeNotes();  // Initialize notes on startup
});

const notesRouter = require('./routes/noteRoutes');
app.use('/notes', notesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

function initializeNotes() {
  const Note = require('./models/note.model');
  Note.find()
    .then(notes => {
      if (notes.length === 0) {
        console.log("No notes found, initializing sample data...");
        const initialNotes = [
          { title: "Delegation", content: "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem" },
          { title: "Loops", content: "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat." },
          { title: "Arrays", content: "Q. Why did the programmer quit his job? A. Because he didn't get arrays." },
          { title: "Hardware vs. Software", content: "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software." },
        ];
        Note.insertMany(initialNotes)
          .then(() => console.log("Initial notes added successfully."))
          .catch(err => console.error("Failed to insert initial notes:", err));
      }
    })
    .catch(err => console.error("Error checking notes collection:", err));
}
