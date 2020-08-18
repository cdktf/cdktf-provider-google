// https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsCryptoKeyIamMemberConfig extends TerraformMetaArguments {
  readonly cryptoKeyId: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: KmsCryptoKeyIamMemberCondition[];
}
export interface KmsCryptoKeyIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class KmsCryptoKeyIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsCryptoKeyIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cryptoKeyId = config.cryptoKeyId;
    this._member = config.member;
    this._role = config.role;
    this._condition = config.condition;
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

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this._member;
  }
  public set member(value: string) {
    this._member = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: KmsCryptoKeyIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: KmsCryptoKeyIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key_id: this._cryptoKeyId,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
