import { Controller, Get, Post, Body, HttpStatus, HttpException, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@anvlop/api-interfaces';
import { CreateUserDto } from '@anvlop/api-interfaces';
import { LocalAuthGuard, JwtAuthGuard } from '@anvlop/api/auth';

@Controller()
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get('users')
    async findAll(): Promise<User[]> {
        return this.UserService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('user/:id')
    async findOneById(@Param() params: any): Promise<User> {
        try {
            return await this.UserService.findById(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('user')
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.UserService.create(createUserDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('user/:id')
    async update(@Body() updatedValues: User, @Param() params: any) {
        try {
            return await this.UserService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('user/:id')
    async delete(@Param() params: any) {
        try {
            return await this.UserService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}