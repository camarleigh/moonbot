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

//GET request to SLACK /oauth endpoint
app.get('oauth', function(req,res){
  //when a user authorizes app, if code query is missing, throw error msg
  if(!req.query.code){
    res.status(500);
    res.send({"Error":"Sad trombone. No code coming through."});
    console.log("Sad trombone. No code coming through.");
  } else {
    //if code query there, proceed by passing id & secret & code
    request({
      //url
      url: 'https://slack.com/api/oauth.access',
      //query string data
      qs:{code:req.query.code, slack_id: slackId, slack_secret: slackSecret},
      //be sure to specify method
      method: 'GET',
    }, function(error, response, body){
      if(error){
        console.log(error);
      }else{
        res.json(body);
      }
    })

  }

  //endpoint that confirms ngrok tunnel is up and working
  app.post('/command', function(req,res){
    res.send('Yep, your ngrok is grokking!');
  });
});
