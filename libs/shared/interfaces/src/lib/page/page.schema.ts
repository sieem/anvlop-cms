import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IPage } from '@anvlop/shared/interfaces';

@Schema()
export class Page extends Document implements IPage {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, unique: true })
    slug: string;
}

export const PageSchema = SchemaFactory.createForClass(Page);