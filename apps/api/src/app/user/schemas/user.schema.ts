import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from "@anvlop/api-interfaces";

@Schema()
export class User extends Document implements IUser {
    @Prop()
    name: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true })
    role: string;
    @Prop()
    resetToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);