// https://www.terraform.io/docs/providers/google/r/data_google_storage_project_service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleStorageProjectServiceAccountConfig extends cdktf.TerraformMetaArguments {
  readonly project?: string;
  readonly userProject?: string;
}

// Resource

export class DataGoogleStorageProjectServiceAccount extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleStorageProjectServiceAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_storage_project_service_account',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
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
    return this._project
  }

  // user_project - computed: false, optional: true, required: false
  private _userProject?: string;
  public get userProject() {
    return this.getStringAttribute('user_project');
  }
  public set userProject(value: string ) {
    this._userProject = value;
  }
  public resetUserProject() {
    this._userProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProjectInput() {
    return this._userProject
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      user_project: cdktf.stringToTerraform(this._userProject),
    };
  }
}
