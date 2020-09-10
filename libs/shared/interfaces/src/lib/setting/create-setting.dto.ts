import { IsString, IsObject } from 'class-validator';
import { ISetting } from '@anvlop/shared/interfaces';

export class CreateSettingDto implements ISetting {
    @IsString()
    setting: string;

    @IsObject()
    value: any;
}