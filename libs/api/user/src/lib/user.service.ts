import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@anvlop/api-interfaces';
import { CreateUserDto } from '@anvlop/api-interfaces';
import * as bcrypt from 'bcrypt';
import { bcryptConstants } from '@anvlop/constants'

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
        createdUser.password = await this.hashPassword(createdUser.password);
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

    private hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, bcryptConstants.saltRounds, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    }
}
