import { IFile } from './file.schema';

export interface IAsset {
    id: string;
    mainAsset?: boolean;
    files?: IFile[];
}