// https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsCryptoKeyIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#crypto_key_id KmsCryptoKeyIamBinding#crypto_key_id}
  */
  readonly cryptoKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#members KmsCryptoKeyIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#role KmsCryptoKeyIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#condition KmsCryptoKeyIamBinding#condition}
  */
  readonly condition?: KmsCryptoKeyIamBindingCondition[];
}
export interface KmsCryptoKeyIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#description KmsCryptoKeyIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#expression KmsCryptoKeyIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html#title KmsCryptoKeyIamBinding#title}
  */
  readonly title: string;
}

function kmsCryptoKeyIamBindingConditionToTerraform(struct?: KmsCryptoKeyIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html google_kms_crypto_key_iam_binding}
*/
export class KmsCryptoKeyIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_kms_crypto_key_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding.html google_kms_crypto_key_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsCryptoKeyIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: KmsCryptoKeyIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_crypto_key_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cryptoKeyId = config.cryptoKeyId;
    this._members = config.members;
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

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
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
  private _condition?: KmsCryptoKeyIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: KmsCryptoKeyIamBindingCondition[] ) {
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
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(kmsCryptoKeyIamBindingConditionToTerraform)(this._condition),
    };
  }
}
