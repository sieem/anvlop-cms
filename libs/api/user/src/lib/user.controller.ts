import { Controller, Get, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Post('user')
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            await this.UserService.create(createUserDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('users')
    async findAll(): Promise<User[]> {
        return this.UserService.findAll();
    }
}
