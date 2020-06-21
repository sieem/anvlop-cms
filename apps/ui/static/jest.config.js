module.exports = {
  name: 'ui-static',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/ui/static',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
