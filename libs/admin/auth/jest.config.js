module.exports = {
  name: 'admin-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
