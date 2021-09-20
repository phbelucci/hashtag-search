// const configTwt = {
//     consumer_key : "5KXVVaD023TuQfsjPUcCx8CSj",
//     consumer_secret : "kiPUXzN9utygDS8D3vUKGkwV7UoYrDvjGv5d5jJ1QXweIOqZYB",
//     access_token : "1439074842683248641-Wh3GcyuvYWSpxM0P2c6icQncQ3oXvi",
//     access_token_secret : "5HpWtYwFlWVqf4KU2CM2zwug57KtXx7IdhKdnWnVabb7l",
// }

// module.exports = configTwt;

require('dotenv/config');

const configTwt = {
    consumer_key : process.env.CONSUMER_KEY,
    consumer_secret : process.env.CONSUMER_SECRET,
    access_token : process.env.ACCESS_TOKEN,
    access_token_secret : process.env.ACCESS_TOKEN_SECRET,
}

module.exports = configTwt;