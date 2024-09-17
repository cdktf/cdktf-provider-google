/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network tier to use when automatically reserving NAT IP addresses.
  * Must be one of: PREMIUM, STANDARD. If not specified, then the current
  * project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#auto_network_tier ComputeRouterNat#auto_network_tier}
  */
  readonly autoNetworkTier?: string;
  /**
  * A list of URLs of the IP resources to be drained. These IPs must be
  * valid static external IPs that have been assigned to the NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}
  */
  readonly drainNatIps?: string[];
  /**
  * Enable Dynamic Port Allocation.
  * If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
  * If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
  * If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
  * If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
  * 
  * Mutually exclusive with enableEndpointIndependentMapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}
  */
  readonly enableDynamicPortAllocation?: boolean | cdktf.IResolvable;
  /**
  * Enable endpoint independent mapping.
  * For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}
  */
  readonly enableEndpointIndependentMapping?: boolean | cdktf.IResolvable;
  /**
  * Specifies the endpoint Types supported by the NAT Gateway.
  * Supported values include:
  *       'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
  *       'ENDPOINT_TYPE_MANAGED_PROXY_LB'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#endpoint_types ComputeRouterNat#endpoint_types}
  */
  readonly endpointTypes?: string[];
  /**
  * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}
  */
  readonly icmpIdleTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of ports allocated to a VM from this NAT.
  * This field can only be set when enableDynamicPortAllocation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}
  */
  readonly maxPortsPerVm?: number;
  /**
  * Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}
  */
  readonly minPortsPerVm?: number;
  /**
  * Name of the NAT service. The name must be 1-63 characters long and
  * comply with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * How external IPs should be allocated for this NAT. Valid values are
  * 'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
  * Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}
  */
  readonly natIpAllocateOption?: string;
  /**
  * Self-links of NAT IPs. Only valid if natIpAllocateOption
  * is set to MANUAL_ONLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}
  */
  readonly natIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}
  */
  readonly project?: string;
  /**
  * Region where the router and NAT reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}
  */
  readonly region?: string;
  /**
  * The name of the Cloud Router in which this NAT will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}
  */
  readonly router: string;
  /**
  * How NAT should be configured per Subnetwork.
  * If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
  * IP ranges in every Subnetwork are allowed to Nat.
  * If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
  * ranges in every Subnetwork are allowed to Nat.
  * 'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
  * (specified in the field subnetwork below). Note that if this field
  * contains ALL_SUBNETWORKS_ALL_IP_RANGES or
  * ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
  * other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}
  */
  readonly sourceSubnetworkIpRangesToNat: string;
  /**
  * Timeout (in seconds) for TCP established connections.
  * Defaults to 1200s if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}
  */
  readonly tcpEstablishedIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
  * Defaults to 120s if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}
  */
  readonly tcpTimeWaitTimeoutSec?: number;
  /**
  * Timeout (in seconds) for TCP transitory connections.
  * Defaults to 30s if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}
  */
  readonly tcpTransitoryIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}
  */
  readonly udpIdleTimeoutSec?: number;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}
  */
  readonly logConfig?: ComputeRouterNatLogConfig;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}
  */
  readonly rules?: ComputeRouterNatRules[] | cdktf.IResolvable;
  /**
  * subnetwork block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}
  */
  readonly subnetwork?: ComputeRouterNatSubnetwork[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}
  */
  readonly timeouts?: ComputeRouterNatTimeouts;
}
export interface ComputeRouterNatLogConfig {
  /**
  * Indicates whether or not to export logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#enable ComputeRouterNat#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#filter ComputeRouterNat#filter}
  */
  readonly filter: string;
}

export function computeRouterNatLogConfigToTerraform(struct?: ComputeRouterNatLogConfigOutputReference | ComputeRouterNatLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function computeRouterNatLogConfigToHclTerraform(struct?: ComputeRouterNatLogConfigOutputReference | ComputeRouterNatLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterNatLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterNatLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterNatLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._filter = value.filter;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface ComputeRouterNatRulesAction {
  /**
  * A list of URLs of the IP resources used for this NAT rule.
  * These IP addresses must be valid static external IP addresses assigned to the project.
  * This field is used for public NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#source_nat_active_ips ComputeRouterNat#source_nat_active_ips}
  */
  readonly sourceNatActiveIps?: string[];
  /**
  * A list of URLs of the IP resources to be drained.
  * These IPs must be valid static external IPs that have been assigned to the NAT.
  * These IPs should be used for updating/patching a NAT rule only.
  * This field is used for public NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#source_nat_drain_ips ComputeRouterNat#source_nat_drain_ips}
  */
  readonly sourceNatDrainIps?: string[];
}

export function computeRouterNatRulesActionToTerraform(struct?: ComputeRouterNatRulesActionOutputReference | ComputeRouterNatRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_nat_active_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNatActiveIps),
    source_nat_drain_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNatDrainIps),
  }
}


export function computeRouterNatRulesActionToHclTerraform(struct?: ComputeRouterNatRulesActionOutputReference | ComputeRouterNatRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_nat_active_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNatActiveIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_nat_drain_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNatDrainIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterNatRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterNatRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceNatActiveIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNatActiveIps = this._sourceNatActiveIps;
    }
    if (this._sourceNatDrainIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNatDrainIps = this._sourceNatDrainIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterNatRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceNatActiveIps = undefined;
      this._sourceNatDrainIps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceNatActiveIps = value.sourceNatActiveIps;
      this._sourceNatDrainIps = value.sourceNatDrainIps;
    }
  }

  // source_nat_active_ips - computed: false, optional: true, required: false
  private _sourceNatActiveIps?: string[]; 
  public get sourceNatActiveIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_nat_active_ips'));
  }
  public set sourceNatActiveIps(value: string[]) {
    this._sourceNatActiveIps = value;
  }
  public resetSourceNatActiveIps() {
    this._sourceNatActiveIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatActiveIpsInput() {
    return this._sourceNatActiveIps;
  }

  // source_nat_drain_ips - computed: false, optional: true, required: false
  private _sourceNatDrainIps?: string[]; 
  public get sourceNatDrainIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_nat_drain_ips'));
  }
  public set sourceNatDrainIps(value: string[]) {
    this._sourceNatDrainIps = value;
  }
  public resetSourceNatDrainIps() {
    this._sourceNatDrainIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatDrainIpsInput() {
    return this._sourceNatDrainIps;
  }
}
export interface ComputeRouterNatRules {
  /**
  * An optional description of this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#description ComputeRouterNat#description}
  */
  readonly description?: string;
  /**
  * CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.
  * If it evaluates to true, the corresponding action is enforced.
  * 
  * The following examples are valid match expressions for public NAT:
  * 
  * "inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"
  * 
  * "destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"
  * 
  * The following example is a valid match expression for private NAT:
  * 
  * "nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#match ComputeRouterNat#match}
  */
  readonly match: string;
  /**
  * An integer uniquely identifying a rule in the list.
  * The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#rule_number ComputeRouterNat#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#action ComputeRouterNat#action}
  */
  readonly action?: ComputeRouterNatRulesAction;
}

export function computeRouterNatRulesToTerraform(struct?: ComputeRouterNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    match: cdktf.stringToTerraform(struct!.match),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
    action: computeRouterNatRulesActionToTerraform(struct!.action),
  }
}


export function computeRouterNatRulesToHclTerraform(struct?: ComputeRouterNatRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_number: {
      value: cdktf.numberToHclTerraform(struct!.ruleNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: computeRouterNatRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRouterNatRulesActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterNatRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRouterNatRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._ruleNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNumber = this._ruleNumber;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterNatRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._match = undefined;
      this._ruleNumber = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._match = value.match;
      this._ruleNumber = value.ruleNumber;
      this._action.internalValue = value.action;
    }
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

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // rule_number - computed: false, optional: false, required: true
  private _ruleNumber?: number; 
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }
  public set ruleNumber(value: number) {
    this._ruleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNumberInput() {
    return this._ruleNumber;
  }

  // action - computed: false, optional: true, required: false
  private _action = new ComputeRouterNatRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ComputeRouterNatRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class ComputeRouterNatRulesList extends cdktf.ComplexList {
  public internalValue? : ComputeRouterNatRules[] | cdktf.IResolvable

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
  public get(index: number): ComputeRouterNatRulesOutputReference {
    return new ComputeRouterNatRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRouterNatSubnetwork {
  /**
  * Self-link of subnetwork to NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * List of the secondary ranges of the subnetwork that are allowed
  * to use NAT. This can be populated only if
  * 'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
  * sourceIpRangesToNat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}
  */
  readonly secondaryIpRangeNames?: string[];
  /**
  * List of options for which source IPs in the subnetwork
  * should have NAT enabled. Supported values include:
  * 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES',
  * 'PRIMARY_IP_RANGE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}
  */
  readonly sourceIpRangesToNat: string[];
}

export function computeRouterNatSubnetworkToTerraform(struct?: ComputeRouterNatSubnetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secondary_ip_range_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryIpRangeNames),
    source_ip_ranges_to_nat: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpRangesToNat),
  }
}


export function computeRouterNatSubnetworkToHclTerraform(struct?: ComputeRouterNatSubnetwork | cdktf.IResolvable): any {
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
    secondary_ip_range_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondaryIpRangeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_ip_ranges_to_nat: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIpRangesToNat),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterNatSubnetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRouterNatSubnetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secondaryIpRangeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpRangeNames = this._secondaryIpRangeNames;
    }
    if (this._sourceIpRangesToNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpRangesToNat = this._sourceIpRangesToNat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterNatSubnetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secondaryIpRangeNames = undefined;
      this._sourceIpRangesToNat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secondaryIpRangeNames = value.secondaryIpRangeNames;
      this._sourceIpRangesToNat = value.sourceIpRangesToNat;
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

  // secondary_ip_range_names - computed: false, optional: true, required: false
  private _secondaryIpRangeNames?: string[]; 
  public get secondaryIpRangeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_ip_range_names'));
  }
  public set secondaryIpRangeNames(value: string[]) {
    this._secondaryIpRangeNames = value;
  }
  public resetSecondaryIpRangeNames() {
    this._secondaryIpRangeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpRangeNamesInput() {
    return this._secondaryIpRangeNames;
  }

  // source_ip_ranges_to_nat - computed: false, optional: false, required: true
  private _sourceIpRangesToNat?: string[]; 
  public get sourceIpRangesToNat() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_ranges_to_nat'));
  }
  public set sourceIpRangesToNat(value: string[]) {
    this._sourceIpRangesToNat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpRangesToNatInput() {
    return this._sourceIpRangesToNat;
  }
}

export class ComputeRouterNatSubnetworkList extends cdktf.ComplexList {
  public internalValue? : ComputeRouterNatSubnetwork[] | cdktf.IResolvable

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
  public get(index: number): ComputeRouterNatSubnetworkOutputReference {
    return new ComputeRouterNatSubnetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRouterNatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}
  */
  readonly update?: string;
}

export function computeRouterNatTimeoutsToTerraform(struct?: ComputeRouterNatTimeouts | cdktf.IResolvable): any {
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


export function computeRouterNatTimeoutsToHclTerraform(struct?: ComputeRouterNatTimeouts | cdktf.IResolvable): any {
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

export class ComputeRouterNatTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRouterNatTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRouterNatTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat google_compute_router_nat}
*/
export class ComputeRouterNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRouterNat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRouterNat to import
  * @param importFromId The id of the existing ComputeRouterNat that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRouterNat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_router_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/compute_router_nat google_compute_router_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterNatConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRouterNatConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_nat',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.3.0',
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
    this._autoNetworkTier = config.autoNetworkTier;
    this._drainNatIps = config.drainNatIps;
    this._enableDynamicPortAllocation = config.enableDynamicPortAllocation;
    this._enableEndpointIndependentMapping = config.enableEndpointIndependentMapping;
    this._endpointTypes = config.endpointTypes;
    this._icmpIdleTimeoutSec = config.icmpIdleTimeoutSec;
    this._id = config.id;
    this._maxPortsPerVm = config.maxPortsPerVm;
    this._minPortsPerVm = config.minPortsPerVm;
    this._name = config.name;
    this._natIpAllocateOption = config.natIpAllocateOption;
    this._natIps = config.natIps;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._sourceSubnetworkIpRangesToNat = config.sourceSubnetworkIpRangesToNat;
    this._tcpEstablishedIdleTimeoutSec = config.tcpEstablishedIdleTimeoutSec;
    this._tcpTimeWaitTimeoutSec = config.tcpTimeWaitTimeoutSec;
    this._tcpTransitoryIdleTimeoutSec = config.tcpTransitoryIdleTimeoutSec;
    this._udpIdleTimeoutSec = config.udpIdleTimeoutSec;
    this._logConfig.internalValue = config.logConfig;
    this._rules.internalValue = config.rules;
    this._subnetwork.internalValue = config.subnetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_network_tier - computed: true, optional: true, required: false
  private _autoNetworkTier?: string; 
  public get autoNetworkTier() {
    return this.getStringAttribute('auto_network_tier');
  }
  public set autoNetworkTier(value: string) {
    this._autoNetworkTier = value;
  }
  public resetAutoNetworkTier() {
    this._autoNetworkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNetworkTierInput() {
    return this._autoNetworkTier;
  }

  // drain_nat_ips - computed: false, optional: true, required: false
  private _drainNatIps?: string[]; 
  public get drainNatIps() {
    return cdktf.Fn.tolist(this.getListAttribute('drain_nat_ips'));
  }
  public set drainNatIps(value: string[]) {
    this._drainNatIps = value;
  }
  public resetDrainNatIps() {
    this._drainNatIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNatIpsInput() {
    return this._drainNatIps;
  }

  // enable_dynamic_port_allocation - computed: true, optional: true, required: false
  private _enableDynamicPortAllocation?: boolean | cdktf.IResolvable; 
  public get enableDynamicPortAllocation() {
    return this.getBooleanAttribute('enable_dynamic_port_allocation');
  }
  public set enableDynamicPortAllocation(value: boolean | cdktf.IResolvable) {
    this._enableDynamicPortAllocation = value;
  }
  public resetEnableDynamicPortAllocation() {
    this._enableDynamicPortAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicPortAllocationInput() {
    return this._enableDynamicPortAllocation;
  }

  // enable_endpoint_independent_mapping - computed: true, optional: true, required: false
  private _enableEndpointIndependentMapping?: boolean | cdktf.IResolvable; 
  public get enableEndpointIndependentMapping() {
    return this.getBooleanAttribute('enable_endpoint_independent_mapping');
  }
  public set enableEndpointIndependentMapping(value: boolean | cdktf.IResolvable) {
    this._enableEndpointIndependentMapping = value;
  }
  public resetEnableEndpointIndependentMapping() {
    this._enableEndpointIndependentMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointIndependentMappingInput() {
    return this._enableEndpointIndependentMapping;
  }

  // endpoint_types - computed: true, optional: true, required: false
  private _endpointTypes?: string[]; 
  public get endpointTypes() {
    return this.getListAttribute('endpoint_types');
  }
  public set endpointTypes(value: string[]) {
    this._endpointTypes = value;
  }
  public resetEndpointTypes() {
    this._endpointTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypesInput() {
    return this._endpointTypes;
  }

  // icmp_idle_timeout_sec - computed: false, optional: true, required: false
  private _icmpIdleTimeoutSec?: number; 
  public get icmpIdleTimeoutSec() {
    return this.getNumberAttribute('icmp_idle_timeout_sec');
  }
  public set icmpIdleTimeoutSec(value: number) {
    this._icmpIdleTimeoutSec = value;
  }
  public resetIcmpIdleTimeoutSec() {
    this._icmpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpIdleTimeoutSecInput() {
    return this._icmpIdleTimeoutSec;
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

  // max_ports_per_vm - computed: false, optional: true, required: false
  private _maxPortsPerVm?: number; 
  public get maxPortsPerVm() {
    return this.getNumberAttribute('max_ports_per_vm');
  }
  public set maxPortsPerVm(value: number) {
    this._maxPortsPerVm = value;
  }
  public resetMaxPortsPerVm() {
    this._maxPortsPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortsPerVmInput() {
    return this._maxPortsPerVm;
  }

  // min_ports_per_vm - computed: true, optional: true, required: false
  private _minPortsPerVm?: number; 
  public get minPortsPerVm() {
    return this.getNumberAttribute('min_ports_per_vm');
  }
  public set minPortsPerVm(value: number) {
    this._minPortsPerVm = value;
  }
  public resetMinPortsPerVm() {
    this._minPortsPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortsPerVmInput() {
    return this._minPortsPerVm;
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

  // nat_ip_allocate_option - computed: false, optional: true, required: false
  private _natIpAllocateOption?: string; 
  public get natIpAllocateOption() {
    return this.getStringAttribute('nat_ip_allocate_option');
  }
  public set natIpAllocateOption(value: string) {
    this._natIpAllocateOption = value;
  }
  public resetNatIpAllocateOption() {
    this._natIpAllocateOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAllocateOptionInput() {
    return this._natIpAllocateOption;
  }

  // nat_ips - computed: false, optional: true, required: false
  private _natIps?: string[]; 
  public get natIps() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_ips'));
  }
  public set natIps(value: string[]) {
    this._natIps = value;
  }
  public resetNatIps() {
    this._natIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpsInput() {
    return this._natIps;
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

  // router - computed: false, optional: false, required: true
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // source_subnetwork_ip_ranges_to_nat - computed: false, optional: false, required: true
  private _sourceSubnetworkIpRangesToNat?: string; 
  public get sourceSubnetworkIpRangesToNat() {
    return this.getStringAttribute('source_subnetwork_ip_ranges_to_nat');
  }
  public set sourceSubnetworkIpRangesToNat(value: string) {
    this._sourceSubnetworkIpRangesToNat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSubnetworkIpRangesToNatInput() {
    return this._sourceSubnetworkIpRangesToNat;
  }

  // tcp_established_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpEstablishedIdleTimeoutSec?: number; 
  public get tcpEstablishedIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_established_idle_timeout_sec');
  }
  public set tcpEstablishedIdleTimeoutSec(value: number) {
    this._tcpEstablishedIdleTimeoutSec = value;
  }
  public resetTcpEstablishedIdleTimeoutSec() {
    this._tcpEstablishedIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedIdleTimeoutSecInput() {
    return this._tcpEstablishedIdleTimeoutSec;
  }

  // tcp_time_wait_timeout_sec - computed: false, optional: true, required: false
  private _tcpTimeWaitTimeoutSec?: number; 
  public get tcpTimeWaitTimeoutSec() {
    return this.getNumberAttribute('tcp_time_wait_timeout_sec');
  }
  public set tcpTimeWaitTimeoutSec(value: number) {
    this._tcpTimeWaitTimeoutSec = value;
  }
  public resetTcpTimeWaitTimeoutSec() {
    this._tcpTimeWaitTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeWaitTimeoutSecInput() {
    return this._tcpTimeWaitTimeoutSec;
  }

  // tcp_transitory_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpTransitoryIdleTimeoutSec?: number; 
  public get tcpTransitoryIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_transitory_idle_timeout_sec');
  }
  public set tcpTransitoryIdleTimeoutSec(value: number) {
    this._tcpTransitoryIdleTimeoutSec = value;
  }
  public resetTcpTransitoryIdleTimeoutSec() {
    this._tcpTransitoryIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTransitoryIdleTimeoutSecInput() {
    return this._tcpTransitoryIdleTimeoutSec;
  }

  // udp_idle_timeout_sec - computed: false, optional: true, required: false
  private _udpIdleTimeoutSec?: number; 
  public get udpIdleTimeoutSec() {
    return this.getNumberAttribute('udp_idle_timeout_sec');
  }
  public set udpIdleTimeoutSec(value: number) {
    this._udpIdleTimeoutSec = value;
  }
  public resetUdpIdleTimeoutSec() {
    this._udpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutSecInput() {
    return this._udpIdleTimeoutSec;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeRouterNatLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeRouterNatLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ComputeRouterNatRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ComputeRouterNatRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork = new ComputeRouterNatSubnetworkList(this, "subnetwork", true);
  public get subnetwork() {
    return this._subnetwork;
  }
  public putSubnetwork(value: ComputeRouterNatSubnetwork[] | cdktf.IResolvable) {
    this._subnetwork.internalValue = value;
  }
  public resetSubnetwork() {
    this._subnetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRouterNatTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRouterNatTimeouts) {
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
      auto_network_tier: cdktf.stringToTerraform(this._autoNetworkTier),
      drain_nat_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._drainNatIps),
      enable_dynamic_port_allocation: cdktf.booleanToTerraform(this._enableDynamicPortAllocation),
      enable_endpoint_independent_mapping: cdktf.booleanToTerraform(this._enableEndpointIndependentMapping),
      endpoint_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointTypes),
      icmp_idle_timeout_sec: cdktf.numberToTerraform(this._icmpIdleTimeoutSec),
      id: cdktf.stringToTerraform(this._id),
      max_ports_per_vm: cdktf.numberToTerraform(this._maxPortsPerVm),
      min_ports_per_vm: cdktf.numberToTerraform(this._minPortsPerVm),
      name: cdktf.stringToTerraform(this._name),
      nat_ip_allocate_option: cdktf.stringToTerraform(this._natIpAllocateOption),
      nat_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIps),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      source_subnetwork_ip_ranges_to_nat: cdktf.stringToTerraform(this._sourceSubnetworkIpRangesToNat),
      tcp_established_idle_timeout_sec: cdktf.numberToTerraform(this._tcpEstablishedIdleTimeoutSec),
      tcp_time_wait_timeout_sec: cdktf.numberToTerraform(this._tcpTimeWaitTimeoutSec),
      tcp_transitory_idle_timeout_sec: cdktf.numberToTerraform(this._tcpTransitoryIdleTimeoutSec),
      udp_idle_timeout_sec: cdktf.numberToTerraform(this._udpIdleTimeoutSec),
      log_config: computeRouterNatLogConfigToTerraform(this._logConfig.internalValue),
      rules: cdktf.listMapper(computeRouterNatRulesToTerraform, true)(this._rules.internalValue),
      subnetwork: cdktf.listMapper(computeRouterNatSubnetworkToTerraform, true)(this._subnetwork.internalValue),
      timeouts: computeRouterNatTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_network_tier: {
        value: cdktf.stringToHclTerraform(this._autoNetworkTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drain_nat_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._drainNatIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_dynamic_port_allocation: {
        value: cdktf.booleanToHclTerraform(this._enableDynamicPortAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_endpoint_independent_mapping: {
        value: cdktf.booleanToHclTerraform(this._enableEndpointIndependentMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      icmp_idle_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._icmpIdleTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ports_per_vm: {
        value: cdktf.numberToHclTerraform(this._maxPortsPerVm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ports_per_vm: {
        value: cdktf.numberToHclTerraform(this._minPortsPerVm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_allocate_option: {
        value: cdktf.stringToHclTerraform(this._natIpAllocateOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router: {
        value: cdktf.stringToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_subnetwork_ip_ranges_to_nat: {
        value: cdktf.stringToHclTerraform(this._sourceSubnetworkIpRangesToNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_established_idle_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._tcpEstablishedIdleTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_time_wait_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._tcpTimeWaitTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_transitory_idle_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._tcpTransitoryIdleTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_idle_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._udpIdleTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_config: {
        value: computeRouterNatLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterNatLogConfigList",
      },
      rules: {
        value: cdktf.listMapperHcl(computeRouterNatRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeRouterNatRulesList",
      },
      subnetwork: {
        value: cdktf.listMapperHcl(computeRouterNatSubnetworkToHclTerraform, true)(this._subnetwork.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeRouterNatSubnetworkList",
      },
      timeouts: {
        value: computeRouterNatTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRouterNatTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
