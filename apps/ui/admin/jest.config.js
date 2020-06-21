module.exports = {
  name: 'ui-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/ui/admin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
