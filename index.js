const express = require('express')
var bodyParser = require('body-parser')
var ejs = require('ejs')
var date = require(__dirname + '/date_mod.js')

const app = express()
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000


let items = ["Exercise", "Walk"]

app.get('/', (req, res) => {
    var my_date = date()
    res.render('todo' ,{date : my_date , my_list : items})  
})

app.post('/', (req,res)=>{
   var data =req.body.todo_input
   if(data == ""){
    console.log("Please Write Data")
   }else{
   items.push(data)
   }
    res.redirect('/')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})