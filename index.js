//dotenv for id and key security
require('dotenv').config();

//Import express,request, http
var express = require('express');
var request = require('request');

//Slack ID and Secret
var slackId = 'MOONBOT_SLACK_ID';
var slackSecret = 'MOONBOT_SLACK_SECRET';

//instantiate app and assign it to express
var app = express();

// what port is ngrok listening on
const PORT = 4390;

//start the server, issue callback if successful
app.listen(PORT, function(){
  console.log("We hear you! Server listening on http://localhost: %s ", PORT);
});

//GET call to ngrok, response if working
app.get('/', function(req,res){
  res.send('Ngrok-king it! You are hitting this path:' + req.url);
});

