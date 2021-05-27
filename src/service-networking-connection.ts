// https://www.terraform.io/docs/providers/google/r/service_networking_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceNetworkingConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of VPC network connected with service producers using VPC peering.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#network ServiceNetworkingConnection#network}
  */
  readonly network: string;
  /**
  * Named IP address range(s) of PEERING type reserved for this service provider. Note that invoking this method with a different range when connection is already established will not reallocate already provisioned service producer subnetworks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#reserved_peering_ranges ServiceNetworkingConnection#reserved_peering_ranges}
  */
  readonly reservedPeeringRanges: string[];
  /**
  * Provider peering service that is managing peering connectivity for a service provider organization. For Google services that support this functionality it is 'servicenetworking.googleapis.com'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#service ServiceNetworkingConnection#service}
  */
  readonly service: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#timeouts ServiceNetworkingConnection#timeouts}
  */
  readonly timeouts?: ServiceNetworkingConnectionTimeouts;
}
export interface ServiceNetworkingConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#create ServiceNetworkingConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#delete ServiceNetworkingConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html#update ServiceNetworkingConnection#update}
  */
  readonly update?: string;
}

function serviceNetworkingConnectionTimeoutsToTerraform(struct?: ServiceNetworkingConnectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html google_service_networking_connection}
*/
export class ServiceNetworkingConnection extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/service_networking_connection.html google_service_networking_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceNetworkingConnectionConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
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

  // peering - computed: true, optional: false, required: false
  public get peering() {
    return this.getStringAttribute('peering');
  }

  // reserved_peering_ranges - computed: false, optional: false, required: true
  private _reservedPeeringRanges: string[];
  public get reservedPeeringRanges() {
    return this.getListAttribute('reserved_peering_ranges');
  }
  public set reservedPeeringRanges(value: string[]) {
    this._reservedPeeringRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedPeeringRangesInput() {
    return this._reservedPeeringRanges
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServiceNetworkingConnectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServiceNetworkingConnectionTimeouts ) {
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
      network: cdktf.stringToTerraform(this._network),
      reserved_peering_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._reservedPeeringRanges),
      service: cdktf.stringToTerraform(this._service),
      timeouts: serviceNetworkingConnectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
