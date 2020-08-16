module.exports = {
  name: 'ui-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/shared',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
