// https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeGlobalNetworkEndpointConfig extends TerraformMetaArguments {
  /** Fully qualified domain name of network endpoint.
This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. */
  readonly fqdn?: string;
  /** The global network endpoint group this endpoint is part of. */
  readonly globalNetworkEndpointGroup: string;
  /** IPv4 address external endpoint. */
  readonly ipAddress?: string;
  /** Port number of the external endpoint. */
  readonly port: number;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeGlobalNetworkEndpointTimeouts;
}
export interface ComputeGlobalNetworkEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeGlobalNetworkEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeGlobalNetworkEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_network_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fqdn = config.fqdn;
    this._globalNetworkEndpointGroup = config.globalNetworkEndpointGroup;
    this._ipAddress = config.ipAddress;
    this._port = config.port;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string;
  public get fqdn() {
    return this._fqdn;
  }
  public set fqdn(value: string | undefined) {
    this._fqdn = value;
  }

  // global_network_endpoint_group - computed: false, optional: false, required: true
  private _globalNetworkEndpointGroup: string;
  public get globalNetworkEndpointGroup() {
    return this._globalNetworkEndpointGroup;
  }
  public set globalNetworkEndpointGroup(value: string) {
    this._globalNetworkEndpointGroup = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeGlobalNetworkEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeGlobalNetworkEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      fqdn: this._fqdn,
      global_network_endpoint_group: this._globalNetworkEndpointGroup,
      ip_address: this._ipAddress,
      port: this._port,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
