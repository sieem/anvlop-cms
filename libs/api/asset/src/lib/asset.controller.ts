import { Controller, Post, Body, HttpException, HttpStatus, Param, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssetService } from './asset.service';
import { JwtAuthGuard } from '@anvlop/api/auth';

@Controller()
export class AssetController {
    constructor(private readonly assetService: AssetService) { }

    @UseGuards(JwtAuthGuard)
    @Post('asset/:projectId')
    @UseInterceptors(FileInterceptor('asset'))
    async update(@UploadedFile() file, @Param() params: any) {
        try {
            return await this.assetService.upload(params.id, file);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
