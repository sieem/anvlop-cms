import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { SettingService } from './setting.service';
import { Setting } from '@anvlop/shared/interfaces';
import { JwtAuthGuard } from '@anvlop/api/auth';

@Controller()
export class SettingController {
    constructor(private readonly settingService: SettingService) { }

    @Get('settings')
    async findAll(): Promise<Setting[]> {
        return this.settingService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('settings')
    async update(@Body() updatedValues: Setting[]) {
        try {
            for (const updatedValue of updatedValues) {
                if (!!await this.settingService.findBySetting(updatedValue.setting)) {
                    await this.settingService.update(updatedValue, updatedValue.setting);
                } else {
                    await this.settingService.create(updatedValue);
                }
            }
            return;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
