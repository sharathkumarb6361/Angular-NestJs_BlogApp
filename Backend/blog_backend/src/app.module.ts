import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ProfileModule } from './profile/profile.module';
import { BlogsModule } from './blogs/blogs.module';

import { ProfileImageModule } from './profile-image/profile-image.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'intern7',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), ProfileModule,BlogsModule, ProfileImageModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
    serveRoot: '/uploads', 
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
