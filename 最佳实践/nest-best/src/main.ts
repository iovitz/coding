import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import EnvConfig from './utils/config/config';
import { createLogger, format, transports } from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';

async function bootstrap() {
  const serverConfig = EnvConfig.get('server');

  // 创建winston实例
  const instance = createLogger({
    transports: [
      new transports.Console({
        // 使用时间戳和nest样式
        format: format.combine(
          format.timestamp(),
          utilities.format.nestLike('SERVER'),
        ),
      }),
      new transports.DailyRotateFile({
        dirname: 'logs',
        filename: 'application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: format.combine(format.timestamp(), format.simple()),
      }),
    ],
  });
  const app = await NestFactory.create(AppModule, {
    // 使用winston实例替换内置logger
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  await app.listen(serverConfig.port);
}
bootstrap();
