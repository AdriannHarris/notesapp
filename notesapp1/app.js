const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// customize yarg version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe:'Add a new note', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    } ,
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create add command
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create add command
yargs.command({
    command: 'list',
    describe:'list a item',
    handler() {
        notes.listNotes
    }
})

// create add command
yargs.command({
    command: 'read',
    describe:'read a book',
    builder: {
       title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
       }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse() 

// add, remove, read, list
// console.log(yargs.argv)


