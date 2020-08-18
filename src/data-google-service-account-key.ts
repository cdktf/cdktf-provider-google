// https://www.terraform.io/docs/providers/google/r/data_google_service_account_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleServiceAccountKeyConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly project?: string;
  readonly publicKeyType?: string;
}

// Resource

export class DataGoogleServiceAccountKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._publicKeyType = config.publicKeyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_algorithm - computed: true, optional: false, required: true
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // public_key_type - computed: false, optional: true, required: false
  private _publicKeyType?: string;
  public get publicKeyType() {
    return this._publicKeyType;
  }
  public set publicKeyType(value: string | undefined) {
    this._publicKeyType = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      public_key_type: this._publicKeyType,
    };
  }
}
