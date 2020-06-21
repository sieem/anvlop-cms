import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '@anvlop/shared/interfaces';
import { CreateProjectDto } from '@anvlop/shared/interfaces';
import { JwtAuthGuard } from '@anvlop/api/auth';
import { Types, isValidObjectId } from 'mongoose';

@Controller()
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Get('projects')
    async findAll(): Promise<Project[]> {
        return this.projectService.findAll();
    }

    @Get('project/:idOrSlug')
    async findOneById(@Param() params: any): Promise<Project> {
        try {
            if (isValidObjectId(params.idOrSlug) && Types.ObjectId(params.idOrSlug).toHexString() === params.idOrSlug) {
                return await this.projectService.findById(params.idOrSlug);
            }

            return await this.projectService.findBySlug(params.idOrSlug);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('project')
    async create(@Body() createProjectDto: CreateProjectDto) {
        try {
            return await this.projectService.create(createProjectDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('project/:id')
    async update(@Body() updatedValues: Project, @Param() params: any) {
        try {
            return await this.projectService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('project/:id')
    async delete(@Param() params: any) {
        try {
            return await this.projectService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
