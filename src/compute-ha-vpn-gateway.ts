// https://www.terraform.io/docs/providers/google/r/compute_ha_vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ComputeHaVpnGatewayConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** The network this VPN gateway is accepting traffic for. */
  readonly network: string;
  readonly project?: string;
  /** The region this gateway should sit in. */
  readonly region?: string;
  /** timeouts block */
  readonly timeouts?: ComputeHaVpnGatewayTimeouts;
}
export class ComputeHaVpnGatewayVpnInterfaces extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
}
export interface ComputeHaVpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeHaVpnGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeHaVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_ha_vpn_gateway',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // vpn_interfaces - computed: true, optional: false, required: true
  public vpnInterfaces(index: string) {
    return new ComputeHaVpnGatewayVpnInterfaces(this, 'vpn_interfaces', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeHaVpnGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeHaVpnGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      network: this._network,
      project: this._project,
      region: this._region,
      timeouts: this._timeouts,
    };
  }
}
