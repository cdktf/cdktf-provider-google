// https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareConsentStoreIamMemberConfig extends cdktf.TerraformMetaArguments {
  readonly consentStoreId: string;
  readonly dataset: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareConsentStoreIamMemberCondition[];
}
export interface HealthcareConsentStoreIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function healthcareConsentStoreIamMemberConditionToTerraform(struct?: HealthcareConsentStoreIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class HealthcareConsentStoreIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareConsentStoreIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_consent_store_iam_member',
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
    this._member = config.member;
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
  private _condition?: HealthcareConsentStoreIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: HealthcareConsentStoreIamMemberCondition[] ) {
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
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(healthcareConsentStoreIamMemberConditionToTerraform)(this._condition),
    };
  }
}
