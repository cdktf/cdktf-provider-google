// https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * For internal TCP/UDP load balancing (i.e. load balancing scheme is
INTERNAL and protocol is TCP/UDP), set this to true to allow packets
addressed to any ports to be forwarded to the backends configured
with this forwarding rule. Used with backend service. Cannot be set
if port or portRange are set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#all_ports ComputeForwardingRule#all_ports}
  */
  readonly allPorts?: boolean;
  /**
  * If true, clients can access ILB from all regions.
Otherwise only allows from the local region the ILB is located at.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#allow_global_access ComputeForwardingRule#allow_global_access}
  */
  readonly allowGlobalAccess?: boolean;
  /**
  * A BackendService to receive the matched traffic. This is used only
for INTERNAL load balancing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#backend_service ComputeForwardingRule#backend_service}
  */
  readonly backendService?: string;
  /**
  * An optional description of this resource. Provide this property when
you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#description ComputeForwardingRule#description}
  */
  readonly description?: string;
  /**
  * The IP address that this forwarding rule serves. When a client sends
traffic to this IP address, the forwarding rule directs the traffic to
the target that you specify in the forwarding rule. The
loadBalancingScheme and the forwarding rule's target determine the
type of IP address that you can use. For detailed information, refer
to [IP address specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

An address can be specified either by a literal IP address or a
reference to an existing Address resource. If you don't specify a
reserved IP address, an ephemeral IP address is assigned.

The value must be set to 0.0.0.0 when the target is a targetGrpcProxy
that has validateForProxyless field set to true.

For Private Service Connect forwarding rules that forward traffic to
Google APIs, IP address must be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#ip_address ComputeForwardingRule#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The IP protocol to which this rule applies.

When the load balancing scheme is INTERNAL, only TCP and UDP are
valid. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#ip_protocol ComputeForwardingRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Indicates whether or not this load balancer can be used
as a collector for packet mirroring. To prevent mirroring loops,
instances behind this load balancer will not have their traffic
mirrored even if a PacketMirroring rule applies to them. This
can only be set to true for load balancers that have their
loadBalancingScheme set to INTERNAL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}
  */
  readonly isMirroringCollector?: boolean;
  /**
  * This signifies what the ForwardingRule will be used for and can be
EXTERNAL, INTERNAL, or INTERNAL_MANAGED. EXTERNAL is used for Classic
Cloud VPN gateways, protocol forwarding to VMs from an external IP address,
and HTTP(S), SSL Proxy, TCP Proxy, and Network TCP/UDP load balancers.
INTERNAL is used for protocol forwarding to VMs from an internal IP address,
and internal TCP/UDP load balancers.
INTERNAL_MANAGED is used for internal HTTP(S) load balancers. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL", "INTERNAL_MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#name ComputeForwardingRule#name}
  */
  readonly name: string;
  /**
  * For internal load balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule. If
this field is not specified, the default network will be used.
This field is only used for INTERNAL load balancing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#network ComputeForwardingRule#network}
  */
  readonly network?: string;
  /**
  * The networking tier used for configuring this address. If this field is not
specified, it is assumed to be PREMIUM. Possible values: ["PREMIUM", "STANDARD"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#network_tier ComputeForwardingRule#network_tier}
  */
  readonly networkTier?: string;
  /**
  * This field is used along with the target field for TargetHttpProxy,
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
* TargetVpnGateway: 500, 4500
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#port_range ComputeForwardingRule#port_range}
  */
  readonly portRange?: string;
  /**
  * This field is used along with the backend_service field for internal
load balancing.

When the load balancing scheme is INTERNAL, a single port or a comma
separated list of ports can be configured. Only packets addressed to
these ports will be forwarded to the backends configured with this
forwarding rule.

You may specify a maximum of up to 5 ports.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#ports ComputeForwardingRule#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#project ComputeForwardingRule#project}
  */
  readonly project?: string;
  /**
  * A reference to the region where the regional forwarding rule resides.
This field is not applicable to global forwarding rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#region ComputeForwardingRule#region}
  */
  readonly region?: string;
  /**
  * An optional prefix to the service name for this Forwarding Rule.
If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#service_label ComputeForwardingRule#service_label}
  */
  readonly serviceLabel?: string;
  /**
  * The subnetwork that the load balanced IP should belong to for this
Forwarding Rule.  This field is only used for INTERNAL load balancing.

If the network specified is in auto subnet mode, this field is
optional. However, if the network is in custom subnet mode, a
subnetwork must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#subnetwork ComputeForwardingRule#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The URL of the target resource to receive the matched traffic.
The target must live in the same region as the forwarding rule.
The forwarded traffic must be of a type appropriate to the target
object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#target ComputeForwardingRule#target}
  */
  readonly target?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#timeouts ComputeForwardingRule#timeouts}
  */
  readonly timeouts?: ComputeForwardingRuleTimeouts;
}
export interface ComputeForwardingRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#create ComputeForwardingRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#delete ComputeForwardingRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#update ComputeForwardingRule#update}
  */
  readonly update?: string;
}

function computeForwardingRuleTimeoutsToTerraform(struct?: ComputeForwardingRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html google_compute_forwarding_rule}
*/
export class ComputeForwardingRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html google_compute_forwarding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeForwardingRuleConfig
  */
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
    this._isMirroringCollector = config.isMirroringCollector;
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
    return this.getBooleanAttribute('all_ports');
  }
  public set allPorts(value: boolean ) {
    this._allPorts = value;
  }
  public resetAllPorts() {
    this._allPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPortsInput() {
    return this._allPorts
  }

  // allow_global_access - computed: false, optional: true, required: false
  private _allowGlobalAccess?: boolean;
  public get allowGlobalAccess() {
    return this.getBooleanAttribute('allow_global_access');
  }
  public set allowGlobalAccess(value: boolean ) {
    this._allowGlobalAccess = value;
  }
  public resetAllowGlobalAccess() {
    this._allowGlobalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGlobalAccessInput() {
    return this._allowGlobalAccess
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string;
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string ) {
    this._backendService = value;
  }
  public resetBackendService() {
    this._backendService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string;
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol
  }

  // is_mirroring_collector - computed: false, optional: true, required: false
  private _isMirroringCollector?: boolean;
  public get isMirroringCollector() {
    return this.getBooleanAttribute('is_mirroring_collector');
  }
  public set isMirroringCollector(value: boolean ) {
    this._isMirroringCollector = value;
  }
  public resetIsMirroringCollector() {
    this._isMirroringCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMirroringCollectorInput() {
    return this._isMirroringCollector
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string;
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string ) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme
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

  // network - computed: true, optional: true, required: false
  private _network?: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string;
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange?: string;
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string ) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[];
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[] ) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel?: string;
  public get serviceLabel() {
    return this.getStringAttribute('service_label');
  }
  public set serviceLabel(value: string ) {
    this._serviceLabel = value;
  }
  public resetServiceLabel() {
    this._serviceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork
  }

  // target - computed: false, optional: true, required: false
  private _target?: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string ) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeForwardingRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeForwardingRuleTimeouts ) {
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
      all_ports: cdktf.booleanToTerraform(this._allPorts),
      allow_global_access: cdktf.booleanToTerraform(this._allowGlobalAccess),
      backend_service: cdktf.stringToTerraform(this._backendService),
      description: cdktf.stringToTerraform(this._description),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      is_mirroring_collector: cdktf.booleanToTerraform(this._isMirroringCollector),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      network_tier: cdktf.stringToTerraform(this._networkTier),
      port_range: cdktf.stringToTerraform(this._portRange),
      ports: cdktf.listMapper(cdktf.stringToTerraform)(this._ports),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      service_label: cdktf.stringToTerraform(this._serviceLabel),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      target: cdktf.stringToTerraform(this._target),
      timeouts: computeForwardingRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
