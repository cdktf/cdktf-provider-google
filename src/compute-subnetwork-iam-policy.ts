// https://www.terraform.io/docs/providers/google/r/compute_subnetwork_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSubnetworkIamPolicyConfig extends TerraformMetaArguments {
  readonly policyData: string;
  readonly project?: string;
  readonly region?: string;
  readonly subnetwork: string;
}

// Resource

export class ComputeSubnetworkIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSubnetworkIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_subnetwork_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyData = config.policyData;
    this._project = config.project;
    this._region = config.region;
    this._subnetwork = config.subnetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork: string;
  public get subnetwork() {
    return this._subnetwork;
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: this._policyData,
      project: this._project,
      region: this._region,
      subnetwork: this._subnetwork,
    };
  }
}
