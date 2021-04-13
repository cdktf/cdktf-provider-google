// https://www.terraform.io/docs/providers/google/r/apigee_envgroup.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeEnvgroupConfig extends cdktf.TerraformMetaArguments {
  /** Hostnames of the environment group. */
  readonly hostnames?: string[];
  /** The resource ID of the environment group. */
  readonly name: string;
  /** The Apigee Organization associated with the Apigee environment group,
in the format 'organizations/{{org_name}}'. */
  readonly orgId: string;
  /** timeouts block */
  readonly timeouts?: ApigeeEnvgroupTimeouts;
}
export interface ApigeeEnvgroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function apigeeEnvgroupTimeoutsToTerraform(struct?: ApigeeEnvgroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApigeeEnvgroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApigeeEnvgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_envgroup',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostnames = config.hostnames;
    this._name = config.name;
    this._orgId = config.orgId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[];
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[] ) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApigeeEnvgroupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApigeeEnvgroupTimeouts ) {
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
      hostnames: cdktf.listMapper(cdktf.stringToTerraform)(this._hostnames),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      timeouts: apigeeEnvgroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
