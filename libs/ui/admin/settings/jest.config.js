module.exports = {
  name: 'ui-admin-settings',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/admin/settings',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
