const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'google@~> 3.0',
  eslint: false,
});

project.synth();
