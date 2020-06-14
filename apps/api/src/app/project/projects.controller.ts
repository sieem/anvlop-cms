import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller()
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Get('projects')
    async findAll(): Promise<Project[]> {
        return this.projectsService.findAll();
    }

    @Get('project/:id')
    async findOneById(@Param() params: any): Promise<Project> {
        try {
            return await this.projectsService.findById(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.NOT_FOUND);
        }
    }

    @Post('project')
    async create(@Body() createProjectDto: CreateProjectDto) {
        try {
            return await this.projectsService.create(createProjectDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('project/:id')
    async update(@Body() updatedValues: Project, @Param() params: any) {
        try {
            return await this.projectsService.update(updatedValues, params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete('project/:id')
    async delete(@Param() params: any) {
        try {
            return await this.projectsService.delete(params.id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
