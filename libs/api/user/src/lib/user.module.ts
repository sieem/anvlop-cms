import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from '@anvlop/api-interfaces';
import { AuthModule } from '@anvlop/api/auth';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        AuthModule,
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }