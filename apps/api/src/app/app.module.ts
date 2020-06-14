import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from '@anvlop/api/project';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/anvlop-cms'),
    UsersModule,
    ProjectModule,
  ],
  controllers: [],
})
export class AppModule {}
