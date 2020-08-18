// https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RuntimeconfigConfigIamPolicyConfig extends TerraformMetaArguments {
  readonly config: string;
  readonly policyData: string;
  readonly project?: string;
}

// Resource

export class RuntimeconfigConfigIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RuntimeconfigConfigIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_runtimeconfig_config_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._config = config.config;
    this._policyData = config.policyData;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config: string;
  public get config() {
    return this._config;
  }
  public set config(value: string) {
    this._config = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      config: this._config,
      policy_data: this._policyData,
      project: this._project,
    };
  }
}
