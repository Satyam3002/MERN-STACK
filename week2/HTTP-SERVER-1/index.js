const express = require('express')
const app = express();
const port = 3000

app.get("/route-handler", function(req,res) {

    res.json ({
        name: "satyam",
        age:21
    })
})

app.post("/conversations", function(req,res) {
    console.log(req.headers)
    res.send({
        msg: "2 + 2 = 4"
    })
})


app.get('/',function(req, res)  {
  res.send('<b>hii thre <b>')
})

app.listen(port)