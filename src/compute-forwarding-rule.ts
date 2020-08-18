// https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeForwardingRuleConfig extends TerraformMetaArguments {
  /** For internal TCP/UDP load balancing (i.e. load balancing scheme is
INTERNAL and protocol is TCP/UDP), set this to true to allow packets
addressed to any ports to be forwarded to the backends configured
with this forwarding rule. Used with backend service. Cannot be set
if port or portRange are set. */
  readonly allPorts?: boolean;
  /** If true, clients can access ILB from all regions.
Otherwise only allows from the local region the ILB is located at. */
  readonly allowGlobalAccess?: boolean;
  /** A BackendService to receive the matched traffic. This is used only
for INTERNAL load balancing. */
  readonly backendService?: string;
  /** An optional description of this resource. Provide this property when
you create the resource. */
  readonly description?: string;
  /** The IP address that this forwarding rule is serving on behalf of.

Addresses are restricted based on the forwarding rule's load balancing
scheme (EXTERNAL or INTERNAL) and scope (global or regional).

When the load balancing scheme is EXTERNAL, for global forwarding
rules, the address must be a global IP, and for regional forwarding
rules, the address must live in the same region as the forwarding
rule. If this field is empty, an ephemeral IPv4 address from the same
scope (global or regional) will be assigned. A regional forwarding
rule supports IPv4 only. A global forwarding rule supports either IPv4
or IPv6.

When the load balancing scheme is INTERNAL, this can only be an RFC
1918 IP address belonging to the network/subnet configured for the
forwarding rule. By default, if this field is empty, an ephemeral
internal IP address will be automatically allocated from the IP range
of the subnet or network configured for this forwarding rule.

An address must be specified by a literal IP address. ~> **NOTE:** While
the API allows you to specify various resource paths for an address resource
instead, Terraform requires this to specifically be an IP address to
avoid needing to fetching the IP address from resource paths on refresh
or unnecessary diffs. */
  readonly ipAddress?: string;
  /** The IP protocol to which this rule applies.

When the load balancing scheme is INTERNAL, only TCP and UDP are
valid. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"] */
  readonly ipProtocol?: string;
  readonly ipVersion?: string;
  /** This signifies what the ForwardingRule will be used for and can be
EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is used for Classic
Cloud VPN gateways, protocol forwarding to VMs from an external IP address,
and HTTP(S), SSL Proxy, TCP Proxy, and Network TCP/UDP load balancers.
INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers.
INTERNAL_MANAGED is used for internal HTTP(S) load balancers. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL", "INTERNAL_MANAGED"] */
  readonly loadBalancingScheme?: string;
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** For internal load balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule. If
this field is not specified, the default network will be used.
This field is only used for INTERNAL load balancing. */
  readonly network?: string;
  /** The networking tier used for configuring this address. If this field is not
specified, it is assumed to be PREMIUM. Possible values: ["PREMIUM", "STANDARD"] */
  readonly networkTier?: string;
  /** This field is used along with the target field for TargetHttpProxy,
TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway,
TargetPool, TargetInstance.

Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets
addressed to ports in the specified range will be forwarded to target.
Forwarding rules with the same [IPAddress, IPProtocol] pair must have
disjoint port ranges.

Some types of forwarding target have constraints on the acceptable
ports:

* TargetHttpProxy: 80, 8080
* TargetHttpsProxy: 443
* TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
                  1883, 5222
* TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995,
                  1883, 5222
* TargetVpnGateway: 500, 4500 */
  readonly portRange?: string;
  /** This field is used along with the backend_service field for internal
load balancing.

When the load balancing scheme is INTERNAL, a single port or a comma
separated list of ports can be configured. Only packets addressed to
these ports will be forwarded to the backends configured with this
forwarding rule.

You may specify a maximum of up to 5 ports. */
  readonly ports?: string[];
  readonly project?: string;
  /** A reference to the region where the regional forwarding rule resides.
This field is not applicable to global forwarding rules. */
  readonly region?: string;
  /** An optional prefix to the service name for this Forwarding Rule.
If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing. */
  readonly serviceLabel?: string;
  /** The subnetwork that the load balanced IP should belong to for this
Forwarding Rule.  This field is only used for INTERNAL load balancing.

If the network specified is in auto subnet mode, this field is
optional. However, if the network is in custom subnet mode, a
subnetwork must be specified. */
  readonly subnetwork?: string;
  /** The URL of the target resource to receive the matched traffic.
The target must live in the same region as the forwarding rule.
The forwarded traffic must be of a type appropriate to the target
object. */
  readonly target?: string;
  /** timeouts block */
  readonly timeouts?: ComputeForwardingRuleTimeouts;
}
export interface ComputeForwardingRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeForwardingRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allPorts = config.allPorts;
    this._allowGlobalAccess = config.allowGlobalAccess;
    this._backendService = config.backendService;
    this._description = config.description;
    this._ipAddress = config.ipAddress;
    this._ipProtocol = config.ipProtocol;
    this._ipVersion = config.ipVersion;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._name = config.name;
    this._network = config.network;
    this._networkTier = config.networkTier;
    this._portRange = config.portRange;
    this._ports = config.ports;
    this._project = config.project;
    this._region = config.region;
    this._serviceLabel = config.serviceLabel;
    this._subnetwork = config.subnetwork;
    this._target = config.target;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_ports - computed: false, optional: true, required: false
  private _allPorts?: boolean;
  public get allPorts() {
    return this._allPorts;
  }
  public set allPorts(value: boolean | undefined) {
    this._allPorts = value;
  }

  // allow_global_access - computed: false, optional: true, required: false
  private _allowGlobalAccess?: boolean;
  public get allowGlobalAccess() {
    return this._allowGlobalAccess;
  }
  public set allowGlobalAccess(value: boolean | undefined) {
    this._allowGlobalAccess = value;
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string;
  public get backendService() {
    return this._backendService;
  }
  public set backendService(value: string | undefined) {
    this._backendService = value;
  }

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress ?? this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string;
  public get ipProtocol() {
    return this._ipProtocol ?? this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string | undefined) {
    this._ipProtocol = value;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string;
  public get ipVersion() {
    return this._ipVersion ?? this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string | undefined) {
    this._ipVersion = value;
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string;
  public get loadBalancingScheme() {
    return this._loadBalancingScheme;
  }
  public set loadBalancingScheme(value: string | undefined) {
    this._loadBalancingScheme = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network ?? this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string;
  public get networkTier() {
    return this._networkTier ?? this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string | undefined) {
    this._networkTier = value;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string;
  public get portRange() {
    return this._portRange;
  }
  public set portRange(value: string | undefined) {
    this._portRange = value;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[];
  public get ports() {
    return this._ports;
  }
  public set ports(value: string[] | undefined) {
    this._ports = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel?: string;
  public get serviceLabel() {
    return this._serviceLabel;
  }
  public set serviceLabel(value: string | undefined) {
    this._serviceLabel = value;
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this._subnetwork ?? this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string;
  public get target() {
    return this._target;
  }
  public set target(value: string | undefined) {
    this._target = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeForwardingRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeForwardingRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      all_ports: this._allPorts,
      allow_global_access: this._allowGlobalAccess,
      backend_service: this._backendService,
      description: this._description,
      ip_address: this._ipAddress,
      ip_protocol: this._ipProtocol,
      ip_version: this._ipVersion,
      load_balancing_scheme: this._loadBalancingScheme,
      name: this._name,
      network: this._network,
      network_tier: this._networkTier,
      port_range: this._portRange,
      ports: this._ports,
      project: this._project,
      region: this._region,
      service_label: this._serviceLabel,
      subnetwork: this._subnetwork,
      target: this._target,
      timeouts: this._timeouts,
    };
  }
}
