// https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/healthcare_dicom_store_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleHealthcareDicomStoreIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/healthcare_dicom_store_iam_policy#dicom_store_id DataGoogleHealthcareDicomStoreIamPolicy#dicom_store_id}
  */
  readonly dicomStoreId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/healthcare_dicom_store_iam_policy#id DataGoogleHealthcareDicomStoreIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/healthcare_dicom_store_iam_policy google_healthcare_dicom_store_iam_policy}
*/
export class DataGoogleHealthcareDicomStoreIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_dicom_store_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleHealthcareDicomStoreIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleHealthcareDicomStoreIamPolicy to import
  * @param importFromId The id of the existing DataGoogleHealthcareDicomStoreIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/healthcare_dicom_store_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleHealthcareDicomStoreIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_healthcare_dicom_store_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/data-sources/healthcare_dicom_store_iam_policy google_healthcare_dicom_store_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleHealthcareDicomStoreIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleHealthcareDicomStoreIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_dicom_store_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.9.0',
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
    this._dicomStoreId = config.dicomStoreId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dicom_store_id - computed: false, optional: false, required: true
  private _dicomStoreId?: string; 
  public get dicomStoreId() {
    return this.getStringAttribute('dicom_store_id');
  }
  public set dicomStoreId(value: string) {
    this._dicomStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dicomStoreIdInput() {
    return this._dicomStoreId;
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

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dicom_store_id: cdktf.stringToTerraform(this._dicomStoreId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
