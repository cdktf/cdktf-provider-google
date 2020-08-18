// https://www.terraform.io/docs/providers/google/r/compute_router_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRouterInterfaceConfig extends TerraformMetaArguments {
  /** The name or resource link to the VLAN interconnect for this interface. Changing this forces a new interface to be created. Only one of vpn_tunnel and interconnect_attachment can be specified. */
  readonly interconnectAttachment?: string;
  /** IP address and range of the interface. The IP range must be in the RFC3927 link-local IP space. Changing this forces a new interface to be created. */
  readonly ipRange?: string;
  /** A unique name for the interface, required by GCE. Changing this forces a new interface to be created. */
  readonly name: string;
  /** The ID of the project in which this interface's router belongs. If it is not provided, the provider project is used. Changing this forces a new interface to be created. */
  readonly project?: string;
  /** The region this interface's router sits in. If not specified, the project region will be used. Changing this forces a new interface to be created. */
  readonly region?: string;
  /** The name of the router this interface will be attached to. Changing this forces a new interface to be created. */
  readonly router: string;
  /** The name or resource link to the VPN tunnel this interface will be linked to. Changing this forces a new interface to be created. Only one of vpn_tunnel and interconnect_attachment can be specified. */
  readonly vpnTunnel?: string;
  /** timeouts block */
  readonly timeouts?: ComputeRouterInterfaceTimeouts;
}
export interface ComputeRouterInterfaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeRouterInterface extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRouterInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_interface',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._interconnectAttachment = config.interconnectAttachment;
    this._ipRange = config.ipRange;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._vpnTunnel = config.vpnTunnel;
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

  // interconnect_attachment - computed: false, optional: true, required: false
  private _interconnectAttachment?: string;
  public get interconnectAttachment() {
    return this._interconnectAttachment;
  }
  public set interconnectAttachment(value: string | undefined) {
    this._interconnectAttachment = value;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string;
  public get ipRange() {
    return this._ipRange;
  }
  public set ipRange(value: string | undefined) {
    this._ipRange = value;
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // router - computed: false, optional: false, required: true
  private _router: string;
  public get router() {
    return this._router;
  }
  public set router(value: string) {
    this._router = value;
  }

  // vpn_tunnel - computed: false, optional: true, required: false
  private _vpnTunnel?: string;
  public get vpnTunnel() {
    return this._vpnTunnel;
  }
  public set vpnTunnel(value: string | undefined) {
    this._vpnTunnel = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouterInterfaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRouterInterfaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      interconnect_attachment: this._interconnectAttachment,
      ip_range: this._ipRange,
      name: this._name,
      project: this._project,
      region: this._region,
      router: this._router,
      vpn_tunnel: this._vpnTunnel,
      timeouts: this._timeouts,
    };
  }
}
