// https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field is used along with the `backend_service` field for internal load balancing or with the `target` field for internal TargetInstance. This field cannot be used with `port` or `portRange` fields. When the load balancing scheme is `INTERNAL` and protocol is TCP/UDP, specify this field to allow packets addressed to any ports will be forwarded to the backends configured with this forwarding rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#all_ports ComputeForwardingRule#all_ports}
  */
  readonly allPorts?: boolean | cdktf.IResolvable;
  /**
  * This field is used along with the `backend_service` field for internal load balancing or with the `target` field for internal TargetInstance. If the field is set to `TRUE`, clients can access ILB from all regions. Otherwise only allows access from clients in the same region as the internal load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#allow_global_access ComputeForwardingRule#allow_global_access}
  */
  readonly allowGlobalAccess?: boolean | cdktf.IResolvable;
  /**
  * This field is only used for `INTERNAL` load balancing. For internal load balancing, this field identifies the BackendService resource to receive the matched traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#backend_service ComputeForwardingRule#backend_service}
  */
  readonly backendService?: string;
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#description ComputeForwardingRule#description}
  */
  readonly description?: string;
  /**
  * IP address that this forwarding rule serves. When a client sends traffic to this IP address, the forwarding rule directs the traffic to the target that you specify in the forwarding rule. If you don't specify a reserved IP address, an ephemeral IP address is assigned. Methods for specifying an IP address: * IPv4 dotted decimal, as in `100.1.2.3` * Full URL, as in `https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name` * Partial URL or by name, as in: * `projects/project_id/regions/region/addresses/address-name` * `regions/region/addresses/address-name` * `global/addresses/address-name` * `address-name` The loadBalancingScheme and the forwarding rule's target determine the type of IP address that you can use. For detailed information, refer to [IP address specifications](/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#ip_address ComputeForwardingRule#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The IP protocol to which this rule applies. For protocol forwarding, valid options are `TCP`, `UDP`, `ESP`, `AH`, `SCTP` or `ICMP`. For Internal TCP/UDP Load Balancing, the load balancing scheme is `INTERNAL`, and one of `TCP` or `UDP` are valid. For Traffic Director, the load balancing scheme is `INTERNAL_SELF_MANAGED`, and only `TCP`is valid. For Internal HTTP(S) Load Balancing, the load balancing scheme is `INTERNAL_MANAGED`, and only `TCP` is valid. For HTTP(S), SSL Proxy, and TCP Proxy Load Balancing, the load balancing scheme is `EXTERNAL` and only `TCP` is valid. For Network TCP/UDP Load Balancing, the load balancing scheme is `EXTERNAL`, and one of `TCP` or `UDP` is valid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#ip_protocol ComputeForwardingRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Indicates whether or not this load balancer can be used as a collector for packet mirroring. To prevent mirroring loops, instances behind this load balancer will not have their traffic mirrored even if a `PacketMirroring` rule applies to them. This can only be set to true for load balancers that have their `loadBalancingScheme` set to `INTERNAL`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}
  */
  readonly isMirroringCollector?: boolean | cdktf.IResolvable;
  /**
  * Labels to apply to this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#labels ComputeForwardingRule#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Specifies the forwarding rule type.

*   `EXTERNAL` is used for:
    *   Classic Cloud VPN gateways
    *   Protocol forwarding to VMs from an external IP address
    *   The following load balancers: HTTP(S), SSL Proxy, TCP Proxy, and Network TCP/UDP
*   `INTERNAL` is used for:
    *   Protocol forwarding to VMs from an internal IP address
    *   Internal TCP/UDP load balancers
*   `INTERNAL_MANAGED` is used for:
    *   Internal HTTP(S) load balancers
*   `INTERNAL_SELF_MANAGED` is used for:
    *   Traffic Director

For more information about forwarding rules, refer to [Forwarding rule concepts](/load-balancing/docs/forwarding-rule-concepts). Possible values: INVALID, INTERNAL, INTERNAL_MANAGED, INTERNAL_SELF_MANAGED, EXTERNAL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#name ComputeForwardingRule#name}
  */
  readonly name: string;
  /**
  * This field is not used for external load balancing. For `INTERNAL` and `INTERNAL_SELF_MANAGED` load balancing, this field identifies the network that the load balanced IP should belong to for this Forwarding Rule. If this field is not specified, the default network will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#network ComputeForwardingRule#network}
  */
  readonly network?: string;
  /**
  * This signifies the networking tier used for configuring this load balancer and can only take the following values: `PREMIUM`, `STANDARD`. For regional ForwardingRule, the valid values are `PREMIUM` and `STANDARD`. For GlobalForwardingRule, the valid value is `PREMIUM`. If this field is not specified, it is assumed to be `PREMIUM`. If `IPAddress` is specified, this value must be equal to the networkTier of the Address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#network_tier ComputeForwardingRule#network_tier}
  */
  readonly networkTier?: string;
  /**
  * When the load balancing scheme is `EXTERNAL`, `INTERNAL_SELF_MANAGED` and `INTERNAL_MANAGED`, you can specify a `port_range`. Use with a forwarding rule that points to a target proxy or a target pool. Do not use with a forwarding rule that points to a backend service. This field is used along with the `target` field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway, TargetPool, TargetInstance. Applicable only when `IPProtocol` is `TCP`, `UDP`, or `SCTP`, only packets addressed to ports in the specified range will be forwarded to `target`. Forwarding rules with the same `[IPAddress, IPProtocol]` pair must have disjoint port ranges. Some types of forwarding target have constraints on the acceptable ports:

*   TargetHttpProxy: 80, 8080
*   TargetHttpsProxy: 443
*   TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1688, 1883, 5222
*   TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1688, 1883, 5222
*   TargetVpnGateway: 500, 4500

@pattern: d+(?:-d+)?
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#port_range ComputeForwardingRule#port_range}
  */
  readonly portRange?: string;
  /**
  * This field is used along with the `backend_service` field for internal load balancing. When the load balancing scheme is `INTERNAL`, a list of ports can be configured, for example, ['80'], ['8000','9000']. Only packets addressed to these ports are forwarded to the backends configured with the forwarding rule. If the forwarding rule's loadBalancingScheme is INTERNAL, you can specify ports in one of the following ways: * A list of up to five ports, which can be non-contiguous * Keyword `ALL`, which causes the forwarding rule to forward traffic on any port of the forwarding rule's protocol. @pattern: d+(?:-d+)? For more information, refer to [Port specifications](/load-balancing/docs/forwarding-rule-concepts#port_specifications).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#ports ComputeForwardingRule#ports}
  */
  readonly ports?: string[];
  /**
  * The project this resource belongs in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#project ComputeForwardingRule#project}
  */
  readonly project?: string;
  /**
  * The location of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#region ComputeForwardingRule#region}
  */
  readonly region?: string;
  /**
  * An optional prefix to the service name for this Forwarding Rule. If specified, the prefix is the first label of the fully qualified service name. The label must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). Specifically, the label must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. This field is only used for internal load balancing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#service_label ComputeForwardingRule#service_label}
  */
  readonly serviceLabel?: string;
  /**
  * This field is only used for `INTERNAL` load balancing. For internal load balancing, this field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule. If the network specified is in auto subnet mode, this field is optional. However, if the network is in custom subnet mode, a subnetwork must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html#subnetwork ComputeForwardingRule#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate to the target object. For `INTERNAL_SELF_MANAGED` load balancing, only `targetHttpProxy` is valid, not `targetHttpsProxy`.
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

function computeForwardingRuleTimeoutsToTerraform(struct?: ComputeForwardingRuleTimeoutsOutputReference | ComputeForwardingRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeForwardingRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_forwarding_rule.html google_compute_forwarding_rule}
*/
export class ComputeForwardingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_forwarding_rule";

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
    this._labels = config.labels;
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
  private _allPorts?: boolean | cdktf.IResolvable | undefined; 
  public get allPorts() {
    return this.getBooleanAttribute('all_ports') as any;
  }
  public set allPorts(value: boolean | cdktf.IResolvable | undefined) {
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
  private _allowGlobalAccess?: boolean | cdktf.IResolvable | undefined; 
  public get allowGlobalAccess() {
    return this.getBooleanAttribute('allow_global_access') as any;
  }
  public set allowGlobalAccess(value: boolean | cdktf.IResolvable | undefined) {
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
  private _backendService?: string | undefined; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string | undefined) {
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string | undefined; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
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
  private _ipProtocol?: string | undefined; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string | undefined) {
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
  private _isMirroringCollector?: boolean | cdktf.IResolvable | undefined; 
  public get isMirroringCollector() {
    return this.getBooleanAttribute('is_mirroring_collector') as any;
  }
  public set isMirroringCollector(value: boolean | cdktf.IResolvable | undefined) {
    this._isMirroringCollector = value;
  }
  public resetIsMirroringCollector() {
    this._isMirroringCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMirroringCollectorInput() {
    return this._isMirroringCollector
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string | undefined; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string | undefined) {
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

  // network - computed: true, optional: true, required: false
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
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
  private _networkTier?: string | undefined; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string | undefined) {
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
  private _portRange?: string | undefined; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string | undefined) {
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
  private _ports?: string[] | undefined; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[] | undefined) {
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel?: string | undefined; 
  public get serviceLabel() {
    return this.getStringAttribute('service_label');
  }
  public set serviceLabel(value: string | undefined) {
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
  private _subnetwork?: string | undefined; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string | undefined) {
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
  private _target?: string | undefined; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string | undefined) {
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
  private _timeouts?: ComputeForwardingRuleTimeouts | undefined; 
  private __timeoutsOutput = new ComputeForwardingRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeForwardingRuleTimeouts | undefined) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
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
