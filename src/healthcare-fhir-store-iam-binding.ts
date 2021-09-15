// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareFhirStoreIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#fhir_store_id HealthcareFhirStoreIamBinding#fhir_store_id}
  */
  readonly fhirStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#members HealthcareFhirStoreIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#role HealthcareFhirStoreIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#condition HealthcareFhirStoreIamBinding#condition}
  */
  readonly condition?: HealthcareFhirStoreIamBindingCondition[];
}
export interface HealthcareFhirStoreIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#description HealthcareFhirStoreIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#expression HealthcareFhirStoreIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html#title HealthcareFhirStoreIamBinding#title}
  */
  readonly title: string;
}

function healthcareFhirStoreIamBindingConditionToTerraform(struct?: HealthcareFhirStoreIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html google_healthcare_fhir_store_iam_binding}
*/
export class HealthcareFhirStoreIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_healthcare_fhir_store_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html google_healthcare_fhir_store_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareFhirStoreIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareFhirStoreIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fhirStoreId = config.fhirStoreId;
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
  private _condition?: HealthcareFhirStoreIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: HealthcareFhirStoreIamBindingCondition[] ) {
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
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(healthcareFhirStoreIamBindingConditionToTerraform)(this._condition),
    };
  }
}
