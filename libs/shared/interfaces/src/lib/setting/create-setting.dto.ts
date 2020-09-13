import { IsString, IsObject } from 'class-validator';
import { ISetting } from '@anvlop/shared/interfaces';

export class CreateSettingDto implements ISetting {
    @IsString()
    slug: string;

    @IsObject()
    value: any;
}