// https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeProjectDefaultNetworkTierConfig extends cdktf.TerraformMetaArguments {
  /** The default network tier to be configured for the project. This field can take the following values: PREMIUM or STANDARD. */
  readonly networkTier: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeProjectDefaultNetworkTierTimeouts;
}
export interface ComputeProjectDefaultNetworkTierTimeouts {
  readonly create?: string;
}

function computeProjectDefaultNetworkTierTimeoutsToTerraform(struct?: ComputeProjectDefaultNetworkTierTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


// Resource

export class ComputeProjectDefaultNetworkTier extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeProjectDefaultNetworkTierConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_project_default_network_tier',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._networkTier = config.networkTier;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_tier - computed: false, optional: false, required: true
  private _networkTier: string;
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeProjectDefaultNetworkTierTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeProjectDefaultNetworkTierTimeouts ) {
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
      network_tier: cdktf.stringToTerraform(this._networkTier),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeProjectDefaultNetworkTierTimeoutsToTerraform(this._timeouts),
    };
  }
}
