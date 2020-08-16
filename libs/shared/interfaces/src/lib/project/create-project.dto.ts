import { IsString, IsArray, IsNumber } from 'class-validator';
import { IProject } from '@anvlop/shared/interfaces';
import { IAsset } from '../asset/asset.schema';

export class CreateProjectDto implements IProject {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsNumber()
    order: number;

    @IsNumber()
    year: number;

    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsArray()
    assets: IAsset[];
}