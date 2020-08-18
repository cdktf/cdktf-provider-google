// https://www.terraform.io/docs/providers/google/r/compute_network_peering_routes_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeNetworkPeeringRoutesConfigConfig extends TerraformMetaArguments {
  /** Whether to export the custom routes to the peer network. */
  readonly exportCustomRoutes: boolean;
  /** Whether to import the custom routes to the peer network. */
  readonly importCustomRoutes: boolean;
  /** The name of the primary network for the peering. */
  readonly network: string;
  /** Name of the peering. */
  readonly peering: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeNetworkPeeringRoutesConfigTimeouts;
}
export interface ComputeNetworkPeeringRoutesConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeNetworkPeeringRoutesConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeNetworkPeeringRoutesConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_peering_routes_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._exportCustomRoutes = config.exportCustomRoutes;
    this._importCustomRoutes = config.importCustomRoutes;
    this._network = config.network;
    this._peering = config.peering;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_custom_routes - computed: false, optional: false, required: true
  private _exportCustomRoutes: boolean;
  public get exportCustomRoutes() {
    return this._exportCustomRoutes;
  }
  public set exportCustomRoutes(value: boolean) {
    this._exportCustomRoutes = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // import_custom_routes - computed: false, optional: false, required: true
  private _importCustomRoutes: boolean;
  public get importCustomRoutes() {
    return this._importCustomRoutes;
  }
  public set importCustomRoutes(value: boolean) {
    this._importCustomRoutes = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // peering - computed: false, optional: false, required: true
  private _peering: string;
  public get peering() {
    return this._peering;
  }
  public set peering(value: string) {
    this._peering = value;
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
  private _timeouts?: ComputeNetworkPeeringRoutesConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeNetworkPeeringRoutesConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      export_custom_routes: this._exportCustomRoutes,
      import_custom_routes: this._importCustomRoutes,
      network: this._network,
      peering: this._peering,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
