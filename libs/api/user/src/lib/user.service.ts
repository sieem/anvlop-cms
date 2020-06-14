import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async update(updatedValues: User, id: string): Promise<User> {
        const oldUser = await this.findById(id);
        const updatedUser = oldUser;

        for (const key in updatedValues) {
            if (!updatedValues.hasOwnProperty(key)) {
                continue;
            }
            updatedUser[key] = updatedValues[key];
        }

        return await updatedUser.save();
    }

    async delete(id: string) {
        const user = await this.findById(id);
        return await user.remove();
    }
}
