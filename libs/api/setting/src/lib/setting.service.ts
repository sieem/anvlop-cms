import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Setting } from '@anvlop/shared/interfaces';
import { CreateSettingDto } from '@anvlop/shared/interfaces';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel(Setting.name) private categoryModel: Model<Setting>,
  ) { }

  async findAll(): Promise<Setting[]> {
    return this.categoryModel.find().sort({ order: 1 }).exec();
  }

  async findBySetting(setting: string): Promise<Setting> {
    return await this.categoryModel.findOne({ setting }).exec();
  }

  async create(setting: Setting): Promise<any> {
    const createdSetting = new this.categoryModel(setting as CreateSettingDto);
    const savedSetting = await createdSetting.save();

    return { id: savedSetting._id };
  }

  async update(updatedValues: Setting, setting: string): Promise<Setting> {
    const oldSetting = await this.findBySetting(setting);
    const updatedSetting = oldSetting;

    for (const key in updatedValues) {
      if (!updatedValues.hasOwnProperty(key)) {
        continue;
      }
      updatedSetting[key] = updatedValues[key];
    }

    return await updatedSetting.save();
  }

  async delete(setting: string) {
    const category = await this.findBySetting(setting);
    return await category.remove();
  }
}
