// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The parent of this AccessPolicy in the Cloud Resource Hierarchy.
Format: organizations/{organization_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html#parent AccessContextManagerAccessPolicy#parent}
  */
  readonly parent: string;
  /**
  * Human readable title. Does not affect behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html#title AccessContextManagerAccessPolicy#title}
  */
  readonly title: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html#timeouts AccessContextManagerAccessPolicy#timeouts}
  */
  readonly timeouts?: AccessContextManagerAccessPolicyTimeouts;
}
export interface AccessContextManagerAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html#create AccessContextManagerAccessPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html#delete AccessContextManagerAccessPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html#update AccessContextManagerAccessPolicy#update}
  */
  readonly update?: string;
}

function accessContextManagerAccessPolicyTimeoutsToTerraform(struct?: AccessContextManagerAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html google_access_context_manager_access_policy}
*/
export class AccessContextManagerAccessPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy.html google_access_context_manager_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerAccessPolicyConfig
  */
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerAccessPolicyTimeouts ) {
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
      parent: cdktf.stringToTerraform(this._parent),
      title: cdktf.stringToTerraform(this._title),
      timeouts: accessContextManagerAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
