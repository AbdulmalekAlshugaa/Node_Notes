const yargs =  require ('yargs')
const chalk = require('chalk');
const hello = require('./hello');

const msg = chalk.white.inverse('Success')



// create a note 
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
    handler: function (argv) {
        hello.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:'note title',
        demandOption:true,
        type:'string'
    },
    handler: function (argv) {
        hello.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})




yargs.parse()





//console.log(process.env[3])





