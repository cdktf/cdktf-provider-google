// https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyRingIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#key_ring_id KmsKeyRingIamMember#key_ring_id}
  */
  readonly keyRingId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#member KmsKeyRingIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#role KmsKeyRingIamMember#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#condition KmsKeyRingIamMember#condition}
  */
  readonly condition?: KmsKeyRingIamMemberCondition[];
}
export interface KmsKeyRingIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#description KmsKeyRingIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#expression KmsKeyRingIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html#title KmsKeyRingIamMember#title}
  */
  readonly title: string;
}

function kmsKeyRingIamMemberConditionToTerraform(struct?: KmsKeyRingIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html google_kms_key_ring_iam_member}
*/
export class KmsKeyRingIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_kms_key_ring_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html google_kms_key_ring_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyRingIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: KmsKeyRingIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_key_ring_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyRingId = config.keyRingId;
    this._member = config.member;
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
  private _condition?: KmsKeyRingIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: KmsKeyRingIamMemberCondition[] ) {
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
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(kmsKeyRingIamMemberConditionToTerraform)(this._condition),
    };
  }
}
