import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '@anvlop/api-interfaces';
import { CreateProjectDto } from '@anvlop/api-interfaces';
import { AssetService } from '@anvlop/api/asset';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>,
        private assetService: AssetService,
    ) { }

    async findAll(): Promise<Project[]> {
        return this.projectModel.find().exec();
    }

    async findById(id: string): Promise<Project> {
        return await this.projectModel.findById(id).exec();
    }

    async create(createProjectDto: CreateProjectDto): Promise<Project> {
        const createdProject = new this.projectModel(createProjectDto);
        return await createdProject.save();
    }

    async update(updatedValues: Project, id: string): Promise<Project> {
        const oldProject = await this.findById(id);
        const updatedProject = oldProject;

        for (const key in updatedValues) {
            if (!updatedValues.hasOwnProperty(key)) {
                continue;
            }
            updatedProject[key] = updatedValues[key];
        }

        this.assetService.deleteUnusedFiles(updatedProject);

        return await updatedProject.save();
    }

    async delete(id: string) {
        const project = await this.findById(id);
        return await project.remove();
    }
}
