// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreIamBindingConfig extends TerraformMetaArguments {
  readonly hl7V2StoreId: string;
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareHl7V2StoreIamBindingCondition[];
}
export interface HealthcareHl7V2StoreIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class HealthcareHl7V2StoreIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareHl7V2StoreIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_hl7_v2_store_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hl7V2StoreId = config.hl7V2StoreId;
    this._members = config.members;
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

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this._members;
  }
  public set members(value: string[]) {
    this._members = value;
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
  private _condition?: HealthcareHl7V2StoreIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: HealthcareHl7V2StoreIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      hl7_v2_store_id: this._hl7V2StoreId,
      members: this._members,
      role: this._role,
      condition: this._condition,
    };
  }
}
