/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInterconnectGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#description ComputeInterconnectGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#id ComputeInterconnectGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The name must be
  * 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must be a dash,
  * lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#name ComputeInterconnectGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#project ComputeInterconnectGroup#project}
  */
  readonly project?: string;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#intent ComputeInterconnectGroup#intent}
  */
  readonly intent: ComputeInterconnectGroupIntent;
  /**
  * interconnects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#interconnects ComputeInterconnectGroup#interconnects}
  */
  readonly interconnects?: ComputeInterconnectGroupInterconnects[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#timeouts ComputeInterconnectGroup#timeouts}
  */
  readonly timeouts?: ComputeInterconnectGroupTimeouts;
}
export interface ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers {
}

export function computeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersToTerraform(struct?: ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersToHclTerraform(struct?: ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocker_type - computed: true, optional: false, required: false
  public get blockerType() {
    return this.getStringAttribute('blocker_type');
  }

  // documentation_link - computed: true, optional: false, required: false
  public get documentationLink() {
    return this.getStringAttribute('documentation_link');
  }

  // explanation - computed: true, optional: false, required: false
  public get explanation() {
    return this.getStringAttribute('explanation');
  }

  // facilities - computed: true, optional: false, required: false
  public get facilities() {
    return this.getListAttribute('facilities');
  }

  // interconnects - computed: true, optional: false, required: false
  public get interconnects() {
    return this.getListAttribute('interconnects');
  }

  // metros - computed: true, optional: false, required: false
  public get metros() {
    return this.getListAttribute('metros');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference {
    return new ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupConfiguredTopologyCapability {
}

export function computeInterconnectGroupConfiguredTopologyCapabilityToTerraform(struct?: ComputeInterconnectGroupConfiguredTopologyCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupConfiguredTopologyCapabilityToHclTerraform(struct?: ComputeInterconnectGroupConfiguredTopologyCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupConfiguredTopologyCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupConfiguredTopologyCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intended_capability_blockers - computed: true, optional: false, required: false
  private _intendedCapabilityBlockers = new ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList(this, "intended_capability_blockers", false);
  public get intendedCapabilityBlockers() {
    return this._intendedCapabilityBlockers;
  }

  // supported_sla - computed: true, optional: false, required: false
  public get supportedSla() {
    return this.getStringAttribute('supported_sla');
  }
}

export class ComputeInterconnectGroupConfiguredTopologyCapabilityList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference {
    return new ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupConfigured {
}

export function computeInterconnectGroupConfiguredToTerraform(struct?: ComputeInterconnectGroupConfigured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupConfiguredToHclTerraform(struct?: ComputeInterconnectGroupConfigured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupConfiguredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupConfigured | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupConfigured | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topology_capability - computed: true, optional: false, required: false
  private _topologyCapability = new ComputeInterconnectGroupConfiguredTopologyCapabilityList(this, "topology_capability", false);
  public get topologyCapability() {
    return this._topologyCapability;
  }
}

export class ComputeInterconnectGroupConfiguredList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupConfiguredOutputReference {
    return new ComputeInterconnectGroupConfiguredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones {
}

export function computeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesToTerraform(struct?: ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesToHclTerraform(struct?: ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interconnects - computed: true, optional: false, required: false
  public get interconnects() {
    return this.getListAttribute('interconnects');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference {
    return new ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupPhysicalStructureMetrosFacilities {
}

export function computeInterconnectGroupPhysicalStructureMetrosFacilitiesToTerraform(struct?: ComputeInterconnectGroupPhysicalStructureMetrosFacilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupPhysicalStructureMetrosFacilitiesToHclTerraform(struct?: ComputeInterconnectGroupPhysicalStructureMetrosFacilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupPhysicalStructureMetrosFacilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupPhysicalStructureMetrosFacilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // facility - computed: true, optional: false, required: false
  public get facility() {
    return this.getStringAttribute('facility');
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
}

export class ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference {
    return new ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupPhysicalStructureMetros {
}

export function computeInterconnectGroupPhysicalStructureMetrosToTerraform(struct?: ComputeInterconnectGroupPhysicalStructureMetros): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupPhysicalStructureMetrosToHclTerraform(struct?: ComputeInterconnectGroupPhysicalStructureMetros): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupPhysicalStructureMetrosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupPhysicalStructureMetros | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupPhysicalStructureMetros | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // facilities - computed: true, optional: false, required: false
  private _facilities = new ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList(this, "facilities", false);
  public get facilities() {
    return this._facilities;
  }

  // metro - computed: true, optional: false, required: false
  public get metro() {
    return this.getStringAttribute('metro');
  }
}

export class ComputeInterconnectGroupPhysicalStructureMetrosList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupPhysicalStructureMetrosOutputReference {
    return new ComputeInterconnectGroupPhysicalStructureMetrosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupPhysicalStructure {
}

export function computeInterconnectGroupPhysicalStructureToTerraform(struct?: ComputeInterconnectGroupPhysicalStructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectGroupPhysicalStructureToHclTerraform(struct?: ComputeInterconnectGroupPhysicalStructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectGroupPhysicalStructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupPhysicalStructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupPhysicalStructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metros - computed: true, optional: false, required: false
  private _metros = new ComputeInterconnectGroupPhysicalStructureMetrosList(this, "metros", false);
  public get metros() {
    return this._metros;
  }
}

export class ComputeInterconnectGroupPhysicalStructureList extends cdktf.ComplexList {

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
  public get(index: number): ComputeInterconnectGroupPhysicalStructureOutputReference {
    return new ComputeInterconnectGroupPhysicalStructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupIntent {
  /**
  * The reliability the user intends this group to be capable of, in terms
  * of the Interconnect product SLAs. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#topology_capability ComputeInterconnectGroup#topology_capability}
  */
  readonly topologyCapability?: string;
}

export function computeInterconnectGroupIntentToTerraform(struct?: ComputeInterconnectGroupIntentOutputReference | ComputeInterconnectGroupIntent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology_capability: cdktf.stringToTerraform(struct!.topologyCapability),
  }
}


export function computeInterconnectGroupIntentToHclTerraform(struct?: ComputeInterconnectGroupIntentOutputReference | ComputeInterconnectGroupIntent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topology_capability: {
      value: cdktf.stringToHclTerraform(struct!.topologyCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInterconnectGroupIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInterconnectGroupIntent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topologyCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyCapability = this._topologyCapability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupIntent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topologyCapability = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topologyCapability = value.topologyCapability;
    }
  }

  // topology_capability - computed: false, optional: true, required: false
  private _topologyCapability?: string; 
  public get topologyCapability() {
    return this.getStringAttribute('topology_capability');
  }
  public set topologyCapability(value: string) {
    this._topologyCapability = value;
  }
  public resetTopologyCapability() {
    this._topologyCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyCapabilityInput() {
    return this._topologyCapability;
  }
}
export interface ComputeInterconnectGroupInterconnects {
  /**
  * The URL of an Interconnect in this group. All Interconnects in the group are unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#interconnect ComputeInterconnectGroup#interconnect}
  */
  readonly interconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#name ComputeInterconnectGroup#name}
  */
  readonly name: string;
}

export function computeInterconnectGroupInterconnectsToTerraform(struct?: ComputeInterconnectGroupInterconnects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interconnect: cdktf.stringToTerraform(struct!.interconnect),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeInterconnectGroupInterconnectsToHclTerraform(struct?: ComputeInterconnectGroupInterconnects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interconnect: {
      value: cdktf.stringToHclTerraform(struct!.interconnect),
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

export class ComputeInterconnectGroupInterconnectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInterconnectGroupInterconnects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnect = this._interconnect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectGroupInterconnects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interconnect = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interconnect = value.interconnect;
      this._name = value.name;
    }
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect?: string; 
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string) {
    this._interconnect = value;
  }
  public resetInterconnect() {
    this._interconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect;
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

export class ComputeInterconnectGroupInterconnectsList extends cdktf.ComplexList {
  public internalValue? : ComputeInterconnectGroupInterconnects[] | cdktf.IResolvable

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
  public get(index: number): ComputeInterconnectGroupInterconnectsOutputReference {
    return new ComputeInterconnectGroupInterconnectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#create ComputeInterconnectGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#delete ComputeInterconnectGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#update ComputeInterconnectGroup#update}
  */
  readonly update?: string;
}

export function computeInterconnectGroupTimeoutsToTerraform(struct?: ComputeInterconnectGroupTimeouts | cdktf.IResolvable): any {
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


export function computeInterconnectGroupTimeoutsToHclTerraform(struct?: ComputeInterconnectGroupTimeouts | cdktf.IResolvable): any {
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

export class ComputeInterconnectGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInterconnectGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInterconnectGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group google_compute_interconnect_group}
*/
export class ComputeInterconnectGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_interconnect_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInterconnectGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInterconnectGroup to import
  * @param importFromId The id of the existing ComputeInterconnectGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInterconnectGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_interconnect_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_interconnect_group google_compute_interconnect_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInterconnectGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInterconnectGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_interconnect_group',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.46.0',
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
    this._name = config.name;
    this._project = config.project;
    this._intent.internalValue = config.intent;
    this._interconnects.internalValue = config.interconnects;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configured - computed: true, optional: false, required: false
  private _configured = new ComputeInterconnectGroupConfiguredList(this, "configured", false);
  public get configured() {
    return this._configured;
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

  // physical_structure - computed: true, optional: false, required: false
  private _physicalStructure = new ComputeInterconnectGroupPhysicalStructureList(this, "physical_structure", false);
  public get physicalStructure() {
    return this._physicalStructure;
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

  // intent - computed: false, optional: false, required: true
  private _intent = new ComputeInterconnectGroupIntentOutputReference(this, "intent");
  public get intent() {
    return this._intent;
  }
  public putIntent(value: ComputeInterconnectGroupIntent) {
    this._intent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }

  // interconnects - computed: false, optional: true, required: false
  private _interconnects = new ComputeInterconnectGroupInterconnectsList(this, "interconnects", true);
  public get interconnects() {
    return this._interconnects;
  }
  public putInterconnects(value: ComputeInterconnectGroupInterconnects[] | cdktf.IResolvable) {
    this._interconnects.internalValue = value;
  }
  public resetInterconnects() {
    this._interconnects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectsInput() {
    return this._interconnects.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInterconnectGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInterconnectGroupTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      intent: computeInterconnectGroupIntentToTerraform(this._intent.internalValue),
      interconnects: cdktf.listMapper(computeInterconnectGroupInterconnectsToTerraform, true)(this._interconnects.internalValue),
      timeouts: computeInterconnectGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      intent: {
        value: computeInterconnectGroupIntentToHclTerraform(this._intent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInterconnectGroupIntentList",
      },
      interconnects: {
        value: cdktf.listMapperHcl(computeInterconnectGroupInterconnectsToHclTerraform, true)(this._interconnects.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInterconnectGroupInterconnectsList",
      },
      timeouts: {
        value: computeInterconnectGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInterconnectGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
