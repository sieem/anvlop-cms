module.exports = {
  name: 'ui-admin-categories',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/admin/categories',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
