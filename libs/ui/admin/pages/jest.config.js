module.exports = {
  name: 'ui-admin-pages',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/admin/pages',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
