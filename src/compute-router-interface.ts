// https://www.terraform.io/docs/providers/google/r/compute_router_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterInterfaceConfig extends cdktf.TerraformMetaArguments {
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

function computeRouterInterfaceTimeoutsToTerraform(struct?: ComputeRouterInterfaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeRouterInterface extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // interconnect_attachment - computed: false, optional: true, required: false
  private _interconnectAttachment?: string;
  public get interconnectAttachment() {
    return this.getStringAttribute('interconnect_attachment');
  }
  public set interconnectAttachment(value: string ) {
    this._interconnectAttachment = value;
  }
  public resetInterconnectAttachment() {
    this._interconnectAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectAttachmentInput() {
    return this._interconnectAttachment
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string;
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string ) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // router - computed: false, optional: false, required: true
  private _router: string;
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router
  }

  // vpn_tunnel - computed: false, optional: true, required: false
  private _vpnTunnel?: string;
  public get vpnTunnel() {
    return this.getStringAttribute('vpn_tunnel');
  }
  public set vpnTunnel(value: string ) {
    this._vpnTunnel = value;
  }
  public resetVpnTunnel() {
    this._vpnTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTunnelInput() {
    return this._vpnTunnel
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouterInterfaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRouterInterfaceTimeouts ) {
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
      interconnect_attachment: cdktf.stringToTerraform(this._interconnectAttachment),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      vpn_tunnel: cdktf.stringToTerraform(this._vpnTunnel),
      timeouts: computeRouterInterfaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
