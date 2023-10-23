import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

// 通过 provide 指定注入的 token，通过 useClass 指定注入的对象的类，Nest 会自动对它做实例化再注入。
// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

// 如果不想用构造器注入，也可以属性注入：

// @Controller()
// export class AppController {
//   @Inject(AppService)
//   private readonly appService: AppService;
//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

// 如果 token 是字符串的话，注入的时候就要用 @Inject 手动指定注入对象的 token 了：
// @Controller()
// export class AppController {
//   @Inject('app_service')
//   private readonly appService: AppService;
//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

// 除了指定 class 外，还可以直接指定一个值，让 IOC 容器来注入。
// @Controller()
// export class AppController {
//   @Inject(AppService)
//   private readonly appService: AppService;

//   @Inject('person')
//   private readonly person: { name: string; age: number };
//   @Get()
//   getHello(): string {
//     console.log(this.person);
//     return this.appService.getHello();
//   }
// }

// provider 的值可能是动态产生的，Nest 也同样支持：
// @Controller()
// export class AppController {
//   @Inject(AppService)
//   private readonly appService: AppService;
//   @Inject('person')
//   private readonly person: { name: string; age: number };

//   @Inject('person3')
//   private readonly person3: { name: string; desc: string };
//   @Get()
//   getHello(): string {
//     console.log(this.person3);
//     return this.appService.getHello();
//   }
// }

// # useFactory 支持异步：
@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('person5')
  private readonly person5: { name: string; desc: string };
  @Get()
  getHello(): string {
    console.log(this.person5);
    return this.appService.getHello();
  }
}
// @Controller()
// export class AppController {
//   @Inject(AppService)
//   private readonly appService: AppService;
//   @Inject('app_service')
//   private readonly appService2: AppService;
//   @Inject('person')
//   private readonly person: { name: string; age: number };
//   @Inject('person2')
//   private readonly person2: { name: string; desc: string };
//   @Inject('person3')
//   private readonly person3: { name: string; desc: string };
//   @Inject('person4')
//   private readonly person4: { name: string; age: number };
//   @Inject('person5')
//   private readonly person5: { name: string; desc: string };

//   // constructor(
//   //   private  readonly appService: AppService,
//   //   @Inject('app_service') private readonly appService2: AppService,
//   //   @Inject('person') private readonly person: {name: string, age: number},
//   //   @Inject('person2') private readonly person2: {name: string, desc: string},
//   //   @Inject('person3') private readonly person3: {name: string, desc: string},
//   //   @Inject('person4') private readonly person4: {name: string, age: number},
//   //   @Inject('person5') private readonly person5: {name: string, desc: string},
//   // ) {}

//   @Get()
//   getHello(): string {
//     console.log(this.appService2);
//     console.log(this.person);
//     console.log(this.person2);
//     console.log(this.person3);
//     console.log(this.person4);
//     console.log(this.person5);
//     return this.appService.getHello();
//   }
// }
