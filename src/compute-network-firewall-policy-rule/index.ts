// https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkFirewallPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#action ComputeNetworkFirewallPolicyRule#action}
  */
  readonly action: string;
  /**
  * An optional description for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#description ComputeNetworkFirewallPolicyRule#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. Possible values: INGRESS, EGRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#direction ComputeNetworkFirewallPolicyRule#direction}
  */
  readonly direction: string;
  /**
  * Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#disabled ComputeNetworkFirewallPolicyRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#enable_logging ComputeNetworkFirewallPolicyRule#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * The firewall policy of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#firewall_policy ComputeNetworkFirewallPolicyRule#firewall_policy}
  */
  readonly firewallPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#priority ComputeNetworkFirewallPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#project ComputeNetworkFirewallPolicyRule#project}
  */
  readonly project?: string;
  /**
  * An optional name for the rule. This field is not a unique identifier and can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#rule_name ComputeNetworkFirewallPolicyRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * A fully-qualified URL of a SecurityProfileGroup resource. Example: https://networksecurity.googleapis.com/v1/organizations/{organizationId}/locations/global/securityProfileGroups/my-security-profile-group. It must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#security_profile_group ComputeNetworkFirewallPolicyRule#security_profile_group}
  */
  readonly securityProfileGroup?: string;
  /**
  * A list of service accounts indicating the sets of instances that are applied with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#target_service_accounts ComputeNetworkFirewallPolicyRule#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * Boolean flag indicating if the traffic should be TLS decrypted. It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#tls_inspect ComputeNetworkFirewallPolicyRule#tls_inspect}
  */
  readonly tlsInspect?: boolean | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#match ComputeNetworkFirewallPolicyRule#match}
  */
  readonly match: ComputeNetworkFirewallPolicyRuleMatch;
  /**
  * target_secure_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#target_secure_tags ComputeNetworkFirewallPolicyRule#target_secure_tags}
  */
  readonly targetSecureTags?: ComputeNetworkFirewallPolicyRuleTargetSecureTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#timeouts ComputeNetworkFirewallPolicyRule#timeouts}
  */
  readonly timeouts?: ComputeNetworkFirewallPolicyRuleTimeouts;
}
export interface ComputeNetworkFirewallPolicyRuleMatchLayer4Configs {
  /**
  * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#ip_protocol ComputeNetworkFirewallPolicyRule#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#ports ComputeNetworkFirewallPolicyRule#ports}
  */
  readonly ports?: string[];
}

export function computeNetworkFirewallPolicyRuleMatchLayer4ConfigsToTerraform(struct?: ComputeNetworkFirewallPolicyRuleMatchLayer4Configs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function computeNetworkFirewallPolicyRuleMatchLayer4ConfigsToHclTerraform(struct?: ComputeNetworkFirewallPolicyRuleMatchLayer4Configs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyRuleMatchLayer4Configs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyRuleMatchLayer4Configs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipProtocol = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipProtocol = value.ipProtocol;
      this._ports = value.ports;
    }
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
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
}

export class ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList extends cdktf.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyRuleMatchLayer4Configs[] | cdktf.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference {
    return new ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags {
  /**
  * Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#name ComputeNetworkFirewallPolicyRule#name}
  */
  readonly name: string;
}

export function computeNetworkFirewallPolicyRuleMatchSrcSecureTagsToTerraform(struct?: ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeNetworkFirewallPolicyRuleMatchSrcSecureTagsToHclTerraform(struct?: ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList extends cdktf.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags[] | cdktf.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference {
    return new ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyRuleMatch {
  /**
  * Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#dest_address_groups ComputeNetworkFirewallPolicyRule#dest_address_groups}
  */
  readonly destAddressGroups?: string[];
  /**
  * Domain names that will be used to match against the resolved domain name of destination of traffic. Can only be specified if DIRECTION is egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#dest_fqdns ComputeNetworkFirewallPolicyRule#dest_fqdns}
  */
  readonly destFqdns?: string[];
  /**
  * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#dest_ip_ranges ComputeNetworkFirewallPolicyRule#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#dest_region_codes ComputeNetworkFirewallPolicyRule#dest_region_codes}
  */
  readonly destRegionCodes?: string[];
  /**
  * Name of the Google Cloud Threat Intelligence list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#dest_threat_intelligences ComputeNetworkFirewallPolicyRule#dest_threat_intelligences}
  */
  readonly destThreatIntelligences?: string[];
  /**
  * Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#src_address_groups ComputeNetworkFirewallPolicyRule#src_address_groups}
  */
  readonly srcAddressGroups?: string[];
  /**
  * Domain names that will be used to match against the resolved domain name of source of traffic. Can only be specified if DIRECTION is ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#src_fqdns ComputeNetworkFirewallPolicyRule#src_fqdns}
  */
  readonly srcFqdns?: string[];
  /**
  * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#src_ip_ranges ComputeNetworkFirewallPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * The Unicode country codes whose IP addresses will be used to match against the source of traffic. Can only be specified if DIRECTION is ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#src_region_codes ComputeNetworkFirewallPolicyRule#src_region_codes}
  */
  readonly srcRegionCodes?: string[];
  /**
  * Name of the Google Cloud Threat Intelligence list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#src_threat_intelligences ComputeNetworkFirewallPolicyRule#src_threat_intelligences}
  */
  readonly srcThreatIntelligences?: string[];
  /**
  * layer4_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#layer4_configs ComputeNetworkFirewallPolicyRule#layer4_configs}
  */
  readonly layer4Configs: ComputeNetworkFirewallPolicyRuleMatchLayer4Configs[] | cdktf.IResolvable;
  /**
  * src_secure_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#src_secure_tags ComputeNetworkFirewallPolicyRule#src_secure_tags}
  */
  readonly srcSecureTags?: ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags[] | cdktf.IResolvable;
}

export function computeNetworkFirewallPolicyRuleMatchToTerraform(struct?: ComputeNetworkFirewallPolicyRuleMatchOutputReference | ComputeNetworkFirewallPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_address_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destAddressGroups),
    dest_fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destFqdns),
    dest_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destIpRanges),
    dest_region_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destRegionCodes),
    dest_threat_intelligences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destThreatIntelligences),
    src_address_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcAddressGroups),
    src_fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcFqdns),
    src_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcIpRanges),
    src_region_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcRegionCodes),
    src_threat_intelligences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcThreatIntelligences),
    layer4_configs: cdktf.listMapper(computeNetworkFirewallPolicyRuleMatchLayer4ConfigsToTerraform, true)(struct!.layer4Configs),
    src_secure_tags: cdktf.listMapper(computeNetworkFirewallPolicyRuleMatchSrcSecureTagsToTerraform, true)(struct!.srcSecureTags),
  }
}


export function computeNetworkFirewallPolicyRuleMatchToHclTerraform(struct?: ComputeNetworkFirewallPolicyRuleMatchOutputReference | ComputeNetworkFirewallPolicyRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_address_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destAddressGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destFqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_region_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destRegionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_threat_intelligences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destThreatIntelligences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_address_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcAddressGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcFqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_region_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcRegionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_threat_intelligences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcThreatIntelligences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer4_configs: {
      value: cdktf.listMapperHcl(computeNetworkFirewallPolicyRuleMatchLayer4ConfigsToHclTerraform, true)(struct!.layer4Configs),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList",
    },
    src_secure_tags: {
      value: cdktf.listMapperHcl(computeNetworkFirewallPolicyRuleMatchSrcSecureTagsToHclTerraform, true)(struct!.srcSecureTags),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNetworkFirewallPolicyRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destAddressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAddressGroups = this._destAddressGroups;
    }
    if (this._destFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.destFqdns = this._destFqdns;
    }
    if (this._destIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpRanges = this._destIpRanges;
    }
    if (this._destRegionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRegionCodes = this._destRegionCodes;
    }
    if (this._destThreatIntelligences !== undefined) {
      hasAnyValues = true;
      internalValueResult.destThreatIntelligences = this._destThreatIntelligences;
    }
    if (this._srcAddressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressGroups = this._srcAddressGroups;
    }
    if (this._srcFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFqdns = this._srcFqdns;
    }
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    if (this._srcRegionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRegionCodes = this._srcRegionCodes;
    }
    if (this._srcThreatIntelligences !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThreatIntelligences = this._srcThreatIntelligences;
    }
    if (this._layer4Configs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Configs = this._layer4Configs?.internalValue;
    }
    if (this._srcSecureTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSecureTags = this._srcSecureTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destAddressGroups = undefined;
      this._destFqdns = undefined;
      this._destIpRanges = undefined;
      this._destRegionCodes = undefined;
      this._destThreatIntelligences = undefined;
      this._srcAddressGroups = undefined;
      this._srcFqdns = undefined;
      this._srcIpRanges = undefined;
      this._srcRegionCodes = undefined;
      this._srcThreatIntelligences = undefined;
      this._layer4Configs.internalValue = undefined;
      this._srcSecureTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destAddressGroups = value.destAddressGroups;
      this._destFqdns = value.destFqdns;
      this._destIpRanges = value.destIpRanges;
      this._destRegionCodes = value.destRegionCodes;
      this._destThreatIntelligences = value.destThreatIntelligences;
      this._srcAddressGroups = value.srcAddressGroups;
      this._srcFqdns = value.srcFqdns;
      this._srcIpRanges = value.srcIpRanges;
      this._srcRegionCodes = value.srcRegionCodes;
      this._srcThreatIntelligences = value.srcThreatIntelligences;
      this._layer4Configs.internalValue = value.layer4Configs;
      this._srcSecureTags.internalValue = value.srcSecureTags;
    }
  }

  // dest_address_groups - computed: false, optional: true, required: false
  private _destAddressGroups?: string[]; 
  public get destAddressGroups() {
    return this.getListAttribute('dest_address_groups');
  }
  public set destAddressGroups(value: string[]) {
    this._destAddressGroups = value;
  }
  public resetDestAddressGroups() {
    this._destAddressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddressGroupsInput() {
    return this._destAddressGroups;
  }

  // dest_fqdns - computed: false, optional: true, required: false
  private _destFqdns?: string[]; 
  public get destFqdns() {
    return this.getListAttribute('dest_fqdns');
  }
  public set destFqdns(value: string[]) {
    this._destFqdns = value;
  }
  public resetDestFqdns() {
    this._destFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destFqdnsInput() {
    return this._destFqdns;
  }

  // dest_ip_ranges - computed: false, optional: true, required: false
  private _destIpRanges?: string[]; 
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }
  public set destIpRanges(value: string[]) {
    this._destIpRanges = value;
  }
  public resetDestIpRanges() {
    this._destIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpRangesInput() {
    return this._destIpRanges;
  }

  // dest_region_codes - computed: false, optional: true, required: false
  private _destRegionCodes?: string[]; 
  public get destRegionCodes() {
    return this.getListAttribute('dest_region_codes');
  }
  public set destRegionCodes(value: string[]) {
    this._destRegionCodes = value;
  }
  public resetDestRegionCodes() {
    this._destRegionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRegionCodesInput() {
    return this._destRegionCodes;
  }

  // dest_threat_intelligences - computed: false, optional: true, required: false
  private _destThreatIntelligences?: string[]; 
  public get destThreatIntelligences() {
    return this.getListAttribute('dest_threat_intelligences');
  }
  public set destThreatIntelligences(value: string[]) {
    this._destThreatIntelligences = value;
  }
  public resetDestThreatIntelligences() {
    this._destThreatIntelligences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destThreatIntelligencesInput() {
    return this._destThreatIntelligences;
  }

  // src_address_groups - computed: false, optional: true, required: false
  private _srcAddressGroups?: string[]; 
  public get srcAddressGroups() {
    return this.getListAttribute('src_address_groups');
  }
  public set srcAddressGroups(value: string[]) {
    this._srcAddressGroups = value;
  }
  public resetSrcAddressGroups() {
    this._srcAddressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressGroupsInput() {
    return this._srcAddressGroups;
  }

  // src_fqdns - computed: false, optional: true, required: false
  private _srcFqdns?: string[]; 
  public get srcFqdns() {
    return this.getListAttribute('src_fqdns');
  }
  public set srcFqdns(value: string[]) {
    this._srcFqdns = value;
  }
  public resetSrcFqdns() {
    this._srcFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFqdnsInput() {
    return this._srcFqdns;
  }

  // src_ip_ranges - computed: false, optional: true, required: false
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  public resetSrcIpRanges() {
    this._srcIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }

  // src_region_codes - computed: false, optional: true, required: false
  private _srcRegionCodes?: string[]; 
  public get srcRegionCodes() {
    return this.getListAttribute('src_region_codes');
  }
  public set srcRegionCodes(value: string[]) {
    this._srcRegionCodes = value;
  }
  public resetSrcRegionCodes() {
    this._srcRegionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRegionCodesInput() {
    return this._srcRegionCodes;
  }

  // src_threat_intelligences - computed: false, optional: true, required: false
  private _srcThreatIntelligences?: string[]; 
  public get srcThreatIntelligences() {
    return this.getListAttribute('src_threat_intelligences');
  }
  public set srcThreatIntelligences(value: string[]) {
    this._srcThreatIntelligences = value;
  }
  public resetSrcThreatIntelligences() {
    this._srcThreatIntelligences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThreatIntelligencesInput() {
    return this._srcThreatIntelligences;
  }

  // layer4_configs - computed: false, optional: false, required: true
  private _layer4Configs = new ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList(this, "layer4_configs", false);
  public get layer4Configs() {
    return this._layer4Configs;
  }
  public putLayer4Configs(value: ComputeNetworkFirewallPolicyRuleMatchLayer4Configs[] | cdktf.IResolvable) {
    this._layer4Configs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigsInput() {
    return this._layer4Configs.internalValue;
  }

  // src_secure_tags - computed: false, optional: true, required: false
  private _srcSecureTags = new ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList(this, "src_secure_tags", false);
  public get srcSecureTags() {
    return this._srcSecureTags;
  }
  public putSrcSecureTags(value: ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags[] | cdktf.IResolvable) {
    this._srcSecureTags.internalValue = value;
  }
  public resetSrcSecureTags() {
    this._srcSecureTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSecureTagsInput() {
    return this._srcSecureTags.internalValue;
  }
}
export interface ComputeNetworkFirewallPolicyRuleTargetSecureTags {
  /**
  * Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#name ComputeNetworkFirewallPolicyRule#name}
  */
  readonly name: string;
}

export function computeNetworkFirewallPolicyRuleTargetSecureTagsToTerraform(struct?: ComputeNetworkFirewallPolicyRuleTargetSecureTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeNetworkFirewallPolicyRuleTargetSecureTagsToHclTerraform(struct?: ComputeNetworkFirewallPolicyRuleTargetSecureTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyRuleTargetSecureTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyRuleTargetSecureTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeNetworkFirewallPolicyRuleTargetSecureTagsList extends cdktf.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyRuleTargetSecureTags[] | cdktf.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference {
    return new ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#create ComputeNetworkFirewallPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#delete ComputeNetworkFirewallPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#update ComputeNetworkFirewallPolicyRule#update}
  */
  readonly update?: string;
}

export function computeNetworkFirewallPolicyRuleTimeoutsToTerraform(struct?: ComputeNetworkFirewallPolicyRuleTimeouts | cdktf.IResolvable): any {
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


export function computeNetworkFirewallPolicyRuleTimeoutsToHclTerraform(struct?: ComputeNetworkFirewallPolicyRuleTimeouts | cdktf.IResolvable): any {
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

export class ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeNetworkFirewallPolicyRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeNetworkFirewallPolicyRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule google_compute_network_firewall_policy_rule}
*/
export class ComputeNetworkFirewallPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_network_firewall_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeNetworkFirewallPolicyRule to import
  * @param importFromId The id of the existing ComputeNetworkFirewallPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeNetworkFirewallPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_network_firewall_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/compute_network_firewall_policy_rule google_compute_network_firewall_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNetworkFirewallPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNetworkFirewallPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_firewall_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._enableLogging = config.enableLogging;
    this._firewallPolicy = config.firewallPolicy;
    this._id = config.id;
    this._priority = config.priority;
    this._project = config.project;
    this._ruleName = config.ruleName;
    this._securityProfileGroup = config.securityProfileGroup;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._tlsInspect = config.tlsInspect;
    this._match.internalValue = config.match;
    this._targetSecureTags.internalValue = config.targetSecureTags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy?: string; 
  public get firewallPolicy() {
    return this.getStringAttribute('firewall_policy');
  }
  public set firewallPolicy(value: string) {
    this._firewallPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy;
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_tuple_count - computed: true, optional: false, required: false
  public get ruleTupleCount() {
    return this.getNumberAttribute('rule_tuple_count');
  }

  // security_profile_group - computed: false, optional: true, required: false
  private _securityProfileGroup?: string; 
  public get securityProfileGroup() {
    return this.getStringAttribute('security_profile_group');
  }
  public set securityProfileGroup(value: string) {
    this._securityProfileGroup = value;
  }
  public resetSecurityProfileGroup() {
    this._securityProfileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupInput() {
    return this._securityProfileGroup;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[]; 
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }
  public set targetServiceAccounts(value: string[]) {
    this._targetServiceAccounts = value;
  }
  public resetTargetServiceAccounts() {
    this._targetServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountsInput() {
    return this._targetServiceAccounts;
  }

  // tls_inspect - computed: false, optional: true, required: false
  private _tlsInspect?: boolean | cdktf.IResolvable; 
  public get tlsInspect() {
    return this.getBooleanAttribute('tls_inspect');
  }
  public set tlsInspect(value: boolean | cdktf.IResolvable) {
    this._tlsInspect = value;
  }
  public resetTlsInspect() {
    this._tlsInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectInput() {
    return this._tlsInspect;
  }

  // match - computed: false, optional: false, required: true
  private _match = new ComputeNetworkFirewallPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ComputeNetworkFirewallPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // target_secure_tags - computed: false, optional: true, required: false
  private _targetSecureTags = new ComputeNetworkFirewallPolicyRuleTargetSecureTagsList(this, "target_secure_tags", false);
  public get targetSecureTags() {
    return this._targetSecureTags;
  }
  public putTargetSecureTags(value: ComputeNetworkFirewallPolicyRuleTargetSecureTags[] | cdktf.IResolvable) {
    this._targetSecureTags.internalValue = value;
  }
  public resetTargetSecureTags() {
    this._targetSecureTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecureTagsInput() {
    return this._targetSecureTags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNetworkFirewallPolicyRuleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      firewall_policy: cdktf.stringToTerraform(this._firewallPolicy),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      security_profile_group: cdktf.stringToTerraform(this._securityProfileGroup),
      target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetServiceAccounts),
      tls_inspect: cdktf.booleanToTerraform(this._tlsInspect),
      match: computeNetworkFirewallPolicyRuleMatchToTerraform(this._match.internalValue),
      target_secure_tags: cdktf.listMapper(computeNetworkFirewallPolicyRuleTargetSecureTagsToTerraform, true)(this._targetSecureTags.internalValue),
      timeouts: computeNetworkFirewallPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging: {
        value: cdktf.booleanToHclTerraform(this._enableLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_policy: {
        value: cdktf.stringToHclTerraform(this._firewallPolicy),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile_group: {
        value: cdktf.stringToHclTerraform(this._securityProfileGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetServiceAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls_inspect: {
        value: cdktf.booleanToHclTerraform(this._tlsInspect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match: {
        value: computeNetworkFirewallPolicyRuleMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeNetworkFirewallPolicyRuleMatchList",
      },
      target_secure_tags: {
        value: cdktf.listMapperHcl(computeNetworkFirewallPolicyRuleTargetSecureTagsToHclTerraform, true)(this._targetSecureTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeNetworkFirewallPolicyRuleTargetSecureTagsList",
      },
      timeouts: {
        value: computeNetworkFirewallPolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeNetworkFirewallPolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
