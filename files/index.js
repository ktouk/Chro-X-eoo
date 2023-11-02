const express = require("express");
const app = express();
const { exec } = require('child_process');
const port = process.env.SERVER_PORT || 8080;
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nz.f4i.cn';
const NEZHA_PORT = process.env.NEZHA_PORT || '5555';   // 无需设置TLS,当哪吒端口为443时，自动开启--tls
const NEZHA_KEY = process.env.NEZHA_KEY || 'NjoeLcZDZwt4FdFQEq'; 
const UUID = process.env.UUID || 'de04add9-5c68-8bab-870c-08cd5320df00';

app.get("/", function(req, res) {
    res.send("Hello world!");
  });

//运行ne-zha
  let NEZHA_TLS = ''
  if (NEZHA_PORT === '443') {
    NEZHA_TLS = '--tls';
  } else {
    NEZHA_TLS = '';
  }
const command = `./swith -s ${NEZHA_SERVER}:${NEZHA_PORT} -p ${NEZHA_KEY} ${NEZHA_TLS} >/dev/null 2>&1 &`;
exec(command, (error) => {
  if (error) {
    console.error(`swith running error: ${error}`);
  } else {
    console.log('swith is running');
  }
});

//运行server
const command1 = `./server -p ${SERVER_PORT} -u ${UUID} > /dev/null 2>&1 &`;
exec(command1, (error) => {
  if (error) {
    console.error(`server running error: ${error}`);
  } else {
    console.log('server is running');
  }
});

app.listen(port, () => console.log(`Server is running on port: ${port}!`));
