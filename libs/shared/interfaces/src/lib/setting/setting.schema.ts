import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ISetting } from '@anvlop/shared/interfaces';

@Schema()
export class Setting extends Document implements ISetting {
    @Prop({ required: true, unique: true })
    setting: string;
    @Prop()
    value: string;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);