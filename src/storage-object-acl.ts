// https://www.terraform.io/docs/providers/google/r/storage_object_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageObjectAclConfig extends TerraformMetaArguments {
  readonly bucket: string;
  readonly object: string;
  readonly predefinedAcl?: string;
  readonly roleEntity?: string[];
}

// Resource

export class StorageObjectAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageObjectAclConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_object_acl',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._object = config.object;
    this._predefinedAcl = config.predefinedAcl;
    this._roleEntity = config.roleEntity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // object - computed: false, optional: false, required: true
  private _object: string;
  public get object() {
    return this._object;
  }
  public set object(value: string) {
    this._object = value;
  }

  // predefined_acl - computed: false, optional: true, required: false
  private _predefinedAcl?: string;
  public get predefinedAcl() {
    return this._predefinedAcl;
  }
  public set predefinedAcl(value: string | undefined) {
    this._predefinedAcl = value;
  }

  // role_entity - computed: true, optional: true, required: false
  private _roleEntity?: string[];
  public get roleEntity() {
    return this._roleEntity ?? this.getListAttribute('role_entity');
  }
  public set roleEntity(value: string[] | undefined) {
    this._roleEntity = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      object: this._object,
      predefined_acl: this._predefinedAcl,
      role_entity: this._roleEntity,
    };
  }
}
