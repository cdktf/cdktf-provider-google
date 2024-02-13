// https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleNotebooksRuntimeIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy#id DataGoogleNotebooksRuntimeIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy#location DataGoogleNotebooksRuntimeIamPolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy#project DataGoogleNotebooksRuntimeIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy#runtime_name DataGoogleNotebooksRuntimeIamPolicy#runtime_name}
  */
  readonly runtimeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy google_notebooks_runtime_iam_policy}
*/
export class DataGoogleNotebooksRuntimeIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_notebooks_runtime_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleNotebooksRuntimeIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleNotebooksRuntimeIamPolicy to import
  * @param importFromId The id of the existing DataGoogleNotebooksRuntimeIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleNotebooksRuntimeIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_notebooks_runtime_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/notebooks_runtime_iam_policy google_notebooks_runtime_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleNotebooksRuntimeIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleNotebooksRuntimeIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_runtime_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.16.0',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._runtimeName = config.runtimeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // runtime_name - computed: false, optional: false, required: true
  private _runtimeName?: string; 
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }
  public set runtimeName(value: string) {
    this._runtimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeNameInput() {
    return this._runtimeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      runtime_name: cdktf.stringToTerraform(this._runtimeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      runtime_name: {
        value: cdktf.stringToHclTerraform(this._runtimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
