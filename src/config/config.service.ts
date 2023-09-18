import * as process from 'process';

import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';


@Injectable()
export class ConfigService {
  constructor () {
    configDotenv();
  }

  get mode (): 'DEV' | 'PROD' {
    return this.getEnvValue('APP_MODE') as 'DEV' | 'PROD';
  }

  get dbHost (): string {
    return this.getEnvValue('APP_DB_HOST');
  }

  get dbPort (): number {
    return +this.getEnvValue('POSTGRES_PORT');
  }

  get dbUser (): string {
    return this.getEnvValue('POSTGRES_USER');
  }

  get dbPassword (): string {
    return this.getEnvValue('POSTGRES_PASSWORD');
  }

  get dbName (): string {
    return this.getEnvValue('POSTGRES_DB');
  }

  get appPort (): number {
    return +this.getEnvValue('APP_PORT');
  }

  get redisHost (): string {
    return this.getEnvValue('APP_REDIS_HOST');
  }

  get redisPort (): number {
    return +this.getEnvValue('APP_REDIS_PORT');
  }

  get redisUser (): string {
    return this.getEnvValue('REDIS_USER');
  }

  get redisPassword (): string {
    return this.getEnvValue('REDIS_PASSWORD');
  }

  private getEnvValue (value: string): string {
    if (!process.env[value]) throw new Error(`Undefined dotenv value: ${value}`);
    return process.env[value];
  }
}
