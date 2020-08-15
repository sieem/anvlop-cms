import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Page } from '@anvlop/shared/interfaces';
import { CreatePageDto } from '@anvlop/shared/interfaces';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page.name) private pageModel: Model<Page>,
  ) { }

  async findAll(): Promise<Page[]> {
    return this.pageModel.find().exec();
  }

  async findBySlug(slug: string): Promise<Page> {
    return await this.pageModel.findOne({ slug }).exec();
  }

  async findById(id: string): Promise<Page> {
    return await this.pageModel.findById(id).exec();
  }

  async create(createPageDto: CreatePageDto): Promise<any> {
    const createdPage = new this.pageModel(createPageDto);

    const savedPage = await createdPage.save();

    return { id: savedPage._id };
  }

  async update(updatedValues: Page, id: string): Promise<Page> {
    const oldPage = await this.findById(id);
    const updatedPage = oldPage;

    for (const key in updatedValues) {
      if (!updatedValues.hasOwnProperty(key)) {
        continue;
      }
      updatedPage[key] = updatedValues[key];
    }

    return await updatedPage.save();
  }

  async delete(id: string) {
    const page = await this.findById(id);
    return await page.remove();
  }
}
