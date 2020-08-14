module.exports = {
  name: 'shared-angular',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/angular',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
