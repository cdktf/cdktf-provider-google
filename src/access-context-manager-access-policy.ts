// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AccessContextManagerAccessPolicyConfig extends TerraformMetaArguments {
  /** The parent of this AccessPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id} */
  readonly parent: string;
  /** Human readable title. Does not affect behavior. */
  readonly title: string;
  /** timeouts block */
  readonly timeouts?: AccessContextManagerAccessPolicyTimeouts;
}
export interface AccessContextManagerAccessPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AccessContextManagerAccessPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
    this._title = config.title;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerAccessPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AccessContextManagerAccessPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      parent: this._parent,
      title: this._title,
      timeouts: this._timeouts,
    };
  }
}
