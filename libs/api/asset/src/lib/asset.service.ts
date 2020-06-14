import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetService {
    constructor() { }

    async upload(projectId: string, file) {
        console.log(file);
        // TODO: Put the file somewhere
    }
}
