import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import config from './config';

const PORT = config().api.port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configDoc = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('El outlet ceramico')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('Outlet')
    .build();

  const document = SwaggerModule.createDocument(app, configDoc);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT);
}
bootstrap();
