// https://www.terraform.io/docs/providers/google/r/compute_vpn_tunnel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeVpnTunnelConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** IKE protocol version to use when establishing the VPN tunnel with
peer VPN gateway.
Acceptable IKE versions are 1 or 2. Default version is 2. */
  readonly ikeVersion?: number;
  /** Local traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported. */
  readonly localTrafficSelector?: string[];
  /** Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  /** IP address of the peer VPN gateway. Only IPv4 is supported. */
  readonly peerIp?: string;
  readonly project?: string;
  /** The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. */
  readonly region?: string;
  /** Remote traffic selector to use when establishing the VPN tunnel with
peer VPN gateway. The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported. */
  readonly remoteTrafficSelector?: string[];
  /** URL of router resource to be used for dynamic routing. */
  readonly router?: string;
  /** Shared secret used to set the secure session between the Cloud VPN
gateway and the peer VPN gateway. */
  readonly sharedSecret: string;
  /** URL of the Target VPN gateway with which this VPN tunnel is
associated. */
  readonly targetVpnGateway?: string;
  /** timeouts block */
  readonly timeouts?: ComputeVpnTunnelTimeouts;
}
export interface ComputeVpnTunnelTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeVpnTunnel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._peerIp = config.peerIp;
    this._project = config.project;
    this._region = config.region;
    this._remoteTrafficSelector = config.remoteTrafficSelector;
    this._router = config.router;
    this._sharedSecret = config.sharedSecret;
    this._targetVpnGateway = config.targetVpnGateway;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // detailed_status - computed: true, optional: false, required: true
  public get detailedStatus() {
    return this.getStringAttribute('detailed_status');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: number;
  public get ikeVersion() {
    return this._ikeVersion;
  }
  public set ikeVersion(value: number | undefined) {
    this._ikeVersion = value;
  }

  // local_traffic_selector - computed: true, optional: true, required: false
  private _localTrafficSelector?: string[];
  public get localTrafficSelector() {
    return this._localTrafficSelector ?? this.getListAttribute('local_traffic_selector');
  }
  public set localTrafficSelector(value: string[] | undefined) {
    this._localTrafficSelector = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // peer_ip - computed: true, optional: true, required: false
  private _peerIp?: string;
  public get peerIp() {
    return this._peerIp ?? this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string | undefined) {
    this._peerIp = value;
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

  // remote_traffic_selector - computed: true, optional: true, required: false
  private _remoteTrafficSelector?: string[];
  public get remoteTrafficSelector() {
    return this._remoteTrafficSelector ?? this.getListAttribute('remote_traffic_selector');
  }
  public set remoteTrafficSelector(value: string[] | undefined) {
    this._remoteTrafficSelector = value;
  }

  // router - computed: false, optional: true, required: false
  private _router?: string;
  public get router() {
    return this._router;
  }
  public set router(value: string | undefined) {
    this._router = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret: string;
  public get sharedSecret() {
    return this._sharedSecret;
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }

  // shared_secret_hash - computed: true, optional: false, required: true
  public get sharedSecretHash() {
    return this.getStringAttribute('shared_secret_hash');
  }

  // target_vpn_gateway - computed: false, optional: true, required: false
  private _targetVpnGateway?: string;
  public get targetVpnGateway() {
    return this._targetVpnGateway;
  }
  public set targetVpnGateway(value: string | undefined) {
    this._targetVpnGateway = value;
  }

  // tunnel_id - computed: true, optional: false, required: true
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeVpnTunnelTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeVpnTunnelTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      ike_version: this._ikeVersion,
      local_traffic_selector: this._localTrafficSelector,
      name: this._name,
      peer_ip: this._peerIp,
      project: this._project,
      region: this._region,
      remote_traffic_selector: this._remoteTrafficSelector,
      router: this._router,
      shared_secret: this._sharedSecret,
      target_vpn_gateway: this._targetVpnGateway,
      timeouts: this._timeouts,
    };
  }
}
