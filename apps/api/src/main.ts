/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { config } from 'dotenv';
import { environment } from './environments/environment';

console.log(environment);

if (!environment.production) {
  config();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  let globalPrefix = '';

  if (!environment.production) {
    globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
  }

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
