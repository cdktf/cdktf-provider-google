// https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBucketAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#bucket StorageBucketAccessControl#bucket}
  */
  readonly bucket: string;
  /**
  * The entity holding the permission, in one of the following forms:
  user-userId
  user-email
  group-groupId
  group-email
  domain-domain
  project-team-projectId
  allUsers
  allAuthenticatedUsers
Examples:
  The user liz@example.com would be user-liz@example.com.
  The group example@googlegroups.com would be
  group-example@googlegroups.com.
  To refer to all members of the Google Apps for Business domain
  example.com, the entity would be domain-example.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#entity StorageBucketAccessControl#entity}
  */
  readonly entity: string;
  /**
  * The access permission for the entity. Possible values: ["OWNER", "READER", "WRITER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#role StorageBucketAccessControl#role}
  */
  readonly role?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#timeouts StorageBucketAccessControl#timeouts}
  */
  readonly timeouts?: StorageBucketAccessControlTimeouts;
}
export interface StorageBucketAccessControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#create StorageBucketAccessControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#delete StorageBucketAccessControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html#update StorageBucketAccessControl#update}
  */
  readonly update?: string;
}

function storageBucketAccessControlTimeoutsToTerraform(struct?: StorageBucketAccessControlTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html google_storage_bucket_access_control}
*/
export class StorageBucketAccessControl extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html google_storage_bucket_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBucketAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBucketAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_bucket_access_control',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._entity = config.entity;
    this._role = config.role;
    this._timeouts = config.timeouts;
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

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // entity - computed: false, optional: false, required: true
  private _entity: string;
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string ) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageBucketAccessControlTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageBucketAccessControlTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      entity: cdktf.stringToTerraform(this._entity),
      role: cdktf.stringToTerraform(this._role),
      timeouts: storageBucketAccessControlTimeoutsToTerraform(this._timeouts),
    };
  }
}
