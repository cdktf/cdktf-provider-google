/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleActiveFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Provides the REST method through which to find the folder. LIST is recommended as it is strongly consistent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder#api_method DataGoogleActiveFolder#api_method}
  */
  readonly apiMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder#display_name DataGoogleActiveFolder#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder#id DataGoogleActiveFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder#parent DataGoogleActiveFolder#parent}
  */
  readonly parent: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder google_active_folder}
*/
export class DataGoogleActiveFolder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_active_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleActiveFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleActiveFolder to import
  * @param importFromId The id of the existing DataGoogleActiveFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleActiveFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_active_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/data-sources/active_folder google_active_folder} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleActiveFolderConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleActiveFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_active_folder',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.42.0',
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
    this._apiMethod = config.apiMethod;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_method - computed: false, optional: true, required: false
  private _apiMethod?: string; 
  public get apiMethod() {
    return this.getStringAttribute('api_method');
  }
  public set apiMethod(value: string) {
    this._apiMethod = value;
  }
  public resetApiMethod() {
    this._apiMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMethodInput() {
    return this._apiMethod;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_method: cdktf.stringToTerraform(this._apiMethod),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_method: {
        value: cdktf.stringToHclTerraform(this._apiMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
