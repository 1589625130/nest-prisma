import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Validate } from './validate';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Validate());
  await app.listen(3000);
}

bootstrap().then(() => {
  console.log('服务启动成功');
});
