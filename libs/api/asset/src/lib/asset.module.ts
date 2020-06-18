import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';
import { ImageService } from './image.service';

@Module({
    controllers: [AssetController],
    providers: [AssetService, ImageService],
    exports: [AssetService],
})
export class AssetModule { }
