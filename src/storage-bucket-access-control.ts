// https://www.terraform.io/docs/providers/google/r/storage_bucket_access_control.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageBucketAccessControlConfig extends TerraformMetaArguments {
  /** The name of the bucket. */
  readonly bucket: string;
  /** The entity holding the permission, in one of the following forms:
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
  example.com, the entity would be domain-example.com. */
  readonly entity: string;
  /** The access permission for the entity. Possible values: ["OWNER", "READER", "WRITER"] */
  readonly role?: string;
  /** timeouts block */
  readonly timeouts?: StorageBucketAccessControlTimeouts;
}
export interface StorageBucketAccessControlTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StorageBucketAccessControl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._bucket;
  }
  public set bucket(value: string) {
    this._bucket = value;
  }

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // entity - computed: false, optional: false, required: true
  private _entity: string;
  public get entity() {
    return this._entity;
  }
  public set entity(value: string) {
    this._entity = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this._role;
  }
  public set role(value: string | undefined) {
    this._role = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageBucketAccessControlTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageBucketAccessControlTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      entity: this._entity,
      role: this._role,
      timeouts: this._timeouts,
    };
  }
}
