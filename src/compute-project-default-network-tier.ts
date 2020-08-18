// https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeProjectDefaultNetworkTierConfig extends TerraformMetaArguments {
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

// Resource

export class ComputeProjectDefaultNetworkTier extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network_tier - computed: false, optional: false, required: true
  private _networkTier: string;
  public get networkTier() {
    return this._networkTier;
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeProjectDefaultNetworkTierTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeProjectDefaultNetworkTierTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      network_tier: this._networkTier,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
