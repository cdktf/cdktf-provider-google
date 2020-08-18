// https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsKeyRingIamPolicyConfig extends TerraformMetaArguments {
  readonly keyRingId: string;
  readonly policyData: string;
}

// Resource

export class KmsKeyRingIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsKeyRingIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_key_ring_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyRingId = config.keyRingId;
    this._policyData = config.policyData;
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

  // key_ring_id - computed: false, optional: false, required: true
  private _keyRingId: string;
  public get keyRingId() {
    return this._keyRingId;
  }
  public set keyRingId(value: string) {
    this._keyRingId = value;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring_id: this._keyRingId,
      policy_data: this._policyData,
    };
  }
}
