// https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeGlobalNetworkEndpointConfig extends cdktf.TerraformMetaArguments {
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

function computeGlobalNetworkEndpointTimeoutsToTerraform(struct?: ComputeGlobalNetworkEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeGlobalNetworkEndpoint extends cdktf.TerraformResource {

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
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string ) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn
  }

  // global_network_endpoint_group - computed: false, optional: false, required: true
  private _globalNetworkEndpointGroup: string;
  public get globalNetworkEndpointGroup() {
    return this.getStringAttribute('global_network_endpoint_group');
  }
  public set globalNetworkEndpointGroup(value: string) {
    this._globalNetworkEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkEndpointGroupInput() {
    return this._globalNetworkEndpointGroup
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string ) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeGlobalNetworkEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeGlobalNetworkEndpointTimeouts ) {
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
      fqdn: cdktf.stringToTerraform(this._fqdn),
      global_network_endpoint_group: cdktf.stringToTerraform(this._globalNetworkEndpointGroup),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeGlobalNetworkEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
