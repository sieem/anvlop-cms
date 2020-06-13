import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller()
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Post('project')
    async create(@Body() createProjectDto: CreateProjectDto) {
        this.projectsService.create(createProjectDto);
    }

    @Get('projects')
    async findAll(): Promise<Project[]> {
        return this.projectsService.findAll();
    }
}
