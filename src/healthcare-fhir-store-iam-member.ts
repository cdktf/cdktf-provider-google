// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareFhirStoreIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#fhir_store_id HealthcareFhirStoreIamMember#fhir_store_id}
  */
  readonly fhirStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#member HealthcareFhirStoreIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#role HealthcareFhirStoreIamMember#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#condition HealthcareFhirStoreIamMember#condition}
  */
  readonly condition?: HealthcareFhirStoreIamMemberCondition[];
}
export interface HealthcareFhirStoreIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#description HealthcareFhirStoreIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#expression HealthcareFhirStoreIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html#title HealthcareFhirStoreIamMember#title}
  */
  readonly title: string;
}

function healthcareFhirStoreIamMemberConditionToTerraform(struct?: HealthcareFhirStoreIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html google_healthcare_fhir_store_iam_member}
*/
export class HealthcareFhirStoreIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html google_healthcare_fhir_store_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareFhirStoreIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareFhirStoreIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fhirStoreId = config.fhirStoreId;
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

  // fhir_store_id - computed: false, optional: false, required: true
  private _fhirStoreId: string;
  public get fhirStoreId() {
    return this.getStringAttribute('fhir_store_id');
  }
  public set fhirStoreId(value: string) {
    this._fhirStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fhirStoreIdInput() {
    return this._fhirStoreId
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
  private _condition?: HealthcareFhirStoreIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: HealthcareFhirStoreIamMemberCondition[] ) {
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
      fhir_store_id: cdktf.stringToTerraform(this._fhirStoreId),
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(healthcareFhirStoreIamMemberConditionToTerraform)(this._condition),
    };
  }
}
