// https://www.terraform.io/docs/providers/google/r/service_account_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceAccountIamPolicyConfig extends TerraformMetaArguments {
  readonly policyData: string;
  readonly serviceAccountId: string;
}

// Resource

export class ServiceAccountIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceAccountIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._policyData = config.policyData;
    this._serviceAccountId = config.serviceAccountId;
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

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId: string;
  public get serviceAccountId() {
    return this._serviceAccountId;
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: this._policyData,
      service_account_id: this._serviceAccountId,
    };
  }
}
