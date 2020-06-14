import { IsString, IsArray } from 'class-validator';
import { IProject } from '@anvlop/api-interfaces';

export class CreateProjectDto implements IProject {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    year: string;

    @IsString()
    description: string;

    @IsArray()
    assets: string[];
}