// https://www.terraform.io/docs/providers/google/d/storage_project_service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageProjectServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_project_service_account#id DataGoogleStorageProjectServiceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_project_service_account#project DataGoogleStorageProjectServiceAccount#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/storage_project_service_account#user_project DataGoogleStorageProjectServiceAccount#user_project}
  */
  readonly userProject?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/storage_project_service_account google_storage_project_service_account}
*/
export class DataGoogleStorageProjectServiceAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_project_service_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/storage_project_service_account google_storage_project_service_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageProjectServiceAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageProjectServiceAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_storage_project_service_account',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._id = config.id;
    this._project = config.project;
    this._userProject = config.userProject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
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

  // user_project - computed: false, optional: true, required: false
  private _userProject?: string; 
  public get userProject() {
    return this.getStringAttribute('user_project');
  }
  public set userProject(value: string) {
    this._userProject = value;
  }
  public resetUserProject() {
    this._userProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProjectInput() {
    return this._userProject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      user_project: cdktf.stringToTerraform(this._userProject),
    };
  }
}
