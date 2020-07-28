import { IsString, IsArray } from 'class-validator';
import { IProject } from '@anvlop/shared/interfaces';
import { IAsset } from '../asset/asset.schema';

export class CreateProjectDto implements IProject {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    year: string;

    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsArray()
    assets: IAsset[];
}