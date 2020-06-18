import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ImageService } from './image.service';
import { Project } from '@anvlop/api-interfaces';

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
                console.error('Something is wrong! Unable to upload at the moment.', error);
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

    async deleteUnusedFiles(project: Project) {
        const files = await this.bucket.getFiles( { directory: project._id });

        for (const file of files[0]) {
            if (project.assets.indexOf(file.name) > -1) {
                continue;
            }

            file.delete();
        }
    }
}
