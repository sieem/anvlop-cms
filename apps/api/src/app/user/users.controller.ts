import { Controller, Get, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('user')
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            await this.usersService.create(createUserDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('users')
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
