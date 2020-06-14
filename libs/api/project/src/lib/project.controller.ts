import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '@anvlop/api-interfaces';
import { CreateProjectDto } from '@anvlop/api-interfaces';
import { JwtAuthGuard } from '@anvlop/api/auth';

@Controller()
export class ProjectController {
    constructor(private readonly ProjectService: ProjectService) { }

    @Get('projects')
    async findAll(): Promise<Project[]> {
        return this.ProjectService.findAll();
    }

    @Get('project/:id')
    async findOneById(@Param() params: any): Promise<Project> {
        try {
            return await this.ProjectService.findById(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('project')
    async create(@Body() createProjectDto: CreateProjectDto) {
        try {
            return await this.ProjectService.create(createProjectDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('project/:id')
    async update(@Body() updatedValues: Project, @Param() params: any) {
        try {
            return await this.ProjectService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete('project/:id')
    async delete(@Param() params: any) {
        try {
            return await this.ProjectService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
