/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDefaultObjectAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl#bucket StorageDefaultObjectAcl#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl#id StorageDefaultObjectAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl#role_entity StorageDefaultObjectAcl#role_entity}
  */
  readonly roleEntity?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl google_storage_default_object_acl}
*/
export class StorageDefaultObjectAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_default_object_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageDefaultObjectAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageDefaultObjectAcl to import
  * @param importFromId The id of the existing StorageDefaultObjectAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageDefaultObjectAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_default_object_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.15.0/docs/resources/storage_default_object_acl google_storage_default_object_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageDefaultObjectAclConfig
  */
  public constructor(scope: Construct, id: string, config: StorageDefaultObjectAclConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_default_object_acl',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.15.0',
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
    this._bucket = config.bucket;
    this._id = config.id;
    this._roleEntity = config.roleEntity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // role_entity - computed: true, optional: true, required: false
  private _roleEntity?: string[]; 
  public get roleEntity() {
    return cdktf.Fn.tolist(this.getListAttribute('role_entity'));
  }
  public set roleEntity(value: string[]) {
    this._roleEntity = value;
  }
  public resetRoleEntity() {
    this._roleEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleEntityInput() {
    return this._roleEntity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      role_entity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleEntity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      role_entity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleEntity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
