const fs = require('fs');
const b32 = require('hi-base32');
require('dotenv').config();

const crypto = require("hypercore-crypto");
const keyPair = crypto.keyPair(crypto.data(Buffer.from(key)));
const out = require('./relay.js')().serve(process.env.KEY, 2080, 2443, "127.0.0.1");
