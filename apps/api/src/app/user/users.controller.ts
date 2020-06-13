import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('user')
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
    }

    @Get('users')
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
}
