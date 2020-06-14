import { Controller, Get, Post, Body, HttpStatus, HttpException, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Get('users')
    async findAll(): Promise<User[]> {
        return this.UserService.findAll();
    }

    @Get('user/:id')
    async findOneById(@Param() params: any): Promise<User> {
        try {
            return await this.UserService.findById(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @Post('user')
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.UserService.create(createUserDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('user/:id')
    async update(@Body() updatedValues: User, @Param() params: any) {
        try {
            return await this.UserService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete('user/:id')
    async delete(@Param() params: any) {
        try {
            return await this.UserService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
