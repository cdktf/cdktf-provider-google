// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareFhirStoreIamMemberConfig extends TerraformMetaArguments {
  readonly fhirStoreId: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareFhirStoreIamMemberCondition[];
}
export interface HealthcareFhirStoreIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class HealthcareFhirStoreIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _condition?: HealthcareFhirStoreIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: HealthcareFhirStoreIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      fhir_store_id: this._fhirStoreId,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
