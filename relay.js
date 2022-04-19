const DHT = require("@hyperswarm/dht");
const crypto = require("hypercore-crypto");
var net = require("net");
var pump = require("pump");
const node = new DHT({});

module.exports = () => {
  return {
    serve: (key, port, addr) => {
      const keyPair = crypto.keyPair(crypto.data(Buffer.from(key)));
      const server = node.createServer();
      server.on("connection", function(servsock) {
        servsock.once("data", function(data) {
          if(data == 'http') {
            socket = net.connect(80, addr);
          }
          if(data == 'https') {
            socket = net.connect(443, addr);
          }
          pump(servsock, socket, servsock);
        });

      });
      server.listen(keyPair);
      return keyPair.publicKey;
    }
  };
};
