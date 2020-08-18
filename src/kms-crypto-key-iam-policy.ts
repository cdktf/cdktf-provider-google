// https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsCryptoKeyIamPolicyConfig extends TerraformMetaArguments {
  readonly cryptoKeyId: string;
  readonly policyData: string;
}

// Resource

export class KmsCryptoKeyIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsCryptoKeyIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cryptoKeyId = config.cryptoKeyId;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crypto_key_id - computed: false, optional: false, required: true
  private _cryptoKeyId: string;
  public get cryptoKeyId() {
    return this._cryptoKeyId;
  }
  public set cryptoKeyId(value: string) {
    this._cryptoKeyId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key_id: this._cryptoKeyId,
      policy_data: this._policyData,
    };
  }
}
