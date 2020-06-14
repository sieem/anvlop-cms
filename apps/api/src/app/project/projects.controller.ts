import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller()
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post('project')
    async create(@Body() createProjectDto: CreateProjectDto) {
        try {
            await this.projectsService.create(createProjectDto);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('projects')
    async findAll(): Promise<Project[]> {
        return this.projectsService.findAll();
    }
}
