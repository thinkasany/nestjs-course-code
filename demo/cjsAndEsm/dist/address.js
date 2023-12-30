"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
const address_purification20191118_1 = __importStar(require("@alicloud/address-purification20191118")), $address_purification20191118 = address_purification20191118_1;
const $OpenApi = __importStar(require("@alicloud/openapi-client"));
const tea_util_1 = __importStar(require("@alicloud/tea-util")), $Util = tea_util_1;
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
    static createClient(accessKeyId, accessKeySecret) {
        let config = new $OpenApi.Config({
            // 必填，您的 AccessKey ID
            accessKeyId: accessKeyId,
            // 必填，您的 AccessKey Secret
            accessKeySecret: accessKeySecret,
        });
        // Endpoint 请参考 https://api.aliyun.com/product/address-purification
        config.endpoint = `address-purification.cn-hangzhou.aliyuncs.com`;
        return new address_purification20191118_1.default(config);
    }
    // API概览 https://help.aliyun.com/zh/address-purification/addrpapi/developer-reference/api-overview?spm=a2c4g.11186623.0.0.1ab8130cZZfm2Q
    // https://next.api.aliyun.com/api/address-purification/2019-11-18/CorrectAddress
    static main(text) {
        return __awaiter(this, void 0, void 0, function* () {
            // 请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID 和 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
            // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例使用环境变量获取 AccessKey 的方式进行调用，仅供参考，建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html
            let client = Client.createClient(process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'], process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET']);
            const extractConfig = {
                serviceCode: "addrp",
                appKey: process.env['ALIBABA_CLOUD_appKey'],
                text,
            };
            let extractAddressRequest = new $address_purification20191118.ExtractAddressRequest(extractConfig);
            let extractPhoneRequest = new $address_purification20191118.ExtractPhoneRequest(extractConfig);
            let getAddressDivisionCodeRequest = new $address_purification20191118.GetAddressDivisionCodeRequest(extractConfig);
            let extractNameRequest = new $address_purification20191118.ExtractNameRequest(extractConfig);
            let runtime = new $Util.RuntimeOptions({});
            try {
                // 复制代码运行请自行打印 API 的返回值
                const addressData = yield client.extractAddressWithOptions(extractAddressRequest, runtime);
                const phoneData = yield client.extractPhoneWithOptions(extractPhoneRequest, runtime);
                const divisionsData = yield client.getAddressDivisionCodeWithOptions(getAddressDivisionCodeRequest, runtime);
                const nameData = yield client.extractNameWithOptions(extractNameRequest, runtime);
                const name = JSON.parse(nameData.body.data)['person_extract'][0].word;
                const address = JSON.parse(addressData.body.data)['location_extract'][0].word;
                const phone = JSON.parse(phoneData.body.data)['phone_extract'][0].word;
                const divisions = JSON.parse(divisionsData.body.data)['division_info']['division_name'];
                console.log(address, phone, divisions, name);
                return { address, phone, divisions, name };
            }
            catch (error) {
                // 错误 message
                console.log(error.message);
                // 诊断地址
                console.log(error.data["Recommend"]);
                tea_util_1.default.assertAsString(error.message);
            }
        });
    }
}
module.exports = Client;
// Client.main("东光县科技园南路444号马晓姐13243214321");
