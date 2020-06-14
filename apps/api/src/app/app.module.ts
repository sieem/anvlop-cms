import { Module } from '@nestjs/common';
import { UserModule } from '@anvlop/api/user';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from '@anvlop/api/project';
import { AuthModule } from '@anvlop/api/auth';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/anvlop-cms'),
    UserModule,
    ProjectModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
