// https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputePacketMirroringConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#description ComputePacketMirroring#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#id ComputePacketMirroring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the packet mirroring rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#name ComputePacketMirroring#name}
  */
  readonly name: string;
  /**
  * Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#priority ComputePacketMirroring#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#project ComputePacketMirroring#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created address should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#region ComputePacketMirroring#region}
  */
  readonly region?: string;
  /**
  * collector_ilb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}
  */
  readonly collectorIlb: ComputePacketMirroringCollectorIlb;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#filter ComputePacketMirroring#filter}
  */
  readonly filter?: ComputePacketMirroringFilter;
  /**
  * mirrored_resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}
  */
  readonly mirroredResources: ComputePacketMirroringMirroredResources;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#network ComputePacketMirroring#network}
  */
  readonly network: ComputePacketMirroringNetwork;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}
  */
  readonly timeouts?: ComputePacketMirroringTimeouts;
}
export interface ComputePacketMirroringCollectorIlb {
  /**
  * The URL of the forwarding rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#url ComputePacketMirroring#url}
  */
  readonly url: string;
}

export function computePacketMirroringCollectorIlbToTerraform(struct?: ComputePacketMirroringCollectorIlbOutputReference | ComputePacketMirroringCollectorIlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ComputePacketMirroringCollectorIlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePacketMirroringCollectorIlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePacketMirroringCollectorIlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ComputePacketMirroringFilter {
  /**
  * IP CIDR ranges that apply as a filter on the source (ingress) or
destination (egress) IP in the IP header. Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#cidr_ranges ComputePacketMirroring#cidr_ranges}
  */
  readonly cidrRanges?: string[];
  /**
  * Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#direction ComputePacketMirroring#direction}
  */
  readonly direction?: string;
  /**
  * Possible IP protocols including tcp, udp, icmp and esp
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#ip_protocols ComputePacketMirroring#ip_protocols}
  */
  readonly ipProtocols?: string[];
}

export function computePacketMirroringFilterToTerraform(struct?: ComputePacketMirroringFilterOutputReference | ComputePacketMirroringFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrRanges),
    direction: cdktf.stringToTerraform(struct!.direction),
    ip_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipProtocols),
  }
}

export class ComputePacketMirroringFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePacketMirroringFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRanges = this._cidrRanges;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._ipProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocols = this._ipProtocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePacketMirroringFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrRanges = undefined;
      this._direction = undefined;
      this._ipProtocols = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrRanges = value.cidrRanges;
      this._direction = value.direction;
      this._ipProtocols = value.ipProtocols;
    }
  }

  // cidr_ranges - computed: false, optional: true, required: false
  private _cidrRanges?: string[]; 
  public get cidrRanges() {
    return this.getListAttribute('cidr_ranges');
  }
  public set cidrRanges(value: string[]) {
    this._cidrRanges = value;
  }
  public resetCidrRanges() {
    this._cidrRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangesInput() {
    return this._cidrRanges;
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

  // ip_protocols - computed: false, optional: true, required: false
  private _ipProtocols?: string[]; 
  public get ipProtocols() {
    return this.getListAttribute('ip_protocols');
  }
  public set ipProtocols(value: string[]) {
    this._ipProtocols = value;
  }
  public resetIpProtocols() {
    this._ipProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolsInput() {
    return this._ipProtocols;
  }
}
export interface ComputePacketMirroringMirroredResourcesInstances {
  /**
  * The URL of the instances where this rule should be active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#url ComputePacketMirroring#url}
  */
  readonly url: string;
}

export function computePacketMirroringMirroredResourcesInstancesToTerraform(struct?: ComputePacketMirroringMirroredResourcesInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ComputePacketMirroringMirroredResourcesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputePacketMirroringMirroredResourcesInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePacketMirroringMirroredResourcesInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ComputePacketMirroringMirroredResourcesInstancesList extends cdktf.ComplexList {
  public internalValue? : ComputePacketMirroringMirroredResourcesInstances[] | cdktf.IResolvable

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
  public get(index: number): ComputePacketMirroringMirroredResourcesInstancesOutputReference {
    return new ComputePacketMirroringMirroredResourcesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePacketMirroringMirroredResourcesSubnetworks {
  /**
  * The URL of the subnetwork where this rule should be active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#url ComputePacketMirroring#url}
  */
  readonly url: string;
}

export function computePacketMirroringMirroredResourcesSubnetworksToTerraform(struct?: ComputePacketMirroringMirroredResourcesSubnetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ComputePacketMirroringMirroredResourcesSubnetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputePacketMirroringMirroredResourcesSubnetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePacketMirroringMirroredResourcesSubnetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ComputePacketMirroringMirroredResourcesSubnetworksList extends cdktf.ComplexList {
  public internalValue? : ComputePacketMirroringMirroredResourcesSubnetworks[] | cdktf.IResolvable

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
  public get(index: number): ComputePacketMirroringMirroredResourcesSubnetworksOutputReference {
    return new ComputePacketMirroringMirroredResourcesSubnetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePacketMirroringMirroredResources {
  /**
  * All instances with these tags will be mirrored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#tags ComputePacketMirroring#tags}
  */
  readonly tags?: string[];
  /**
  * instances block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#instances ComputePacketMirroring#instances}
  */
  readonly instances?: ComputePacketMirroringMirroredResourcesInstances[] | cdktf.IResolvable;
  /**
  * subnetworks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#subnetworks ComputePacketMirroring#subnetworks}
  */
  readonly subnetworks?: ComputePacketMirroringMirroredResourcesSubnetworks[] | cdktf.IResolvable;
}

export function computePacketMirroringMirroredResourcesToTerraform(struct?: ComputePacketMirroringMirroredResourcesOutputReference | ComputePacketMirroringMirroredResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    instances: cdktf.listMapper(computePacketMirroringMirroredResourcesInstancesToTerraform, true)(struct!.instances),
    subnetworks: cdktf.listMapper(computePacketMirroringMirroredResourcesSubnetworksToTerraform, true)(struct!.subnetworks),
  }
}

export class ComputePacketMirroringMirroredResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePacketMirroringMirroredResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    if (this._subnetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworks = this._subnetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePacketMirroringMirroredResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
      this._instances.internalValue = undefined;
      this._subnetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
      this._instances.internalValue = value.instances;
      this._subnetworks.internalValue = value.subnetworks;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // instances - computed: false, optional: true, required: false
  private _instances = new ComputePacketMirroringMirroredResourcesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: ComputePacketMirroringMirroredResourcesInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // subnetworks - computed: false, optional: true, required: false
  private _subnetworks = new ComputePacketMirroringMirroredResourcesSubnetworksList(this, "subnetworks", false);
  public get subnetworks() {
    return this._subnetworks;
  }
  public putSubnetworks(value: ComputePacketMirroringMirroredResourcesSubnetworks[] | cdktf.IResolvable) {
    this._subnetworks.internalValue = value;
  }
  public resetSubnetworks() {
    this._subnetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworksInput() {
    return this._subnetworks.internalValue;
  }
}
export interface ComputePacketMirroringNetwork {
  /**
  * The full self_link URL of the network where this rule is active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#url ComputePacketMirroring#url}
  */
  readonly url: string;
}

export function computePacketMirroringNetworkToTerraform(struct?: ComputePacketMirroringNetworkOutputReference | ComputePacketMirroringNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ComputePacketMirroringNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePacketMirroringNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePacketMirroringNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ComputePacketMirroringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#create ComputePacketMirroring#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#delete ComputePacketMirroring#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring#update ComputePacketMirroring#update}
  */
  readonly update?: string;
}

export function computePacketMirroringTimeoutsToTerraform(struct?: ComputePacketMirroringTimeoutsOutputReference | ComputePacketMirroringTimeouts | cdktf.IResolvable): any {
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

export class ComputePacketMirroringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputePacketMirroringTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputePacketMirroringTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring google_compute_packet_mirroring}
*/
export class ComputePacketMirroring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_packet_mirroring";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_packet_mirroring google_compute_packet_mirroring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePacketMirroringConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePacketMirroringConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_packet_mirroring',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
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
    this._name = config.name;
    this._priority = config.priority;
    this._project = config.project;
    this._region = config.region;
    this._collectorIlb.internalValue = config.collectorIlb;
    this._filter.internalValue = config.filter;
    this._mirroredResources.internalValue = config.mirroredResources;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
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

  // collector_ilb - computed: false, optional: false, required: true
  private _collectorIlb = new ComputePacketMirroringCollectorIlbOutputReference(this, "collector_ilb");
  public get collectorIlb() {
    return this._collectorIlb;
  }
  public putCollectorIlb(value: ComputePacketMirroringCollectorIlb) {
    this._collectorIlb.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIlbInput() {
    return this._collectorIlb.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ComputePacketMirroringFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ComputePacketMirroringFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // mirrored_resources - computed: false, optional: false, required: true
  private _mirroredResources = new ComputePacketMirroringMirroredResourcesOutputReference(this, "mirrored_resources");
  public get mirroredResources() {
    return this._mirroredResources;
  }
  public putMirroredResources(value: ComputePacketMirroringMirroredResources) {
    this._mirroredResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredResourcesInput() {
    return this._mirroredResources.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new ComputePacketMirroringNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ComputePacketMirroringNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePacketMirroringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePacketMirroringTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      collector_ilb: computePacketMirroringCollectorIlbToTerraform(this._collectorIlb.internalValue),
      filter: computePacketMirroringFilterToTerraform(this._filter.internalValue),
      mirrored_resources: computePacketMirroringMirroredResourcesToTerraform(this._mirroredResources.internalValue),
      network: computePacketMirroringNetworkToTerraform(this._network.internalValue),
      timeouts: computePacketMirroringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
