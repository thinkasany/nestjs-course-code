const config = require('./config')
module.exports = {
  appId: '9021000130600181',
  gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do', // 支付宝网关地址
  privateKey: config.privateKey, // 应用私钥
  publicKey: config.alipayPublicKey, //  支付宝公钥
}