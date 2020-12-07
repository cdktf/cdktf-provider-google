// https://www.terraform.io/docs/providers/google/r/resource_manager_lien.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerLienConfig extends cdktf.TerraformMetaArguments {
  /** A stable, user-visible/meaningful string identifying the origin
of the Lien, intended to be inspected programmatically. Maximum length of
200 characters. */
  readonly origin: string;
  /** A reference to the resource this Lien is attached to.
The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name"). */
  readonly parent: string;
  /** Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum length of 200 characters. */
  readonly reason: string;
  /** The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete'] */
  readonly restrictions: string[];
  /** timeouts block */
  readonly timeouts?: ResourceManagerLienTimeouts;
}
export interface ResourceManagerLienTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function resourceManagerLienTimeoutsToTerraform(struct?: ResourceManagerLienTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ResourceManagerLien extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ResourceManagerLienConfig) {
    super(scope, id, {
      terraformResourceType: 'google_resource_manager_lien',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._origin = config.origin;
    this._parent = config.parent;
    this._reason = config.reason;
    this._restrictions = config.restrictions;
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

  // origin - computed: false, optional: false, required: true
  private _origin: string;
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin
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

  // reason - computed: false, optional: false, required: true
  private _reason: string;
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason
  }

  // restrictions - computed: false, optional: false, required: true
  private _restrictions: string[];
  public get restrictions() {
    return this.getListAttribute('restrictions');
  }
  public set restrictions(value: string[]) {
    this._restrictions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ResourceManagerLienTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ResourceManagerLienTimeouts ) {
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
      origin: cdktf.stringToTerraform(this._origin),
      parent: cdktf.stringToTerraform(this._parent),
      reason: cdktf.stringToTerraform(this._reason),
      restrictions: cdktf.listMapper(cdktf.stringToTerraform)(this._restrictions),
      timeouts: resourceManagerLienTimeoutsToTerraform(this._timeouts),
    };
  }
}
