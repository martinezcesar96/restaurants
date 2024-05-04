import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PORT } from './config/env/environment';
import { setupDatabase } from './config/db/create-if-not-exist';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Restaurants')
    .setDescription(
      'These APIs provide useful information about restaurants to users',
    )
    .setVersion('1.0')
    .addTag('restaurants')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(APP_PORT);
}
setupDatabase()
  .then(() => bootstrap())
  .catch(console.error);
