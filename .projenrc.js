/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "google@~> 5.0",
  cdktfVersion: "^0.19.0",
  constructsVersion: "^10.3.0",
  minNodeVersion: "18.12.0",
  jsiiVersion: "~5.2.0",
  typescriptVersion: "~5.2.0", // NOTE: this should be the same major/minor version as JSII
  devDeps: ["@cdktf/provider-project@~0.4.0"],
  // Uncomment below when the workflow has been tested on Hashicups and we think the change is safe to roll out:
  // isDeprecated: false,
});

project.synth();
