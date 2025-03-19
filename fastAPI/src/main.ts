import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads')); // Servir arquivos estáticos da pasta uploads
  app.enableCors({
    origin: ['http://localhost', 'http://localhost:3000', 'http://localhost:81','http://localhost:80', 'http://localhost:3001', 'http://fastanalytics', 'http://fastcursos'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  }); 
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3002, '0.0.0.0');
}
bootstrap();