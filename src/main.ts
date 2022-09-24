import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);

  app.useGlobalFilters(new AllExceptionFilter());
  
  app.enableCors()

  await app.listen(configService.get('server.port'));
}

bootstrap();
