// https://www.terraform.io/docs/providers/google/r/compute_network_peering_routes_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkPeeringRoutesConfigConfig extends cdktf.TerraformMetaArguments {
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

function computeNetworkPeeringRoutesConfigTimeoutsToTerraform(struct?: ComputeNetworkPeeringRoutesConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeNetworkPeeringRoutesConfig extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('export_custom_routes');
  }
  public set exportCustomRoutes(value: boolean) {
    this._exportCustomRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportCustomRoutesInput() {
    return this._exportCustomRoutes
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_custom_routes - computed: false, optional: false, required: true
  private _importCustomRoutes: boolean;
  public get importCustomRoutes() {
    return this.getBooleanAttribute('import_custom_routes');
  }
  public set importCustomRoutes(value: boolean) {
    this._importCustomRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomRoutesInput() {
    return this._importCustomRoutes
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // peering - computed: false, optional: false, required: true
  private _peering: string;
  public get peering() {
    return this.getStringAttribute('peering');
  }
  public set peering(value: string) {
    this._peering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringInput() {
    return this._peering
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
  private _timeouts?: ComputeNetworkPeeringRoutesConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeNetworkPeeringRoutesConfigTimeouts ) {
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
      export_custom_routes: cdktf.booleanToTerraform(this._exportCustomRoutes),
      import_custom_routes: cdktf.booleanToTerraform(this._importCustomRoutes),
      network: cdktf.stringToTerraform(this._network),
      peering: cdktf.stringToTerraform(this._peering),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeNetworkPeeringRoutesConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
