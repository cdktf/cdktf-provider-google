// https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareConsentStoreIamBindingConfig extends cdktf.TerraformMetaArguments {
  readonly consentStoreId: string;
  readonly dataset: string;
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareConsentStoreIamBindingCondition[];
}
export interface HealthcareConsentStoreIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function healthcareConsentStoreIamBindingConditionToTerraform(struct?: HealthcareConsentStoreIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class HealthcareConsentStoreIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareConsentStoreIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_consent_store_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._consentStoreId = config.consentStoreId;
    this._dataset = config.dataset;
    this._members = config.members;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consent_store_id - computed: false, optional: false, required: true
  private _consentStoreId: string;
  public get consentStoreId() {
    return this.getStringAttribute('consent_store_id');
  }
  public set consentStoreId(value: string) {
    this._consentStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consentStoreIdInput() {
    return this._consentStoreId
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset: string;
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset
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
  private _condition?: HealthcareConsentStoreIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: HealthcareConsentStoreIamBindingCondition[] ) {
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
      consent_store_id: cdktf.stringToTerraform(this._consentStoreId),
      dataset: cdktf.stringToTerraform(this._dataset),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(healthcareConsentStoreIamBindingConditionToTerraform)(this._condition),
    };
  }
}
