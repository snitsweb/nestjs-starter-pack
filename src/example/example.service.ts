import { Injectable } from '@nestjs/common';


@Injectable()
export class ExampleService {
  async greet () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello world!'), 1000);
    });
  }

  async greetWithCache () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello world! I\'m cached with redis!'), 1000);
    });
  }
}
