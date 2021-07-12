const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;

//1- Greetings
app.get('/greeting/:name', (req, res) => { // route with one param
  res.send(`Hello, ${req.params.name} it's so nice to see you!`);

})


//2- TipCal

app.get('/tip/:total/:tipPercentage', (req, res) => { //route with 2 params
  const totalTip =

  parseInt(req.params.total)*parseInt(req.params.tipPercentage)/100 // using good ol "parseInt"
  res.send(`${totalTip}`)
})

//3- Magic 8 Ball

app.get('/magic/:phrase', (req, res) => {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  res.send(`${req.params.phrase} <h3>${randomResponse}</h3>`)
  //console.log(randomResponse)
})



app.listen(3000, function () {
  console.log('AYOOOO')
})
