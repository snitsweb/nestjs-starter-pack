import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';

import { ConfigService } from './config/config.service';
import { ExampleModule } from './example/example.module';


const config = new ConfigService();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUser,
      password: config.dbPassword,
      database: config.dbName,
      synchronize: true,
      autoLoadEntities: true,
    }),
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: config.redisHost,
      port: config.redisPort,
      username: config.redisUser,
      password: config.redisPassword,
      no_ready_check: config.mode === 'DEV' ? false : true,
    }),
    ExampleModule,
  ],
})
export class AppModule {}
