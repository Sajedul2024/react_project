const express =  require('express')
const connectdb = require('./db.js')
const itemmodel = require('./models/item.js')
const cors = require('cors')

const app = express()
app.use(express.json())
//app.use('/static', express.static('public'))
app.use(cors())

connectdb()
app.get('/',async (req,res) => {
    const response = await itemmodel.find()
    return res.json({items : response})
})

app.listen(4000,() =>{

console.log("app is running");

})
