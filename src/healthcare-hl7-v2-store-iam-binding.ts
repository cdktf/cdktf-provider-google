// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreIamBindingConfig extends cdktf.TerraformMetaArguments {
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

function healthcareHl7V2StoreIamBindingConditionToTerraform(struct?: HealthcareHl7V2StoreIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class HealthcareHl7V2StoreIamBinding extends cdktf.TerraformResource {

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hl7_v2_store_id - computed: false, optional: false, required: true
  private _hl7V2StoreId: string;
  public get hl7V2StoreId() {
    return this.getStringAttribute('hl7_v2_store_id');
  }
  public set hl7V2StoreId(value: string) {
    this._hl7V2StoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hl7V2StoreIdInput() {
    return this._hl7V2StoreId
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
  private _condition?: HealthcareHl7V2StoreIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: HealthcareHl7V2StoreIamBindingCondition[] ) {
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
      hl7_v2_store_id: cdktf.stringToTerraform(this._hl7V2StoreId),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(healthcareHl7V2StoreIamBindingConditionToTerraform)(this._condition),
    };
  }
}
