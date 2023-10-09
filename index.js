

const express = require('express')
var cors = require('cors')
 const phone = require('./phone.json');
const app = express()
const port = 3000

app.use(cors())


app.get('/', (req, res) => {
    res.send(phone)
  })

  app.get("/phone",(req,res) =>{

res.send(phone)

  })

  app.get('/phone/:id',(req,res) =>{

    const id = parseInt (req.params.id)
    console.log('my phone server id ',id)

    const findPhone = phone.find(findPhone => findPhone.id === id)
|| {}
res.send(findPhone)

  })

  app.listen(port, () => {
    console.log(`my phone server on port ${port}`)
  })