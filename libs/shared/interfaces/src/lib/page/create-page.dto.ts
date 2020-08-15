import { IsString, IsArray, IsNumber } from 'class-validator';
import { IPage } from '@anvlop/shared/interfaces';

export class CreatePageDto implements IPage {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsNumber()
    order: number;

    @IsString()
    content: string;
}