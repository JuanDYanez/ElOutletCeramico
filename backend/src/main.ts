import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

const PORT = config().api.port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
