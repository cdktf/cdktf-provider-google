// https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCryptoKeyIamMemberConfig extends cdktf.TerraformMetaArguments {
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

function kmsCryptoKeyIamMemberConditionToTerraform(struct?: KmsCryptoKeyIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class KmsCryptoKeyIamMember extends cdktf.TerraformResource {

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
    return this.getStringAttribute('crypto_key_id');
  }
  public set cryptoKeyId(value: string) {
    this._cryptoKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyIdInput() {
    return this._cryptoKeyId
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: KmsCryptoKeyIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: KmsCryptoKeyIamMemberCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      crypto_key_id: cdktf.stringToTerraform(this._cryptoKeyId),
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(kmsCryptoKeyIamMemberConditionToTerraform)(this._condition),
    };
  }
}
