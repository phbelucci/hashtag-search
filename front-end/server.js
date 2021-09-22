const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors")
const { join, resolve } = require("path");
const getSentimentWatson = require("./server-watson");
const { query } = require("express");

const app = express();

const port = process.env.SERVER_PORT || 3003;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));
app.use(cors())

app.get('/tweets', (req, res) => {
    console.log('Calling Twitter api...');

    const hashtag = req.query.hashtag
    const count = req.query.count

    var Twit = require('twit');
    var config = require('./configTwt')
    var cors = require('cors')

    var twt = new Twit(config);

    var params = { 
        q: `#${hashtag}`,
        count: count,
        hasgeo : 'has:geo'
    };

    const tweetsPromise = new Promise((resolve, reject) => {
            twt.get('search/tweets', params, (err, data, response) => {
                resolve(data) 
            })
        }  
    );

    tweetsPromise.then(restult => {
        res.send(restult)
    })
});

app.get('/sentiment', (req, res) => {
    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const tweetContent = req.query.tweet
    
    const nlu = new NaturalLanguageUnderstandingV1({
      authenticator: new IamAuthenticator({ apikey: process.env.WATSON_API_KEY }),
      version: '2018-04-05',
      serviceUrl: 'https://api.au-syd.natural-language-understanding.watson.cloud.ibm.com/instances/bd05a3bf-88be-4c48-8cff-e815cb3d1d1f'
    });
    
    const sentiment = new Promise((resolve, reject) => {
        nlu.analyze(
        {
          html: tweetContent, // Buffer or String
          features: {
            sentiment: {}
          }
        })
        .then(response => {
            resolve(JSON.stringify(response.result, null, 2))
        })
        .catch(err => {
          console.log('error: ', err);
        })
    })

    sentiment.then(result => {
        res.send(result)
    })

})

app.listen(port, () => console.log(`Server listening on port ${port}`));