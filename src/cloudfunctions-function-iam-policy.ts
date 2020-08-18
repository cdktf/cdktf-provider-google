// https://www.terraform.io/docs/providers/google/r/cloudfunctions_function_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudfunctionsFunctionIamPolicyConfig extends TerraformMetaArguments {
  readonly cloudFunction: string;
  readonly policyData: string;
  readonly project?: string;
  readonly region?: string;
}

// Resource

export class CloudfunctionsFunctionIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfunctionsFunctionIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions_function_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudFunction = config.cloudFunction;
    this._policyData = config.policyData;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_function - computed: false, optional: false, required: true
  private _cloudFunction: string;
  public get cloudFunction() {
    return this._cloudFunction;
  }
  public set cloudFunction(value: string) {
    this._cloudFunction = value;
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_function: this._cloudFunction,
      policy_data: this._policyData,
      project: this._project,
      region: this._region,
    };
  }
}
