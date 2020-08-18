// https://www.terraform.io/docs/providers/google/r/storage_object_access_control.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface StorageObjectAccessControlConfig extends TerraformMetaArguments {
  /** The name of the bucket. */
  readonly bucket: string;
  /** The entity holding the permission, in one of the following forms:
  * user-{{userId}}
  * user-{{email}} (such as "user-liz@example.com")
  * group-{{groupId}}
  * group-{{email}} (such as "group-example@googlegroups.com")
  * domain-{{domain}} (such as "domain-example.com")
  * project-team-{{projectId}}
  * allUsers
  * allAuthenticatedUsers */
  readonly entity: string;
  /** The name of the object to apply the access control to. */
  readonly object: string;
  /** The access permission for the entity. Possible values: ["OWNER", "READER"] */
  readonly role: string;
  /** timeouts block */
  readonly timeouts?: StorageObjectAccessControlTimeouts;
}
export class StorageObjectAccessControlProjectTeam extends ComplexComputedList {

  // project_number - computed: true, optional: false, required: true
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }

  // team - computed: true, optional: false, required: true
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface StorageObjectAccessControlTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class StorageObjectAccessControl extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: StorageObjectAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_object_access_control',
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
    this._object = config.object;
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

  // entity_id - computed: true, optional: false, required: true
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // generation - computed: true, optional: false, required: true
  public get generation() {
    return this.getNumberAttribute('generation');
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

  // project_team - computed: true, optional: false, required: true
  public projectTeam(index: string) {
    return new StorageObjectAccessControlProjectTeam(this, 'project_team', index);
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageObjectAccessControlTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: StorageObjectAccessControlTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: this._bucket,
      entity: this._entity,
      object: this._object,
      role: this._role,
      timeouts: this._timeouts,
    };
  }
}
