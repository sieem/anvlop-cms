import { Injectable } from '@nestjs/common';
import { imageFileTypes } from '@anvlop/shared/constants';
import * as Jimp from 'jimp';

@Injectable()
export class ImageService {

    constructor() { }

    async convert(file): Promise<any> {
        if (imageFileTypes.indexOf(file.mimetype) === -1) {
            return file;
        }

        let JimpBuffer = await Jimp.read(file.buffer);

        JimpBuffer = await JimpBuffer.scaleToFit(2048, 2048, Jimp.RESIZE_BILINEAR).quality(60);

        file.buffer = await JimpBuffer.getBufferAsync(file.mimetype);

        return file;
    }
}
