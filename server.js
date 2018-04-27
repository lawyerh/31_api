const express = require("express")
const app = express()

const bp = require("body-parser")
const path = require("path")

app.use(bp.json())

app.get('/', function(req, res){
    var success = {"success": "Welcome to the card api! Search for a card by using /img/{first character of suit} + {card value}. Example: /img/c5 for five of clubs or /img/d1 for ace of diamonds."}
    res.json(success)
})

app.get('/img/:id', function(req, res){
    let img = __dirname + "/img/" + req.params.id + ".png"
    res.sendFile(img)
})


app.listen(8000, function(){
    console.log("Listening on 8000")
})