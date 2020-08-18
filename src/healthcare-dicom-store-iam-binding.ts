// https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareDicomStoreIamBindingConfig extends TerraformMetaArguments {
  readonly dicomStoreId: string;
  readonly members: string[];
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareDicomStoreIamBindingCondition[];
}
export interface HealthcareDicomStoreIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class HealthcareDicomStoreIamBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareDicomStoreIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dicom_store_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dicomStoreId = config.dicomStoreId;
    this._members = config.members;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dicom_store_id - computed: false, optional: false, required: true
  private _dicomStoreId: string;
  public get dicomStoreId() {
    return this._dicomStoreId;
  }
  public set dicomStoreId(value: string) {
    this._dicomStoreId = value;
  }

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
  private _condition?: HealthcareDicomStoreIamBindingCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: HealthcareDicomStoreIamBindingCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dicom_store_id: this._dicomStoreId,
      members: this._members,
      role: this._role,
      condition: this._condition,
    };
  }
}
