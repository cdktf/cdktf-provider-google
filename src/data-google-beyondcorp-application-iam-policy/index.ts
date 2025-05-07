// https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleBeyondcorpApplicationIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy#application_id DataGoogleBeyondcorpApplicationIamPolicy#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy#id DataGoogleBeyondcorpApplicationIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy#project DataGoogleBeyondcorpApplicationIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy#security_gateways_id DataGoogleBeyondcorpApplicationIamPolicy#security_gateways_id}
  */
  readonly securityGatewaysId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy google_beyondcorp_application_iam_policy}
*/
export class DataGoogleBeyondcorpApplicationIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_application_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleBeyondcorpApplicationIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleBeyondcorpApplicationIamPolicy to import
  * @param importFromId The id of the existing DataGoogleBeyondcorpApplicationIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleBeyondcorpApplicationIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_beyondcorp_application_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/beyondcorp_application_iam_policy google_beyondcorp_application_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBeyondcorpApplicationIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBeyondcorpApplicationIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_application_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._project = config.project;
    this._securityGatewaysId = config.securityGatewaysId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // security_gateways_id - computed: false, optional: false, required: true
  private _securityGatewaysId?: string; 
  public get securityGatewaysId() {
    return this.getStringAttribute('security_gateways_id');
  }
  public set securityGatewaysId(value: string) {
    this._securityGatewaysId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGatewaysIdInput() {
    return this._securityGatewaysId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      security_gateways_id: cdktf.stringToTerraform(this._securityGatewaysId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_gateways_id: {
        value: cdktf.stringToHclTerraform(this._securityGatewaysId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
