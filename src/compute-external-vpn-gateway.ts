// https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeExternalVpnGatewayConfig extends cdktf.TerraformMetaArguments {
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
  /** The numeric ID for this interface. Allowed values are based on the redundancy type
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

function computeExternalVpnGatewayInterfaceToTerraform(struct?: ComputeExternalVpnGatewayInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}

export interface ComputeExternalVpnGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeExternalVpnGatewayTimeoutsToTerraform(struct?: ComputeExternalVpnGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeExternalVpnGateway extends cdktf.TerraformResource {

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
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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

  // redundancy_type - computed: false, optional: true, required: false
  private _redundancyType?: string;
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }
  public set redundancyType(value: string ) {
    this._redundancyType = value;
  }
  public resetRedundancyType() {
    this._redundancyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyTypeInput() {
    return this._redundancyType
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: ComputeExternalVpnGatewayInterface[];
  public get interface() {
    return this.interpolationForAttribute('interface') as any;
  }
  public set interface(value: ComputeExternalVpnGatewayInterface[] ) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeExternalVpnGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeExternalVpnGatewayTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      redundancy_type: cdktf.stringToTerraform(this._redundancyType),
      interface: cdktf.listMapper(computeExternalVpnGatewayInterfaceToTerraform)(this._interface),
      timeouts: computeExternalVpnGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
