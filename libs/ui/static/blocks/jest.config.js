module.exports = {
  name: 'ui-static-blocks',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/static/blocks',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
