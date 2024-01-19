/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "google@~> 5.0",
  cdktfVersion: "^0.20.0",
  constructsVersion: "^10.3.0",
  minNodeVersion: "18.12.0",
  jsiiVersion: "~5.3.0",
  typescriptVersion: "~5.3.0", // NOTE: this should be the same major/minor version as JSII
  devDeps: ["@cdktf/provider-project@^0.5.0"],
  isDeprecated: false,
});

project.synth();
