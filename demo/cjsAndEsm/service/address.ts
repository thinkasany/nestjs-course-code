// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import address_purification20191118, * as $address_purification20191118 from "@alicloud/address-purification20191118";
import OpenApi, * as $OpenApi from "@alicloud/openapi-client";
import Util, * as $Util from "@alicloud/tea-util";
import * as $tea from '@alicloud/tea-typescript';

const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });


class Client {

  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(accessKeyId: string, accessKeySecret: string): address_purification20191118 {
    let config = new $OpenApi.Config({
      // 必填，您的 AccessKey ID
      accessKeyId: accessKeyId,
      // 必填，您的 AccessKey Secret
      accessKeySecret: accessKeySecret,
    });
    // Endpoint 请参考 https://api.aliyun.com/product/address-purification
    config.endpoint = `address-purification.cn-hangzhou.aliyuncs.com`;
    return new address_purification20191118(config);
  }

  // API概览 https://help.aliyun.com/zh/address-purification/addrpapi/developer-reference/api-overview?spm=a2c4g.11186623.0.0.1ab8130cZZfm2Q
  // https://next.api.aliyun.com/api/address-purification/2019-11-18/CorrectAddress
  static async main(text: string): Promise<void> {
    // 请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID 和 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
    // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例使用环境变量获取 AccessKey 的方式进行调用，仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html
    let client = Client.createClient(process.env['ALIBABA_CLOUD_ACCESS_KEY_ID']!, process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET']!);
    const extractConfig = {
      serviceCode: "addrp",
      appKey: process.env['ALIBABA_CLOUD_appKey']!,
      text,
    }
    let extractAddressRequest = new $address_purification20191118.ExtractAddressRequest(extractConfig);
    let extractPhoneRequest = new $address_purification20191118.ExtractPhoneRequest(extractConfig);
    let getAddressDivisionCodeRequest = new $address_purification20191118.GetAddressDivisionCodeRequest(extractConfig);
    let extractNameRequest = new $address_purification20191118.ExtractNameRequest(extractConfig);
    let runtime = new $Util.RuntimeOptions({ });
    try {
      // 复制代码运行请自行打印 API 的返回值
     
      const addressData = await client.extractAddressWithOptions(extractAddressRequest, runtime);
      const phoneData = await client.extractPhoneWithOptions(extractPhoneRequest, runtime);
      const divisionsData = await client.getAddressDivisionCodeWithOptions(getAddressDivisionCodeRequest, runtime);
      const nameData = await client.extractNameWithOptions(extractNameRequest, runtime);
      const name = JSON.parse(nameData.body.data!)['person_extract'][0].word
      const address = JSON.parse(addressData.body.data!)['location_extract'][0].word
      const phone = JSON.parse(phoneData.body.data!)['phone_extract'][0].word
      const divisions = JSON.parse(divisionsData.body.data!)['division_info']['division_name']
      
      console.log(address, phone, divisions,name);
      return { address, phone, divisions, name } as any
      
    } catch (error: any) {
      // 错误 message
      console.log(error.message);
      // 诊断地址
      console.log(error.data["Recommend"]);
      Util.assertAsString(error.message);
    }     
  }

}

module.exports = Client;
// Client.main("东光县科技园南路444号马晓姐13243214321");
