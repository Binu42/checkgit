const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// For calculator
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("Result is " + (num1 + num2));
})

//  for BMI calculator
app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    res.send("Result is " + (height/weight**2).toFixed(2));
})

app.listen(3000, function () {
    console.log("Server is Running at port 3000");
});