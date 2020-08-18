// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareFhirStoreIamPolicyConfig extends TerraformMetaArguments {
  readonly fhirStoreId: string;
  readonly policyData: string;
}

// Resource

export class HealthcareFhirStoreIamPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthcareFhirStoreIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fhirStoreId = config.fhirStoreId;
    this._policyData = config.policyData;
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
      fhir_store_id: this._fhirStoreId,
      policy_data: this._policyData,
    };
  }
}
