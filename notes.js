const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => {
  //   return note.title === title;
  // });

  const duplicateNote = notes.find(note => {
    return note.title === title;
  });

  debugger

  if(!duplicateNote) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);

    console.log(chalk.green('New Note Added!'));
  } else {
    console.log(chalk.red('Duplicate Entry, Please Try Again.'));
    return
  }
}

const removeNote = title => {
  const notes = loadNotes();
  const removedNotes = notes.filter(note => {
    return note.title !== title;
  });

  if(notes.length !== removedNotes.length){
    console.log(chalk.green('note removed'));
    saveNotes(removedNotes);
  } else {
    console.log(chalk.red('This title is not found'));
  }

  //console.log(removedNotes);
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green('Your Notes'));
  notes.forEach(note => {
    console.log(chalk.blue(note.title));
  });
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find(note => {
    return note.title === title;
  });

  if(foundNote) {
    console.log(chalk.green.inverse(foundNote.title));
    console.log(foundNote.body);
  } else {
    console.log(chalk.red('Note does not exist'));
  }
}

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('./notes.json', notesJSON);
}

const loadNotes = () => {
  try {

    const dataBuffer = fs.readFileSync('./notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

  } catch(e) {

    return [];

  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}