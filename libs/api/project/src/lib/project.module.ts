import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project, ProjectSchema } from '@anvlop/shared/interfaces';
import { AssetModule } from '@anvlop/api/asset';

@Module({
    imports: [MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]), AssetModule],
    controllers: [ProjectController],
    providers: [ProjectService],
})
export class ProjectModule { }