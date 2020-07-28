import { Module } from '@nestjs/common';
import { UserModule } from '@anvlop/api/user';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from '@anvlop/api/project';
import { AuthModule } from '@anvlop/api/auth';
import { AssetModule } from '@anvlop/api/asset';
import { CategoryModule } from '@anvlop/api/category';
import { PageModule } from '@anvlop/api/page';

import { config } from 'dotenv';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
    ProjectModule,
    AuthModule,
    AssetModule,
    CategoryModule,
    PageModule,
  ],
  controllers: [],
})
export class AppModule {}
