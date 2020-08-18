// https://www.terraform.io/docs/providers/google/r/storage_bucket_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageBucketAclConfig extends TerraformMetaArguments {
  /** The name of the bucket it applies to. */
  readonly bucket: string;
  /** Configure this ACL to be the default ACL. */
  readonly defaultAcl?: string;
  /** The canned GCS ACL to apply. Must be set if role_entity is not. */
  readonly predefinedAcl?: string;
  /** List of role/entity pairs in the form ROLE:entity. See GCS Bucket ACL documentation  for more details. Must be set if predefined_acl is not. */
  readonly roleEntity?: string[];
}

// Resource

export class StorageBucketAcl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageBucketAclConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_acl',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._defaultAcl = config.defaultAcl;
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

  // default_acl - computed: false, optional: true, required: false
  private _defaultAcl?: string;
  public get defaultAcl() {
    return this._defaultAcl;
  }
  public set defaultAcl(value: string | undefined) {
    this._defaultAcl = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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
      default_acl: this._defaultAcl,
      predefined_acl: this._predefinedAcl,
      role_entity: this._roleEntity,
    };
  }
}
