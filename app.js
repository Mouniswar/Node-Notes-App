//Requiring Modules Needed below.
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions ={
   describe: 'Title Of Note',
   demand : true,
   alias : 't'
};
const bodyOptions ={
  describe:'Body Of note',
  demand : true,
  alias:'b'
};
const argv = yargs
  .command('add', 'Add a New Note', {
    title:titleOptions,
    body:bodyOptions
  })
  .command('list', 'List All Notes')
  .command('read', 'Read a note', {
    title:titleOptions
  })
  .command('remove', 'Remove a Note', {
    title:titleOptions
  })
  .help()
  .argv;
var command  = process.argv[2];
// console.log('Command: ', command);
// // console.log('Process', process.argv);
// console.log('Yargs', argv);

//Checking Conditions
if(command === 'add') {
  // console.log('Adding New Note');
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note Created');
    notes.logNote(note);
  }else {
    console.log('Note title taken');
  }
}
else if(command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });
}
else if(command==='read') {
  notes.getNote(argv.title);
  if (!note) {
    console.log('Note Not Found');
  }else {

    console.log('Note Found');
    notes.logNote(note);
  }
}
else if(command==='remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note Was Removed' : 'Note Not Found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}
