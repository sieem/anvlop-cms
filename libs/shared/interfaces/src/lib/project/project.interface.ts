import { IAsset } from '../asset/asset.schema';

export interface IProject {
    title: string,
    slug: string,
    order: number,
    year: number,
    category: string,
    description: string,
    assets: IAsset[]
}
