// https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareConsentStoreIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy#consent_store_id HealthcareConsentStoreIamPolicy#consent_store_id}
  */
  readonly consentStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy#dataset HealthcareConsentStoreIamPolicy#dataset}
  */
  readonly dataset: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy#id HealthcareConsentStoreIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy#policy_data HealthcareConsentStoreIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy google_healthcare_consent_store_iam_policy}
*/
export class HealthcareConsentStoreIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_consent_store_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthcareConsentStoreIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthcareConsentStoreIamPolicy to import
  * @param importFromId The id of the existing HealthcareConsentStoreIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthcareConsentStoreIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_healthcare_consent_store_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.17.0/docs/resources/healthcare_consent_store_iam_policy google_healthcare_consent_store_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareConsentStoreIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareConsentStoreIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_consent_store_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.17.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consentStoreId = config.consentStoreId;
    this._dataset = config.dataset;
    this._id = config.id;
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consent_store_id - computed: false, optional: false, required: true
  private _consentStoreId?: string; 
  public get consentStoreId() {
    return this.getStringAttribute('consent_store_id');
  }
  public set consentStoreId(value: string) {
    this._consentStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consentStoreIdInput() {
    return this._consentStoreId;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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
      consent_store_id: cdktf.stringToTerraform(this._consentStoreId),
      dataset: cdktf.stringToTerraform(this._dataset),
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consent_store_id: {
        value: cdktf.stringToHclTerraform(this._consentStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_data: {
        value: cdktf.stringToHclTerraform(this._policyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
