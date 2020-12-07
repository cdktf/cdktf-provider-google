// https://www.terraform.io/docs/providers/google/r/compute_router_peer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterPeerConfig extends cdktf.TerraformMetaArguments {
  /** User-specified flag to indicate which mode to use for advertisement.
Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"] */
  readonly advertiseMode?: string;
  /** User-specified list of prefix groups to advertise in custom
mode, which can take one of the following options:

* 'ALL_SUBNETS': Advertises all available subnets, including peer VPC subnets.
* 'ALL_VPC_SUBNETS': Advertises the router's own VPC subnets.
* 'ALL_PEER_VPC_SUBNETS': Advertises peer subnets of the router's VPC network.


Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups. */
  readonly advertisedGroups?: string[];
  /** The priority of routes advertised to this BGP peer.
Where there is more than one matching route of maximum
length, the routes with the lowest priority value win. */
  readonly advertisedRoutePriority?: number;
  /** Name of the interface the BGP peer is associated with. */
  readonly interface: string;
  /** Name of this BGP peer. The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  /** Peer BGP Autonomous System Number (ASN).
Each BGP interface may use a different value. */
  readonly peerAsn: number;
  /** IP address of the BGP interface outside Google Cloud Platform.
Only IPv4 is supported. */
  readonly peerIpAddress: string;
  readonly project?: string;
  /** Region where the router and BgpPeer reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** The name of the Cloud Router in which this BgpPeer will be configured. */
  readonly router: string;
  /** advertised_ip_ranges block */
  readonly advertisedIpRanges?: ComputeRouterPeerAdvertisedIpRanges[];
  /** timeouts block */
  readonly timeouts?: ComputeRouterPeerTimeouts;
}
export interface ComputeRouterPeerAdvertisedIpRanges {
  /** User-specified description for the IP range. */
  readonly description?: string;
  /** The IP range to advertise. The value must be a
CIDR-formatted string. */
  readonly range: string;
}

function computeRouterPeerAdvertisedIpRangesToTerraform(struct?: ComputeRouterPeerAdvertisedIpRanges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    range: cdktf.stringToTerraform(struct!.range),
  }
}

export interface ComputeRouterPeerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeRouterPeerTimeoutsToTerraform(struct?: ComputeRouterPeerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeRouterPeer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRouterPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_peer',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._advertiseMode = config.advertiseMode;
    this._advertisedGroups = config.advertisedGroups;
    this._advertisedRoutePriority = config.advertisedRoutePriority;
    this._interface = config.interface;
    this._name = config.name;
    this._peerAsn = config.peerAsn;
    this._peerIpAddress = config.peerIpAddress;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._advertisedIpRanges = config.advertisedIpRanges;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_mode - computed: false, optional: true, required: false
  private _advertiseMode?: string;
  public get advertiseMode() {
    return this.getStringAttribute('advertise_mode');
  }
  public set advertiseMode(value: string ) {
    this._advertiseMode = value;
  }
  public resetAdvertiseMode() {
    this._advertiseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseModeInput() {
    return this._advertiseMode
  }

  // advertised_groups - computed: false, optional: true, required: false
  private _advertisedGroups?: string[];
  public get advertisedGroups() {
    return this.getListAttribute('advertised_groups');
  }
  public set advertisedGroups(value: string[] ) {
    this._advertisedGroups = value;
  }
  public resetAdvertisedGroups() {
    this._advertisedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedGroupsInput() {
    return this._advertisedGroups
  }

  // advertised_route_priority - computed: false, optional: true, required: false
  private _advertisedRoutePriority?: number;
  public get advertisedRoutePriority() {
    return this.getNumberAttribute('advertised_route_priority');
  }
  public set advertisedRoutePriority(value: number ) {
    this._advertisedRoutePriority = value;
  }
  public resetAdvertisedRoutePriority() {
    this._advertisedRoutePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedRoutePriorityInput() {
    return this._advertisedRoutePriority
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: false, required: true
  private _interface: string;
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getStringAttribute('management_type');
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

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn: number;
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn
  }

  // peer_ip_address - computed: false, optional: false, required: true
  private _peerIpAddress: string;
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress
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

  // advertised_ip_ranges - computed: false, optional: true, required: false
  private _advertisedIpRanges?: ComputeRouterPeerAdvertisedIpRanges[];
  public get advertisedIpRanges() {
    return this.interpolationForAttribute('advertised_ip_ranges') as any;
  }
  public set advertisedIpRanges(value: ComputeRouterPeerAdvertisedIpRanges[] ) {
    this._advertisedIpRanges = value;
  }
  public resetAdvertisedIpRanges() {
    this._advertisedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedIpRangesInput() {
    return this._advertisedIpRanges
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouterPeerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRouterPeerTimeouts ) {
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
      advertise_mode: cdktf.stringToTerraform(this._advertiseMode),
      advertised_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._advertisedGroups),
      advertised_route_priority: cdktf.numberToTerraform(this._advertisedRoutePriority),
      interface: cdktf.stringToTerraform(this._interface),
      name: cdktf.stringToTerraform(this._name),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peer_ip_address: cdktf.stringToTerraform(this._peerIpAddress),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      advertised_ip_ranges: cdktf.listMapper(computeRouterPeerAdvertisedIpRangesToTerraform)(this._advertisedIpRanges),
      timeouts: computeRouterPeerTimeoutsToTerraform(this._timeouts),
    };
  }
}
