const AlipaySdk = require('alipay-sdk').default
const AlipayFormData = require('alipay-sdk/lib/form').default
const config = require('./local/config')

const alipaySdk = new AlipaySdk({
  appId:'9021000130600181',
  gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do',
  signType: 'RSA2',
  privateKey: config.privateKey,
  alipayPublicKey: config.alipayPublicKey
})

async function pay () {
  const formData = new AlipayFormData();
  // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
  formData.setMethod('get');

  formData.addField('notifyUrl', 'http://localhost:3000');
  const bizContent = {
    out_trade_no: '212', //订单号
    product_code: "FAST_INSTANT_TRADE_PAY",
    total_amount: '12', //总价格
    subject: '12', //商品名称
    body: "商品详情", //商品描述
};
formData.addField("bizContent", bizContent);

//支付成功或失败的返回链接（前端页面）
formData.addField("returnUrl", "http://localhost:8080/payment");

// 返回promise
const result = alipaySdk.exec(
    "alipay.trade.page.pay",
    // "alipay.trade.wap.pay", 
    {},
    { formData: formData }
).catch(error => console.error('caught error!', error));


  // result 为可以跳转到支付链接的 url
  console.log(result);
  result.then((resp) => {
    console.log(resp);
});
}




pay()