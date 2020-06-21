export const jwtConstants = {
    secret: 'secretKey',
};

export const bcryptConstants = {
    saltRounds: 10,
};

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
