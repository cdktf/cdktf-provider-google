// https://www.terraform.io/docs/providers/google/r/compute_network_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeNetworkEndpointConfig extends TerraformMetaArguments {
  /** The name for a specific VM instance that the IP address belongs to.
This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group. */
  readonly instance: string;
  /** IPv4 address of network endpoint. The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range). */
  readonly ipAddress: string;
  /** The network endpoint group this endpoint is part of. */
  readonly networkEndpointGroup: string;
  /** Port number of network endpoint. */
  readonly port: number;
  readonly project?: string;
  /** Zone where the containing network endpoint group is located. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeNetworkEndpointTimeouts;
}
export interface ComputeNetworkEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeNetworkEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeNetworkEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instance = config.instance;
    this._ipAddress = config.ipAddress;
    this._networkEndpointGroup = config.networkEndpointGroup;
    this._port = config.port;
    this._project = config.project;
    this._zone = config.zone;
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

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }

  // network_endpoint_group - computed: false, optional: false, required: true
  private _networkEndpointGroup: string;
  public get networkEndpointGroup() {
    return this._networkEndpointGroup;
  }
  public set networkEndpointGroup(value: string) {
    this._networkEndpointGroup = value;
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this._port;
  }
  public set port(value: number) {
    this._port = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
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
  private _timeouts?: ComputeNetworkEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeNetworkEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance: this._instance,
      ip_address: this._ipAddress,
      network_endpoint_group: this._networkEndpointGroup,
      port: this._port,
      project: this._project,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
