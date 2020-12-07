// https://www.terraform.io/docs/providers/google/r/compute_network_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkEndpointConfig extends cdktf.TerraformMetaArguments {
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

function computeNetworkEndpointTimeoutsToTerraform(struct?: ComputeNetworkEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeNetworkEndpoint extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // network_endpoint_group - computed: false, optional: false, required: true
  private _networkEndpointGroup: string;
  public get networkEndpointGroup() {
    return this.getStringAttribute('network_endpoint_group');
  }
  public set networkEndpointGroup(value: string) {
    this._networkEndpointGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEndpointGroupInput() {
    return this._networkEndpointGroup
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

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeNetworkEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeNetworkEndpointTimeouts ) {
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
      instance: cdktf.stringToTerraform(this._instance),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      network_endpoint_group: cdktf.stringToTerraform(this._networkEndpointGroup),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: computeNetworkEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
