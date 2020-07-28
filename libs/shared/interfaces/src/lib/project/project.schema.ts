import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProject } from '@anvlop/shared/interfaces';
import { IAsset } from '../asset/asset.schema';

@Schema()
export class Project extends Document implements IProject {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, unique: true })
    slug: string;

    @Prop()
    year: string;

    @Prop()
    category: string;

    @Prop()
    description: string;

    @Prop()
    assets: IAsset[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);