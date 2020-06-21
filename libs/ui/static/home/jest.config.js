module.exports = {
  name: 'ui-static-home',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/static/home',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
