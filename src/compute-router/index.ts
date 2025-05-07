// https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#description ComputeRouter#description}
  */
  readonly description?: string;
  /**
  * Indicates if a router is dedicated for use with encrypted VLAN
  * attachments (interconnectAttachments).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#encrypted_interconnect_router ComputeRouter#encrypted_interconnect_router}
  */
  readonly encryptedInterconnectRouter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#id ComputeRouter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
  * comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter, and all
  * following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#name ComputeRouter#name}
  */
  readonly name: string;
  /**
  * A reference to the network to which this router belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#network ComputeRouter#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#project ComputeRouter#project}
  */
  readonly project?: string;
  /**
  * Region where the router resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#region ComputeRouter#region}
  */
  readonly region?: string;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#bgp ComputeRouter#bgp}
  */
  readonly bgp?: ComputeRouterBgp;
  /**
  * md5_authentication_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#md5_authentication_keys ComputeRouter#md5_authentication_keys}
  */
  readonly md5AuthenticationKeys?: ComputeRouterMd5AuthenticationKeys;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#timeouts ComputeRouter#timeouts}
  */
  readonly timeouts?: ComputeRouterTimeouts;
}
export interface ComputeRouterBgpAdvertisedIpRanges {
  /**
  * User-specified description for the IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#description ComputeRouter#description}
  */
  readonly description?: string;
  /**
  * The IP range to advertise. The value must be a
  * CIDR-formatted string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#range ComputeRouter#range}
  */
  readonly range: string;
}

export function computeRouterBgpAdvertisedIpRangesToTerraform(struct?: ComputeRouterBgpAdvertisedIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function computeRouterBgpAdvertisedIpRangesToHclTerraform(struct?: ComputeRouterBgpAdvertisedIpRanges | cdktf.IResolvable): any {
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

export class ComputeRouterBgpAdvertisedIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeRouterBgpAdvertisedIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRouterBgpAdvertisedIpRanges | cdktf.IResolvable | undefined) {
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

export class ComputeRouterBgpAdvertisedIpRangesList extends cdktf.ComplexList {
  public internalValue? : ComputeRouterBgpAdvertisedIpRanges[] | cdktf.IResolvable

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
  public get(index: number): ComputeRouterBgpAdvertisedIpRangesOutputReference {
    return new ComputeRouterBgpAdvertisedIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRouterBgp {
  /**
  * User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#advertise_mode ComputeRouter#advertise_mode}
  */
  readonly advertiseMode?: string;
  /**
  * User-specified list of prefix groups to advertise in custom mode.
  * This field can only be populated if advertiseMode is CUSTOM and
  * is advertised to all peers of the router. These groups will be
  * advertised in addition to any specified prefixes. Leave this field
  * blank to advertise no custom groups.
  * 
  * This enum field has the one valid value: ALL_SUBNETS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#advertised_groups ComputeRouter#advertised_groups}
  */
  readonly advertisedGroups?: string[];
  /**
  * Local BGP Autonomous System Number (ASN). Must be an RFC6996
  * private ASN, either 16-bit or 32-bit. The value will be fixed for
  * this router resource. All VPN tunnels that link to this router
  * will have the same local ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#asn ComputeRouter#asn}
  */
  readonly asn: number;
  /**
  * Explicitly specifies a range of valid BGP Identifiers for this Router.
  * It is provided as a link-local IPv4 range (from 169.254.0.0/16), of
  * size at least /30, even if the BGP sessions are over IPv6. It must
  * not overlap with any IPv4 BGP session ranges. Other vendors commonly
  * call this router ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#identifier_range ComputeRouter#identifier_range}
  */
  readonly identifierRange?: string;
  /**
  * The interval in seconds between BGP keepalive messages that are sent
  * to the peer. Hold time is three times the interval at which keepalive
  * messages are sent, and the hold time is the maximum number of seconds
  * allowed to elapse between successive keepalive messages that BGP
  * receives from a peer.
  * 
  * BGP will use the smaller of either the local hold time value or the
  * peer's hold time value as the hold time for the BGP connection
  * between the two peers. If set, this value must be between 20 and 60.
  * The default is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#keepalive_interval ComputeRouter#keepalive_interval}
  */
  readonly keepaliveInterval?: number;
  /**
  * advertised_ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#advertised_ip_ranges ComputeRouter#advertised_ip_ranges}
  */
  readonly advertisedIpRanges?: ComputeRouterBgpAdvertisedIpRanges[] | cdktf.IResolvable;
}

export function computeRouterBgpToTerraform(struct?: ComputeRouterBgpOutputReference | ComputeRouterBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_mode: cdktf.stringToTerraform(struct!.advertiseMode),
    advertised_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedGroups),
    asn: cdktf.numberToTerraform(struct!.asn),
    identifier_range: cdktf.stringToTerraform(struct!.identifierRange),
    keepalive_interval: cdktf.numberToTerraform(struct!.keepaliveInterval),
    advertised_ip_ranges: cdktf.listMapper(computeRouterBgpAdvertisedIpRangesToTerraform, true)(struct!.advertisedIpRanges),
  }
}


export function computeRouterBgpToHclTerraform(struct?: ComputeRouterBgpOutputReference | ComputeRouterBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_mode: {
      value: cdktf.stringToHclTerraform(struct!.advertiseMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertised_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identifier_range: {
      value: cdktf.stringToHclTerraform(struct!.identifierRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertised_ip_ranges: {
      value: cdktf.listMapperHcl(computeRouterBgpAdvertisedIpRangesToHclTerraform, true)(struct!.advertisedIpRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeRouterBgpAdvertisedIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeRouterBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseMode = this._advertiseMode;
    }
    if (this._advertisedGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedGroups = this._advertisedGroups;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._identifierRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierRange = this._identifierRange;
    }
    if (this._keepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveInterval = this._keepaliveInterval;
    }
    if (this._advertisedIpRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedIpRanges = this._advertisedIpRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseMode = undefined;
      this._advertisedGroups = undefined;
      this._asn = undefined;
      this._identifierRange = undefined;
      this._keepaliveInterval = undefined;
      this._advertisedIpRanges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseMode = value.advertiseMode;
      this._advertisedGroups = value.advertisedGroups;
      this._asn = value.asn;
      this._identifierRange = value.identifierRange;
      this._keepaliveInterval = value.keepaliveInterval;
      this._advertisedIpRanges.internalValue = value.advertisedIpRanges;
    }
  }

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

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // identifier_range - computed: true, optional: true, required: false
  private _identifierRange?: string; 
  public get identifierRange() {
    return this.getStringAttribute('identifier_range');
  }
  public set identifierRange(value: string) {
    this._identifierRange = value;
  }
  public resetIdentifierRange() {
    this._identifierRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierRangeInput() {
    return this._identifierRange;
  }

  // keepalive_interval - computed: false, optional: true, required: false
  private _keepaliveInterval?: number; 
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: number) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // advertised_ip_ranges - computed: false, optional: true, required: false
  private _advertisedIpRanges = new ComputeRouterBgpAdvertisedIpRangesList(this, "advertised_ip_ranges", false);
  public get advertisedIpRanges() {
    return this._advertisedIpRanges;
  }
  public putAdvertisedIpRanges(value: ComputeRouterBgpAdvertisedIpRanges[] | cdktf.IResolvable) {
    this._advertisedIpRanges.internalValue = value;
  }
  public resetAdvertisedIpRanges() {
    this._advertisedIpRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedIpRangesInput() {
    return this._advertisedIpRanges.internalValue;
  }
}
export interface ComputeRouterMd5AuthenticationKeys {
  /**
  * Value of the key used for MD5 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#key ComputeRouter#key}
  */
  readonly key: string;
  /**
  * Name used to identify the key. Must be unique within a router.
  * Must be referenced by exactly one bgpPeer. Must comply with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#name ComputeRouter#name}
  */
  readonly name: string;
}

export function computeRouterMd5AuthenticationKeysToTerraform(struct?: ComputeRouterMd5AuthenticationKeysOutputReference | ComputeRouterMd5AuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeRouterMd5AuthenticationKeysToHclTerraform(struct?: ComputeRouterMd5AuthenticationKeysOutputReference | ComputeRouterMd5AuthenticationKeys): any {
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

export class ComputeRouterMd5AuthenticationKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterMd5AuthenticationKeys | undefined {
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

  public set internalValue(value: ComputeRouterMd5AuthenticationKeys | undefined) {
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
export interface ComputeRouterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#create ComputeRouter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#delete ComputeRouter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#update ComputeRouter#update}
  */
  readonly update?: string;
}

export function computeRouterTimeoutsToTerraform(struct?: ComputeRouterTimeouts | cdktf.IResolvable): any {
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


export function computeRouterTimeoutsToHclTerraform(struct?: ComputeRouterTimeouts | cdktf.IResolvable): any {
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

export class ComputeRouterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRouterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRouterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router google_compute_router}
*/
export class ComputeRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRouter to import
  * @param importFromId The id of the existing ComputeRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/compute_router google_compute_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.0',
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
    this._encryptedInterconnectRouter = config.encryptedInterconnectRouter;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._bgp.internalValue = config.bgp;
    this._md5AuthenticationKeys.internalValue = config.md5AuthenticationKeys;
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

  // encrypted_interconnect_router - computed: false, optional: true, required: false
  private _encryptedInterconnectRouter?: boolean | cdktf.IResolvable; 
  public get encryptedInterconnectRouter() {
    return this.getBooleanAttribute('encrypted_interconnect_router');
  }
  public set encryptedInterconnectRouter(value: boolean | cdktf.IResolvable) {
    this._encryptedInterconnectRouter = value;
  }
  public resetEncryptedInterconnectRouter() {
    this._encryptedInterconnectRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInterconnectRouterInput() {
    return this._encryptedInterconnectRouter;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new ComputeRouterBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: ComputeRouterBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // md5_authentication_keys - computed: false, optional: true, required: false
  private _md5AuthenticationKeys = new ComputeRouterMd5AuthenticationKeysOutputReference(this, "md5_authentication_keys");
  public get md5AuthenticationKeys() {
    return this._md5AuthenticationKeys;
  }
  public putMd5AuthenticationKeys(value: ComputeRouterMd5AuthenticationKeys) {
    this._md5AuthenticationKeys.internalValue = value;
  }
  public resetMd5AuthenticationKeys() {
    this._md5AuthenticationKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationKeysInput() {
    return this._md5AuthenticationKeys.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRouterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRouterTimeouts) {
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
      encrypted_interconnect_router: cdktf.booleanToTerraform(this._encryptedInterconnectRouter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      bgp: computeRouterBgpToTerraform(this._bgp.internalValue),
      md5_authentication_keys: computeRouterMd5AuthenticationKeysToTerraform(this._md5AuthenticationKeys.internalValue),
      timeouts: computeRouterTimeoutsToTerraform(this._timeouts.internalValue),
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
      encrypted_interconnect_router: {
        value: cdktf.booleanToHclTerraform(this._encryptedInterconnectRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      bgp: {
        value: computeRouterBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterBgpList",
      },
      md5_authentication_keys: {
        value: computeRouterMd5AuthenticationKeysToHclTerraform(this._md5AuthenticationKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeRouterMd5AuthenticationKeysList",
      },
      timeouts: {
        value: computeRouterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRouterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
