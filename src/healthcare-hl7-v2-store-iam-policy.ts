// https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareHl7V2StoreIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_policy#hl7_v2_store_id HealthcareHl7V2StoreIamPolicy#hl7_v2_store_id}
  */
  readonly hl7V2StoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_policy#id HealthcareHl7V2StoreIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_policy#policy_data HealthcareHl7V2StoreIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_policy google_healthcare_hl7_v2_store_iam_policy}
*/
export class HealthcareHl7V2StoreIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_hl7_v2_store_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_policy google_healthcare_hl7_v2_store_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareHl7V2StoreIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareHl7V2StoreIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_hl7_v2_store_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hl7V2StoreId = config.hl7V2StoreId;
    this._id = config.id;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hl7_v2_store_id - computed: false, optional: false, required: true
  private _hl7V2StoreId?: string; 
  public get hl7V2StoreId() {
    return this.getStringAttribute('hl7_v2_store_id');
  }
  public set hl7V2StoreId(value: string) {
    this._hl7V2StoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hl7V2StoreIdInput() {
    return this._hl7V2StoreId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hl7_v2_store_id: cdktf.stringToTerraform(this._hl7V2StoreId),
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}
