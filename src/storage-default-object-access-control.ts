// https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDefaultObjectAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#bucket StorageDefaultObjectAccessControl#bucket}
  */
  readonly bucket: string;
  /**
  * The entity holding the permission, in one of the following forms:
  * user-{{userId}}
  * user-{{email}} (such as "user-liz@example.com")
  * group-{{groupId}}
  * group-{{email}} (such as "group-example@googlegroups.com")
  * domain-{{domain}} (such as "domain-example.com")
  * project-team-{{projectId}}
  * allUsers
  * allAuthenticatedUsers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#entity StorageDefaultObjectAccessControl#entity}
  */
  readonly entity: string;
  /**
  * The name of the object, if applied to an object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#object StorageDefaultObjectAccessControl#object}
  */
  readonly object?: string;
  /**
  * The access permission for the entity. Possible values: ["OWNER", "READER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#role StorageDefaultObjectAccessControl#role}
  */
  readonly role: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#timeouts StorageDefaultObjectAccessControl#timeouts}
  */
  readonly timeouts?: StorageDefaultObjectAccessControlTimeouts;
}
export class StorageDefaultObjectAccessControlProjectTeam extends cdktf.ComplexComputedList {

  // project_number - computed: true, optional: false, required: false
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }

  // team - computed: true, optional: false, required: false
  public get team() {
    return this.getStringAttribute('team');
  }
}
export interface StorageDefaultObjectAccessControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#create StorageDefaultObjectAccessControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#delete StorageDefaultObjectAccessControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html#update StorageDefaultObjectAccessControl#update}
  */
  readonly update?: string;
}

function storageDefaultObjectAccessControlTimeoutsToTerraform(struct?: StorageDefaultObjectAccessControlTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html google_storage_default_object_access_control}
*/
export class StorageDefaultObjectAccessControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_storage_default_object_access_control";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control.html google_storage_default_object_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageDefaultObjectAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: StorageDefaultObjectAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_default_object_access_control',
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

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object - computed: false, optional: true, required: false
  private _object?: string;
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string ) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object
  }

  // project_team - computed: true, optional: false, required: false
  public projectTeam(index: string) {
    return new StorageDefaultObjectAccessControlProjectTeam(this, 'project_team', index);
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageDefaultObjectAccessControlTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageDefaultObjectAccessControlTimeouts ) {
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
      object: cdktf.stringToTerraform(this._object),
      role: cdktf.stringToTerraform(this._role),
      timeouts: storageDefaultObjectAccessControlTimeoutsToTerraform(this._timeouts),
    };
  }
}
