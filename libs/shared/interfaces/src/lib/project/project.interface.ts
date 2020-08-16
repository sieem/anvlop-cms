import { IAsset } from '../asset/asset.schema';

export interface IProject {
    title: string,
    slug: string,
    order: number,
    year: number,
    client: string,
    category: string,
    description: string,
    assets: IAsset[]
}
