import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './project/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/anvlop-cms'),
    UsersModule,
    ProjectsModule,
  ],
  controllers: [],
})
export class AppModule {}
