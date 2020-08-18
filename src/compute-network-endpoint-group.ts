// https://www.terraform.io/docs/providers/google/r/compute_network_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeNetworkEndpointGroupConfig extends TerraformMetaArguments {
  /** The default port used if the port number is not specified in the
network endpoint. */
  readonly defaultPort?: number;
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** The network to which all network endpoints in the NEG belong.
Uses "default" project network if unspecified. */
  readonly network: string;
  /** Type of network endpoints in this network endpoint group. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP_PORT"] */
  readonly networkEndpointType?: string;
  readonly project?: string;
  /** Optional subnetwork to which all network endpoints in the NEG belong. */
  readonly subnetwork?: string;
  /** Zone where the network endpoint group is located. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeNetworkEndpointGroupTimeouts;
}
export interface ComputeNetworkEndpointGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeNetworkEndpointGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeNetworkEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_endpoint_group',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultPort = config.defaultPort;
    this._description = config.description;
    this._name = config.name;
    this._network = config.network;
    this._networkEndpointType = config.networkEndpointType;
    this._project = config.project;
    this._subnetwork = config.subnetwork;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: number;
  public get defaultPort() {
    return this._defaultPort;
  }
  public set defaultPort(value: number | undefined) {
    this._defaultPort = value;
  }

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

  // network_endpoint_type - computed: false, optional: true, required: false
  private _networkEndpointType?: string;
  public get networkEndpointType() {
    return this._networkEndpointType;
  }
  public set networkEndpointType(value: string | undefined) {
    this._networkEndpointType = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this._subnetwork;
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNetworkEndpointGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeNetworkEndpointGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_port: this._defaultPort,
      description: this._description,
      name: this._name,
      network: this._network,
      network_endpoint_type: this._networkEndpointType,
      project: this._project,
      subnetwork: this._subnetwork,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
