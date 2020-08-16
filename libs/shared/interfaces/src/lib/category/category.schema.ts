import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICategory } from '@anvlop/shared/interfaces';

@Schema()
export class Category extends Document implements ICategory {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, unique: true })
    slug: string;

    @Prop({ required: true })
    order: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);