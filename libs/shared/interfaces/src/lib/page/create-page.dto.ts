import { IsString, IsArray } from 'class-validator';
import { IPage } from '@anvlop/shared/interfaces';

export class CreatePageDto implements IPage {
    @IsString()
    title: string;

    @IsString()
    slug: string;
}