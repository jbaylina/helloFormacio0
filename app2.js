/*jslint node: true */
"use strict";

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require("path");

var clients= [
    {
        firstName: "Jordi",
        lastName: "Baylina",
        telfs: [
            {
                type: "Home",
                number: "111111111"
            },
            {
                type: "Office",
                number: "22222222"
            }
        ],
        suns: 0,
        tall: 1.81,
        birth: "1973-04-03T00:00:00.000Z"
    },
    {
        firstName: "Joan",
        lastName: "Bacardit",
        telfs: [
            {
                type: "Home",
                number: "44444444"
            },
            {
                type: "Office",
                number: "555555555"
            }
        ],
        suns: 4,
        tall: 1.80,
        birth: "1948-03-24T00:00:00.000Z"
    }
];

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/clients', function (req, res) {
    res.json(clients);
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(path.join(__dirname , 'public' , 'index3.html')));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
