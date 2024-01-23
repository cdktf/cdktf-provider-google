// https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeGlobalForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#description ComputeGlobalForwardingRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address for which this forwarding rule accepts traffic. When a client
  * sends traffic to this IP address, the forwarding rule directs the traffic
  * to the referenced 'target'.
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
  * The forwarding rule's 'target',
  * and in most cases, also the 'loadBalancingScheme', determine the
  * type of IP address that you can use. For detailed information, see
  * [IP address
  * specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
  * 
  * When reading an 'IPAddress', the API always returns the IP
  * address number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#ip_address ComputeGlobalForwardingRule#ip_address}
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
  * features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends). Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#ip_protocol ComputeGlobalForwardingRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#ip_version ComputeGlobalForwardingRule#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Labels to apply to this forwarding rule.  A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#labels ComputeGlobalForwardingRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the forwarding rule type.
  * 
  * For more information about forwarding rules, refer to
  * [Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#load_balancing_scheme ComputeGlobalForwardingRule#load_balancing_scheme}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#network ComputeGlobalForwardingRule#network}
  */
  readonly network?: string;
  /**
  * This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. Non-PSC forwarding rules do not use this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#no_automate_dns_zone ComputeGlobalForwardingRule#no_automate_dns_zone}
  */
  readonly noAutomateDnsZone?: boolean | cdktf.IResolvable;
  /**
  * The 'portRange' field has the following limitations:
  * * It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  * and
  * * It's applicable only to the following products: external passthrough
  * Network Load Balancers, internal and external proxy Network Load
  * Balancers, internal and external Application Load Balancers, external
  * protocol forwarding, and Classic VPN.
  * * Some products have restrictions on what ports can be used. See
  * [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
  * for details.
  * 
  * For external forwarding rules, two or more forwarding rules cannot use the
  * same '[IPAddress, IPProtocol]' pair, and cannot have overlapping
  * 'portRange's.
  * 
  * For internal forwarding rules within the same VPC network, two or more
  * forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair, and
  * cannot have overlapping 'portRange's.
  * 
  * @pattern: \d+(?:-\d+)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#port_range ComputeGlobalForwardingRule#port_range}
  */
  readonly portRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#project ComputeGlobalForwardingRule#project}
  */
  readonly project?: string;
  /**
  * If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#source_ip_ranges ComputeGlobalForwardingRule#source_ip_ranges}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#subnetwork ComputeGlobalForwardingRule#subnetwork}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#target ComputeGlobalForwardingRule#target}
  */
  readonly target: string;
  /**
  * metadata_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#metadata_filters ComputeGlobalForwardingRule#metadata_filters}
  */
  readonly metadataFilters?: ComputeGlobalForwardingRuleMetadataFilters[] | cdktf.IResolvable;
  /**
  * service_directory_registrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#service_directory_registrations ComputeGlobalForwardingRule#service_directory_registrations}
  */
  readonly serviceDirectoryRegistrations?: ComputeGlobalForwardingRuleServiceDirectoryRegistrations;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#timeouts ComputeGlobalForwardingRule#timeouts}
  */
  readonly timeouts?: ComputeGlobalForwardingRuleTimeouts;
}
export interface ComputeGlobalForwardingRuleMetadataFiltersFilterLabels {
  /**
  * Name of the metadata label. The length must be between
  * 1 and 1024 characters, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}
  */
  readonly name: string;
  /**
  * The value that the label must match. The value has a maximum
  * length of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#value ComputeGlobalForwardingRule#value}
  */
  readonly value: string;
}

export function computeGlobalForwardingRuleMetadataFiltersFilterLabelsToTerraform(struct?: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeGlobalForwardingRuleMetadataFiltersFilterLabelsToHclTerraform(struct?: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeGlobalForwardingRuleMetadataFiltersFilterLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList extends cdktf.ComplexList {
  public internalValue? : ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference {
    return new ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalForwardingRuleMetadataFilters {
  /**
  * Specifies how individual filterLabel matches within the list of
  * filterLabels contribute towards the overall metadataFilter match.
  * 
  * MATCH_ANY - At least one of the filterLabels must have a matching
  * label in the provided metadata.
  * MATCH_ALL - All filterLabels must have matching labels in the
  * provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#filter_match_criteria ComputeGlobalForwardingRule#filter_match_criteria}
  */
  readonly filterMatchCriteria: string;
  /**
  * filter_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#filter_labels ComputeGlobalForwardingRule#filter_labels}
  */
  readonly filterLabels: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[] | cdktf.IResolvable;
}

export function computeGlobalForwardingRuleMetadataFiltersToTerraform(struct?: ComputeGlobalForwardingRuleMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_match_criteria: cdktf.stringToTerraform(struct!.filterMatchCriteria),
    filter_labels: cdktf.listMapper(computeGlobalForwardingRuleMetadataFiltersFilterLabelsToTerraform, true)(struct!.filterLabels),
  }
}


export function computeGlobalForwardingRuleMetadataFiltersToHclTerraform(struct?: ComputeGlobalForwardingRuleMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.filterMatchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_labels: {
      value: cdktf.listMapperHcl(computeGlobalForwardingRuleMetadataFiltersFilterLabelsToHclTerraform, true)(struct!.filterLabels),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalForwardingRuleMetadataFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeGlobalForwardingRuleMetadataFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterMatchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMatchCriteria = this._filterMatchCriteria;
    }
    if (this._filterLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLabels = this._filterLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalForwardingRuleMetadataFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = undefined;
      this._filterLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterMatchCriteria = value.filterMatchCriteria;
      this._filterLabels.internalValue = value.filterLabels;
    }
  }

  // filter_match_criteria - computed: false, optional: false, required: true
  private _filterMatchCriteria?: string; 
  public get filterMatchCriteria() {
    return this.getStringAttribute('filter_match_criteria');
  }
  public set filterMatchCriteria(value: string) {
    this._filterMatchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchCriteriaInput() {
    return this._filterMatchCriteria;
  }

  // filter_labels - computed: false, optional: false, required: true
  private _filterLabels = new ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(this, "filter_labels", false);
  public get filterLabels() {
    return this._filterLabels;
  }
  public putFilterLabels(value: ComputeGlobalForwardingRuleMetadataFiltersFilterLabels[] | cdktf.IResolvable) {
    this._filterLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLabelsInput() {
    return this._filterLabels.internalValue;
  }
}

export class ComputeGlobalForwardingRuleMetadataFiltersList extends cdktf.ComplexList {
  public internalValue? : ComputeGlobalForwardingRuleMetadataFilters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeGlobalForwardingRuleMetadataFiltersOutputReference {
    return new ComputeGlobalForwardingRuleMetadataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeGlobalForwardingRuleServiceDirectoryRegistrations {
  /**
  * Service Directory namespace to register the forwarding rule under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#namespace ComputeGlobalForwardingRule#namespace}
  */
  readonly namespace?: string;
  /**
  * [Optional] Service Directory region to register this global forwarding rule under.
  * Default to "us-central1". Only used for PSC for Google APIs. All PSC for
  * Google APIs Forwarding Rules on the same network should use the same Service
  * Directory region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#service_directory_region ComputeGlobalForwardingRule#service_directory_region}
  */
  readonly serviceDirectoryRegion?: string;
}

export function computeGlobalForwardingRuleServiceDirectoryRegistrationsToTerraform(struct?: ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference | ComputeGlobalForwardingRuleServiceDirectoryRegistrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_directory_region: cdktf.stringToTerraform(struct!.serviceDirectoryRegion),
  }
}


export function computeGlobalForwardingRuleServiceDirectoryRegistrationsToHclTerraform(struct?: ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference | ComputeGlobalForwardingRuleServiceDirectoryRegistrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_region: {
      value: cdktf.stringToHclTerraform(struct!.serviceDirectoryRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeGlobalForwardingRuleServiceDirectoryRegistrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceDirectoryRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryRegion = this._serviceDirectoryRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeGlobalForwardingRuleServiceDirectoryRegistrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
      this._serviceDirectoryRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
      this._serviceDirectoryRegion = value.serviceDirectoryRegion;
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

  // service_directory_region - computed: false, optional: true, required: false
  private _serviceDirectoryRegion?: string; 
  public get serviceDirectoryRegion() {
    return this.getStringAttribute('service_directory_region');
  }
  public set serviceDirectoryRegion(value: string) {
    this._serviceDirectoryRegion = value;
  }
  public resetServiceDirectoryRegion() {
    this._serviceDirectoryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryRegionInput() {
    return this._serviceDirectoryRegion;
  }
}
export interface ComputeGlobalForwardingRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#create ComputeGlobalForwardingRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#delete ComputeGlobalForwardingRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#update ComputeGlobalForwardingRule#update}
  */
  readonly update?: string;
}

export function computeGlobalForwardingRuleTimeoutsToTerraform(struct?: ComputeGlobalForwardingRuleTimeouts | cdktf.IResolvable): any {
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


export function computeGlobalForwardingRuleTimeoutsToHclTerraform(struct?: ComputeGlobalForwardingRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeGlobalForwardingRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeGlobalForwardingRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeGlobalForwardingRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule google_compute_global_forwarding_rule}
*/
export class ComputeGlobalForwardingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_global_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeGlobalForwardingRule to import
  * @param importFromId The id of the existing ComputeGlobalForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeGlobalForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_global_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_global_forwarding_rule google_compute_global_forwarding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeGlobalForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeGlobalForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.13.0',
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
    this._description = config.description;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipProtocol = config.ipProtocol;
    this._ipVersion = config.ipVersion;
    this._labels = config.labels;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._name = config.name;
    this._network = config.network;
    this._noAutomateDnsZone = config.noAutomateDnsZone;
    this._portRange = config.portRange;
    this._project = config.project;
    this._sourceIpRanges = config.sourceIpRanges;
    this._subnetwork = config.subnetwork;
    this._target = config.target;
    this._metadataFilters.internalValue = config.metadataFilters;
    this._serviceDirectoryRegistrations.internalValue = config.serviceDirectoryRegistrations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_forwarding_rule - computed: true, optional: false, required: false
  public get baseForwardingRule() {
    return this.getStringAttribute('base_forwarding_rule');
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

  // ip_version - computed: false, optional: true, required: false
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

  // port_range - computed: false, optional: true, required: false
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
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

  // metadata_filters - computed: false, optional: true, required: false
  private _metadataFilters = new ComputeGlobalForwardingRuleMetadataFiltersList(this, "metadata_filters", false);
  public get metadataFilters() {
    return this._metadataFilters;
  }
  public putMetadataFilters(value: ComputeGlobalForwardingRuleMetadataFilters[] | cdktf.IResolvable) {
    this._metadataFilters.internalValue = value;
  }
  public resetMetadataFilters() {
    this._metadataFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFiltersInput() {
    return this._metadataFilters.internalValue;
  }

  // service_directory_registrations - computed: false, optional: true, required: false
  private _serviceDirectoryRegistrations = new ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference(this, "service_directory_registrations");
  public get serviceDirectoryRegistrations() {
    return this._serviceDirectoryRegistrations;
  }
  public putServiceDirectoryRegistrations(value: ComputeGlobalForwardingRuleServiceDirectoryRegistrations) {
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
  private _timeouts = new ComputeGlobalForwardingRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeGlobalForwardingRuleTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      no_automate_dns_zone: cdktf.booleanToTerraform(this._noAutomateDnsZone),
      port_range: cdktf.stringToTerraform(this._portRange),
      project: cdktf.stringToTerraform(this._project),
      source_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpRanges),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      target: cdktf.stringToTerraform(this._target),
      metadata_filters: cdktf.listMapper(computeGlobalForwardingRuleMetadataFiltersToTerraform, true)(this._metadataFilters.internalValue),
      service_directory_registrations: computeGlobalForwardingRuleServiceDirectoryRegistrationsToTerraform(this._serviceDirectoryRegistrations.internalValue),
      timeouts: computeGlobalForwardingRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      load_balancing_scheme: {
        value: cdktf.stringToHclTerraform(this._loadBalancingScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_automate_dns_zone: {
        value: cdktf.booleanToHclTerraform(this._noAutomateDnsZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_range: {
        value: cdktf.stringToHclTerraform(this._portRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_filters: {
        value: cdktf.listMapperHcl(computeGlobalForwardingRuleMetadataFiltersToHclTerraform, true)(this._metadataFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeGlobalForwardingRuleMetadataFiltersList",
      },
      service_directory_registrations: {
        value: computeGlobalForwardingRuleServiceDirectoryRegistrationsToHclTerraform(this._serviceDirectoryRegistrations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeGlobalForwardingRuleServiceDirectoryRegistrationsList",
      },
      timeouts: {
        value: computeGlobalForwardingRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeGlobalForwardingRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
