// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareFhirStoreIamBindingConfig extends TerraformMetaArguments {
  readonly fhirStoreId: string;
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareFhirStoreIamBindingCondition[];
}
export interface HealthcareFhirStoreIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class HealthcareFhirStoreIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fhir_store_id - computed: false, optional: false, required: true
  private _fhirStoreId: string;
  public get fhirStoreId() {
    return this._fhirStoreId;
  }
  public set fhirStoreId(value: string) {
    this._fhirStoreId = value;
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
  private _condition?: HealthcareFhirStoreIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: HealthcareFhirStoreIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      fhir_store_id: this._fhirStoreId,
      members: this._members,
      role: this._role,
      condition: this._condition,
    };
  }
}
