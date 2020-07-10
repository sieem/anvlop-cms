module.exports = {
  name: 'ui-static-services',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/static/services',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
