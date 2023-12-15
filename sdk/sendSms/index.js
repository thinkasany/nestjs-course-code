const Core = require("@alicloud/pop-core");
const dotenv = require('dotenv');
dotenv.config();

const ENV = process.env;
const client = new Core({
        accessKeyId: ENV.ACCESS_KEY_ID,
        accessKeySecret: ENV.ACCESS_KEY_SECRET,
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    }), SIGN_NAME = ENV.SMS_SIGN_NAME,
    TEMPLATE_CODE = ENV.SMS_TEMPLATE_CODE


/**
 * 发送验证码
 * @param phoneNumber 手机号
 * @param code 验证码
 * @return {Promise<unknown>}
 */
 const smsSend = (phoneNumber, code) => new Promise((resolve, reject) => {
    client.request('SendSms', {
        "SignName": SIGN_NAME,
        "TemplateCode": TEMPLATE_CODE,
        "PhoneNumbers": phoneNumber,
        "TemplateParam": `{\"code\":\"${code}\"}`
    }, {
        method: 'POST',
        formatParams: false,
    }).then((result) => {
        resolve(JSON.stringify(result))
    }).catch(err => {
        reject(err)
    })
})

smsSend(18767788888, 123456)

module.exports = {
    smsSend
}