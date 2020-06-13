module.exports = {
  name: 'admin-projects',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/projects',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
