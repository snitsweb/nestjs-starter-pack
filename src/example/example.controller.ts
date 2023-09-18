import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, UseInterceptors } from '@nestjs/common';

import { ExampleService } from './example.service';


@Controller('example')
export class ExampleController {
  constructor (private readonly service: ExampleService) {}

  @Get('/')
  async getGreeting () {
    return this.service.greet();
  }

  @UseInterceptors(CacheInterceptor)
  @Get('/cached')
  async getGreetingCached () {
    return this.service.greetWithCache();
  }
}
