// https://www.terraform.io/docs/providers/google/r/service_networking_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceNetworkingConnectionConfig extends TerraformMetaArguments {
  /** Name of VPC network connected with service producers using VPC peering. */
  readonly network: string;
  /** Named IP address range(s) of PEERING type reserved for this service provider. Note that invoking this method with a different range when connection is already established will not reallocate already provisioned service producer subnetworks. */
  readonly reservedPeeringRanges: string[];
  /** Provider peering service that is managing peering connectivity for a service provider organization. For Google services that support this functionality it is 'servicenetworking.googleapis.com'. */
  readonly service: string;
  /** timeouts block */
  readonly timeouts?: ServiceNetworkingConnectionTimeouts;
}
export interface ServiceNetworkingConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ServiceNetworkingConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceNetworkingConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_networking_connection',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._network = config.network;
    this._reservedPeeringRanges = config.reservedPeeringRanges;
    this._service = config.service;
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

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // peering - computed: true, optional: false, required: true
  public get peering() {
    return this.getStringAttribute('peering');
  }

  // reserved_peering_ranges - computed: false, optional: false, required: true
  private _reservedPeeringRanges: string[];
  public get reservedPeeringRanges() {
    return this._reservedPeeringRanges;
  }
  public set reservedPeeringRanges(value: string[]) {
    this._reservedPeeringRanges = value;
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceNetworkingConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServiceNetworkingConnectionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      network: this._network,
      reserved_peering_ranges: this._reservedPeeringRanges,
      service: this._service,
      timeouts: this._timeouts,
    };
  }
}
