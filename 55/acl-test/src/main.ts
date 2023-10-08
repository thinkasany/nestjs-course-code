import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'guang',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
