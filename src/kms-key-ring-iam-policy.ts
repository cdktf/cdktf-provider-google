// https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyRingIamPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly keyRingId: string;
  readonly policyData: string;
}

// Resource

export class KmsKeyRingIamPolicy extends cdktf.TerraformResource {

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_ring_id - computed: false, optional: false, required: true
  private _keyRingId: string;
  public get keyRingId() {
    return this.getStringAttribute('key_ring_id');
  }
  public set keyRingId(value: string) {
    this._keyRingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingIdInput() {
    return this._keyRingId
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring_id: cdktf.stringToTerraform(this._keyRingId),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}
