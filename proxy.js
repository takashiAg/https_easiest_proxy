var https = require('https');
var fs = require('fs');
var url = require('url');
var httpProxy = require('http-proxy');

var ssl_server_key = 'server_key.pem';
var ssl_server_crt = 'server_crt.pem';

let wan_port=process.env.WAN || 8080
let lan_port=process.env.LAN || 3000

// var port = process.env.PORT || 8090;
var logPath = './log';
var server = 'http://localhost:'+lan_port;

function requestHandler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var urlobj = url.parse(req.url, true);

  console.log(req.method + ' ' + urlobj.pathname + '\n');

  var proxy = httpProxy.createProxyServer();
  
  proxy.web(req, res, {target: server});
}

var options = {pfx: fs.readFileSync('mysslserver.pfx')}

https.createServer(options,requestHandler).listen(wan_port);
console.log('listening http://0.0.0.0:' + wan_port);
console.log('proxy to http://localhost:' + wan_port);
