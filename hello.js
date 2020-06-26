const fs = require('fs')
const chalk = require('chalk');


const getNote = ()=>{
    return 'Your note ....'

}

const addNote = (title, body)=>{
    // print something to the consloe 
    const notes = loadNotes()
    // add new note to the nots
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    
    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log("added")
    }else{
        console.log('Note is toekn')
    }

 
    
   

   

    



}

const saveNote = (noteObject)=>{
    // convert new object to json 
    const JSONObjet = JSON.stringify(noteObject)
    fs.writeFileSync('notes.json', JSONObjet)

}

const loadNotes = ()=>{

    // push data to array 
    const arr = []
    try{
        
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        
        console.log(dataJSON.length)

        const that = this

      
        


        console.log(chalk.green.inverse(dataJSON))

        const parser = JSON.parse(dataJSON) 

        arr.push(parser)
      
    
        return parser

    }catch(e){
        console.log(chalk.red.inverse(e))

        return []
       
    }

}





const removeNote =  (title) => {
    const notes = loadNotes()
 
    
    const notesTokeep = notes.filter(function(note) {
     
        return note.title !== title
    })
    

    if (notes.length > notesTokeep.length ){
        console.log(chalk.green.inverse("remov note "))
        saveNote(notesTokeep)
    }else{
        console.log(chalk.red.inverse("no note remove"))
    }
    

    

}



module.exports = {
    getNote:getNote,
    addNote:addNote,
    removeNote:removeNote
}