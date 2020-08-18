// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreIamMemberConfig extends TerraformMetaArguments {
  readonly hl7V2StoreId: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareHl7V2StoreIamMemberCondition[];
}
export interface HealthcareHl7V2StoreIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class HealthcareHl7V2StoreIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareHl7V2StoreIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_hl7_v2_store_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hl7V2StoreId = config.hl7V2StoreId;
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

  // hl7_v2_store_id - computed: false, optional: false, required: true
  private _hl7V2StoreId: string;
  public get hl7V2StoreId() {
    return this._hl7V2StoreId;
  }
  public set hl7V2StoreId(value: string) {
    this._hl7V2StoreId = value;
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
  private _condition?: HealthcareHl7V2StoreIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: HealthcareHl7V2StoreIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      hl7_v2_store_id: this._hl7V2StoreId,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
