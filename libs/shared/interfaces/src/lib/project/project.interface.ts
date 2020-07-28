import { IAsset } from '../asset/asset.schema';

export interface IProject {
    title: string,
    slug: string,
    year: string,
    category: string,
    description: string,
    assets: IAsset[]
}
