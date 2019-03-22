//const validator = require('validator');

const yargs = require('yargs')
const chalk = require('chalk');
const notes = require('./notes');




// Customize yargs version
yargs.version('1.1.1');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log(chalk.green('Title: ' + argv.title + ' ' + 'Body: ' + argv.body));
    notes.addNote(argv.title, argv.body);
  }
});

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title To Remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'list the notes',
  handler() {
    notes.listNotes();
  }
});

// Create Read command
yargs.command({
  command: 'read',
  describe: 'read note',
  builder: {
    title: {
      describe: 'Enter the title of the note you want to fetch',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Add, remove, read, list


yargs.parse();
//console.log(yargs.argv);