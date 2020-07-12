import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ImageService } from './image.service';
import { Project, IAsset } from '@anvlop/shared/interfaces';

@Injectable()
export class AssetService {
    fireBaseInit = admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL
        }),
        storageBucket: 'anvlop-cms.appspot.com'
    });
    bucket = admin.storage().bucket();

    constructor(private imageService: ImageService) { }

    async upload(projectId: string, file): Promise<any> {
        file = await this.imageService.convert(file);

        //https://storage.cloud.google.com/[BUCKET_NAME]/[OBJECT_NAME]
        const fileUpload = this.bucket.file(`${projectId}/${Date.now()}_${file.originalname}`);

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

    moveNewProjectFiles(projectId: string, files: IAsset[]): void {
        try {
            for (const file of files) {
                this.bucket.file(file.src).move(file.src.replace('newProject', projectId));
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUnusedFiles(project: Project): Promise<void> {
        const files = await this.bucket.getFiles( { directory: project._id });
        const projectAssets = project.assets.map((el) => el.src );

        for (const file of files[0]) {
            if (projectAssets.indexOf(file.name) > -1) {
                continue;
            }

            file.delete();
        }
    }

    async deleteProject(projectId: string): Promise<void> {
        const files = await this.bucket.getFiles({ directory: projectId });

        for (const file of files[0]) {
            file.delete();
        }
    }
}
