const express = require("express");
const app = express();
const { spawn } = require('child_process');
const { createProxyMiddleware } = require("http-proxy-middleware");
const port= process.env.PORT||3000;
const shellFilePath = './start.sh';
const childProcess = spawn('sh', [shellFilePath]);

// 监听子进程输出
childProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

childProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

childProcess.on('close', (code) => {
  console.log(`Child process exit, exit code：${code}`);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.listen(port, () => console.log(`server is running on port:${port}！`));
