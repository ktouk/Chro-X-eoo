const { spawn } = require('child_process');
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
