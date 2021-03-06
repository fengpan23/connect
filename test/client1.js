const Client = require('../module/client');

let client = new Client();
client.on('connected', function () {
    client.send(0, "init", {
        tableid : 211,
        gameid : 12,
        session : 12
    });
}).on('init', function (data) {
    console.log('init data: ', data);
    client.send(0, "userjoin", {index : 1});
}).on('request', function (data) {
    console.log('on request: ', data);
    client.send(0, "userjoin", {index : 1});
}).on('error', error => {
    console.log('client error: ', error);
}).on('disconnect', () => {
    // client.connect({port: 3000});
});
client.connect({port: 2323});
