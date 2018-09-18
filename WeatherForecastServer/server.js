const si = require('systeminformation');
const http = require('http');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
var server = http.createServer(function (req, res) {
    //
});

app.listen(1685, () => {
    console.log('web api is running on 1685');
});
app.use(bodyparser.urlencoded({
    extended: true
}));
app.get('/api/v1/serverstate', async (req, res) => {
    console.log('okay!!!!!');
    answer = await si.mem();
    console.log(answer);
    res.json({
        answer: answer,
        server: "localhost"
    });
});

function result() {
    
    si.getAllData(function (data) {
        console.log('all-information : ');
        return data;
    })
}