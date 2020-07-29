export const imageFileTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
];

export const videoFileTypes = [
    'video/mp4',
    'video/webm',
    'video/ogg',
];

export const allowedFileTypes = [
    ...imageFileTypes,
    ...videoFileTypes,
];

export const maxAssetFileSize = 5 * 1024 * 1024;
