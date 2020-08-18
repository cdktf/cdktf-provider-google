// https://www.terraform.io/docs/providers/google/r/data_google_folder.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleFolderConfig extends TerraformMetaArguments {
  readonly folder: string;
  readonly lookupOrganization?: boolean;
}

// Resource

export class DataGoogleFolder extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._folder = config.folder;
    this._lookupOrganization = config.lookupOrganization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this._folder;
  }
  public set folder(value: string) {
    this._folder = value;
  }

  // folder_id - computed: true, optional: false, required: true
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_state - computed: true, optional: false, required: true
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // lookup_organization - computed: false, optional: true, required: false
  private _lookupOrganization?: boolean;
  public get lookupOrganization() {
    return this._lookupOrganization;
  }
  public set lookupOrganization(value: boolean | undefined) {
    this._lookupOrganization = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: true, optional: false, required: true
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // parent - computed: true, optional: false, required: true
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: this._folder,
      lookup_organization: this._lookupOrganization,
    };
  }
}
