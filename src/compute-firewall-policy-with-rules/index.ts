/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeFirewallPolicyWithRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#id ComputeFirewallPolicyWithRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of this FirewallPolicy in the Cloud Resource Hierarchy.
  * Format: organizations/{organization_id} or folders/{folder_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#parent ComputeFirewallPolicyWithRules#parent}
  */
  readonly parent: string;
  /**
  * A textual name of the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#short_name ComputeFirewallPolicyWithRules#short_name}
  */
  readonly shortName: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#rule ComputeFirewallPolicyWithRules#rule}
  */
  readonly rule: ComputeFirewallPolicyWithRulesRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#timeouts ComputeFirewallPolicyWithRules#timeouts}
  */
  readonly timeouts?: ComputeFirewallPolicyWithRulesTimeouts;
}
export interface ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config {
}

export function computeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigToTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigToHclTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getListAttribute('ports');
  }
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList extends cdktf.ComplexList {

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
  public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference {
    return new ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag {
}

export function computeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagToTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagToHclTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList extends cdktf.ComplexList {

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
  public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference {
    return new ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesPredefinedRulesMatch {
}

export function computeFirewallPolicyWithRulesPredefinedRulesMatchToTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeFirewallPolicyWithRulesPredefinedRulesMatchToHclTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesPredefinedRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesPredefinedRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_address_groups - computed: true, optional: false, required: false
  public get destAddressGroups() {
    return this.getListAttribute('dest_address_groups');
  }

  // dest_fqdns - computed: true, optional: false, required: false
  public get destFqdns() {
    return this.getListAttribute('dest_fqdns');
  }

  // dest_ip_ranges - computed: true, optional: false, required: false
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }

  // dest_region_codes - computed: true, optional: false, required: false
  public get destRegionCodes() {
    return this.getListAttribute('dest_region_codes');
  }

  // dest_threat_intelligences - computed: true, optional: false, required: false
  public get destThreatIntelligences() {
    return this.getListAttribute('dest_threat_intelligences');
  }

  // layer4_config - computed: true, optional: false, required: false
  private _layer4Config = new ComputeFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(this, "layer4_config", false);
  public get layer4Config() {
    return this._layer4Config;
  }

  // src_address_groups - computed: true, optional: false, required: false
  public get srcAddressGroups() {
    return this.getListAttribute('src_address_groups');
  }

  // src_fqdns - computed: true, optional: false, required: false
  public get srcFqdns() {
    return this.getListAttribute('src_fqdns');
  }

  // src_ip_ranges - computed: true, optional: false, required: false
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }

  // src_region_codes - computed: true, optional: false, required: false
  public get srcRegionCodes() {
    return this.getListAttribute('src_region_codes');
  }

  // src_secure_tag - computed: true, optional: false, required: false
  private _srcSecureTag = new ComputeFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(this, "src_secure_tag", false);
  public get srcSecureTag() {
    return this._srcSecureTag;
  }

  // src_threat_intelligences - computed: true, optional: false, required: false
  public get srcThreatIntelligences() {
    return this.getListAttribute('src_threat_intelligences');
  }
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesMatchList extends cdktf.ComplexList {

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
  public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference {
    return new ComputeFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag {
}

export function computeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagToTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagToHclTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList extends cdktf.ComplexList {

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
  public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference {
    return new ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesPredefinedRules {
}

export function computeFirewallPolicyWithRulesPredefinedRulesToTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeFirewallPolicyWithRulesPredefinedRulesToHclTerraform(struct?: ComputeFirewallPolicyWithRulesPredefinedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesPredefinedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesPredefinedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // enable_logging - computed: true, optional: false, required: false
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }

  // match - computed: true, optional: false, required: false
  private _match = new ComputeFirewallPolicyWithRulesPredefinedRulesMatchList(this, "match", false);
  public get match() {
    return this._match;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // security_profile_group - computed: true, optional: false, required: false
  public get securityProfileGroup() {
    return this.getStringAttribute('security_profile_group');
  }

  // target_resources - computed: true, optional: false, required: false
  public get targetResources() {
    return this.getListAttribute('target_resources');
  }

  // target_secure_tag - computed: true, optional: false, required: false
  private _targetSecureTag = new ComputeFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(this, "target_secure_tag", false);
  public get targetSecureTag() {
    return this._targetSecureTag;
  }

  // target_service_accounts - computed: true, optional: false, required: false
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }

  // tls_inspect - computed: true, optional: false, required: false
  public get tlsInspect() {
    return this.getBooleanAttribute('tls_inspect');
  }
}

export class ComputeFirewallPolicyWithRulesPredefinedRulesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference {
    return new ComputeFirewallPolicyWithRulesPredefinedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesRuleMatchLayer4Config {
  /**
  * The IP protocol to which this rule applies. The protocol
  * type is required when creating a firewall rule.
  * This value can either be one of the following well
  * known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
  * or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#ip_protocol ComputeFirewallPolicyWithRules#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field
  * is only applicable for UDP or TCP protocol. Each entry must be
  * either an integer or a range. If not specified, this rule
  * applies to connections through any port.
  * Example inputs include: ["22"], ["80","443"], and
  * ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#ports ComputeFirewallPolicyWithRules#ports}
  */
  readonly ports?: string[];
}

export function computeFirewallPolicyWithRulesRuleMatchLayer4ConfigToTerraform(struct?: ComputeFirewallPolicyWithRulesRuleMatchLayer4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function computeFirewallPolicyWithRulesRuleMatchLayer4ConfigToHclTerraform(struct?: ComputeFirewallPolicyWithRulesRuleMatchLayer4Config | cdktf.IResolvable): any {
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

export class ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeFirewallPolicyWithRulesRuleMatchLayer4Config | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeFirewallPolicyWithRulesRuleMatchLayer4Config | cdktf.IResolvable | undefined) {
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

export class ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList extends cdktf.ComplexList {
  public internalValue? : ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[] | cdktf.IResolvable

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
  public get(index: number): ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference {
    return new ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag {
  /**
  * Name of the secure tag, created with TagManager's TagValue API.
  * @pattern tagValues/[0-9]+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#name ComputeFirewallPolicyWithRules#name}
  */
  readonly name?: string;
}

export function computeFirewallPolicyWithRulesRuleMatchSrcSecureTagToTerraform(struct?: ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeFirewallPolicyWithRulesRuleMatchSrcSecureTagToHclTerraform(struct?: ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktf.IResolvable): any {
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

export class ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

export class ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList extends cdktf.ComplexList {
  public internalValue? : ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[] | cdktf.IResolvable

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
  public get(index: number): ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference {
    return new ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesRuleMatch {
  /**
  * Address groups which should be matched against the traffic destination.
  * Maximum number of destination address groups is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#dest_address_groups ComputeFirewallPolicyWithRules#dest_address_groups}
  */
  readonly destAddressGroups?: string[];
  /**
  * Fully Qualified Domain Name (FQDN) which should be matched against
  * traffic destination. Maximum number of destination fqdn allowed is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#dest_fqdns ComputeFirewallPolicyWithRules#dest_fqdns}
  */
  readonly destFqdns?: string[];
  /**
  * Destination IP address range in CIDR format. Required for
  * EGRESS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#dest_ip_ranges ComputeFirewallPolicyWithRules#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Region codes whose IP addresses will be used to match for destination
  * of traffic. Should be specified as 2 letter country code defined as per
  * ISO 3166 alpha-2 country codes. ex."US"
  * Maximum number of destination region codes allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#dest_region_codes ComputeFirewallPolicyWithRules#dest_region_codes}
  */
  readonly destRegionCodes?: string[];
  /**
  * Names of Network Threat Intelligence lists.
  * The IPs in these lists will be matched against traffic destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#dest_threat_intelligences ComputeFirewallPolicyWithRules#dest_threat_intelligences}
  */
  readonly destThreatIntelligences?: string[];
  /**
  * Address groups which should be matched against the traffic source.
  * Maximum number of source address groups is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#src_address_groups ComputeFirewallPolicyWithRules#src_address_groups}
  */
  readonly srcAddressGroups?: string[];
  /**
  * Fully Qualified Domain Name (FQDN) which should be matched against
  * traffic source. Maximum number of source fqdn allowed is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#src_fqdns ComputeFirewallPolicyWithRules#src_fqdns}
  */
  readonly srcFqdns?: string[];
  /**
  * Source IP address range in CIDR format. Required for
  * INGRESS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#src_ip_ranges ComputeFirewallPolicyWithRules#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * Region codes whose IP addresses will be used to match for source
  * of traffic. Should be specified as 2 letter country code defined as per
  * ISO 3166 alpha-2 country codes. ex."US"
  * Maximum number of source region codes allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#src_region_codes ComputeFirewallPolicyWithRules#src_region_codes}
  */
  readonly srcRegionCodes?: string[];
  /**
  * Names of Network Threat Intelligence lists.
  * The IPs in these lists will be matched against traffic source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#src_threat_intelligences ComputeFirewallPolicyWithRules#src_threat_intelligences}
  */
  readonly srcThreatIntelligences?: string[];
  /**
  * layer4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#layer4_config ComputeFirewallPolicyWithRules#layer4_config}
  */
  readonly layer4Config: ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[] | cdktf.IResolvable;
  /**
  * src_secure_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#src_secure_tag ComputeFirewallPolicyWithRules#src_secure_tag}
  */
  readonly srcSecureTag?: ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[] | cdktf.IResolvable;
}

export function computeFirewallPolicyWithRulesRuleMatchToTerraform(struct?: ComputeFirewallPolicyWithRulesRuleMatchOutputReference | ComputeFirewallPolicyWithRulesRuleMatch): any {
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
    layer4_config: cdktf.listMapper(computeFirewallPolicyWithRulesRuleMatchLayer4ConfigToTerraform, true)(struct!.layer4Config),
    src_secure_tag: cdktf.listMapper(computeFirewallPolicyWithRulesRuleMatchSrcSecureTagToTerraform, true)(struct!.srcSecureTag),
  }
}


export function computeFirewallPolicyWithRulesRuleMatchToHclTerraform(struct?: ComputeFirewallPolicyWithRulesRuleMatchOutputReference | ComputeFirewallPolicyWithRulesRuleMatch): any {
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
    layer4_config: {
      value: cdktf.listMapperHcl(computeFirewallPolicyWithRulesRuleMatchLayer4ConfigToHclTerraform, true)(struct!.layer4Config),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList",
    },
    src_secure_tag: {
      value: cdktf.listMapperHcl(computeFirewallPolicyWithRulesRuleMatchSrcSecureTagToHclTerraform, true)(struct!.srcSecureTag),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeFirewallPolicyWithRulesRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesRuleMatch | undefined {
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
    if (this._layer4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Config = this._layer4Config?.internalValue;
    }
    if (this._srcSecureTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSecureTag = this._srcSecureTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesRuleMatch | undefined) {
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
      this._layer4Config.internalValue = undefined;
      this._srcSecureTag.internalValue = undefined;
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
      this._layer4Config.internalValue = value.layer4Config;
      this._srcSecureTag.internalValue = value.srcSecureTag;
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

  // layer4_config - computed: false, optional: false, required: true
  private _layer4Config = new ComputeFirewallPolicyWithRulesRuleMatchLayer4ConfigList(this, "layer4_config", false);
  public get layer4Config() {
    return this._layer4Config;
  }
  public putLayer4Config(value: ComputeFirewallPolicyWithRulesRuleMatchLayer4Config[] | cdktf.IResolvable) {
    this._layer4Config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigInput() {
    return this._layer4Config.internalValue;
  }

  // src_secure_tag - computed: false, optional: true, required: false
  private _srcSecureTag = new ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTagList(this, "src_secure_tag", false);
  public get srcSecureTag() {
    return this._srcSecureTag;
  }
  public putSrcSecureTag(value: ComputeFirewallPolicyWithRulesRuleMatchSrcSecureTag[] | cdktf.IResolvable) {
    this._srcSecureTag.internalValue = value;
  }
  public resetSrcSecureTag() {
    this._srcSecureTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSecureTagInput() {
    return this._srcSecureTag.internalValue;
  }
}
export interface ComputeFirewallPolicyWithRulesRuleTargetSecureTag {
  /**
  * Name of the secure tag, created with TagManager's TagValue API.
  * @pattern tagValues/[0-9]+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#name ComputeFirewallPolicyWithRules#name}
  */
  readonly name?: string;
}

export function computeFirewallPolicyWithRulesRuleTargetSecureTagToTerraform(struct?: ComputeFirewallPolicyWithRulesRuleTargetSecureTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeFirewallPolicyWithRulesRuleTargetSecureTagToHclTerraform(struct?: ComputeFirewallPolicyWithRulesRuleTargetSecureTag | cdktf.IResolvable): any {
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

export class ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeFirewallPolicyWithRulesRuleTargetSecureTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeFirewallPolicyWithRulesRuleTargetSecureTag | cdktf.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

export class ComputeFirewallPolicyWithRulesRuleTargetSecureTagList extends cdktf.ComplexList {
  public internalValue? : ComputeFirewallPolicyWithRulesRuleTargetSecureTag[] | cdktf.IResolvable

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
  public get(index: number): ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference {
    return new ComputeFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesRule {
  /**
  * The Action to perform when the client connection triggers the rule. Can currently be either
  * "allow", "deny", "apply_security_profile_group" or "goto_next".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#action ComputeFirewallPolicyWithRules#action}
  */
  readonly action: string;
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#description ComputeFirewallPolicyWithRules#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#direction ComputeFirewallPolicyWithRules#direction}
  */
  readonly direction?: string;
  /**
  * Denotes whether the firewall policy rule is disabled. When set to true,
  * the firewall policy rule is not enforced and traffic behaves as if it did
  * not exist. If this is unspecified, the firewall policy rule will be
  * enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#disabled ComputeFirewallPolicyWithRules#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Denotes whether to enable logging for a particular rule.
  * If logging is enabled, logs will be exported to the
  * configured export destination in Stackdriver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#enable_logging ComputeFirewallPolicyWithRules#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a value
  * between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
  * highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#priority ComputeFirewallPolicyWithRules#priority}
  */
  readonly priority: number;
  /**
  * An optional name for the rule. This field is not a unique identifier
  * and can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#rule_name ComputeFirewallPolicyWithRules#rule_name}
  */
  readonly ruleName?: string;
  /**
  * A fully-qualified URL of a SecurityProfile resource instance.
  * Example:
  * https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
  * Must be specified if action is 'apply_security_profile_group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#security_profile_group ComputeFirewallPolicyWithRules#security_profile_group}
  */
  readonly securityProfileGroup?: string;
  /**
  * A list of network resource URLs to which this rule applies.
  * This field allows you to control which network's VMs get
  * this rule. If this field is left blank, all VMs
  * within the organization will receive the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#target_resources ComputeFirewallPolicyWithRules#target_resources}
  */
  readonly targetResources?: string[];
  /**
  * A list of service accounts indicating the sets of
  * instances that are applied with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#target_service_accounts ComputeFirewallPolicyWithRules#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * Boolean flag indicating if the traffic should be TLS decrypted.
  * It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#tls_inspect ComputeFirewallPolicyWithRules#tls_inspect}
  */
  readonly tlsInspect?: boolean | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#match ComputeFirewallPolicyWithRules#match}
  */
  readonly match: ComputeFirewallPolicyWithRulesRuleMatch;
  /**
  * target_secure_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#target_secure_tag ComputeFirewallPolicyWithRules#target_secure_tag}
  */
  readonly targetSecureTag?: ComputeFirewallPolicyWithRulesRuleTargetSecureTag[] | cdktf.IResolvable;
}

export function computeFirewallPolicyWithRulesRuleToTerraform(struct?: ComputeFirewallPolicyWithRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    direction: cdktf.stringToTerraform(struct!.direction),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    security_profile_group: cdktf.stringToTerraform(struct!.securityProfileGroup),
    target_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetResources),
    target_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetServiceAccounts),
    tls_inspect: cdktf.booleanToTerraform(struct!.tlsInspect),
    match: computeFirewallPolicyWithRulesRuleMatchToTerraform(struct!.match),
    target_secure_tag: cdktf.listMapper(computeFirewallPolicyWithRulesRuleTargetSecureTagToTerraform, true)(struct!.targetSecureTag),
  }
}


export function computeFirewallPolicyWithRulesRuleToHclTerraform(struct?: ComputeFirewallPolicyWithRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profile_group: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetResources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetServiceAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_inspect: {
      value: cdktf.booleanToHclTerraform(struct!.tlsInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: computeFirewallPolicyWithRulesRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeFirewallPolicyWithRulesRuleMatchList",
    },
    target_secure_tag: {
      value: cdktf.listMapperHcl(computeFirewallPolicyWithRulesRuleTargetSecureTagToHclTerraform, true)(struct!.targetSecureTag),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeFirewallPolicyWithRulesRuleTargetSecureTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeFirewallPolicyWithRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeFirewallPolicyWithRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._securityProfileGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileGroup = this._securityProfileGroup;
    }
    if (this._targetResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResources = this._targetResources;
    }
    if (this._targetServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetServiceAccounts = this._targetServiceAccounts;
    }
    if (this._tlsInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInspect = this._tlsInspect;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._targetSecureTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSecureTag = this._targetSecureTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallPolicyWithRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._direction = undefined;
      this._disabled = undefined;
      this._enableLogging = undefined;
      this._priority = undefined;
      this._ruleName = undefined;
      this._securityProfileGroup = undefined;
      this._targetResources = undefined;
      this._targetServiceAccounts = undefined;
      this._tlsInspect = undefined;
      this._match.internalValue = undefined;
      this._targetSecureTag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._direction = value.direction;
      this._disabled = value.disabled;
      this._enableLogging = value.enableLogging;
      this._priority = value.priority;
      this._ruleName = value.ruleName;
      this._securityProfileGroup = value.securityProfileGroup;
      this._targetResources = value.targetResources;
      this._targetServiceAccounts = value.targetServiceAccounts;
      this._tlsInspect = value.tlsInspect;
      this._match.internalValue = value.match;
      this._targetSecureTag.internalValue = value.targetSecureTag;
    }
  }

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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
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

  // target_resources - computed: false, optional: true, required: false
  private _targetResources?: string[]; 
  public get targetResources() {
    return this.getListAttribute('target_resources');
  }
  public set targetResources(value: string[]) {
    this._targetResources = value;
  }
  public resetTargetResources() {
    this._targetResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourcesInput() {
    return this._targetResources;
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
  private _match = new ComputeFirewallPolicyWithRulesRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ComputeFirewallPolicyWithRulesRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // target_secure_tag - computed: false, optional: true, required: false
  private _targetSecureTag = new ComputeFirewallPolicyWithRulesRuleTargetSecureTagList(this, "target_secure_tag", false);
  public get targetSecureTag() {
    return this._targetSecureTag;
  }
  public putTargetSecureTag(value: ComputeFirewallPolicyWithRulesRuleTargetSecureTag[] | cdktf.IResolvable) {
    this._targetSecureTag.internalValue = value;
  }
  public resetTargetSecureTag() {
    this._targetSecureTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecureTagInput() {
    return this._targetSecureTag.internalValue;
  }
}

export class ComputeFirewallPolicyWithRulesRuleList extends cdktf.ComplexList {
  public internalValue? : ComputeFirewallPolicyWithRulesRule[] | cdktf.IResolvable

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
  public get(index: number): ComputeFirewallPolicyWithRulesRuleOutputReference {
    return new ComputeFirewallPolicyWithRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallPolicyWithRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#create ComputeFirewallPolicyWithRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#delete ComputeFirewallPolicyWithRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#update ComputeFirewallPolicyWithRules#update}
  */
  readonly update?: string;
}

export function computeFirewallPolicyWithRulesTimeoutsToTerraform(struct?: ComputeFirewallPolicyWithRulesTimeouts | cdktf.IResolvable): any {
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


export function computeFirewallPolicyWithRulesTimeoutsToHclTerraform(struct?: ComputeFirewallPolicyWithRulesTimeouts | cdktf.IResolvable): any {
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

export class ComputeFirewallPolicyWithRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeFirewallPolicyWithRulesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeFirewallPolicyWithRulesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules google_compute_firewall_policy_with_rules}
*/
export class ComputeFirewallPolicyWithRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_firewall_policy_with_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeFirewallPolicyWithRules to import
  * @param importFromId The id of the existing ComputeFirewallPolicyWithRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeFirewallPolicyWithRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_firewall_policy_with_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/compute_firewall_policy_with_rules google_compute_firewall_policy_with_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFirewallPolicyWithRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeFirewallPolicyWithRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_firewall_policy_with_rules',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.3',
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
    this._description = config.description;
    this._id = config.id;
    this._parent = config.parent;
    this._shortName = config.shortName;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // predefined_rules - computed: true, optional: false, required: false
  private _predefinedRules = new ComputeFirewallPolicyWithRulesPredefinedRulesList(this, "predefined_rules", false);
  public get predefinedRules() {
    return this._predefinedRules;
  }

  // rule_tuple_count - computed: true, optional: false, required: false
  public get ruleTupleCount() {
    return this.getNumberAttribute('rule_tuple_count');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ComputeFirewallPolicyWithRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ComputeFirewallPolicyWithRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeFirewallPolicyWithRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeFirewallPolicyWithRulesTimeouts) {
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
      parent: cdktf.stringToTerraform(this._parent),
      short_name: cdktf.stringToTerraform(this._shortName),
      rule: cdktf.listMapper(computeFirewallPolicyWithRulesRuleToTerraform, true)(this._rule.internalValue),
      timeouts: computeFirewallPolicyWithRulesTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(computeFirewallPolicyWithRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeFirewallPolicyWithRulesRuleList",
      },
      timeouts: {
        value: computeFirewallPolicyWithRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeFirewallPolicyWithRulesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
