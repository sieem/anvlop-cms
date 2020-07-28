import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from '@anvlop/shared/interfaces';
import { CreateCategoryDto } from '@anvlop/shared/interfaces';
import { JwtAuthGuard } from '@anvlop/api/auth';
import { Types, isValidObjectId } from 'mongoose';

@Controller()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get('categories')
    async findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get('category/:idOrSlug')
    async findOneById(@Param() params: any): Promise<Category> {
        try {
            if (isValidObjectId(params.idOrSlug) && Types.ObjectId(params.idOrSlug).toHexString() === params.idOrSlug) {
                return await this.categoryService.findById(params.idOrSlug);
            }

            return await this.categoryService.findBySlug(params.idOrSlug);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('category')
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        try {
            return await this.categoryService.create(createCategoryDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('category/:id')
    async update(@Body() updatedValues: Category, @Param() params: any) {
        try {
            return await this.categoryService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('category/:id')
    async delete(@Param() params: any) {
        try {
            return await this.categoryService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
