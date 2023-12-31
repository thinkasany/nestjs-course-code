const AlipaySdk = require('alipay-sdk').default; // 引入 SDK
const { appId, publicKey, privateKey, gateway } = require('../config/alipay.config');

// 只需要初始化一次，后续调用不同的 API 都可以使用同一个 alipaySdk 对象
const alipaySdk =  new  AlipaySdk({
  appId: '9021000130600181', // 开放平台上创建应用时生成的 appId
  signType: 'RSA2', // 签名算法,默认 RSA2
  gateway: gateway, // 支付宝网关地址 ，沙箱环境下使用时需要修改
  alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhlzYCMMZJjWBl2VR1403MvQGuyObR3VSYvdDhmkoKvnzudBL7FmEdv5iSboYQGf29i3TnAru2mXZ3Hoynrv+gZxDd2nQVdmQ09/GVqYHQqejCr5lX/6yFSf4zc2llWCis3bql/7qYP7g1ryvBFiKu3CB++OBiI59VmZiBcaizhAhVTc55Pz6l/78yhTUo9WMVgiZX60D4YXER4RjeFK9WL4FBy/KopmWa4qhUUYZR/5wMXwrhmpSwSp94rA3jqor4htvOxGbgfm83c1HK72Ebz+ikfWQc3lB5ySOKTlFFLe7/FxbV1StGPrCHvjDi9OxQmaTig9F0ggjctV0jUVEaQIDAQAB', // 支付宝公钥，需要对结果验签时候必填
  privateKey: 'MIIEpQIBAAKCAQEAstB9hDA4xAelKZ48pb8pdi7wpWQuZLIm9Ed+NlTA3rc33Co1J+YpG9v//qO7Ta1WsQ2HJ8LFhKME7uY/FCTjUZCWRtY4YiCbdILvW0iOpWgpfLIiJ5IPMK1HMZi8oCxgNjbWk8C9/4l/PuPg1aREmafx6RMsfUxhF0g3HIKOOQQG1dGPA8stjqs2zWGqUAwrn13R1PJ6BVBhY+fmMHKOKjwbxZ4Kls8attJYjQPCfnBXxE2AUEjsEL5H6wSLXiJXQ8vT04I4NJpGbXUfsV3Hm0B51dZrZQgFNkDR7Q+GW/+DtvIAdQfw8nD1FlR32+tKugsbp3f+2GJL7pmHHLHCpQIDAQABAoIBAQCi5NdS8nLj8Wr+TM5G16w3o29J28d/p+NgqThK2k6RFStn/3NJE5zjajj8ib95da0BwaccC4zP1YoK7+kKusfyZ9reUQwwKDA1pYnTCHgaKpeQpt4CWkZIO7IddlxvNb235aD4HJ95CJLIgeMx/GEZ8Sqo/vSKeGgCQ6Eg8bYKLR1oQVt8ByEpwbjwEFYhXWKrqrHu1AbfYDhsTCZ0Eq3hupzEtgoorlkGU9qTn9NxVGOWCHPGkY8XpdTmQnxUEQjnV6wNbIeLev698HtzqrYDFXoJKcgw/vv/31aeP0QKsrdPrzf0WRy1AebIZZtHAj6+cuqSK9yGuMJBpcLUhO6JAoGBAPVmLlzF7ZtUWeCy9JPcTTxRe3KcsMxXrdM1H5OriRL3oPKKn7iKh73Yzdc481pFNOoAY0Btw+ZcpKfkAx1pYjzwrq+bf7oHx2lyTKhfzLXFT3BMWknE7hT68j1SfyZEw6mV4Wbu1zyNu1pZ8DX46xFwS8DT/lWo6RgWFay2yE6rAoGBALqJ9ll83JRx9o6i+9VLJBIO1jaHbgAG4UWjAnSQjaRPFaqBwi6vsw9+CmbL9C3eNT3Zixm3s+8eMF25+q+yXevkmhqZuKrJelMKt9dO7uRFzuITk0NtqUffvG1sENdsyLP7UeX6/WPu/CsGTBvkibszqnoDFkEbAXp3ftnvDPPvAoGBAOTfBxCJnSDInAbAgPFCf1ppWGw9jXsXr0wT+L5eNrrU72wmM+8GbLF4egpn2Ddx4nb4I5lchl/cOclIFEujFPdnNlUb/xU+2hITg0FqD9/cBUnkPDUfETnKDpF41pOXgLEy04WP7nhQa9NJnIqJ/JtIE67lSQkVP0iymEZ8Nvd/AoGBAIliyvmlqJ/8P2dWSrwRF4PlQYfvvuhuKMQtBsXrISb+yCpIX0gbR3oFjoufczvFCNmAu545WmCmj2C4dRWp/NqcB5PH2+aNdXZr0nLVQ8UEVRbU7AUhYyf4dMLycIT5LejBFNSZQr6zaS4W+T8h1v71Un2CgIV66l/UWq0QDy4pAoGARsA/axgZHC6WOTNhKhiowp7tE8C/VPo9njbQoLjiL2Fm1LaA4VtdT+3AhzX/u6+jqGKMoJ0H9JpuGIb0Xf1cqec2SC9iNOt/nK7SCIoFGHa3CMZEVsV7nqKfk3rPkbC8tkbH4lrPt3IvaDsQn05Qmt1p3WH97n43oDl01h2p2Co=', // 应用私钥字符串
});

console.log(alipaySdk);

module.exports = alipaySdk;