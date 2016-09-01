var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');

app.get('/', function respondToIndexGet(req, res) {
    res.send('Hello, go to POST /twilio');
});

app.post('/twilio', function respondToTwilioPost(req, res) {
    res.set('Content-Type', 'text/xml');
    res.send('<?xml version="1.0" encoding="UTF-8" ?><Response><Say>Hello Twilio Customer</Say><Play>https://api.twilio.com/Cowbell.mp3</Play></Response>');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
