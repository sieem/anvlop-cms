
export interface ISetting {
    slug: string,
    text?: string,
    type?: 'text' | 'html' | 'code' | 'select',
    value?: any,
    data?: any,
}
