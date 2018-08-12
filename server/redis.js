// const Redis = require('redis');

// const client = Redis.createClient();

// let connectRedis = () => {
//     client.on('connect', function() {
//         console.log('connected');
//     });
// }

// let storeUserSession = (id, email) => {
//     client.set(id, email);
//     // with expiry time of 10 sec
//     client.set(id, email, 'EX', '10');
// }


// module.exports = {
//     connectRedis,
//     storeUserSession
// }
