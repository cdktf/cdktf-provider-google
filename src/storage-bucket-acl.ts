// https://www.terraform.io/docs/providers/google/r/storage_bucket_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket it applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl#bucket StorageBucketAcl#bucket}
  */
  readonly bucket: string;
  /**
  * Configure this ACL to be the default ACL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl#default_acl StorageBucketAcl#default_acl}
  */
  readonly defaultAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl#id StorageBucketAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The canned GCS ACL to apply. Must be set if role_entity is not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl#predefined_acl StorageBucketAcl#predefined_acl}
  */
  readonly predefinedAcl?: string;
  /**
  * List of role/entity pairs in the form ROLE:entity. See GCS Bucket ACL documentation  for more details. Must be set if predefined_acl is not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl#role_entity StorageBucketAcl#role_entity}
  */
  readonly roleEntity?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl google_storage_bucket_acl}
*/
export class StorageBucketAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_bucket_acl";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_acl google_storage_bucket_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBucketAclConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBucketAclConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_acl',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
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
    this._defaultAcl = config.defaultAcl;
    this._id = config.id;
    this._predefinedAcl = config.predefinedAcl;
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

  // default_acl - computed: false, optional: true, required: false
  private _defaultAcl?: string; 
  public get defaultAcl() {
    return this.getStringAttribute('default_acl');
  }
  public set defaultAcl(value: string) {
    this._defaultAcl = value;
  }
  public resetDefaultAcl() {
    this._defaultAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAclInput() {
    return this._defaultAcl;
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

  // predefined_acl - computed: false, optional: true, required: false
  private _predefinedAcl?: string; 
  public get predefinedAcl() {
    return this.getStringAttribute('predefined_acl');
  }
  public set predefinedAcl(value: string) {
    this._predefinedAcl = value;
  }
  public resetPredefinedAcl() {
    this._predefinedAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedAclInput() {
    return this._predefinedAcl;
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
    return this._roleEntity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      default_acl: cdktf.stringToTerraform(this._defaultAcl),
      id: cdktf.stringToTerraform(this._id),
      predefined_acl: cdktf.stringToTerraform(this._predefinedAcl),
      role_entity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleEntity),
    };
  }
}
