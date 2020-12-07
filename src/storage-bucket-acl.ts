// https://www.terraform.io/docs/providers/google/r/storage_bucket_acl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketAclConfig extends cdktf.TerraformMetaArguments {
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

export class StorageBucketAcl extends cdktf.TerraformResource {

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
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // default_acl - computed: false, optional: true, required: false
  private _defaultAcl?: string;
  public get defaultAcl() {
    return this.getStringAttribute('default_acl');
  }
  public set defaultAcl(value: string ) {
    this._defaultAcl = value;
  }
  public resetDefaultAcl() {
    this._defaultAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAclInput() {
    return this._defaultAcl
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // predefined_acl - computed: false, optional: true, required: false
  private _predefinedAcl?: string;
  public get predefinedAcl() {
    return this.getStringAttribute('predefined_acl');
  }
  public set predefinedAcl(value: string ) {
    this._predefinedAcl = value;
  }
  public resetPredefinedAcl() {
    this._predefinedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAclInput() {
    return this._predefinedAcl
  }

  // role_entity - computed: true, optional: true, required: false
  private _roleEntity?: string[];
  public get roleEntity() {
    return this.getListAttribute('role_entity');
  }
  public set roleEntity(value: string[]) {
    this._roleEntity = value;
  }
  public resetRoleEntity() {
    this._roleEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleEntityInput() {
    return this._roleEntity
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      default_acl: cdktf.stringToTerraform(this._defaultAcl),
      predefined_acl: cdktf.stringToTerraform(this._predefinedAcl),
      role_entity: cdktf.listMapper(cdktf.stringToTerraform)(this._roleEntity),
    };
  }
}
