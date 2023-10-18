// https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field can only be used:
  * * If 'IPProtocol' is one of TCP, UDP, or SCTP.
  * * By internal TCP/UDP load balancers, backend service-based network load
  * balancers, and internal and external protocol forwarding.
  * 
  * This option should be set to TRUE when the Forwarding Rule
  * IPProtocol is set to L3_DEFAULT.
  * 
  * Set this field to true to allow packets addressed to any port or packets
  * lacking destination port information (for example, UDP fragments after the
  * first fragment) to be forwarded to the backends configured with this
  * forwarding rule.
  * 
  * The 'ports', 'port_range', and
  * 'allPorts' fields are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#all_ports ComputeForwardingRule#all_ports}
  */
  readonly allPorts?: boolean | cdktf.IResolvable;
  /**
  * This field is used along with the 'backend_service' field for
  * internal load balancing or with the 'target' field for internal
  * TargetInstance.
  * 
  * If the field is set to 'TRUE', clients can access ILB from all
  * regions.
  * 
  * Otherwise only allows access from clients in the same region as the
  * internal load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#allow_global_access ComputeForwardingRule#allow_global_access}
  */
  readonly allowGlobalAccess?: boolean | cdktf.IResolvable;
  /**
  * This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#allow_psc_global_access ComputeForwardingRule#allow_psc_global_access}
  */
  readonly allowPscGlobalAccess?: boolean | cdktf.IResolvable;
  /**
  * Identifies the backend service to which the forwarding rule sends traffic.
  * 
  * Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
  * must be omitted for all other load balancer types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#backend_service ComputeForwardingRule#backend_service}
  */
  readonly backendService?: string;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#description ComputeForwardingRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address for which this forwarding rule accepts traffic. When a client
  * sends traffic to this IP address, the forwarding rule directs the traffic
  * to the referenced 'target' or 'backendService'.
  * 
  * While creating a forwarding rule, specifying an 'IPAddress' is
  * required under the following circumstances:
  * 
  * * When the 'target' is set to 'targetGrpcProxy' and
  * 'validateForProxyless' is set to 'true', the
  * 'IPAddress' should be set to '0.0.0.0'.
  * * When the 'target' is a Private Service Connect Google APIs
  * bundle, you must specify an 'IPAddress'.
  * 
  * 
  * Otherwise, you can optionally specify an IP address that references an
  * existing static (reserved) IP address resource. When omitted, Google Cloud
  * assigns an ephemeral IP address.
  * 
  * Use one of the following formats to specify an IP address while creating a
  * forwarding rule:
  * 
  * * IP address number, as in '100.1.2.3'
  * * IPv6 address range, as in '2600:1234::/96'
  * * Full resource URL, as in
  * 'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
  * * Partial URL or by name, as in:
  *   * 'projects/project_id/regions/region/addresses/address-name'
  *   * 'regions/region/addresses/address-name'
  *   * 'global/addresses/address-name'
  *   * 'address-name'
  * 
  * 
  * The forwarding rule's 'target' or 'backendService',
  * and in most cases, also the 'loadBalancingScheme', determine the
  * type of IP address that you can use. For detailed information, see
  * [IP address
  * specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
  * 
  * When reading an 'IPAddress', the API always returns the IP
  * address number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#ip_address ComputeForwardingRule#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The IP protocol to which this rule applies.
  * 
  * For protocol forwarding, valid
  * options are 'TCP', 'UDP', 'ESP',
  * 'AH', 'SCTP', 'ICMP' and
  * 'L3_DEFAULT'.
  * 
  * The valid IP protocols are different for different load balancing products
  * as described in [Load balancing
  * features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).
  * 
  * A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
  * backend service with UNSPECIFIED protocol.
  * A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#ip_protocol ComputeForwardingRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * The IP address version that will be used by this forwarding rule.
  * Valid options are IPV4 and IPV6.
  * 
  * If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#ip_version ComputeForwardingRule#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Indicates whether or not this load balancer can be used as a collector for
  * packet mirroring. To prevent mirroring loops, instances behind this
  * load balancer will not have their traffic mirrored even if a
  * 'PacketMirroring' rule applies to them.
  * 
  * This can only be set to true for load balancers that have their
  * 'loadBalancingScheme' set to 'INTERNAL'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}
  */
  readonly isMirroringCollector?: boolean | cdktf.IResolvable;
  /**
  * Labels to apply to this forwarding rule.  A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#labels ComputeForwardingRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the forwarding rule type.
  * 
  * For more information about forwarding rules, refer to
  * [Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * Name of the resource; provided by the client when the resource is created.
  * The name must be 1-63 characters long, and comply with
  * [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
  * 
  * Specifically, the name must be 1-63 characters long and match the regular
  * expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must
  * be a dash, lowercase letter, or digit, except the last character, which
  * cannot be a dash.
  * 
  * For Private Service Connect forwarding rules that forward traffic to Google
  * APIs, the forwarding rule name must be a 1-20 characters string with
  * lowercase letters and numbers and must start with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#name ComputeForwardingRule#name}
  */
  readonly name: string;
  /**
  * This field is not used for external load balancing.
  * 
  * For Internal TCP/UDP Load Balancing, this field identifies the network that
  * the load balanced IP should belong to for this Forwarding Rule.
  * If the subnetwork is specified, the network of the subnetwork will be used.
  * If neither subnetwork nor this field is specified, the default network will
  * be used.
  * 
  * For Private Service Connect forwarding rules that forward traffic to Google
  * APIs, a network must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#network ComputeForwardingRule#network}
  */
  readonly network?: string;
  /**
  * This signifies the networking tier used for configuring
  * this load balancer and can only take the following values:
  * 'PREMIUM', 'STANDARD'.
  * 
  * For regional ForwardingRule, the valid values are 'PREMIUM' and
  * 'STANDARD'. For GlobalForwardingRule, the valid value is
  * 'PREMIUM'.
  * 
  * If this field is not specified, it is assumed to be 'PREMIUM'.
  * If 'IPAddress' is specified, this value must be equal to the
  * networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#network_tier ComputeForwardingRule#network_tier}
  */
  readonly networkTier?: string;
  /**
  * This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#no_automate_dns_zone ComputeForwardingRule#no_automate_dns_zone}
  */
  readonly noAutomateDnsZone?: boolean | cdktf.IResolvable;
  /**
  * This field can only be used:
  * 
  * * If 'IPProtocol' is one of TCP, UDP, or SCTP.
  * * By backend service-based network load balancers, target pool-based
  * network load balancers, internal proxy load balancers, external proxy load
  * balancers, Traffic Director, external protocol forwarding, and Classic VPN.
  * Some products have restrictions on what ports can be used. See
  * [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
  * for details.
  * 
  * 
  * Only packets addressed to ports in the specified range will be forwarded to
  * the backends configured with this forwarding rule.
  * 
  * The 'ports' and 'port_range' fields are mutually exclusive.
  * 
  * For external forwarding rules, two or more forwarding rules cannot use the
  * same '[IPAddress, IPProtocol]' pair, and cannot have
  * overlapping 'portRange's.
  * 
  * For internal forwarding rules within the same VPC network, two or more
  * forwarding rules cannot use the same '[IPAddress, IPProtocol]'
  * pair, and cannot have overlapping 'portRange's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#port_range ComputeForwardingRule#port_range}
  */
  readonly portRange?: string;
  /**
  * This field can only be used:
  * 
  * * If 'IPProtocol' is one of TCP, UDP, or SCTP.
  * * By internal TCP/UDP load balancers, backend service-based network load
  * balancers, internal protocol forwarding and when protocol is not L3_DEFAULT.
  * 
  * 
  * You can specify a list of up to five ports by number, separated by commas.
  * The ports can be contiguous or discontiguous. Only packets addressed to
  * these ports will be forwarded to the backends configured with this
  * forwarding rule.
  * 
  * For external forwarding rules, two or more forwarding rules cannot use the
  * same '[IPAddress, IPProtocol]' pair, and cannot share any values
  * defined in 'ports'.
  * 
  * For internal forwarding rules within the same VPC network, two or more
  * forwarding rules cannot use the same '[IPAddress, IPProtocol]'
  * pair, and cannot share any values defined in 'ports'.
  * 
  * The 'ports' and 'port_range' fields are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#ports ComputeForwardingRule#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}
  */
  readonly project?: string;
  /**
  * This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#recreate_closed_psc ComputeForwardingRule#recreate_closed_psc}
  */
  readonly recreateClosedPsc?: boolean | cdktf.IResolvable;
  /**
  * A reference to the region where the regional forwarding rule resides.
  * 
  * This field is not applicable to global forwarding rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#region ComputeForwardingRule#region}
  */
  readonly region?: string;
  /**
  * An optional prefix to the service name for this Forwarding Rule.
  * If specified, will be the first label of the fully qualified service
  * name.
  * 
  * The label must be 1-63 characters long, and comply with RFC1035.
  * Specifically, the label must be 1-63 characters long and match the
  * regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters
  * must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  * 
  * This field is only used for INTERNAL load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#service_label ComputeForwardingRule#service_label}
  */
  readonly serviceLabel?: string;
  /**
  * If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#source_ip_ranges ComputeForwardingRule#source_ip_ranges}
  */
  readonly sourceIpRanges?: string[];
  /**
  * This field identifies the subnetwork that the load balanced IP should
  * belong to for this Forwarding Rule, used in internal load balancing and
  * network load balancing with IPv6.
  * 
  * If the network specified is in auto subnet mode, this field is optional.
  * However, a subnetwork must be specified if the network is in custom subnet
  * mode or when creating external forwarding rule with IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#subnetwork ComputeForwardingRule#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The URL of the target resource to receive the matched traffic.  For
  * regional forwarding rules, this target must be in the same region as the
  * forwarding rule. For global forwarding rules, this target must be a global
  * load balancing resource.
  * 
  * The forwarded traffic must be of a type appropriate to the target object.
  * *  For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
  * *  For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
  *   *  'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
  *   *  'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).
  * 
  * 
  * For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#target ComputeForwardingRule#target}
  */
  readonly target?: string;
  /**
  * service_directory_registrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#service_directory_registrations ComputeForwardingRule#service_directory_registrations}
  */
  readonly serviceDirectoryRegistrations?: ComputeForwardingRuleServiceDirectoryRegistrations;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#timeouts ComputeForwardingRule#timeouts}
  */
  readonly timeouts?: ComputeForwardingRuleTimeouts;
}
export interface ComputeForwardingRuleServiceDirectoryRegistrations {
  /**
  * Service Directory namespace to register the forwarding rule under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#namespace ComputeForwardingRule#namespace}
  */
  readonly namespace?: string;
  /**
  * Service Directory service to register the forwarding rule under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#service ComputeForwardingRule#service}
  */
  readonly service?: string;
}

export function computeForwardingRuleServiceDirectoryRegistrationsToTerraform(struct?: ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference | ComputeForwardingRuleServiceDirectoryRegistrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeForwardingRuleServiceDirectoryRegistrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeForwardingRuleServiceDirectoryRegistrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
      this._service = value.service;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ComputeForwardingRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}
  */
  readonly update?: string;
}

export function computeForwardingRuleTimeoutsToTerraform(struct?: ComputeForwardingRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeForwardingRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeForwardingRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule google_compute_forwarding_rule}
*/
export class ComputeForwardingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeForwardingRule to import
  * @param importFromId The id of the existing ComputeForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_forwarding_rule google_compute_forwarding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.2.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allPorts = config.allPorts;
    this._allowGlobalAccess = config.allowGlobalAccess;
    this._allowPscGlobalAccess = config.allowPscGlobalAccess;
    this._backendService = config.backendService;
    this._description = config.description;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipProtocol = config.ipProtocol;
    this._ipVersion = config.ipVersion;
    this._isMirroringCollector = config.isMirroringCollector;
    this._labels = config.labels;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._name = config.name;
    this._network = config.network;
    this._networkTier = config.networkTier;
    this._noAutomateDnsZone = config.noAutomateDnsZone;
    this._portRange = config.portRange;
    this._ports = config.ports;
    this._project = config.project;
    this._recreateClosedPsc = config.recreateClosedPsc;
    this._region = config.region;
    this._serviceLabel = config.serviceLabel;
    this._sourceIpRanges = config.sourceIpRanges;
    this._subnetwork = config.subnetwork;
    this._target = config.target;
    this._serviceDirectoryRegistrations.internalValue = config.serviceDirectoryRegistrations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_ports - computed: false, optional: true, required: false
  private _allPorts?: boolean | cdktf.IResolvable; 
  public get allPorts() {
    return this.getBooleanAttribute('all_ports');
  }
  public set allPorts(value: boolean | cdktf.IResolvable) {
    this._allPorts = value;
  }
  public resetAllPorts() {
    this._allPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPortsInput() {
    return this._allPorts;
  }

  // allow_global_access - computed: false, optional: true, required: false
  private _allowGlobalAccess?: boolean | cdktf.IResolvable; 
  public get allowGlobalAccess() {
    return this.getBooleanAttribute('allow_global_access');
  }
  public set allowGlobalAccess(value: boolean | cdktf.IResolvable) {
    this._allowGlobalAccess = value;
  }
  public resetAllowGlobalAccess() {
    this._allowGlobalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGlobalAccessInput() {
    return this._allowGlobalAccess;
  }

  // allow_psc_global_access - computed: false, optional: true, required: false
  private _allowPscGlobalAccess?: boolean | cdktf.IResolvable; 
  public get allowPscGlobalAccess() {
    return this.getBooleanAttribute('allow_psc_global_access');
  }
  public set allowPscGlobalAccess(value: boolean | cdktf.IResolvable) {
    this._allowPscGlobalAccess = value;
  }
  public resetAllowPscGlobalAccess() {
    this._allowPscGlobalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPscGlobalAccessInput() {
    return this._allowPscGlobalAccess;
  }

  // backend_service - computed: false, optional: true, required: false
  private _backendService?: string; 
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }
  public set backendService(value: string) {
    this._backendService = value;
  }
  public resetBackendService() {
    this._backendService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServiceInput() {
    return this._backendService;
  }

  // base_forwarding_rule - computed: true, optional: false, required: false
  public get baseForwardingRule() {
    return this.getStringAttribute('base_forwarding_rule');
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._ipAddress;
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
    return this._ipProtocol;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // is_mirroring_collector - computed: false, optional: true, required: false
  private _isMirroringCollector?: boolean | cdktf.IResolvable; 
  public get isMirroringCollector() {
    return this.getBooleanAttribute('is_mirroring_collector');
  }
  public set isMirroringCollector(value: boolean | cdktf.IResolvable) {
    this._isMirroringCollector = value;
  }
  public resetIsMirroringCollector() {
    this._isMirroringCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMirroringCollectorInput() {
    return this._isMirroringCollector;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
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
    return this._name;
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
    return this._network;
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
    return this._networkTier;
  }

  // no_automate_dns_zone - computed: false, optional: true, required: false
  private _noAutomateDnsZone?: boolean | cdktf.IResolvable; 
  public get noAutomateDnsZone() {
    return this.getBooleanAttribute('no_automate_dns_zone');
  }
  public set noAutomateDnsZone(value: boolean | cdktf.IResolvable) {
    this._noAutomateDnsZone = value;
  }
  public resetNoAutomateDnsZone() {
    this._noAutomateDnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutomateDnsZoneInput() {
    return this._noAutomateDnsZone;
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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
    return this._project;
  }

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // psc_connection_status - computed: true, optional: false, required: false
  public get pscConnectionStatus() {
    return this.getStringAttribute('psc_connection_status');
  }

  // recreate_closed_psc - computed: false, optional: true, required: false
  private _recreateClosedPsc?: boolean | cdktf.IResolvable; 
  public get recreateClosedPsc() {
    return this.getBooleanAttribute('recreate_closed_psc');
  }
  public set recreateClosedPsc(value: boolean | cdktf.IResolvable) {
    this._recreateClosedPsc = value;
  }
  public resetRecreateClosedPsc() {
    this._recreateClosedPsc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreateClosedPscInput() {
    return this._recreateClosedPsc;
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
    return this._region;
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
  public set serviceLabel(value: string) {
    this._serviceLabel = value;
  }
  public resetServiceLabel() {
    this._serviceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // source_ip_ranges - computed: false, optional: true, required: false
  private _sourceIpRanges?: string[]; 
  public get sourceIpRanges() {
    return this.getListAttribute('source_ip_ranges');
  }
  public set sourceIpRanges(value: string[]) {
    this._sourceIpRanges = value;
  }
  public resetSourceIpRanges() {
    this._sourceIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpRangesInput() {
    return this._sourceIpRanges;
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
    return this._subnetwork;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // service_directory_registrations - computed: false, optional: true, required: false
  private _serviceDirectoryRegistrations = new ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(this, "service_directory_registrations");
  public get serviceDirectoryRegistrations() {
    return this._serviceDirectoryRegistrations;
  }
  public putServiceDirectoryRegistrations(value: ComputeForwardingRuleServiceDirectoryRegistrations) {
    this._serviceDirectoryRegistrations.internalValue = value;
  }
  public resetServiceDirectoryRegistrations() {
    this._serviceDirectoryRegistrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryRegistrationsInput() {
    return this._serviceDirectoryRegistrations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeForwardingRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeForwardingRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_ports: cdktf.booleanToTerraform(this._allPorts),
      allow_global_access: cdktf.booleanToTerraform(this._allowGlobalAccess),
      allow_psc_global_access: cdktf.booleanToTerraform(this._allowPscGlobalAccess),
      backend_service: cdktf.stringToTerraform(this._backendService),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      is_mirroring_collector: cdktf.booleanToTerraform(this._isMirroringCollector),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      network_tier: cdktf.stringToTerraform(this._networkTier),
      no_automate_dns_zone: cdktf.booleanToTerraform(this._noAutomateDnsZone),
      port_range: cdktf.stringToTerraform(this._portRange),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      project: cdktf.stringToTerraform(this._project),
      recreate_closed_psc: cdktf.booleanToTerraform(this._recreateClosedPsc),
      region: cdktf.stringToTerraform(this._region),
      service_label: cdktf.stringToTerraform(this._serviceLabel),
      source_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpRanges),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      target: cdktf.stringToTerraform(this._target),
      service_directory_registrations: computeForwardingRuleServiceDirectoryRegistrationsToTerraform(this._serviceDirectoryRegistrations.internalValue),
      timeouts: computeForwardingRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
