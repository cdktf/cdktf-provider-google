// https://www.terraform.io/docs/providers/google/r/kms_key_ring_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsKeyRingIamMemberConfig extends TerraformMetaArguments {
  readonly keyRingId: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: KmsKeyRingIamMemberCondition[];
}
export interface KmsKeyRingIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class KmsKeyRingIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _condition?: KmsKeyRingIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: KmsKeyRingIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_ring_id: this._keyRingId,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
