# easy proxy

## installation


```
git clone https://github.com/takashiAg/https_easiest_proxy
cd https_easiest_proxy
npm install
openssl genrsa 2048 > mysslserver.key
openssl req -new -key mysslserver.key -subj "/C=JP/ST=Tokyo-to/L=Shibuya/O=Company Name/OU=IT dept./CN=Company Dept CA" > mysslserver.csr
openssl x509 -days 3650 -req -signkey mysslserver.key < mysslserver.csr > mysslserver.crt
openssl pkcs12 -export -inkey mysslserver.key -in mysslserver.crt > mysslserver.pfx
```


## start

```
node proxy.js
```

### change port

```
WAN=80 LAN=3000 node proxy.js
```
