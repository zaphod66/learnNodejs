const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
            notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green('New note taken.'))
    } else {
        console.log(chalk.red('Note already taken.'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const leftNotes = notes.filter((note) => note.title !== title)

    if (notes.length !== leftNotes.length) {
        saveNotes(leftNotes)

        console.log(chalk.green('Note with title \'' + title + '\' removed.'))
    } else {
        console.log(chalk.red('Note with title \'' + title + '\' not found.'))
    }
}

const listNotes = () => {
    console.log(chalk.bold.yellow('Your Notes:'))
    const notes = loadNotes()
    notes.forEach( note => { console.log(note.title) });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note  = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.yellow.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('Note with title ' + title + ' not found!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote:    addNote,
    removeNote: removeNote,
    listNotes:  listNotes,
    readNote: readNote
}
