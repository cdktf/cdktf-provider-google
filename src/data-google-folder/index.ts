/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder#folder DataGoogleFolder#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder#id DataGoogleFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder#lookup_organization DataGoogleFolder#lookup_organization}
  */
  readonly lookupOrganization?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder google_folder}
*/
export class DataGoogleFolder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleFolder to import
  * @param importFromId The id of the existing DataGoogleFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/folder google_folder} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFolderConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.12.0',
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
    this._folder = config.folder;
    this._id = config.id;
    this._lookupOrganization = config.lookupOrganization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
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

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // lookup_organization - computed: false, optional: true, required: false
  private _lookupOrganization?: boolean | cdktf.IResolvable; 
  public get lookupOrganization() {
    return this.getBooleanAttribute('lookup_organization');
  }
  public set lookupOrganization(value: boolean | cdktf.IResolvable) {
    this._lookupOrganization = value;
  }
  public resetLookupOrganization() {
    this._lookupOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupOrganizationInput() {
    return this._lookupOrganization;
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
      id: cdktf.stringToTerraform(this._id),
      lookup_organization: cdktf.booleanToTerraform(this._lookupOrganization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      lookup_organization: {
        value: cdktf.booleanToHclTerraform(this._lookupOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
