// https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareDicomStoreIamPolicyConfig extends TerraformMetaArguments {
  readonly dicomStoreId: string;
  readonly policyData: string;
}

// Resource

export class HealthcareDicomStoreIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareDicomStoreIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dicom_store_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dicomStoreId = config.dicomStoreId;
    this._policyData = config.policyData;
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

  // policy_data - computed: false, optional: false, required: true
  private _policyData: string;
  public get policyData() {
    return this._policyData;
  }
  public set policyData(value: string) {
    this._policyData = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dicom_store_id: this._dicomStoreId,
      policy_data: this._policyData,
    };
  }
}
