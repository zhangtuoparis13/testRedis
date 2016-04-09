/*
* @Author: TBtuo
* @Date:   2016-04-09 14:51:29
* @Last Modified by:   TBtuo
* @Last Modified time: 2016-04-09 17:00:12
*/

'use strict';

var x = 100+200+300;
console.log(x);
console.log('Hello, World.');

var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
