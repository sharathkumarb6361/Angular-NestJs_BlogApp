import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  app.enableCors();

  app.use(
    express.json({ limit: '10mb' }) // Increase payload size for JSON
  );
  app.use(
    express.urlencoded({ limit: '10mb', extended: true }) // Increase payload size for URL-encoded data
  );


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
