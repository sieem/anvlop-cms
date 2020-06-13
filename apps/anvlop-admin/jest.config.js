module.exports = {
  name: 'anvlop-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/anvlop-admin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
