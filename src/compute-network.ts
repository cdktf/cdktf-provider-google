// https://www.terraform.io/docs/providers/google/r/compute_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeNetworkConfig extends TerraformMetaArguments {
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

// Resource

export class ComputeNetwork extends TerraformResource {

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
    return this._autoCreateSubnetworks;
  }
  public set autoCreateSubnetworks(value: boolean | undefined) {
    this._autoCreateSubnetworks = value;
  }

  // delete_default_routes_on_create - computed: false, optional: true, required: false
  private _deleteDefaultRoutesOnCreate?: boolean;
  public get deleteDefaultRoutesOnCreate() {
    return this._deleteDefaultRoutesOnCreate;
  }
  public set deleteDefaultRoutesOnCreate(value: boolean | undefined) {
    this._deleteDefaultRoutesOnCreate = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // gateway_ipv4 - computed: true, optional: false, required: true
  public get gatewayIpv4() {
    return this.getStringAttribute('gateway_ipv4');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipv4_range - computed: true, optional: false, required: true
  public get ipv4Range() {
    return this.getStringAttribute('ipv4_range');
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

  // routing_mode - computed: true, optional: true, required: false
  private _routingMode?: string;
  public get routingMode() {
    return this._routingMode ?? this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string | undefined) {
    this._routingMode = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNetworkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeNetworkTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_subnetworks: this._autoCreateSubnetworks,
      delete_default_routes_on_create: this._deleteDefaultRoutesOnCreate,
      description: this._description,
      name: this._name,
      project: this._project,
      routing_mode: this._routingMode,
      timeouts: this._timeouts,
    };
  }
}
