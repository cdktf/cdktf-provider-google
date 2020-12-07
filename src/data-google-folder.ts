// https://www.terraform.io/docs/providers/google/r/data_google_folder.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFolderConfig extends cdktf.TerraformMetaArguments {
  readonly folder: string;
  readonly lookupOrganization?: boolean;
}

// Resource

export class DataGoogleFolder extends cdktf.TerraformDataSource {

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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // lookup_organization - computed: false, optional: true, required: false
  private _lookupOrganization?: boolean;
  public get lookupOrganization() {
    return this.getBooleanAttribute('lookup_organization');
  }
  public set lookupOrganization(value: boolean ) {
    this._lookupOrganization = value;
  }
  public resetLookupOrganization() {
    this._lookupOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupOrganizationInput() {
    return this._lookupOrganization
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: cdktf.stringToTerraform(this._folder),
      lookup_organization: cdktf.booleanToTerraform(this._lookupOrganization),
    };
  }
}
