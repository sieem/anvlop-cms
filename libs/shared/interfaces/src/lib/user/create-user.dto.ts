import { IsString } from 'class-validator';
import { IUser } from '@anvlop/shared/interfaces';

export class CreateUserDto implements IUser {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    role: string;

    @IsString()
    resetToken: string;
}