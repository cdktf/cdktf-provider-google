// https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyRingIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#key_ring_id KmsKeyRingIamBinding#key_ring_id}
  */
  readonly keyRingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#members KmsKeyRingIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#role KmsKeyRingIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#condition KmsKeyRingIamBinding#condition}
  */
  readonly condition?: KmsKeyRingIamBindingCondition[];
}
export interface KmsKeyRingIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#description KmsKeyRingIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#expression KmsKeyRingIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html#title KmsKeyRingIamBinding#title}
  */
  readonly title: string;
}

function kmsKeyRingIamBindingConditionToTerraform(struct?: KmsKeyRingIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html google_kms_key_ring_iam_binding}
*/
export class KmsKeyRingIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_binding.html google_kms_key_ring_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyRingIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: KmsKeyRingIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_key_ring_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyRingId = config.keyRingId;
    this._members = config.members;
    this._role = config.role;
    this._condition = config.condition;
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
  private _condition?: KmsKeyRingIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: KmsKeyRingIamBindingCondition[] ) {
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
      key_ring_id: cdktf.stringToTerraform(this._keyRingId),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(kmsKeyRingIamBindingConditionToTerraform)(this._condition),
    };
  }
}
