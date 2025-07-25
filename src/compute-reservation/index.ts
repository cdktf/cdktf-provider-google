/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Absolute time in future when the reservation will be auto-deleted by Compute Engine. Timestamp is represented in RFC3339 text format.
  * Cannot be used with delete_after_duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#delete_at_time ComputeReservation#delete_at_time}
  */
  readonly deleteAtTime?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#description ComputeReservation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#id ComputeReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#name ComputeReservation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#project ComputeReservation#project}
  */
  readonly project?: string;
  /**
  * When set to true, only VMs that target this reservation by name can
  * consume this reservation. Otherwise, it can be consumed by VMs with
  * affinity for any reservation. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#specific_reservation_required ComputeReservation#specific_reservation_required}
  */
  readonly specificReservationRequired?: boolean | cdktf.IResolvable;
  /**
  * The zone where the reservation is made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#zone ComputeReservation#zone}
  */
  readonly zone: string;
  /**
  * delete_after_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#delete_after_duration ComputeReservation#delete_after_duration}
  */
  readonly deleteAfterDuration?: ComputeReservationDeleteAfterDuration;
  /**
  * reservation_sharing_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#reservation_sharing_policy ComputeReservation#reservation_sharing_policy}
  */
  readonly reservationSharingPolicy?: ComputeReservationReservationSharingPolicy;
  /**
  * share_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#share_settings ComputeReservation#share_settings}
  */
  readonly shareSettings?: ComputeReservationShareSettings;
  /**
  * specific_reservation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#specific_reservation ComputeReservation#specific_reservation}
  */
  readonly specificReservation: ComputeReservationSpecificReservation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#timeouts ComputeReservation#timeouts}
  */
  readonly timeouts?: ComputeReservationTimeouts;
}
export interface ComputeReservationDeleteAfterDuration {
  /**
  * Number of nanoseconds for the auto-delete duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#nanos ComputeReservation#nanos}
  */
  readonly nanos?: number;
  /**
  * Number of seconds for the auto-delete duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#seconds ComputeReservation#seconds}
  */
  readonly seconds?: string;
}

export function computeReservationDeleteAfterDurationToTerraform(struct?: ComputeReservationDeleteAfterDurationOutputReference | ComputeReservationDeleteAfterDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function computeReservationDeleteAfterDurationToHclTerraform(struct?: ComputeReservationDeleteAfterDurationOutputReference | ComputeReservationDeleteAfterDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationDeleteAfterDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeReservationDeleteAfterDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationDeleteAfterDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface ComputeReservationReservationSharingPolicy {
  /**
  * Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#service_share_type ComputeReservation#service_share_type}
  */
  readonly serviceShareType?: string;
}

export function computeReservationReservationSharingPolicyToTerraform(struct?: ComputeReservationReservationSharingPolicyOutputReference | ComputeReservationReservationSharingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_share_type: cdktf.stringToTerraform(struct!.serviceShareType),
  }
}


export function computeReservationReservationSharingPolicyToHclTerraform(struct?: ComputeReservationReservationSharingPolicyOutputReference | ComputeReservationReservationSharingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_share_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceShareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationReservationSharingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeReservationReservationSharingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceShareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceShareType = this._serviceShareType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationReservationSharingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceShareType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceShareType = value.serviceShareType;
    }
  }

  // service_share_type - computed: true, optional: true, required: false
  private _serviceShareType?: string; 
  public get serviceShareType() {
    return this.getStringAttribute('service_share_type');
  }
  public set serviceShareType(value: string) {
    this._serviceShareType = value;
  }
  public resetServiceShareType() {
    this._serviceShareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceShareTypeInput() {
    return this._serviceShareType;
  }
}
export interface ComputeReservationShareSettingsProjectMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#id ComputeReservation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The project id/number, should be same as the key of this project config in the project map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#project_id ComputeReservation#project_id}
  */
  readonly projectId?: string;
}

export function computeReservationShareSettingsProjectMapToTerraform(struct?: ComputeReservationShareSettingsProjectMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function computeReservationShareSettingsProjectMapToHclTerraform(struct?: ComputeReservationShareSettingsProjectMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationShareSettingsProjectMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeReservationShareSettingsProjectMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationShareSettingsProjectMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._projectId = value.projectId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class ComputeReservationShareSettingsProjectMapList extends cdktf.ComplexList {
  public internalValue? : ComputeReservationShareSettingsProjectMap[] | cdktf.IResolvable

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
  public get(index: number): ComputeReservationShareSettingsProjectMapOutputReference {
    return new ComputeReservationShareSettingsProjectMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeReservationShareSettings {
  /**
  * Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#share_type ComputeReservation#share_type}
  */
  readonly shareType?: string;
  /**
  * project_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#project_map ComputeReservation#project_map}
  */
  readonly projectMap?: ComputeReservationShareSettingsProjectMap[] | cdktf.IResolvable;
}

export function computeReservationShareSettingsToTerraform(struct?: ComputeReservationShareSettingsOutputReference | ComputeReservationShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    share_type: cdktf.stringToTerraform(struct!.shareType),
    project_map: cdktf.listMapper(computeReservationShareSettingsProjectMapToTerraform, true)(struct!.projectMap),
  }
}


export function computeReservationShareSettingsToHclTerraform(struct?: ComputeReservationShareSettingsOutputReference | ComputeReservationShareSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    share_type: {
      value: cdktf.stringToHclTerraform(struct!.shareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_map: {
      value: cdktf.listMapperHcl(computeReservationShareSettingsProjectMapToHclTerraform, true)(struct!.projectMap),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeReservationShareSettingsProjectMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationShareSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeReservationShareSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareType = this._shareType;
    }
    if (this._projectMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectMap = this._projectMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationShareSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shareType = undefined;
      this._projectMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shareType = value.shareType;
      this._projectMap.internalValue = value.projectMap;
    }
  }

  // share_type - computed: true, optional: true, required: false
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  public resetShareType() {
    this._shareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
  }

  // project_map - computed: false, optional: true, required: false
  private _projectMap = new ComputeReservationShareSettingsProjectMapList(this, "project_map", true);
  public get projectMap() {
    return this._projectMap;
  }
  public putProjectMap(value: ComputeReservationShareSettingsProjectMap[] | cdktf.IResolvable) {
    this._projectMap.internalValue = value;
  }
  public resetProjectMap() {
    this._projectMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectMapInput() {
    return this._projectMap.internalValue;
  }
}
export interface ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {
  /**
  * The number of the guest accelerator cards exposed to
  * this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#accelerator_count ComputeReservation#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The full or partial URL of the accelerator type to
  * attach to this instance. For example:
  * 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'
  * 
  * If you are creating an instance template, specify only the accelerator name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#accelerator_type ComputeReservation#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}


export function computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToHclTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
    }
  }

  // accelerator_count - computed: false, optional: false, required: true
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }
}

export class ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] | cdktf.IResolvable

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
  public get(index: number): ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference {
    return new ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeReservationSpecificReservationInstancePropertiesLocalSsds {
  /**
  * The size of the disk in base-2 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#disk_size_gb ComputeReservation#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#interface ComputeReservation#interface}
  */
  readonly interface?: string;
}

export function computeReservationSpecificReservationInstancePropertiesLocalSsdsToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function computeReservationSpecificReservationInstancePropertiesLocalSsdsToHclTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeReservationSpecificReservationInstancePropertiesLocalSsds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationSpecificReservationInstancePropertiesLocalSsds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeGb = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeGb = value.diskSizeGb;
      this._interface = value.interface;
    }
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}

export class ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList extends cdktf.ComplexList {
  public internalValue? : ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] | cdktf.IResolvable

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
  public get(index: number): ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference {
    return new ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeReservationSpecificReservationInstanceProperties {
  /**
  * The name of the machine type to reserve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#machine_type ComputeReservation#machine_type}
  */
  readonly machineType: string;
  /**
  * The minimum CPU platform for the reservation. For example,
  * '"Intel Skylake"'. See
  * the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
  * for information on available CPU platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#min_cpu_platform ComputeReservation#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * guest_accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#guest_accelerators ComputeReservation#guest_accelerators}
  */
  readonly guestAccelerators?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] | cdktf.IResolvable;
  /**
  * local_ssds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#local_ssds ComputeReservation#local_ssds}
  */
  readonly localSsds?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] | cdktf.IResolvable;
}

export function computeReservationSpecificReservationInstancePropertiesToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesOutputReference | ComputeReservationSpecificReservationInstanceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    guest_accelerators: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToTerraform, true)(struct!.guestAccelerators),
    local_ssds: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesLocalSsdsToTerraform, true)(struct!.localSsds),
  }
}


export function computeReservationSpecificReservationInstancePropertiesToHclTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesOutputReference | ComputeReservationSpecificReservationInstanceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_accelerators: {
      value: cdktf.listMapperHcl(computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToHclTerraform, true)(struct!.guestAccelerators),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList",
    },
    local_ssds: {
      value: cdktf.listMapperHcl(computeReservationSpecificReservationInstancePropertiesLocalSsdsToHclTerraform, true)(struct!.localSsds),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationSpecificReservationInstancePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeReservationSpecificReservationInstanceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._guestAccelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerators = this._guestAccelerators?.internalValue;
    }
    if (this._localSsds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsds = this._localSsds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationSpecificReservationInstanceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._guestAccelerators.internalValue = undefined;
      this._localSsds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._guestAccelerators.internalValue = value.guestAccelerators;
      this._localSsds.internalValue = value.localSsds;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // guest_accelerators - computed: false, optional: true, required: false
  private _guestAccelerators = new ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }
  public putGuestAccelerators(value: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[] | cdktf.IResolvable) {
    this._guestAccelerators.internalValue = value;
  }
  public resetGuestAccelerators() {
    this._guestAccelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorsInput() {
    return this._guestAccelerators.internalValue;
  }

  // local_ssds - computed: false, optional: true, required: false
  private _localSsds = new ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList(this, "local_ssds", false);
  public get localSsds() {
    return this._localSsds;
  }
  public putLocalSsds(value: ComputeReservationSpecificReservationInstancePropertiesLocalSsds[] | cdktf.IResolvable) {
    this._localSsds.internalValue = value;
  }
  public resetLocalSsds() {
    this._localSsds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdsInput() {
    return this._localSsds.internalValue;
  }
}
export interface ComputeReservationSpecificReservation {
  /**
  * The number of resources that are allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#count ComputeReservation#count}
  */
  readonly count: number;
  /**
  * Specifies the instance template to create the reservation. If you use this field, you must exclude the
  * instanceProperties field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#source_instance_template ComputeReservation#source_instance_template}
  */
  readonly sourceInstanceTemplate?: string;
  /**
  * instance_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#instance_properties ComputeReservation#instance_properties}
  */
  readonly instanceProperties?: ComputeReservationSpecificReservationInstanceProperties;
}

export function computeReservationSpecificReservationToTerraform(struct?: ComputeReservationSpecificReservationOutputReference | ComputeReservationSpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    source_instance_template: cdktf.stringToTerraform(struct!.sourceInstanceTemplate),
    instance_properties: computeReservationSpecificReservationInstancePropertiesToTerraform(struct!.instanceProperties),
  }
}


export function computeReservationSpecificReservationToHclTerraform(struct?: ComputeReservationSpecificReservationOutputReference | ComputeReservationSpecificReservation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_instance_template: {
      value: cdktf.stringToHclTerraform(struct!.sourceInstanceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_properties: {
      value: computeReservationSpecificReservationInstancePropertiesToHclTerraform(struct!.instanceProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeReservationSpecificReservationInstancePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeReservationSpecificReservationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeReservationSpecificReservation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._sourceInstanceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInstanceTemplate = this._sourceInstanceTemplate;
    }
    if (this._instanceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProperties = this._instanceProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationSpecificReservation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._sourceInstanceTemplate = undefined;
      this._instanceProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._sourceInstanceTemplate = value.sourceInstanceTemplate;
      this._instanceProperties.internalValue = value.instanceProperties;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // in_use_count - computed: true, optional: false, required: false
  public get inUseCount() {
    return this.getNumberAttribute('in_use_count');
  }

  // source_instance_template - computed: false, optional: true, required: false
  private _sourceInstanceTemplate?: string; 
  public get sourceInstanceTemplate() {
    return this.getStringAttribute('source_instance_template');
  }
  public set sourceInstanceTemplate(value: string) {
    this._sourceInstanceTemplate = value;
  }
  public resetSourceInstanceTemplate() {
    this._sourceInstanceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceTemplateInput() {
    return this._sourceInstanceTemplate;
  }

  // instance_properties - computed: false, optional: true, required: false
  private _instanceProperties = new ComputeReservationSpecificReservationInstancePropertiesOutputReference(this, "instance_properties");
  public get instanceProperties() {
    return this._instanceProperties;
  }
  public putInstanceProperties(value: ComputeReservationSpecificReservationInstanceProperties) {
    this._instanceProperties.internalValue = value;
  }
  public resetInstanceProperties() {
    this._instanceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePropertiesInput() {
    return this._instanceProperties.internalValue;
  }
}
export interface ComputeReservationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#create ComputeReservation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#delete ComputeReservation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#update ComputeReservation#update}
  */
  readonly update?: string;
}

export function computeReservationTimeoutsToTerraform(struct?: ComputeReservationTimeouts | cdktf.IResolvable): any {
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


export function computeReservationTimeoutsToHclTerraform(struct?: ComputeReservationTimeouts | cdktf.IResolvable): any {
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

export class ComputeReservationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeReservationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeReservationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation google_compute_reservation}
*/
export class ComputeReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_reservation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeReservation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeReservation to import
  * @param importFromId The id of the existing ComputeReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeReservation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_reservation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_reservation google_compute_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeReservationConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_reservation',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._deleteAtTime = config.deleteAtTime;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._specificReservationRequired = config.specificReservationRequired;
    this._zone = config.zone;
    this._deleteAfterDuration.internalValue = config.deleteAfterDuration;
    this._reservationSharingPolicy.internalValue = config.reservationSharingPolicy;
    this._shareSettings.internalValue = config.shareSettings;
    this._specificReservation.internalValue = config.specificReservation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commitment - computed: true, optional: false, required: false
  public get commitment() {
    return this.getStringAttribute('commitment');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // delete_at_time - computed: true, optional: true, required: false
  private _deleteAtTime?: string; 
  public get deleteAtTime() {
    return this.getStringAttribute('delete_at_time');
  }
  public set deleteAtTime(value: string) {
    this._deleteAtTime = value;
  }
  public resetDeleteAtTime() {
    this._deleteAtTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAtTimeInput() {
    return this._deleteAtTime;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // specific_reservation_required - computed: false, optional: true, required: false
  private _specificReservationRequired?: boolean | cdktf.IResolvable; 
  public get specificReservationRequired() {
    return this.getBooleanAttribute('specific_reservation_required');
  }
  public set specificReservationRequired(value: boolean | cdktf.IResolvable) {
    this._specificReservationRequired = value;
  }
  public resetSpecificReservationRequired() {
    this._specificReservationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationRequiredInput() {
    return this._specificReservationRequired;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // delete_after_duration - computed: false, optional: true, required: false
  private _deleteAfterDuration = new ComputeReservationDeleteAfterDurationOutputReference(this, "delete_after_duration");
  public get deleteAfterDuration() {
    return this._deleteAfterDuration;
  }
  public putDeleteAfterDuration(value: ComputeReservationDeleteAfterDuration) {
    this._deleteAfterDuration.internalValue = value;
  }
  public resetDeleteAfterDuration() {
    this._deleteAfterDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDurationInput() {
    return this._deleteAfterDuration.internalValue;
  }

  // reservation_sharing_policy - computed: false, optional: true, required: false
  private _reservationSharingPolicy = new ComputeReservationReservationSharingPolicyOutputReference(this, "reservation_sharing_policy");
  public get reservationSharingPolicy() {
    return this._reservationSharingPolicy;
  }
  public putReservationSharingPolicy(value: ComputeReservationReservationSharingPolicy) {
    this._reservationSharingPolicy.internalValue = value;
  }
  public resetReservationSharingPolicy() {
    this._reservationSharingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationSharingPolicyInput() {
    return this._reservationSharingPolicy.internalValue;
  }

  // share_settings - computed: false, optional: true, required: false
  private _shareSettings = new ComputeReservationShareSettingsOutputReference(this, "share_settings");
  public get shareSettings() {
    return this._shareSettings;
  }
  public putShareSettings(value: ComputeReservationShareSettings) {
    this._shareSettings.internalValue = value;
  }
  public resetShareSettings() {
    this._shareSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSettingsInput() {
    return this._shareSettings.internalValue;
  }

  // specific_reservation - computed: false, optional: false, required: true
  private _specificReservation = new ComputeReservationSpecificReservationOutputReference(this, "specific_reservation");
  public get specificReservation() {
    return this._specificReservation;
  }
  public putSpecificReservation(value: ComputeReservationSpecificReservation) {
    this._specificReservation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationInput() {
    return this._specificReservation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeReservationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeReservationTimeouts) {
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
      delete_at_time: cdktf.stringToTerraform(this._deleteAtTime),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      specific_reservation_required: cdktf.booleanToTerraform(this._specificReservationRequired),
      zone: cdktf.stringToTerraform(this._zone),
      delete_after_duration: computeReservationDeleteAfterDurationToTerraform(this._deleteAfterDuration.internalValue),
      reservation_sharing_policy: computeReservationReservationSharingPolicyToTerraform(this._reservationSharingPolicy.internalValue),
      share_settings: computeReservationShareSettingsToTerraform(this._shareSettings.internalValue),
      specific_reservation: computeReservationSpecificReservationToTerraform(this._specificReservation.internalValue),
      timeouts: computeReservationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_at_time: {
        value: cdktf.stringToHclTerraform(this._deleteAtTime),
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
      specific_reservation_required: {
        value: cdktf.booleanToHclTerraform(this._specificReservationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_after_duration: {
        value: computeReservationDeleteAfterDurationToHclTerraform(this._deleteAfterDuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeReservationDeleteAfterDurationList",
      },
      reservation_sharing_policy: {
        value: computeReservationReservationSharingPolicyToHclTerraform(this._reservationSharingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeReservationReservationSharingPolicyList",
      },
      share_settings: {
        value: computeReservationShareSettingsToHclTerraform(this._shareSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeReservationShareSettingsList",
      },
      specific_reservation: {
        value: computeReservationSpecificReservationToHclTerraform(this._specificReservation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeReservationSpecificReservationList",
      },
      timeouts: {
        value: computeReservationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeReservationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
