import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
