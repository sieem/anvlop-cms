import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IProject } from "@anvlop/api-interfaces";

@Schema()
export class Project extends Document implements IProject {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, unique: true })
    slug: string;

    @Prop()
    year: string;

    @Prop()
    description: string;

    @Prop()
    assets: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);