import { Roles } from './entities/roles.entity';
import { Global, Logger, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import EnvConfig from './utils/config/config';
import { Users } from './entities/users.entity';
import { Profile } from './entities/profile.entity';
import { Logs } from './entities/logs.entity';

const db = EnvConfig.get('mysql');

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db.host,
      port: db.port,
      database: db.database,
      username: db.username,
      password: db.password,
      // 同步本地的Schema到数据库
      synchronize: true,
      entities: [Users, Profile, Logs, Roles],
      // 设置日志等级
      logging: ['error'],
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [Logger],
  exports: [Logger],
})
export class AppModule {}
