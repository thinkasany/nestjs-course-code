import { Injectable } from '@nestjs/common';
import { OssService } from './common/oss/oss.service';
@Injectable()
export class AppService {
  constructor(private readonly ossService: OssService) {}
  getHello(): string {
    return 'Hello World!';
  }

  // 上传照片
  async uploadImage(file: any): Promise<any> {
    try {
      console.log('photo service 执行了', file.filename);
      const new_file_name = Date.now() + file.filename;
      const ossUrl = await this.ossService.putOssFile(
        `/img/${new_file_name}.jpg`,
        file.path,
      );
      console.log(ossUrl);
      // const url = ossUrl.replace(
      //   'lichee-img.oss-cn-hangzhou.aliyuncs.com',
      //   'img.lichee.top',
      // );
      //将图片路径存储到数据库，删除时间与上传设为当前
      // let img = new ImgEntity();
      // img.img_name = new_file_name;
      // img.img_path = url;
      // img.img_type = file.mimetype;
      // img.create_time = new Date();
      // img.delete_time = new Date();
      // const sql = await this.imgRepository.save(img);
      return {
        code: 200,
        body: ossUrl,
        message: '上传成功',
      };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
