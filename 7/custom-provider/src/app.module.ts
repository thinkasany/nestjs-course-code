import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  // providers: [
  //   {
  //     provide: AppService,
  //     useClass: AppService,
  //   },
  // ],
  // providers: [
  //   {
  //     provide: 'app_service',
  //     useClass: AppService,
  //   },
  // ],
  // providers: [
  //   AppService,
  //   {
  //     provide: 'person',
  //     useValue: {
  //       name: 'aaa',
  //       age: 20,
  //     },
  //   },
  // ],
  // providers: [
  //   AppService,
  //   {
  //     provide: 'person2',
  //     useFactory() {
  //       return {
  //         name: 'bbb',
  //         desc: 'cccc',
  //       };
  //     },
  //   },
  // ],
  // providers: [
  //   AppService,
  //   {
  //     provide: 'person',
  //     useValue: {
  //       name: 'aaa',
  //       age: 20,
  //     },
  //   },
  //   {
  //     provide: 'person3',
  //     useFactory(person: { name: string }, appService: AppService) {
  //       return {
  //         name: person.name,
  //         desc: appService.getHello(),
  //       };
  //     },
  //     inject: ['person', AppService],
  //   },
  // ],
  // # useFactory 支持异步：
  providers: [
    AppService,
    {
      provide: 'person5',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 5000);
        });
        return {
          name: 'bbb',
          desc: 'cccc',
        };
      },
    },
  ],
  // providers: [
  //   AppService,
  //   {
  //     provide: 'app_service',
  //     useClass: AppService,
  //   },
  //   {
  //     provide: 'person',
  //     useValue: {
  //       name: 'aaa',
  //       age: 20,
  //     },
  //   },
  //   {
  //     provide: 'person2',
  //     useFactory() {
  //       return {
  //         name: 'bbb',
  //         desc: 'cccc',
  //       };
  //     },
  //   },
  //   {
  //     provide: 'person5',
  //     async useFactory() {
  //       await new Promise((resolve) => {
  //         setTimeout(resolve, 3000);
  //       });
  //       return {
  //         name: 'bbb',
  //         desc: 'cccc',
  //       };
  //     },
  //   },
  //   {
  //     provide: 'person3',
  //     useFactory(person: { name: string }, appService: AppService) {
  //       return {
  //         name: person.name,
  //         desc: appService.getHello(),
  //       };
  //     },
  //     inject: ['person', AppService],
  //   },
    // {
    //   provide: 'person4',
    //   useExisting: 'person2',
    // },
  // ],
})
export class AppModule { }
