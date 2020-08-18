// https://www.terraform.io/docs/providers/google/r/data_google_secret_manager_secret_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleSecretManagerSecretVersionConfig extends TerraformMetaArguments {
  readonly project?: string;
  readonly secret: string;
  readonly version?: string;
}

// Resource

export class DataGoogleSecretManagerSecretVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleSecretManagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._secret = config.secret;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destroy_time - computed: true, optional: false, required: true
  public get destroyTime() {
    return this.getStringAttribute('destroy_time');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // secret - computed: false, optional: false, required: true
  private _secret: string;
  public get secret() {
    return this._secret;
  }
  public set secret(value: string) {
    this._secret = value;
  }

  // secret_data - computed: true, optional: false, required: true
  public get secretData() {
    return this.getStringAttribute('secret_data');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      project: this._project,
      secret: this._secret,
      version: this._version,
    };
  }
}
