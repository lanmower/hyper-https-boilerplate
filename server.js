"use strict";
var b32 = require("hi-base32");
if(process.argv.length == 3) {
  const key = process.argv[process.argv.length-1];
  const out = require('./relay.js')().serve(key, 80, "127.0.0.1");
  console.log('listening', b32.encode(out).replace('====','').toLowerCase());
  console.log('hex', out);
} else console.log("usage: node server.js <key>");

var app = require("./app.js");
 
require("greenlock-express")
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
        maintainerEmail: "jon@example.com",
        cluster: false
    })
    .serve(app);
