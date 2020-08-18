// https://www.terraform.io/docs/providers/google/r/compute_network_peering.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeNetworkPeeringConfig extends TerraformMetaArguments {
  readonly autoCreateRoutes?: boolean;
  /** Whether to export the custom routes to the peer network. Defaults to false. */
  readonly exportCustomRoutes?: boolean;
  readonly exportSubnetRoutesWithPublicIp?: boolean;
  /** Whether to export the custom routes from the peer network. Defaults to false. */
  readonly importCustomRoutes?: boolean;
  readonly importSubnetRoutesWithPublicIp?: boolean;
  /** Name of the peering. */
  readonly name: string;
  /** The primary network of the peering. */
  readonly network: string;
  /** The peer network in the peering. The peer network may belong to a different project. */
  readonly peerNetwork: string;
  /** timeouts block */
  readonly timeouts?: ComputeNetworkPeeringTimeouts;
}
export interface ComputeNetworkPeeringTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeNetworkPeering extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoCreateRoutes = config.autoCreateRoutes;
    this._exportCustomRoutes = config.exportCustomRoutes;
    this._exportSubnetRoutesWithPublicIp = config.exportSubnetRoutesWithPublicIp;
    this._importCustomRoutes = config.importCustomRoutes;
    this._importSubnetRoutesWithPublicIp = config.importSubnetRoutesWithPublicIp;
    this._name = config.name;
    this._network = config.network;
    this._peerNetwork = config.peerNetwork;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_routes - computed: true, optional: true, required: false
  private _autoCreateRoutes?: boolean;
  public get autoCreateRoutes() {
    return this._autoCreateRoutes ?? this.getBooleanAttribute('auto_create_routes');
  }
  public set autoCreateRoutes(value: boolean | undefined) {
    this._autoCreateRoutes = value;
  }

  // export_custom_routes - computed: false, optional: true, required: false
  private _exportCustomRoutes?: boolean;
  public get exportCustomRoutes() {
    return this._exportCustomRoutes;
  }
  public set exportCustomRoutes(value: boolean | undefined) {
    this._exportCustomRoutes = value;
  }

  // export_subnet_routes_with_public_ip - computed: false, optional: true, required: false
  private _exportSubnetRoutesWithPublicIp?: boolean;
  public get exportSubnetRoutesWithPublicIp() {
    return this._exportSubnetRoutesWithPublicIp;
  }
  public set exportSubnetRoutesWithPublicIp(value: boolean | undefined) {
    this._exportSubnetRoutesWithPublicIp = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // import_custom_routes - computed: false, optional: true, required: false
  private _importCustomRoutes?: boolean;
  public get importCustomRoutes() {
    return this._importCustomRoutes;
  }
  public set importCustomRoutes(value: boolean | undefined) {
    this._importCustomRoutes = value;
  }

  // import_subnet_routes_with_public_ip - computed: false, optional: true, required: false
  private _importSubnetRoutesWithPublicIp?: boolean;
  public get importSubnetRoutesWithPublicIp() {
    return this._importSubnetRoutesWithPublicIp;
  }
  public set importSubnetRoutesWithPublicIp(value: boolean | undefined) {
    this._importSubnetRoutesWithPublicIp = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // peer_network - computed: false, optional: false, required: true
  private _peerNetwork: string;
  public get peerNetwork() {
    return this._peerNetwork;
  }
  public set peerNetwork(value: string) {
    this._peerNetwork = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: true
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNetworkPeeringTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeNetworkPeeringTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_routes: this._autoCreateRoutes,
      export_custom_routes: this._exportCustomRoutes,
      export_subnet_routes_with_public_ip: this._exportSubnetRoutesWithPublicIp,
      import_custom_routes: this._importCustomRoutes,
      import_subnet_routes_with_public_ip: this._importSubnetRoutesWithPublicIp,
      name: this._name,
      network: this._network,
      peer_network: this._peerNetwork,
      timeouts: this._timeouts,
    };
  }
}
