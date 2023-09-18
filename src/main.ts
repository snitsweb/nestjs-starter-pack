import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { HttpExceptionFilter } from '@app/common/filters/http-exception.filter';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';


async function bootstrap () {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  const config: ConfigService = new ConfigService();

  await app.listen(config.appPort);
}
bootstrap();
