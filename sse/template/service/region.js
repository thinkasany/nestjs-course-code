const { exec } = require("child_process");
const { Observable } = require("rxjs");

const getLogChange = async (req, res) => {
  const childProcess = exec("tail -f ./log");

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const observer = msg => {
    res.write(`data: ${JSON.stringify({ msg: msg.toString() })}\n\n`);
  };

  const observable = new Observable(obs => {
    childProcess.stdout.on("data", msg => {
      obs.next(msg);
    });
  });

  const subscription = observable.subscribe(observer);

  // 当连接断开时，停止子进程和 Observable
  req.on("close", () => {
    childProcess.kill();
    subscription.unsubscribe();
  });
};

module.exports = {
  getLogChange
};
