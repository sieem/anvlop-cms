import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';

@Module({
    controllers: [AssetController],
    providers: [AssetService],
    exports: [],
})
export class AssetModule { }
