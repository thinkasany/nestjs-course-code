import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Body() user: LoginDto) {
    console.log(user);
  }

  @Post('register')
  register(@Body() user: RegisterDto) {
    console.log(user);
  }
}
