import { Module } from '@nestjs/common';
import { UserModule } from '@anvlop/api/user';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from '@anvlop/api/project';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/anvlop-cms'),
    UserModule,
    ProjectModule,
  ],
  controllers: [],
})
export class AppModule {}
