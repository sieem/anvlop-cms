import { Controller, Post, Body, HttpException, HttpStatus, Param, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssetService } from './asset.service';
import { JwtAuthGuard } from '@anvlop/api/auth';
import { allowedFileTypes } from '@anvlop/constants';

@Controller()
export class AssetController {
    constructor(private readonly assetService: AssetService) { }

    @UseGuards(JwtAuthGuard)
    @Post('asset/:projectId')
    @UseInterceptors(FileInterceptor('asset'))
    async update(@UploadedFile() file, @Param() params: any) {
        if (allowedFileTypes.indexOf(file.mimetype) === -1) {
            throw new HttpException(`Filetype not allowed: ${file.mimetype}`, HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.assetService.upload(params.projectId, file);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
