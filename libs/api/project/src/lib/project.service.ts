import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '@anvlop/shared/interfaces';
import { CreateProjectDto } from '@anvlop/shared/interfaces';
import { AssetService } from '@anvlop/api/asset';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>,
        private assetService: AssetService,
    ) { }

    async findAll(): Promise<Project[]> {
        return this.projectModel.find().sort({ order: 1 }).exec();
    }

    async findBySlug(slug: string): Promise<Project> {
        return await this.projectModel.findOne({ slug }).exec();
    }

    async findById(id: string): Promise<Project> {
        return await this.projectModel.findById(id).exec();
    }

    async create(createProjectDto: CreateProjectDto): Promise<any> {
        const createdProject = new this.projectModel(createProjectDto);
        createdProject.order = (await this.projectModel.find().exec()).length + 1;

        try {
            await this.assetService.moveNewProjectFiles(createdProject._id, createdProject.assets);
        } catch (error) {
            console.log(error);
        }

        createdProject.assets = createdProject.assets.map((asset) => {
            asset.files.map((file) => {
                file.src = file.src.replace('newProject', createdProject._id);
            });
            return asset;
        });

        const savedProject = await createdProject.save();

        return { id: savedProject._id };
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

    async updateOrder(updatedValues: Project[]): Promise<any> {
        let i = 0;
        for (const updatedValue of updatedValues) {
            await this.projectModel.findOneAndUpdate({ _id: updatedValue._id }, { order: i++ }).exec();
        }
        return { success: true };
    }

    async delete(id: string) {
        const project = await this.findById(id);
        this.assetService.deleteProject(id);
        return await project.remove();
    }
}
