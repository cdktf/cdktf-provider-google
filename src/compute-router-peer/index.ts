/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-specified flag to indicate which mode to use for advertisement.
  * Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#advertise_mode ComputeRouterPeer#advertise_mode}
  */
  readonly advertiseMode?: string;
  /**
  * User-specified list of prefix groups to advertise in custom
  * mode, which currently supports the following option:
  * 
  * * 'ALL_SUBNETS': Advertises all of the router's own VPC subnets.
  * This excludes any routes learned for subnets that use VPC Network
  * Peering.
  * 
  * 
  * Note that this field can only be populated if advertiseMode is 'CUSTOM'
  * and overrides the list defined for the router (in the "bgp" message).
  * These groups are advertised in addition to any specified prefixes.
  * Leave this field blank to advertise no custom groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#advertised_groups ComputeRouterPeer#advertised_groups}
  */
  readonly advertisedGroups?: string[];
  /**
  * The priority of routes advertised to this BGP peer.
  * Where there is more than one matching route of maximum
  * length, the routes with the lowest priority value win.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#advertised_route_priority ComputeRouterPeer#advertised_route_priority}
  */
  readonly advertisedRoutePriority?: number;
  /**
  * The user-defined custom learned route priority for a BGP session.
  * This value is applied to all custom learned route ranges for the session. You can choose a value
  * from 0 to 65335. If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#custom_learned_route_priority ComputeRouterPeer#custom_learned_route_priority}
  */
  readonly customLearnedRoutePriority?: number;
  /**
  * The status of the BGP peer connection. If set to false, any active session
  * with the peer is terminated and all associated routing information is removed.
  * If set to true, the peer connection can be established with routing information.
  * The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#enable ComputeRouterPeer#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#enable_ipv4 ComputeRouterPeer#enable_ipv4}
  */
  readonly enableIpv4?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#enable_ipv6 ComputeRouterPeer#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * routers.list of export policies applied to this peer, in the order they must be evaluated. 
  * The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#export_policies ComputeRouterPeer#export_policies}
  */
  readonly exportPolicies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#id ComputeRouterPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * routers.list of import policies applied to this peer, in the order they must be evaluated. 
  * The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#import_policies ComputeRouterPeer#import_policies}
  */
  readonly importPolicies?: string[];
  /**
  * Name of the interface the BGP peer is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#interface ComputeRouterPeer#interface}
  */
  readonly interface: string;
  /**
  * IP address of the interface inside Google Cloud Platform.
  * Only IPv4 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#ip_address ComputeRouterPeer#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPv4 address of the interface inside Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#ipv4_nexthop_address ComputeRouterPeer#ipv4_nexthop_address}
  */
  readonly ipv4NexthopAddress?: string;
  /**
  * IPv6 address of the interface inside Google Cloud Platform.
  * The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
  * If you do not specify the next hop addresses, Google Cloud automatically
  * assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#ipv6_nexthop_address ComputeRouterPeer#ipv6_nexthop_address}
  */
  readonly ipv6NexthopAddress?: string;
  /**
  * Name of this BGP peer. The name must be 1-63 characters long,
  * and comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
  * means the first character must be a lowercase letter, and all
  * following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#name ComputeRouterPeer#name}
  */
  readonly name: string;
  /**
  * Peer BGP Autonomous System Number (ASN).
  * Each BGP interface may use a different value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#peer_asn ComputeRouterPeer#peer_asn}
  */
  readonly peerAsn: number;
  /**
  * IP address of the BGP interface outside Google Cloud Platform.
  * Only IPv4 is supported. Required if 'ip_address' is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#peer_ip_address ComputeRouterPeer#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * IPv4 address of the BGP interface outside Google Cloud Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#peer_ipv4_nexthop_address ComputeRouterPeer#peer_ipv4_nexthop_address}
  */
  readonly peerIpv4NexthopAddress?: string;
  /**
  * IPv6 address of the BGP interface outside Google Cloud Platform.
  * The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
  * If you do not specify the next hop addresses, Google Cloud automatically
  * assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#peer_ipv6_nexthop_address ComputeRouterPeer#peer_ipv6_nexthop_address}
  */
  readonly peerIpv6NexthopAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#project ComputeRouterPeer#project}
  */
  readonly project?: string;
  /**
  * Region where the router and BgpPeer reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#region ComputeRouterPeer#region}
  */
  readonly region?: string;
  /**
  * The name of the Cloud Router in which this BgpPeer will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#router ComputeRouterPeer#router}
  */
  readonly router: string;
  /**
  * The URI of the VM instance that is used as third-party router appliances
  * such as Next Gen Firewalls, Virtual Routers, or Router Appliances.
  * The VM instance must be located in zones contained in the same region as
  * this Cloud Router. The VM instance is the peer side of the BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#router_appliance_instance ComputeRouterPeer#router_appliance_instance}
  */
  readonly routerApplianceInstance?: string;
  /**
  * Force the advertised_route_priority to be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#zero_advertised_route_priority ComputeRouterPeer#zero_advertised_route_priority}
  */
  readonly zeroAdvertisedRoutePriority?: boolean | cdktf.IResolvable;
  /**
  * Force the custom_learned_route_priority to be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#zero_custom_learned_route_priority ComputeRouterPeer#zero_custom_learned_route_priority}
  */
  readonly zeroCustomLearnedRoutePriority?: boolean | cdktf.IResolvable;
  /**
  * advertised_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#advertised_ip_ranges ComputeRouterPeer#advertised_ip_ranges}
  */
  readonly advertisedIpRanges?: ComputeRouterPeerAdvertisedIpRanges[] | cdktf.IResolvable;
  /**
  * bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#bfd ComputeRouterPeer#bfd}
  */
  readonly bfd?: ComputeRouterPeerBfd;
  /**
  * custom_learned_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#custom_learned_ip_ranges ComputeRouterPeer#custom_learned_ip_ranges}
  */
  readonly customLearnedIpRanges?: ComputeRouterPeerCustomLearnedIpRanges[] | cdktf.IResolvable;
  /**
  * md5_authentication_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#md5_authentication_key ComputeRouterPeer#md5_authentication_key}
  */
  readonly md5AuthenticationKey?: ComputeRouterPeerMd5AuthenticationKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#timeouts ComputeRouterPeer#timeouts}
  */
  readonly timeouts?: ComputeRouterPeerTimeouts;
}
export interface ComputeRouterPeerAdvertisedIpRanges {
  /**
  * User-specified description for the IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#description ComputeRouterPeer#description}
  */
  readonly description?: string;
  /**
  * The IP range to advertise. The value must be a
  * CIDR-formatted string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#range ComputeRouterPeer#range}
  */
  readonly range: string;
}

export function computeRouterPeerAdvertisedIpRangesToTerraform(struct?: ComputeRouterPeerAdvertisedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function computeRouterPeerAdvertisedIpRangesToHclTerraform(struct?: ComputeRouterPeerAdvertisedIpRanges | cdktf.IResolvable): any {
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
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterPeerAdvertisedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRouterPeerAdvertisedIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterPeerAdvertisedIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._range = value.range;
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

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class ComputeRouterPeerAdvertisedIpRangesList extends cdktf.ComplexList {
  public internalValue? : ComputeRouterPeerAdvertisedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ComputeRouterPeerAdvertisedIpRangesOutputReference {
    return new ComputeRouterPeerAdvertisedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRouterPeerBfd {
  /**
  * The minimum interval, in milliseconds, between BFD control packets
  * received from the peer router. The actual value is negotiated
  * between the two routers and is equal to the greater of this value
  * and the transmit interval of the other router. If set, this value
  * must be between 1000 and 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#min_receive_interval ComputeRouterPeer#min_receive_interval}
  */
  readonly minReceiveInterval?: number;
  /**
  * The minimum interval, in milliseconds, between BFD control packets
  * transmitted to the peer router. The actual value is negotiated
  * between the two routers and is equal to the greater of this value
  * and the corresponding receive interval of the other router. If set,
  * this value must be between 1000 and 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#min_transmit_interval ComputeRouterPeer#min_transmit_interval}
  */
  readonly minTransmitInterval?: number;
  /**
  * The number of consecutive BFD packets that must be missed before
  * BFD declares that a peer is unavailable. If set, the value must
  * be a value between 5 and 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#multiplier ComputeRouterPeer#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The BFD session initialization mode for this BGP peer.
  * If set to 'ACTIVE', the Cloud Router will initiate the BFD session
  * for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
  * for the peer router to initiate the BFD session for this BGP peer.
  * If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#session_initialization_mode ComputeRouterPeer#session_initialization_mode}
  */
  readonly sessionInitializationMode: string;
}

export function computeRouterPeerBfdToTerraform(struct?: ComputeRouterPeerBfdOutputReference | ComputeRouterPeerBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_receive_interval: cdktf.numberToTerraform(struct!.minReceiveInterval),
    min_transmit_interval: cdktf.numberToTerraform(struct!.minTransmitInterval),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    session_initialization_mode: cdktf.stringToTerraform(struct!.sessionInitializationMode),
  }
}


export function computeRouterPeerBfdToHclTerraform(struct?: ComputeRouterPeerBfdOutputReference | ComputeRouterPeerBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.minReceiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_transmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.minTransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_initialization_mode: {
      value: cdktf.stringToHclTerraform(struct!.sessionInitializationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterPeerBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterPeerBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minReceiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReceiveInterval = this._minReceiveInterval;
    }
    if (this._minTransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTransmitInterval = this._minTransmitInterval;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._sessionInitializationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionInitializationMode = this._sessionInitializationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterPeerBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minReceiveInterval = undefined;
      this._minTransmitInterval = undefined;
      this._multiplier = undefined;
      this._sessionInitializationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minReceiveInterval = value.minReceiveInterval;
      this._minTransmitInterval = value.minTransmitInterval;
      this._multiplier = value.multiplier;
      this._sessionInitializationMode = value.sessionInitializationMode;
    }
  }

  // min_receive_interval - computed: false, optional: true, required: false
  private _minReceiveInterval?: number; 
  public get minReceiveInterval() {
    return this.getNumberAttribute('min_receive_interval');
  }
  public set minReceiveInterval(value: number) {
    this._minReceiveInterval = value;
  }
  public resetMinReceiveInterval() {
    this._minReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReceiveIntervalInput() {
    return this._minReceiveInterval;
  }

  // min_transmit_interval - computed: false, optional: true, required: false
  private _minTransmitInterval?: number; 
  public get minTransmitInterval() {
    return this.getNumberAttribute('min_transmit_interval');
  }
  public set minTransmitInterval(value: number) {
    this._minTransmitInterval = value;
  }
  public resetMinTransmitInterval() {
    this._minTransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTransmitIntervalInput() {
    return this._minTransmitInterval;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // session_initialization_mode - computed: false, optional: false, required: true
  private _sessionInitializationMode?: string; 
  public get sessionInitializationMode() {
    return this.getStringAttribute('session_initialization_mode');
  }
  public set sessionInitializationMode(value: string) {
    this._sessionInitializationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInitializationModeInput() {
    return this._sessionInitializationMode;
  }
}
export interface ComputeRouterPeerCustomLearnedIpRanges {
  /**
  * The IP range to learn. The value must be a
  * CIDR-formatted string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#range ComputeRouterPeer#range}
  */
  readonly range: string;
}

export function computeRouterPeerCustomLearnedIpRangesToTerraform(struct?: ComputeRouterPeerCustomLearnedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function computeRouterPeerCustomLearnedIpRangesToHclTerraform(struct?: ComputeRouterPeerCustomLearnedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterPeerCustomLearnedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRouterPeerCustomLearnedIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterPeerCustomLearnedIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class ComputeRouterPeerCustomLearnedIpRangesList extends cdktf.ComplexList {
  public internalValue? : ComputeRouterPeerCustomLearnedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ComputeRouterPeerCustomLearnedIpRangesOutputReference {
    return new ComputeRouterPeerCustomLearnedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRouterPeerMd5AuthenticationKey {
  /**
  * Value of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#key ComputeRouterPeer#key}
  */
  readonly key: string;
  /**
  * [REQUIRED] Name used to identify the key.
  * Must be unique within a router. Must be referenced by exactly one bgpPeer. Must comply with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#name ComputeRouterPeer#name}
  */
  readonly name: string;
}

export function computeRouterPeerMd5AuthenticationKeyToTerraform(struct?: ComputeRouterPeerMd5AuthenticationKeyOutputReference | ComputeRouterPeerMd5AuthenticationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeRouterPeerMd5AuthenticationKeyToHclTerraform(struct?: ComputeRouterPeerMd5AuthenticationKeyOutputReference | ComputeRouterPeerMd5AuthenticationKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ComputeRouterPeerMd5AuthenticationKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterPeerMd5AuthenticationKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterPeerMd5AuthenticationKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}
export interface ComputeRouterPeerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#create ComputeRouterPeer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#delete ComputeRouterPeer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#update ComputeRouterPeer#update}
  */
  readonly update?: string;
}

export function computeRouterPeerTimeoutsToTerraform(struct?: ComputeRouterPeerTimeouts | cdktf.IResolvable): any {
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


export function computeRouterPeerTimeoutsToHclTerraform(struct?: ComputeRouterPeerTimeouts | cdktf.IResolvable): any {
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

export class ComputeRouterPeerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRouterPeerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRouterPeerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer google_compute_router_peer}
*/
export class ComputeRouterPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRouterPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRouterPeer to import
  * @param importFromId The id of the existing ComputeRouterPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRouterPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_router_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/compute_router_peer google_compute_router_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterPeerConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRouterPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_peer',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.30.0',
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
    this._advertiseMode = config.advertiseMode;
    this._advertisedGroups = config.advertisedGroups;
    this._advertisedRoutePriority = config.advertisedRoutePriority;
    this._customLearnedRoutePriority = config.customLearnedRoutePriority;
    this._enable = config.enable;
    this._enableIpv4 = config.enableIpv4;
    this._enableIpv6 = config.enableIpv6;
    this._exportPolicies = config.exportPolicies;
    this._id = config.id;
    this._importPolicies = config.importPolicies;
    this._interface = config.interface;
    this._ipAddress = config.ipAddress;
    this._ipv4NexthopAddress = config.ipv4NexthopAddress;
    this._ipv6NexthopAddress = config.ipv6NexthopAddress;
    this._name = config.name;
    this._peerAsn = config.peerAsn;
    this._peerIpAddress = config.peerIpAddress;
    this._peerIpv4NexthopAddress = config.peerIpv4NexthopAddress;
    this._peerIpv6NexthopAddress = config.peerIpv6NexthopAddress;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._routerApplianceInstance = config.routerApplianceInstance;
    this._zeroAdvertisedRoutePriority = config.zeroAdvertisedRoutePriority;
    this._zeroCustomLearnedRoutePriority = config.zeroCustomLearnedRoutePriority;
    this._advertisedIpRanges.internalValue = config.advertisedIpRanges;
    this._bfd.internalValue = config.bfd;
    this._customLearnedIpRanges.internalValue = config.customLearnedIpRanges;
    this._md5AuthenticationKey.internalValue = config.md5AuthenticationKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_mode - computed: false, optional: true, required: false
  private _advertiseMode?: string; 
  public get advertiseMode() {
    return this.getStringAttribute('advertise_mode');
  }
  public set advertiseMode(value: string) {
    this._advertiseMode = value;
  }
  public resetAdvertiseMode() {
    this._advertiseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseModeInput() {
    return this._advertiseMode;
  }

  // advertised_groups - computed: false, optional: true, required: false
  private _advertisedGroups?: string[]; 
  public get advertisedGroups() {
    return this.getListAttribute('advertised_groups');
  }
  public set advertisedGroups(value: string[]) {
    this._advertisedGroups = value;
  }
  public resetAdvertisedGroups() {
    this._advertisedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedGroupsInput() {
    return this._advertisedGroups;
  }

  // advertised_route_priority - computed: false, optional: true, required: false
  private _advertisedRoutePriority?: number; 
  public get advertisedRoutePriority() {
    return this.getNumberAttribute('advertised_route_priority');
  }
  public set advertisedRoutePriority(value: number) {
    this._advertisedRoutePriority = value;
  }
  public resetAdvertisedRoutePriority() {
    this._advertisedRoutePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedRoutePriorityInput() {
    return this._advertisedRoutePriority;
  }

  // custom_learned_route_priority - computed: false, optional: true, required: false
  private _customLearnedRoutePriority?: number; 
  public get customLearnedRoutePriority() {
    return this.getNumberAttribute('custom_learned_route_priority');
  }
  public set customLearnedRoutePriority(value: number) {
    this._customLearnedRoutePriority = value;
  }
  public resetCustomLearnedRoutePriority() {
    this._customLearnedRoutePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLearnedRoutePriorityInput() {
    return this._customLearnedRoutePriority;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_ipv4 - computed: true, optional: true, required: false
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  public resetEnableIpv4() {
    this._enableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // export_policies - computed: false, optional: true, required: false
  private _exportPolicies?: string[]; 
  public get exportPolicies() {
    return this.getListAttribute('export_policies');
  }
  public set exportPolicies(value: string[]) {
    this._exportPolicies = value;
  }
  public resetExportPolicies() {
    this._exportPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPoliciesInput() {
    return this._exportPolicies;
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

  // import_policies - computed: false, optional: true, required: false
  private _importPolicies?: string[]; 
  public get importPolicies() {
    return this.getListAttribute('import_policies');
  }
  public set importPolicies(value: string[]) {
    this._importPolicies = value;
  }
  public resetImportPolicies() {
    this._importPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPoliciesInput() {
    return this._importPolicies;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // ipv4_nexthop_address - computed: true, optional: true, required: false
  private _ipv4NexthopAddress?: string; 
  public get ipv4NexthopAddress() {
    return this.getStringAttribute('ipv4_nexthop_address');
  }
  public set ipv4NexthopAddress(value: string) {
    this._ipv4NexthopAddress = value;
  }
  public resetIpv4NexthopAddress() {
    this._ipv4NexthopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NexthopAddressInput() {
    return this._ipv4NexthopAddress;
  }

  // ipv6_nexthop_address - computed: true, optional: true, required: false
  private _ipv6NexthopAddress?: string; 
  public get ipv6NexthopAddress() {
    return this.getStringAttribute('ipv6_nexthop_address');
  }
  public set ipv6NexthopAddress(value: string) {
    this._ipv6NexthopAddress = value;
  }
  public resetIpv6NexthopAddress() {
    this._ipv6NexthopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NexthopAddressInput() {
    return this._ipv6NexthopAddress;
  }

  // is_advertised_route_priority_set - computed: true, optional: false, required: false
  public get isAdvertisedRoutePrioritySet() {
    return this.getBooleanAttribute('is_advertised_route_priority_set');
  }

  // is_custom_learned_priority_set - computed: true, optional: false, required: false
  public get isCustomLearnedPrioritySet() {
    return this.getBooleanAttribute('is_custom_learned_priority_set');
  }

  // management_type - computed: true, optional: false, required: false
  public get managementType() {
    return this.getStringAttribute('management_type');
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

  // peer_asn - computed: false, optional: false, required: true
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_ip_address - computed: true, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // peer_ipv4_nexthop_address - computed: true, optional: true, required: false
  private _peerIpv4NexthopAddress?: string; 
  public get peerIpv4NexthopAddress() {
    return this.getStringAttribute('peer_ipv4_nexthop_address');
  }
  public set peerIpv4NexthopAddress(value: string) {
    this._peerIpv4NexthopAddress = value;
  }
  public resetPeerIpv4NexthopAddress() {
    this._peerIpv4NexthopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpv4NexthopAddressInput() {
    return this._peerIpv4NexthopAddress;
  }

  // peer_ipv6_nexthop_address - computed: true, optional: true, required: false
  private _peerIpv6NexthopAddress?: string; 
  public get peerIpv6NexthopAddress() {
    return this.getStringAttribute('peer_ipv6_nexthop_address');
  }
  public set peerIpv6NexthopAddress(value: string) {
    this._peerIpv6NexthopAddress = value;
  }
  public resetPeerIpv6NexthopAddress() {
    this._peerIpv6NexthopAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpv6NexthopAddressInput() {
    return this._peerIpv6NexthopAddress;
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

  // router_appliance_instance - computed: false, optional: true, required: false
  private _routerApplianceInstance?: string; 
  public get routerApplianceInstance() {
    return this.getStringAttribute('router_appliance_instance');
  }
  public set routerApplianceInstance(value: string) {
    this._routerApplianceInstance = value;
  }
  public resetRouterApplianceInstance() {
    this._routerApplianceInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerApplianceInstanceInput() {
    return this._routerApplianceInstance;
  }

  // zero_advertised_route_priority - computed: false, optional: true, required: false
  private _zeroAdvertisedRoutePriority?: boolean | cdktf.IResolvable; 
  public get zeroAdvertisedRoutePriority() {
    return this.getBooleanAttribute('zero_advertised_route_priority');
  }
  public set zeroAdvertisedRoutePriority(value: boolean | cdktf.IResolvable) {
    this._zeroAdvertisedRoutePriority = value;
  }
  public resetZeroAdvertisedRoutePriority() {
    this._zeroAdvertisedRoutePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroAdvertisedRoutePriorityInput() {
    return this._zeroAdvertisedRoutePriority;
  }

  // zero_custom_learned_route_priority - computed: false, optional: true, required: false
  private _zeroCustomLearnedRoutePriority?: boolean | cdktf.IResolvable; 
  public get zeroCustomLearnedRoutePriority() {
    return this.getBooleanAttribute('zero_custom_learned_route_priority');
  }
  public set zeroCustomLearnedRoutePriority(value: boolean | cdktf.IResolvable) {
    this._zeroCustomLearnedRoutePriority = value;
  }
  public resetZeroCustomLearnedRoutePriority() {
    this._zeroCustomLearnedRoutePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroCustomLearnedRoutePriorityInput() {
    return this._zeroCustomLearnedRoutePriority;
  }

  // advertised_ip_ranges - computed: false, optional: true, required: false
  private _advertisedIpRanges = new ComputeRouterPeerAdvertisedIpRangesList(this, "advertised_ip_ranges", false);
  public get advertisedIpRanges() {
    return this._advertisedIpRanges;
  }
  public putAdvertisedIpRanges(value: ComputeRouterPeerAdvertisedIpRanges[] | cdktf.IResolvable) {
    this._advertisedIpRanges.internalValue = value;
  }
  public resetAdvertisedIpRanges() {
    this._advertisedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedIpRangesInput() {
    return this._advertisedIpRanges.internalValue;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new ComputeRouterPeerBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: ComputeRouterPeerBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // custom_learned_ip_ranges - computed: false, optional: true, required: false
  private _customLearnedIpRanges = new ComputeRouterPeerCustomLearnedIpRangesList(this, "custom_learned_ip_ranges", false);
  public get customLearnedIpRanges() {
    return this._customLearnedIpRanges;
  }
  public putCustomLearnedIpRanges(value: ComputeRouterPeerCustomLearnedIpRanges[] | cdktf.IResolvable) {
    this._customLearnedIpRanges.internalValue = value;
  }
  public resetCustomLearnedIpRanges() {
    this._customLearnedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLearnedIpRangesInput() {
    return this._customLearnedIpRanges.internalValue;
  }

  // md5_authentication_key - computed: false, optional: true, required: false
  private _md5AuthenticationKey = new ComputeRouterPeerMd5AuthenticationKeyOutputReference(this, "md5_authentication_key");
  public get md5AuthenticationKey() {
    return this._md5AuthenticationKey;
  }
  public putMd5AuthenticationKey(value: ComputeRouterPeerMd5AuthenticationKey) {
    this._md5AuthenticationKey.internalValue = value;
  }
  public resetMd5AuthenticationKey() {
    this._md5AuthenticationKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationKeyInput() {
    return this._md5AuthenticationKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRouterPeerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRouterPeerTimeouts) {
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
      advertise_mode: cdktf.stringToTerraform(this._advertiseMode),
      advertised_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advertisedGroups),
      advertised_route_priority: cdktf.numberToTerraform(this._advertisedRoutePriority),
      custom_learned_route_priority: cdktf.numberToTerraform(this._customLearnedRoutePriority),
      enable: cdktf.booleanToTerraform(this._enable),
      enable_ipv4: cdktf.booleanToTerraform(this._enableIpv4),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      export_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportPolicies),
      id: cdktf.stringToTerraform(this._id),
      import_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importPolicies),
      interface: cdktf.stringToTerraform(this._interface),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ipv4_nexthop_address: cdktf.stringToTerraform(this._ipv4NexthopAddress),
      ipv6_nexthop_address: cdktf.stringToTerraform(this._ipv6NexthopAddress),
      name: cdktf.stringToTerraform(this._name),
      peer_asn: cdktf.numberToTerraform(this._peerAsn),
      peer_ip_address: cdktf.stringToTerraform(this._peerIpAddress),
      peer_ipv4_nexthop_address: cdktf.stringToTerraform(this._peerIpv4NexthopAddress),
      peer_ipv6_nexthop_address: cdktf.stringToTerraform(this._peerIpv6NexthopAddress),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      router_appliance_instance: cdktf.stringToTerraform(this._routerApplianceInstance),
      zero_advertised_route_priority: cdktf.booleanToTerraform(this._zeroAdvertisedRoutePriority),
      zero_custom_learned_route_priority: cdktf.booleanToTerraform(this._zeroCustomLearnedRoutePriority),
      advertised_ip_ranges: cdktf.listMapper(computeRouterPeerAdvertisedIpRangesToTerraform, true)(this._advertisedIpRanges.internalValue),
      bfd: computeRouterPeerBfdToTerraform(this._bfd.internalValue),
      custom_learned_ip_ranges: cdktf.listMapper(computeRouterPeerCustomLearnedIpRangesToTerraform, true)(this._customLearnedIpRanges.internalValue),
      md5_authentication_key: computeRouterPeerMd5AuthenticationKeyToTerraform(this._md5AuthenticationKey.internalValue),
      timeouts: computeRouterPeerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_mode: {
        value: cdktf.stringToHclTerraform(this._advertiseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertised_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advertisedGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advertised_route_priority: {
        value: cdktf.numberToHclTerraform(this._advertisedRoutePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_learned_route_priority: {
        value: cdktf.numberToHclTerraform(this._customLearnedRoutePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv4: {
        value: cdktf.booleanToHclTerraform(this._enableIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      ipv4_nexthop_address: {
        value: cdktf.stringToHclTerraform(this._ipv4NexthopAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_nexthop_address: {
        value: cdktf.stringToHclTerraform(this._ipv6NexthopAddress),
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
      peer_asn: {
        value: cdktf.numberToHclTerraform(this._peerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_ip_address: {
        value: cdktf.stringToHclTerraform(this._peerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ipv4_nexthop_address: {
        value: cdktf.stringToHclTerraform(this._peerIpv4NexthopAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ipv6_nexthop_address: {
        value: cdktf.stringToHclTerraform(this._peerIpv6NexthopAddress),
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
      router_appliance_instance: {
        value: cdktf.stringToHclTerraform(this._routerApplianceInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zero_advertised_route_priority: {
        value: cdktf.booleanToHclTerraform(this._zeroAdvertisedRoutePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zero_custom_learned_route_priority: {
        value: cdktf.booleanToHclTerraform(this._zeroCustomLearnedRoutePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertised_ip_ranges: {
        value: cdktf.listMapperHcl(computeRouterPeerAdvertisedIpRangesToHclTerraform, true)(this._advertisedIpRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterPeerAdvertisedIpRangesList",
      },
      bfd: {
        value: computeRouterPeerBfdToHclTerraform(this._bfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterPeerBfdList",
      },
      custom_learned_ip_ranges: {
        value: cdktf.listMapperHcl(computeRouterPeerCustomLearnedIpRangesToHclTerraform, true)(this._customLearnedIpRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterPeerCustomLearnedIpRangesList",
      },
      md5_authentication_key: {
        value: computeRouterPeerMd5AuthenticationKeyToHclTerraform(this._md5AuthenticationKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterPeerMd5AuthenticationKeyList",
      },
      timeouts: {
        value: computeRouterPeerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRouterPeerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
