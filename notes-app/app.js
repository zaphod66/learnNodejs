const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// set yargs version
yargs.version('0.0.1')

// add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading a note.')
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log('Listing all note.')
})

yargs.parse()