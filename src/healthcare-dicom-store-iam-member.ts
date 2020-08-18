// https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareDicomStoreIamMemberConfig extends TerraformMetaArguments {
  readonly dicomStoreId: string;
  readonly member: string;
  readonly role: string;
  /** condition block */
  readonly condition?: HealthcareDicomStoreIamMemberCondition[];
}
export interface HealthcareDicomStoreIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

// Resource

export class HealthcareDicomStoreIamMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareDicomStoreIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dicom_store_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dicomStoreId = config.dicomStoreId;
    this._member = config.member;
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
  private _condition?: HealthcareDicomStoreIamMemberCondition[];
  public get condition() {
    return this._condition;
  }
  public set condition(value: HealthcareDicomStoreIamMemberCondition[] | undefined) {
    this._condition = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dicom_store_id: this._dicomStoreId,
      member: this._member,
      role: this._role,
      condition: this._condition,
    };
  }
}
