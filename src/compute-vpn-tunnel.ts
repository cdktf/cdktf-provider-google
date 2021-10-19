// https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeVpnTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#description ComputeVpnTunnel#description}
  */
  readonly description?: string;
  /**
  * IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#ike_version ComputeVpnTunnel#ike_version}
  */
  readonly ikeVersion?: number;
  /**
  * Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}
  */
  readonly localTrafficSelector?: string[];
  /**
  * Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#name ComputeVpnTunnel#name}
  */
  readonly name: string;
  /**
  * URL of the peer side external VPN gateway to which this VPN tunnel is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}
  */
  readonly peerExternalGateway?: string;
  /**
  * The interface ID of the external VPN gateway to which this VPN tunnel is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}
  */
  readonly peerExternalGatewayInterface?: number;
  /**
  * URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.
If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}
  */
  readonly peerGcpGateway?: string;
  /**
  * IP address of the peer VPN gateway. Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#peer_ip ComputeVpnTunnel#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#project ComputeVpnTunnel#project}
  */
  readonly project?: string;
  /**
  * The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#region ComputeVpnTunnel#region}
  */
  readonly region?: string;
  /**
  * Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}
  */
  readonly remoteTrafficSelector?: string[];
  /**
  * URL of router resource to be used for dynamic routing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#router ComputeVpnTunnel#router}
  */
  readonly router?: string;
  /**
  * Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#shared_secret ComputeVpnTunnel#shared_secret}
  */
  readonly sharedSecret: string;
  /**
  * URL of the Target VPN gateway with which this VPN tunnel is
associated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}
  */
  readonly targetVpnGateway?: string;
  /**
  * URL of the VPN gateway with which this VPN tunnel is associated.
This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#vpn_gateway ComputeVpnTunnel#vpn_gateway}
  */
  readonly vpnGateway?: string;
  /**
  * The interface ID of the VPN gateway with which this VPN tunnel is associated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}
  */
  readonly vpnGatewayInterface?: number;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#timeouts ComputeVpnTunnel#timeouts}
  */
  readonly timeouts?: ComputeVpnTunnelTimeouts;
}
export interface ComputeVpnTunnelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#create ComputeVpnTunnel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html#delete ComputeVpnTunnel#delete}
  */
  readonly delete?: string;
}

function computeVpnTunnelTimeoutsToTerraform(struct?: ComputeVpnTunnelTimeoutsOutputReference | ComputeVpnTunnelTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeVpnTunnelTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html google_compute_vpn_tunnel}
*/
export class ComputeVpnTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_vpn_tunnel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html google_compute_vpn_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeVpnTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeVpnTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_vpn_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._ikeVersion = config.ikeVersion;
    this._localTrafficSelector = config.localTrafficSelector;
    this._name = config.name;
    this._peerExternalGateway = config.peerExternalGateway;
    this._peerExternalGatewayInterface = config.peerExternalGatewayInterface;
    this._peerGcpGateway = config.peerGcpGateway;
    this._peerIp = config.peerIp;
    this._project = config.project;
    this._region = config.region;
    this._remoteTrafficSelector = config.remoteTrafficSelector;
    this._router = config.router;
    this._sharedSecret = config.sharedSecret;
    this._targetVpnGateway = config.targetVpnGateway;
    this._vpnGateway = config.vpnGateway;
    this._vpnGatewayInterface = config.vpnGatewayInterface;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // detailed_status - computed: true, optional: false, required: false
  public get detailedStatus() {
    return this.getStringAttribute('detailed_status');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: number | undefined; 
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }
  public set ikeVersion(value: number | undefined) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion
  }

  // local_traffic_selector - computed: true, optional: true, required: false
  private _localTrafficSelector?: string[] | undefined; 
  public get localTrafficSelector() {
    return this.getListAttribute('local_traffic_selector');
  }
  public set localTrafficSelector(value: string[] | undefined) {
    this._localTrafficSelector = value;
  }
  public resetLocalTrafficSelector() {
    this._localTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTrafficSelectorInput() {
    return this._localTrafficSelector
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // peer_external_gateway - computed: false, optional: true, required: false
  private _peerExternalGateway?: string | undefined; 
  public get peerExternalGateway() {
    return this.getStringAttribute('peer_external_gateway');
  }
  public set peerExternalGateway(value: string | undefined) {
    this._peerExternalGateway = value;
  }
  public resetPeerExternalGateway() {
    this._peerExternalGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerExternalGatewayInput() {
    return this._peerExternalGateway
  }

  // peer_external_gateway_interface - computed: false, optional: true, required: false
  private _peerExternalGatewayInterface?: number | undefined; 
  public get peerExternalGatewayInterface() {
    return this.getNumberAttribute('peer_external_gateway_interface');
  }
  public set peerExternalGatewayInterface(value: number | undefined) {
    this._peerExternalGatewayInterface = value;
  }
  public resetPeerExternalGatewayInterface() {
    this._peerExternalGatewayInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerExternalGatewayInterfaceInput() {
    return this._peerExternalGatewayInterface
  }

  // peer_gcp_gateway - computed: false, optional: true, required: false
  private _peerGcpGateway?: string | undefined; 
  public get peerGcpGateway() {
    return this.getStringAttribute('peer_gcp_gateway');
  }
  public set peerGcpGateway(value: string | undefined) {
    this._peerGcpGateway = value;
  }
  public resetPeerGcpGateway() {
    this._peerGcpGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGcpGatewayInput() {
    return this._peerGcpGateway
  }

  // peer_ip - computed: true, optional: true, required: false
  private _peerIp?: string | undefined; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string | undefined) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // remote_traffic_selector - computed: true, optional: true, required: false
  private _remoteTrafficSelector?: string[] | undefined; 
  public get remoteTrafficSelector() {
    return this.getListAttribute('remote_traffic_selector');
  }
  public set remoteTrafficSelector(value: string[] | undefined) {
    this._remoteTrafficSelector = value;
  }
  public resetRemoteTrafficSelector() {
    this._remoteTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTrafficSelectorInput() {
    return this._remoteTrafficSelector
  }

  // router - computed: false, optional: true, required: false
  private _router?: string | undefined; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string | undefined) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret
  }

  // shared_secret_hash - computed: true, optional: false, required: false
  public get sharedSecretHash() {
    return this.getStringAttribute('shared_secret_hash');
  }

  // target_vpn_gateway - computed: false, optional: true, required: false
  private _targetVpnGateway?: string | undefined; 
  public get targetVpnGateway() {
    return this.getStringAttribute('target_vpn_gateway');
  }
  public set targetVpnGateway(value: string | undefined) {
    this._targetVpnGateway = value;
  }
  public resetTargetVpnGateway() {
    this._targetVpnGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVpnGatewayInput() {
    return this._targetVpnGateway
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // vpn_gateway - computed: false, optional: true, required: false
  private _vpnGateway?: string | undefined; 
  public get vpnGateway() {
    return this.getStringAttribute('vpn_gateway');
  }
  public set vpnGateway(value: string | undefined) {
    this._vpnGateway = value;
  }
  public resetVpnGateway() {
    this._vpnGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInput() {
    return this._vpnGateway
  }

  // vpn_gateway_interface - computed: false, optional: true, required: false
  private _vpnGatewayInterface?: number | undefined; 
  public get vpnGatewayInterface() {
    return this.getNumberAttribute('vpn_gateway_interface');
  }
  public set vpnGatewayInterface(value: number | undefined) {
    this._vpnGatewayInterface = value;
  }
  public resetVpnGatewayInterface() {
    this._vpnGatewayInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayInterfaceInput() {
    return this._vpnGatewayInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeVpnTunnelTimeouts | undefined; 
  private __timeoutsOutput = new ComputeVpnTunnelTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeVpnTunnelTimeouts | undefined) {
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
      ike_version: cdktf.numberToTerraform(this._ikeVersion),
      local_traffic_selector: cdktf.listMapper(cdktf.stringToTerraform)(this._localTrafficSelector),
      name: cdktf.stringToTerraform(this._name),
      peer_external_gateway: cdktf.stringToTerraform(this._peerExternalGateway),
      peer_external_gateway_interface: cdktf.numberToTerraform(this._peerExternalGatewayInterface),
      peer_gcp_gateway: cdktf.stringToTerraform(this._peerGcpGateway),
      peer_ip: cdktf.stringToTerraform(this._peerIp),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      remote_traffic_selector: cdktf.listMapper(cdktf.stringToTerraform)(this._remoteTrafficSelector),
      router: cdktf.stringToTerraform(this._router),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      target_vpn_gateway: cdktf.stringToTerraform(this._targetVpnGateway),
      vpn_gateway: cdktf.stringToTerraform(this._vpnGateway),
      vpn_gateway_interface: cdktf.numberToTerraform(this._vpnGatewayInterface),
      timeouts: computeVpnTunnelTimeoutsToTerraform(this._timeouts),
    };
  }
}
