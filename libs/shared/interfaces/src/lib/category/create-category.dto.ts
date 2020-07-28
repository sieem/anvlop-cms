import { IsString, IsArray } from 'class-validator';
import { ICategory } from '@anvlop/shared/interfaces';

export class CreateCategoryDto implements ICategory {
    @IsString()
    title: string;

    @IsString()
    slug: string;
}