module.exports = {
  name: 'ui-admin-projects',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/admin/projects',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
