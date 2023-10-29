import Koa from "koa";
const app = new Koa();
import axios from "axios";
import { readFileSync } from "fs";
import { createSign as _createSign } from "crypto";

/**
 * 生成随机字符串
 * @param {number} len 字符串长度
 */
function createRandomString(len) {
  let data = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  let str = "";
  for (let i = 0; i < len; i++) {
    str += data.charAt(Math.floor(Math.random() * data.length));
  }
  return str;
}

/**
 * 微信支付v3 签名生成
 * @param {string} method 请求方法
 * @param {string} url
 * @param {number} timestamp 时间戳 秒级
 * @param {string} nonce_str 随机字符串
 * @param {Object} order 主体信息
 */
function createSign(method, url, timestamp, nonce_str, order) {
  let signStr = `${method}\n${url}\n${timestamp}\n${nonce_str}\n${JSON.stringify(
    order
  )}\n`;
  let cert = readFileSync("./apiclient_key.pem", "utf-8");
  let sign = _createSign("RSA-SHA256");
  sign.update(signStr);
  return sign.sign(cert, "base64");
}

/**
 * 微信支付v3
 * @param {Object} order 订单信息
 */
function v3Pay(order, serial_no) {
  let timestamp = Math.floor(new Date().getTime() / 1000);
  let nonce_str = createRandomString(32);
  let signature = createSign(
    "POST",
    "/v3/pay/transactions/native",
    timestamp,
    nonce_str,
    order
  );
  let Authorization = `WECHATPAY2-SHA256-RSA2048 mchid="${order.}",nonce_str="${nonce_str}",timestamp="${timestamp}",signature="${signature}",serial_no="${serial_no}"`;
  console.log(Authorization);
  axios
    .post("https://api.mch.weixin.qq.com/v3/pay/transactions/native", order, {
      headers: { Authorization: Authorization }
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}
let order = {
  appid: "wx74862e0dfcf69954",
  mchid: "1558950191",
  description: "测试扫码支付",
  out_trade_no: "wzm20210209",
  amount: {
    total: 1
  },
  notify_url: "https://xxx.cn/"
};
v3Pay(order, "34345964330B66427E0D3D28826C4993C77E631F");

app.listen(3000);
