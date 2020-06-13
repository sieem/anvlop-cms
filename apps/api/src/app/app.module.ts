import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/anvlop-cms'),
    UsersModule],
  controllers: [],
})
export class AppModule {}
