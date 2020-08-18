// https://www.terraform.io/docs/providers/google/r/data_google_storage_project_service_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleStorageProjectServiceAccountConfig extends TerraformMetaArguments {
  readonly project?: string;
  readonly userProject?: string;
}

// Resource

export class DataGoogleStorageProjectServiceAccount extends TerraformDataSource {

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

  // email_address - computed: true, optional: false, required: true
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // user_project - computed: false, optional: true, required: false
  private _userProject?: string;
  public get userProject() {
    return this._userProject;
  }
  public set userProject(value: string | undefined) {
    this._userProject = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      user_project: this._userProject,
    };
  }
}
