// https://www.terraform.io/docs/providers/google/r/compute_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkConfig extends cdktf.TerraformMetaArguments {
  /** When set to 'true', the network is created in "auto subnet mode" and
it will create a subnet for each region automatically across the
'10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources. */
  readonly autoCreateSubnetworks?: boolean;
  readonly deleteDefaultRoutesOnCreate?: boolean;
  /** An optional description of this resource. The resource must be
recreated to modify this field. */
  readonly description?: string;
  /** Maximum Transmission Unit in bytes. The minimum value for this field is 1460
and the maximum value is 1500 bytes. */
  readonly mtu?: number;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** The network-wide routing mode to use. If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"] */
  readonly routingMode?: string;
  /** timeouts block */
  readonly timeouts?: ComputeNetworkTimeouts;
}
export interface ComputeNetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeNetworkTimeoutsToTerraform(struct?: ComputeNetworkTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeNetwork extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoCreateSubnetworks = config.autoCreateSubnetworks;
    this._deleteDefaultRoutesOnCreate = config.deleteDefaultRoutesOnCreate;
    this._description = config.description;
    this._mtu = config.mtu;
    this._name = config.name;
    this._project = config.project;
    this._routingMode = config.routingMode;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_subnetworks - computed: false, optional: true, required: false
  private _autoCreateSubnetworks?: boolean;
  public get autoCreateSubnetworks() {
    return this.getBooleanAttribute('auto_create_subnetworks');
  }
  public set autoCreateSubnetworks(value: boolean ) {
    this._autoCreateSubnetworks = value;
  }
  public resetAutoCreateSubnetworks() {
    this._autoCreateSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateSubnetworksInput() {
    return this._autoCreateSubnetworks
  }

  // delete_default_routes_on_create - computed: false, optional: true, required: false
  private _deleteDefaultRoutesOnCreate?: boolean;
  public get deleteDefaultRoutesOnCreate() {
    return this.getBooleanAttribute('delete_default_routes_on_create');
  }
  public set deleteDefaultRoutesOnCreate(value: boolean ) {
    this._deleteDefaultRoutesOnCreate = value;
  }
  public resetDeleteDefaultRoutesOnCreate() {
    this._deleteDefaultRoutesOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDefaultRoutesOnCreateInput() {
    return this._deleteDefaultRoutesOnCreate
  }

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

  // gateway_ipv4 - computed: true, optional: false, required: false
  public get gatewayIpv4() {
    return this.getStringAttribute('gateway_ipv4');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number;
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu
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

  // routing_mode - computed: true, optional: true, required: false
  private _routingMode?: string;
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNetworkTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeNetworkTimeouts ) {
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
      auto_create_subnetworks: cdktf.booleanToTerraform(this._autoCreateSubnetworks),
      delete_default_routes_on_create: cdktf.booleanToTerraform(this._deleteDefaultRoutesOnCreate),
      description: cdktf.stringToTerraform(this._description),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      routing_mode: cdktf.stringToTerraform(this._routingMode),
      timeouts: computeNetworkTimeoutsToTerraform(this._timeouts),
    };
  }
}
