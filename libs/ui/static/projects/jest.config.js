module.exports = {
  name: 'ui-static-projects',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/static/projects',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
