// qiniuService.js

const qiniu = require('qiniu');
const path = require('path');
const dotenv = require('dotenv');
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });
const accessKey = process.env.QINIU_ACCESS_KEY;
const secretKey = process.env.QINIU_SECRET_KEY;
const bucket = process.env.QINIU_BUCKET;

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();

async function uploadToQiniu(fileBuffer) {
  return new Promise((resolve, reject) => {
    const options = {
      scope: bucket,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    formUploader.put(uploadToken, null, fileBuffer, putExtra, (respErr, respBody, respInfo) => {
      if (respErr) {
        reject(respErr);
      } else if (respInfo.statusCode === 200) {
        const imageUrl = `http://qniu.xxlb.site//${respBody.key}`;
        resolve(imageUrl);
      } else {
        reject(new Error(`Upload failed: ${respInfo.statusCode}, ${respBody.error}`));
      }
    });
  });
}

module.exports = {
  uploadToQiniu,
};
