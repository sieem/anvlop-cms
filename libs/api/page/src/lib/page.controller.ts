import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete, UseGuards, Patch } from '@nestjs/common';
import { PageService } from './page.service';
import { Page } from '@anvlop/shared/interfaces';
import { CreatePageDto } from '@anvlop/shared/interfaces';
import { JwtAuthGuard } from '@anvlop/api/auth';
import { Types, isValidObjectId } from 'mongoose';

@Controller()
export class PageController {
    constructor(private readonly pageService: PageService) { }

    @Get('pages')
    async findAll(): Promise<Page[]> {
        return this.pageService.findAll();
    }

    @Get('page/:idOrSlug')
    async findOneById(@Param() params: any): Promise<Page> {
        try {
            if (isValidObjectId(params.idOrSlug) && Types.ObjectId(params.idOrSlug).toHexString() === params.idOrSlug) {
                return await this.pageService.findById(params.idOrSlug);
            }

            return await this.pageService.findBySlug(params.idOrSlug);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('page')
    async create(@Body() createPageDto: CreatePageDto) {
        try {
            return await this.pageService.create(createPageDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('page/:id')
    async update(@Body() updatedValues: Page, @Param() params: any) {
        try {
            return await this.pageService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Patch('pages')
    async updateOrder(@Body() updatedValues: Page[]) {
        try {
            return await this.pageService.updateOrder(updatedValues);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('page/:id')
    async delete(@Param() params: any) {
        try {
            return await this.pageService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
