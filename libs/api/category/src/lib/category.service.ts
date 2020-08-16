import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '@anvlop/shared/interfaces';
import { CreateCategoryDto } from '@anvlop/shared/interfaces';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) { }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().sort({ order: 1 }).exec();
  }

  async findBySlug(slug: string): Promise<Category> {
    return await this.categoryModel.findOne({ slug }).exec();
  }

  async findById(id: string): Promise<Category> {
    return await this.categoryModel.findById(id).exec();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    createdCategory.order = (await this.categoryModel.find().exec()).length + 1;


    const savedCategory = await createdCategory.save();

    return { id: savedCategory._id };
  }

  async update(updatedValues: Category, id: string): Promise<Category> {
    const oldCategory = await this.findById(id);
    const updatedCategory = oldCategory;

    for (const key in updatedValues) {
      if (!updatedValues.hasOwnProperty(key)) {
        continue;
      }
      updatedCategory[key] = updatedValues[key];
    }

    return await updatedCategory.save();
  }

  async updateOrder(updatedValues: Category[]): Promise<any> {
    let i = 0;
    for (const updatedValue of updatedValues) {
      await this.categoryModel.findOneAndUpdate({ _id: updatedValue._id }, { order: i++ }).exec();
    }
    return { success: true };
  }

  async delete(id: string) {
    const category = await this.findById(id);
    return await category.remove();
  }
}
