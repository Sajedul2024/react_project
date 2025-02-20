const mongoose =  require('mongoose')

const itemschema = new mongoose.Schema({
   
    name : String,
    description : String

})

const itemmodel = mongoose.model("Item",itemschema)

module.exports = itemmodel