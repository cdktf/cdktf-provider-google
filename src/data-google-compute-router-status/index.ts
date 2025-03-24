// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeRouterStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the router to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status#name DataGoogleComputeRouterStatus#name}
  */
  readonly name: string;
  /**
  * Project ID of the target router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status#project DataGoogleComputeRouterStatus#project}
  */
  readonly project?: string;
  /**
  * Region of the target router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status#region DataGoogleComputeRouterStatus#region}
  */
  readonly region?: string;
}
export interface DataGoogleComputeRouterStatusBestRoutesAsPaths {
}

export function dataGoogleComputeRouterStatusBestRoutesAsPathsToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesAsPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesAsPathsToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesAsPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesAsPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesAsPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_lists - computed: true, optional: false, required: false
  public get asLists() {
    return this.getNumberListAttribute('as_lists');
  }

  // path_segment_type - computed: true, optional: false, required: false
  public get pathSegmentType() {
    return this.getStringAttribute('path_segment_type');
  }
}

export class DataGoogleComputeRouterStatusBestRoutesAsPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesAsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesWarningsData {
}

export function dataGoogleComputeRouterStatusBestRoutesWarningsDataToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesWarningsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesWarningsDataToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesWarningsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesWarningsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesWarningsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleComputeRouterStatusBestRoutesWarningsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesWarningsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesWarnings {
}

export function dataGoogleComputeRouterStatusBestRoutesWarningsToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesWarningsToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataGoogleComputeRouterStatusBestRoutesWarningsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleComputeRouterStatusBestRoutesWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutes {
}

export function dataGoogleComputeRouterStatusBestRoutesToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_paths - computed: true, optional: false, required: false
  private _asPaths = new DataGoogleComputeRouterStatusBestRoutesAsPathsList(this, "as_paths", false);
  public get asPaths() {
    return this._asPaths;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_range - computed: true, optional: false, required: false
  public get destRange() {
    return this.getStringAttribute('dest_range');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // next_hop_gateway - computed: true, optional: false, required: false
  public get nextHopGateway() {
    return this.getStringAttribute('next_hop_gateway');
  }

  // next_hop_hub - computed: true, optional: false, required: false
  public get nextHopHub() {
    return this.getStringAttribute('next_hop_hub');
  }

  // next_hop_ilb - computed: true, optional: false, required: false
  public get nextHopIlb() {
    return this.getStringAttribute('next_hop_ilb');
  }

  // next_hop_instance - computed: true, optional: false, required: false
  public get nextHopInstance() {
    return this.getStringAttribute('next_hop_instance');
  }

  // next_hop_instance_zone - computed: true, optional: false, required: false
  public get nextHopInstanceZone() {
    return this.getStringAttribute('next_hop_instance_zone');
  }

  // next_hop_inter_region_cost - computed: true, optional: false, required: false
  public get nextHopInterRegionCost() {
    return this.getStringAttribute('next_hop_inter_region_cost');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // next_hop_med - computed: true, optional: false, required: false
  public get nextHopMed() {
    return this.getStringAttribute('next_hop_med');
  }

  // next_hop_network - computed: true, optional: false, required: false
  public get nextHopNetwork() {
    return this.getStringAttribute('next_hop_network');
  }

  // next_hop_origin - computed: true, optional: false, required: false
  public get nextHopOrigin() {
    return this.getStringAttribute('next_hop_origin');
  }

  // next_hop_peering - computed: true, optional: false, required: false
  public get nextHopPeering() {
    return this.getStringAttribute('next_hop_peering');
  }

  // next_hop_vpn_tunnel - computed: true, optional: false, required: false
  public get nextHopVpnTunnel() {
    return this.getStringAttribute('next_hop_vpn_tunnel');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // route_status - computed: true, optional: false, required: false
  public get routeStatus() {
    return this.getStringAttribute('route_status');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataGoogleComputeRouterStatusBestRoutesWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}

export class DataGoogleComputeRouterStatusBestRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths {
}

export function dataGoogleComputeRouterStatusBestRoutesForRouterAsPathsToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesForRouterAsPathsToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesForRouterAsPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_lists - computed: true, optional: false, required: false
  public get asLists() {
    return this.getNumberListAttribute('as_lists');
  }

  // path_segment_type - computed: true, optional: false, required: false
  public get pathSegmentType() {
    return this.getStringAttribute('path_segment_type');
  }
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData {
}

export function dataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesForRouterWarningsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesForRouterWarnings {
}

export function dataGoogleComputeRouterStatusBestRoutesForRouterWarningsToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouterWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesForRouterWarningsToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouterWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesForRouterWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesForRouterWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataGoogleComputeRouterStatusBestRoutesForRouterWarningsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesForRouterWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesForRouter {
}

export function dataGoogleComputeRouterStatusBestRoutesForRouterToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesForRouterToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesForRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesForRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_paths - computed: true, optional: false, required: false
  private _asPaths = new DataGoogleComputeRouterStatusBestRoutesForRouterAsPathsList(this, "as_paths", false);
  public get asPaths() {
    return this._asPaths;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_range - computed: true, optional: false, required: false
  public get destRange() {
    return this.getStringAttribute('dest_range');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // next_hop_gateway - computed: true, optional: false, required: false
  public get nextHopGateway() {
    return this.getStringAttribute('next_hop_gateway');
  }

  // next_hop_hub - computed: true, optional: false, required: false
  public get nextHopHub() {
    return this.getStringAttribute('next_hop_hub');
  }

  // next_hop_ilb - computed: true, optional: false, required: false
  public get nextHopIlb() {
    return this.getStringAttribute('next_hop_ilb');
  }

  // next_hop_instance - computed: true, optional: false, required: false
  public get nextHopInstance() {
    return this.getStringAttribute('next_hop_instance');
  }

  // next_hop_instance_zone - computed: true, optional: false, required: false
  public get nextHopInstanceZone() {
    return this.getStringAttribute('next_hop_instance_zone');
  }

  // next_hop_inter_region_cost - computed: true, optional: false, required: false
  public get nextHopInterRegionCost() {
    return this.getStringAttribute('next_hop_inter_region_cost');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // next_hop_med - computed: true, optional: false, required: false
  public get nextHopMed() {
    return this.getStringAttribute('next_hop_med');
  }

  // next_hop_network - computed: true, optional: false, required: false
  public get nextHopNetwork() {
    return this.getStringAttribute('next_hop_network');
  }

  // next_hop_origin - computed: true, optional: false, required: false
  public get nextHopOrigin() {
    return this.getStringAttribute('next_hop_origin');
  }

  // next_hop_peering - computed: true, optional: false, required: false
  public get nextHopPeering() {
    return this.getStringAttribute('next_hop_peering');
  }

  // next_hop_vpn_tunnel - computed: true, optional: false, required: false
  public get nextHopVpnTunnel() {
    return this.getStringAttribute('next_hop_vpn_tunnel');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // route_status - computed: true, optional: false, required: false
  public get routeStatus() {
    return this.getStringAttribute('route_status');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataGoogleComputeRouterStatusBestRoutesForRouterWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status google_compute_router_status}
*/
export class DataGoogleComputeRouterStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeRouterStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeRouterStatus to import
  * @param importFromId The id of the existing DataGoogleComputeRouterStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeRouterStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_router_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_router_status google_compute_router_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeRouterStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeRouterStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_status',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // best_routes - computed: true, optional: false, required: false
  private _bestRoutes = new DataGoogleComputeRouterStatusBestRoutesList(this, "best_routes", false);
  public get bestRoutes() {
    return this._bestRoutes;
  }

  // best_routes_for_router - computed: true, optional: false, required: false
  private _bestRoutesForRouter = new DataGoogleComputeRouterStatusBestRoutesForRouterList(this, "best_routes_for_router", false);
  public get bestRoutesForRouter() {
    return this._bestRoutesForRouter;
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // project - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
