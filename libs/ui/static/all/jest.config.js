module.exports = {
  name: 'ui-static-all',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/static/all',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
