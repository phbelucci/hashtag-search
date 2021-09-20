console.log('Twitter api');

var Twit = require('twit');
var config = require('./configTwt')

var twt = new Twit(config);

var params = { 
    q: '#bolsonaro genocida',
    count: 5
};

const newQ = params.q.trim(' ');

var params = {
    q: newQ, 
    count: 2
}

twt.get('search/tweets', params, gotData);

function gotData (err, data, response) {
    const tweets = data.statuses;
    tweets.map(tweet => (
       [
            console.log(tweet)
        ]
    ))
};