import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ImageService } from './image.service';

@Injectable()
export class AssetService {
    fireBaseInit = admin.initializeApp({
        credential: admin.credential.cert('./firebase.json'),
        storageBucket: "anvlop-cms.appspot.com"
    });
    bucket = admin.storage().bucket();

    constructor(private imageService: ImageService) { }

    async upload(projectId: string, file): Promise<any> {
        file = await this.imageService.convert(file);

        //https://storage.cloud.google.com/[BUCKET_NAME]/[OBJECT_NAME]
        let fileUpload = this.bucket.file(`${projectId}/${Date.now()}_${file.originalname}`);

        await new Promise((resolve, reject) => {
            const blobStream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype
                }
            });

            blobStream.on('error', (error) => {
                console.error('Something is wrong! Unable to upload at the moment.');
                reject();
            });

            blobStream.on('finish', async () => {
                resolve();
            });

            blobStream.end(file.buffer);
        });

        return {
            filename: fileUpload.name,
        };
    }
}
