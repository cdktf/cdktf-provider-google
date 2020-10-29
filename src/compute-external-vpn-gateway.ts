// https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeExternalVpnGatewayConfig extends TerraformMetaArguments {
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
  readonly project?: string;
  /** Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"] */
  readonly redundancyType?: string;
  /** interface block */
  readonly interface?: ComputeExternalVpnGatewayInterface[];
  /** timeouts block */
  readonly timeouts?: ComputeExternalVpnGatewayTimeouts;
}
export interface ComputeExternalVpnGatewayInterface {
  /** The numberic ID for this interface. Allowed values are based on the redundancy type
of this external VPN gateway
* '0 - SINGLE_IP_INTERNALLY_REDUNDANT'
* '0, 1 - TWO_IPS_REDUNDANCY'
* '0, 1, 2, 3 - FOUR_IPS_REDUNDANCY' */
  readonly id?: number;
  /** IP address of the interface in the external VPN gateway.
Only IPv4 is supported. This IP address can be either from
your on-premise gateway or another Cloud provider's VPN gateway,
it cannot be an IP address from Google Compute Engine. */
  readonly ipAddress?: string;
}
export interface ComputeExternalVpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeExternalVpnGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeExternalVpnGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_external_vpn_gateway',
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
    this._project = config.project;
    this._redundancyType = config.redundancyType;
    this._interface = config.interface;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // redundancy_type - computed: false, optional: true, required: false
  private _redundancyType?: string;
  public get redundancyType() {
    return this._redundancyType;
  }
  public set redundancyType(value: string | undefined) {
    this._redundancyType = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: ComputeExternalVpnGatewayInterface[];
  public get interface() {
    return this._interface;
  }
  public set interface(value: ComputeExternalVpnGatewayInterface[] | undefined) {
    this._interface = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeExternalVpnGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeExternalVpnGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      redundancy_type: this._redundancyType,
      interface: this._interface,
      timeouts: this._timeouts,
    };
  }
}
