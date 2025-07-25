/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#description ComputeResourcePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#id ComputeResourcePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the resource, provided by the client when initially creating
  * the resource. The resource name must be 1-63 characters long, and comply
  * with RFC1035. Specifically, the name must be 1-63 characters long and
  * match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])'? which means the
  * first character must be a lowercase letter, and all following characters
  * must be a dash, lowercase letter, or digit, except the last character,
  * which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#name ComputeResourcePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#project ComputeResourcePolicy#project}
  */
  readonly project?: string;
  /**
  * Region where resource policy resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#region ComputeResourcePolicy#region}
  */
  readonly region?: string;
  /**
  * disk_consistency_group_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#disk_consistency_group_policy ComputeResourcePolicy#disk_consistency_group_policy}
  */
  readonly diskConsistencyGroupPolicy?: ComputeResourcePolicyDiskConsistencyGroupPolicy;
  /**
  * group_placement_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#group_placement_policy ComputeResourcePolicy#group_placement_policy}
  */
  readonly groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy;
  /**
  * instance_schedule_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#instance_schedule_policy ComputeResourcePolicy#instance_schedule_policy}
  */
  readonly instanceSchedulePolicy?: ComputeResourcePolicyInstanceSchedulePolicy;
  /**
  * snapshot_schedule_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#snapshot_schedule_policy ComputeResourcePolicy#snapshot_schedule_policy}
  */
  readonly snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#timeouts ComputeResourcePolicy#timeouts}
  */
  readonly timeouts?: ComputeResourcePolicyTimeouts;
  /**
  * workload_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#workload_policy ComputeResourcePolicy#workload_policy}
  */
  readonly workloadPolicy?: ComputeResourcePolicyWorkloadPolicy;
}
export interface ComputeResourcePolicyDiskConsistencyGroupPolicy {
  /**
  * Enable disk consistency on the resource policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#enabled ComputeResourcePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function computeResourcePolicyDiskConsistencyGroupPolicyToTerraform(struct?: ComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference | ComputeResourcePolicyDiskConsistencyGroupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function computeResourcePolicyDiskConsistencyGroupPolicyToHclTerraform(struct?: ComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference | ComputeResourcePolicyDiskConsistencyGroupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicyDiskConsistencyGroupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicyDiskConsistencyGroupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ComputeResourcePolicyGroupPlacementPolicy {
  /**
  * The number of availability domains instances will be spread across. If two instances are in different
  * availability domain, they will not be put in the same low latency network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#availability_domain_count ComputeResourcePolicy#availability_domain_count}
  */
  readonly availabilityDomainCount?: number;
  /**
  * Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
  * Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
  * with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
  * attached. Possible values: ["COLLOCATED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#collocation ComputeResourcePolicy#collocation}
  */
  readonly collocation?: string;
  /**
  * Specifies the shape of the GPU slice, in slice based GPU families eg. A4X.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#gpu_topology ComputeResourcePolicy#gpu_topology}
  */
  readonly gpuTopology?: string;
  /**
  * Number of VMs in this placement group. Google does not recommend that you use this field
  * unless you use a compact policy and you want your policy to work only if it contains this
  * exact number of VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#vm_count ComputeResourcePolicy#vm_count}
  */
  readonly vmCount?: number;
}

export function computeResourcePolicyGroupPlacementPolicyToTerraform(struct?: ComputeResourcePolicyGroupPlacementPolicyOutputReference | ComputeResourcePolicyGroupPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain_count: cdktf.numberToTerraform(struct!.availabilityDomainCount),
    collocation: cdktf.stringToTerraform(struct!.collocation),
    gpu_topology: cdktf.stringToTerraform(struct!.gpuTopology),
    vm_count: cdktf.numberToTerraform(struct!.vmCount),
  }
}


export function computeResourcePolicyGroupPlacementPolicyToHclTerraform(struct?: ComputeResourcePolicyGroupPlacementPolicyOutputReference | ComputeResourcePolicyGroupPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain_count: {
      value: cdktf.numberToHclTerraform(struct!.availabilityDomainCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collocation: {
      value: cdktf.stringToHclTerraform(struct!.collocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.gpuTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_count: {
      value: cdktf.numberToHclTerraform(struct!.vmCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicyGroupPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicyGroupPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomainCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomainCount = this._availabilityDomainCount;
    }
    if (this._collocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collocation = this._collocation;
    }
    if (this._gpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuTopology = this._gpuTopology;
    }
    if (this._vmCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCount = this._vmCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicyGroupPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomainCount = undefined;
      this._collocation = undefined;
      this._gpuTopology = undefined;
      this._vmCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomainCount = value.availabilityDomainCount;
      this._collocation = value.collocation;
      this._gpuTopology = value.gpuTopology;
      this._vmCount = value.vmCount;
    }
  }

  // availability_domain_count - computed: false, optional: true, required: false
  private _availabilityDomainCount?: number; 
  public get availabilityDomainCount() {
    return this.getNumberAttribute('availability_domain_count');
  }
  public set availabilityDomainCount(value: number) {
    this._availabilityDomainCount = value;
  }
  public resetAvailabilityDomainCount() {
    this._availabilityDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainCountInput() {
    return this._availabilityDomainCount;
  }

  // collocation - computed: false, optional: true, required: false
  private _collocation?: string; 
  public get collocation() {
    return this.getStringAttribute('collocation');
  }
  public set collocation(value: string) {
    this._collocation = value;
  }
  public resetCollocation() {
    this._collocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collocationInput() {
    return this._collocation;
  }

  // gpu_topology - computed: false, optional: true, required: false
  private _gpuTopology?: string; 
  public get gpuTopology() {
    return this.getStringAttribute('gpu_topology');
  }
  public set gpuTopology(value: string) {
    this._gpuTopology = value;
  }
  public resetGpuTopology() {
    this._gpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTopologyInput() {
    return this._gpuTopology;
  }

  // vm_count - computed: false, optional: true, required: false
  private _vmCount?: number; 
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
  public set vmCount(value: number) {
    this._vmCount = value;
  }
  public resetVmCount() {
    this._vmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCountInput() {
    return this._vmCount;
  }
}
export interface ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule {
  /**
  * Specifies the frequency for the operation, using the unix-cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: string;
}

export function computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference | ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToHclTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference | ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule = value.schedule;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule {
  /**
  * Specifies the frequency for the operation, using the unix-cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: string;
}

export function computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference | ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToHclTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference | ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule = value.schedule;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface ComputeResourcePolicyInstanceSchedulePolicy {
  /**
  * The expiration time of the schedule. The timestamp is an RFC3339 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#expiration_time ComputeResourcePolicy#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * The start time of the schedule. The timestamp is an RFC3339 string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
  * from the tz database: http://en.wikipedia.org/wiki/Tz_database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#time_zone ComputeResourcePolicy#time_zone}
  */
  readonly timeZone: string;
  /**
  * vm_start_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#vm_start_schedule ComputeResourcePolicy#vm_start_schedule}
  */
  readonly vmStartSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;
  /**
  * vm_stop_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#vm_stop_schedule ComputeResourcePolicy#vm_stop_schedule}
  */
  readonly vmStopSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;
}

export function computeResourcePolicyInstanceSchedulePolicyToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyOutputReference | ComputeResourcePolicyInstanceSchedulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    vm_start_schedule: computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToTerraform(struct!.vmStartSchedule),
    vm_stop_schedule: computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToTerraform(struct!.vmStopSchedule),
  }
}


export function computeResourcePolicyInstanceSchedulePolicyToHclTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyOutputReference | ComputeResourcePolicyInstanceSchedulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_start_schedule: {
      value: computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToHclTerraform(struct!.vmStartSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList",
    },
    vm_stop_schedule: {
      value: computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToHclTerraform(struct!.vmStopSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicyInstanceSchedulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicyInstanceSchedulePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._vmStartSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmStartSchedule = this._vmStartSchedule?.internalValue;
    }
    if (this._vmStopSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmStopSchedule = this._vmStopSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicyInstanceSchedulePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
      this._vmStartSchedule.internalValue = undefined;
      this._vmStopSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationTime = value.expirationTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
      this._vmStartSchedule.internalValue = value.vmStartSchedule;
      this._vmStopSchedule.internalValue = value.vmStopSchedule;
    }
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // vm_start_schedule - computed: false, optional: true, required: false
  private _vmStartSchedule = new ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(this, "vm_start_schedule");
  public get vmStartSchedule() {
    return this._vmStartSchedule;
  }
  public putVmStartSchedule(value: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule) {
    this._vmStartSchedule.internalValue = value;
  }
  public resetVmStartSchedule() {
    this._vmStartSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStartScheduleInput() {
    return this._vmStartSchedule.internalValue;
  }

  // vm_stop_schedule - computed: false, optional: true, required: false
  private _vmStopSchedule = new ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(this, "vm_stop_schedule");
  public get vmStopSchedule() {
    return this._vmStopSchedule;
  }
  public putVmStopSchedule(value: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule) {
    this._vmStopSchedule.internalValue = value;
  }
  public resetVmStopSchedule() {
    this._vmStopSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStopScheduleInput() {
    return this._vmStopSchedule.internalValue;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy {
  /**
  * Maximum age of the snapshot that is allowed to be kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#max_retention_days ComputeResourcePolicy#max_retention_days}
  */
  readonly maxRetentionDays: number;
  /**
  * Specifies the behavior to apply to scheduled snapshots when
  * the source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#on_source_disk_delete ComputeResourcePolicy#on_source_disk_delete}
  */
  readonly onSourceDiskDelete?: string;
}

export function computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference | ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retention_days: cdktf.numberToTerraform(struct!.maxRetentionDays),
    on_source_disk_delete: cdktf.stringToTerraform(struct!.onSourceDiskDelete),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference | ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.maxRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_source_disk_delete: {
      value: cdktf.stringToHclTerraform(struct!.onSourceDiskDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetentionDays = this._maxRetentionDays;
    }
    if (this._onSourceDiskDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSourceDiskDelete = this._onSourceDiskDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRetentionDays = undefined;
      this._onSourceDiskDelete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRetentionDays = value.maxRetentionDays;
      this._onSourceDiskDelete = value.onSourceDiskDelete;
    }
  }

  // max_retention_days - computed: false, optional: false, required: true
  private _maxRetentionDays?: number; 
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }
  public set maxRetentionDays(value: number) {
    this._maxRetentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetentionDaysInput() {
    return this._maxRetentionDays;
  }

  // on_source_disk_delete - computed: false, optional: true, required: false
  private _onSourceDiskDelete?: string; 
  public get onSourceDiskDelete() {
    return this.getStringAttribute('on_source_disk_delete');
  }
  public set onSourceDiskDelete(value: string) {
    this._onSourceDiskDelete = value;
  }
  public resetOnSourceDiskDelete() {
    this._onSourceDiskDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSourceDiskDeleteInput() {
    return this._onSourceDiskDelete;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule {
  /**
  * Defines a schedule with units measured in days. The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#days_in_cycle ComputeResourcePolicy#days_in_cycle}
  */
  readonly daysInCycle: number;
  /**
  * This must be in UTC format that resolves to one of
  * 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,
  * both 13:00-5 and 08:00 are valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime: string;
}

export function computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_in_cycle: cdktf.numberToTerraform(struct!.daysInCycle),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_in_cycle: {
      value: cdktf.numberToHclTerraform(struct!.daysInCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysInCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysInCycle = this._daysInCycle;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysInCycle = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysInCycle = value.daysInCycle;
      this._startTime = value.startTime;
    }
  }

  // days_in_cycle - computed: false, optional: false, required: true
  private _daysInCycle?: number; 
  public get daysInCycle() {
    return this.getNumberAttribute('days_in_cycle');
  }
  public set daysInCycle(value: number) {
    this._daysInCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInCycleInput() {
    return this._daysInCycle;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
  /**
  * The number of hours between snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#hours_in_cycle ComputeResourcePolicy#hours_in_cycle}
  */
  readonly hoursInCycle: number;
  /**
  * Time within the window to start the operations.
  * It must be in an hourly format "HH:MM",
  * where HH : [00-23] and MM : [00] GMT. eg: 21:00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime: string;
}

export function computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours_in_cycle: cdktf.numberToTerraform(struct!.hoursInCycle),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours_in_cycle: {
      value: cdktf.numberToHclTerraform(struct!.hoursInCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hoursInCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursInCycle = this._hoursInCycle;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hoursInCycle = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hoursInCycle = value.hoursInCycle;
      this._startTime = value.startTime;
    }
  }

  // hours_in_cycle - computed: false, optional: false, required: true
  private _hoursInCycle?: number; 
  public get hoursInCycle() {
    return this.getNumberAttribute('hours_in_cycle');
  }
  public set hoursInCycle(value: number) {
    this._hoursInCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInCycleInput() {
    return this._hoursInCycle;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks {
  /**
  * The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#day ComputeResourcePolicy#day}
  */
  readonly day: string;
  /**
  * Time within the window to start the operations.
  * It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime: string;
}

export function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime = value.startTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList extends cdktf.ComplexList {
  public internalValue? : ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[] | cdktf.IResolvable

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
  public get(index: number): ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference {
    return new ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  /**
  * day_of_weeks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#day_of_weeks ComputeResourcePolicy#day_of_weeks}
  */
  readonly dayOfWeeks: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[] | cdktf.IResolvable;
}

export function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_weeks: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToTerraform, true)(struct!.dayOfWeeks),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_weeks: {
      value: cdktf.listMapperHcl(computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToHclTerraform, true)(struct!.dayOfWeeks),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeeks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeeks = this._dayOfWeeks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeeks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeeks.internalValue = value.dayOfWeeks;
    }
  }

  // day_of_weeks - computed: false, optional: false, required: true
  private _dayOfWeeks = new ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(this, "day_of_weeks", true);
  public get dayOfWeeks() {
    return this._dayOfWeeks;
  }
  public putDayOfWeeks(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[] | cdktf.IResolvable) {
    this._dayOfWeeks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeeksInput() {
    return this._dayOfWeeks.internalValue;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicySchedule {
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#daily_schedule ComputeResourcePolicy#daily_schedule}
  */
  readonly dailySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
  /**
  * hourly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#hourly_schedule ComputeResourcePolicy#hourly_schedule}
  */
  readonly hourlySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#weekly_schedule ComputeResourcePolicy#weekly_schedule}
  */
  readonly weeklySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
}

export function computeResourcePolicySnapshotSchedulePolicyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_schedule: computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToTerraform(struct!.dailySchedule),
    hourly_schedule: computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToTerraform(struct!.hourlySchedule),
    weekly_schedule: computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyScheduleToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_schedule: {
      value: computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList",
    },
    hourly_schedule: {
      value: computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToHclTerraform(struct!.hourlySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList",
    },
    weekly_schedule: {
      value: computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._hourlySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourlySchedule = this._hourlySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailySchedule.internalValue = undefined;
      this._hourlySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._hourlySchedule.internalValue = value.hourlySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // hourly_schedule - computed: false, optional: true, required: false
  private _hourlySchedule = new ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(this, "hourly_schedule");
  public get hourlySchedule() {
    return this._hourlySchedule;
  }
  public putHourlySchedule(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule) {
    this._hourlySchedule.internalValue = value;
  }
  public resetHourlySchedule() {
    this._hourlySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyScheduleInput() {
    return this._hourlySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties {
  /**
  * Creates the new snapshot in the snapshot chain labeled with the
  * specified name. The chain name must be 1-63 characters long and comply
  * with RFC1035.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#chain_name ComputeResourcePolicy#chain_name}
  */
  readonly chainName?: string;
  /**
  * Whether to perform a 'guest aware' snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#guest_flush ComputeResourcePolicy#guest_flush}
  */
  readonly guestFlush?: boolean | cdktf.IResolvable;
  /**
  * A set of key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#labels ComputeResourcePolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cloud Storage bucket location to store the auto snapshot
  * (regional or multi-regional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#storage_locations ComputeResourcePolicy#storage_locations}
  */
  readonly storageLocations?: string[];
}

export function computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference | ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chain_name: cdktf.stringToTerraform(struct!.chainName),
    guest_flush: cdktf.booleanToTerraform(struct!.guestFlush),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    storage_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageLocations),
  }
}


export function computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference | ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chain_name: {
      value: cdktf.stringToHclTerraform(struct!.chainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_flush: {
      value: cdktf.booleanToHclTerraform(struct!.guestFlush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainName = this._chainName;
    }
    if (this._guestFlush !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestFlush = this._guestFlush;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._storageLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocations = this._storageLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chainName = undefined;
      this._guestFlush = undefined;
      this._labels = undefined;
      this._storageLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chainName = value.chainName;
      this._guestFlush = value.guestFlush;
      this._labels = value.labels;
      this._storageLocations = value.storageLocations;
    }
  }

  // chain_name - computed: false, optional: true, required: false
  private _chainName?: string; 
  public get chainName() {
    return this.getStringAttribute('chain_name');
  }
  public set chainName(value: string) {
    this._chainName = value;
  }
  public resetChainName() {
    this._chainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainNameInput() {
    return this._chainName;
  }

  // guest_flush - computed: false, optional: true, required: false
  private _guestFlush?: boolean | cdktf.IResolvable; 
  public get guestFlush() {
    return this.getBooleanAttribute('guest_flush');
  }
  public set guestFlush(value: boolean | cdktf.IResolvable) {
    this._guestFlush = value;
  }
  public resetGuestFlush() {
    this._guestFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFlushInput() {
    return this._guestFlush;
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

  // storage_locations - computed: false, optional: true, required: false
  private _storageLocations?: string[]; 
  public get storageLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_locations'));
  }
  public set storageLocations(value: string[]) {
    this._storageLocations = value;
  }
  public resetStorageLocations() {
    this._storageLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationsInput() {
    return this._storageLocations;
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicy {
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#retention_policy ComputeResourcePolicy#retention_policy}
  */
  readonly retentionPolicy?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: ComputeResourcePolicySnapshotSchedulePolicySchedule;
  /**
  * snapshot_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#snapshot_properties ComputeResourcePolicy#snapshot_properties}
  */
  readonly snapshotProperties?: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;
}

export function computeResourcePolicySnapshotSchedulePolicyToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyOutputReference | ComputeResourcePolicySnapshotSchedulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_policy: computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToTerraform(struct!.retentionPolicy),
    schedule: computeResourcePolicySnapshotSchedulePolicyScheduleToTerraform(struct!.schedule),
    snapshot_properties: computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToTerraform(struct!.snapshotProperties),
  }
}


export function computeResourcePolicySnapshotSchedulePolicyToHclTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyOutputReference | ComputeResourcePolicySnapshotSchedulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_policy: {
      value: computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToHclTerraform(struct!.retentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList",
    },
    schedule: {
      value: computeResourcePolicySnapshotSchedulePolicyScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyScheduleList",
    },
    snapshot_properties: {
      value: computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToHclTerraform(struct!.snapshotProperties),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicySnapshotSchedulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicySnapshotSchedulePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._snapshotProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotProperties = this._snapshotProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicySnapshotSchedulePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPolicy.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._snapshotProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPolicy.internalValue = value.retentionPolicy;
      this._schedule.internalValue = value.schedule;
      this._snapshotProperties.internalValue = value.snapshotProperties;
    }
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ComputeResourcePolicySnapshotSchedulePolicySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // snapshot_properties - computed: false, optional: true, required: false
  private _snapshotProperties = new ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(this, "snapshot_properties");
  public get snapshotProperties() {
    return this._snapshotProperties;
  }
  public putSnapshotProperties(value: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties) {
    this._snapshotProperties.internalValue = value;
  }
  public resetSnapshotProperties() {
    this._snapshotProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPropertiesInput() {
    return this._snapshotProperties.internalValue;
  }
}
export interface ComputeResourcePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#create ComputeResourcePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#delete ComputeResourcePolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#update ComputeResourcePolicy#update}
  */
  readonly update?: string;
}

export function computeResourcePolicyTimeoutsToTerraform(struct?: ComputeResourcePolicyTimeouts | cdktf.IResolvable): any {
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


export function computeResourcePolicyTimeoutsToHclTerraform(struct?: ComputeResourcePolicyTimeouts | cdktf.IResolvable): any {
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

export class ComputeResourcePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeResourcePolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeResourcePolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface ComputeResourcePolicyWorkloadPolicy {
  /**
  * The accelerator topology. This field can be set only when the workload policy type is HIGH_THROUGHPUT
  * and cannot be set if max topology distance is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#accelerator_topology ComputeResourcePolicy#accelerator_topology}
  */
  readonly acceleratorTopology?: string;
  /**
  * The maximum topology distance. This field can be set only when the workload policy type is HIGH_THROUGHPUT
  * and cannot be set if accelerator topology is set. Possible values: ["BLOCK", "CLUSTER", "SUBBLOCK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#max_topology_distance ComputeResourcePolicy#max_topology_distance}
  */
  readonly maxTopologyDistance?: string;
  /**
  * The type of workload policy. Possible values: ["HIGH_AVAILABILITY", "HIGH_THROUGHPUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#type ComputeResourcePolicy#type}
  */
  readonly type: string;
}

export function computeResourcePolicyWorkloadPolicyToTerraform(struct?: ComputeResourcePolicyWorkloadPolicyOutputReference | ComputeResourcePolicyWorkloadPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_topology: cdktf.stringToTerraform(struct!.acceleratorTopology),
    max_topology_distance: cdktf.stringToTerraform(struct!.maxTopologyDistance),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function computeResourcePolicyWorkloadPolicyToHclTerraform(struct?: ComputeResourcePolicyWorkloadPolicyOutputReference | ComputeResourcePolicyWorkloadPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_topology: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_topology_distance: {
      value: cdktf.stringToHclTerraform(struct!.maxTopologyDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeResourcePolicyWorkloadPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeResourcePolicyWorkloadPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorTopology = this._acceleratorTopology;
    }
    if (this._maxTopologyDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTopologyDistance = this._maxTopologyDistance;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeResourcePolicyWorkloadPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorTopology = undefined;
      this._maxTopologyDistance = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorTopology = value.acceleratorTopology;
      this._maxTopologyDistance = value.maxTopologyDistance;
      this._type = value.type;
    }
  }

  // accelerator_topology - computed: false, optional: true, required: false
  private _acceleratorTopology?: string; 
  public get acceleratorTopology() {
    return this.getStringAttribute('accelerator_topology');
  }
  public set acceleratorTopology(value: string) {
    this._acceleratorTopology = value;
  }
  public resetAcceleratorTopology() {
    this._acceleratorTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTopologyInput() {
    return this._acceleratorTopology;
  }

  // max_topology_distance - computed: false, optional: true, required: false
  private _maxTopologyDistance?: string; 
  public get maxTopologyDistance() {
    return this.getStringAttribute('max_topology_distance');
  }
  public set maxTopologyDistance(value: string) {
    this._maxTopologyDistance = value;
  }
  public resetMaxTopologyDistance() {
    this._maxTopologyDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTopologyDistanceInput() {
    return this._maxTopologyDistance;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy google_compute_resource_policy}
*/
export class ComputeResourcePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_resource_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeResourcePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeResourcePolicy to import
  * @param importFromId The id of the existing ComputeResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeResourcePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_resource_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_resource_policy google_compute_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_resource_policy',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._diskConsistencyGroupPolicy.internalValue = config.diskConsistencyGroupPolicy;
    this._groupPlacementPolicy.internalValue = config.groupPlacementPolicy;
    this._instanceSchedulePolicy.internalValue = config.instanceSchedulePolicy;
    this._snapshotSchedulePolicy.internalValue = config.snapshotSchedulePolicy;
    this._timeouts.internalValue = config.timeouts;
    this._workloadPolicy.internalValue = config.workloadPolicy;
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

  // disk_consistency_group_policy - computed: false, optional: true, required: false
  private _diskConsistencyGroupPolicy = new ComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference(this, "disk_consistency_group_policy");
  public get diskConsistencyGroupPolicy() {
    return this._diskConsistencyGroupPolicy;
  }
  public putDiskConsistencyGroupPolicy(value: ComputeResourcePolicyDiskConsistencyGroupPolicy) {
    this._diskConsistencyGroupPolicy.internalValue = value;
  }
  public resetDiskConsistencyGroupPolicy() {
    this._diskConsistencyGroupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConsistencyGroupPolicyInput() {
    return this._diskConsistencyGroupPolicy.internalValue;
  }

  // group_placement_policy - computed: false, optional: true, required: false
  private _groupPlacementPolicy = new ComputeResourcePolicyGroupPlacementPolicyOutputReference(this, "group_placement_policy");
  public get groupPlacementPolicy() {
    return this._groupPlacementPolicy;
  }
  public putGroupPlacementPolicy(value: ComputeResourcePolicyGroupPlacementPolicy) {
    this._groupPlacementPolicy.internalValue = value;
  }
  public resetGroupPlacementPolicy() {
    this._groupPlacementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPlacementPolicyInput() {
    return this._groupPlacementPolicy.internalValue;
  }

  // instance_schedule_policy - computed: false, optional: true, required: false
  private _instanceSchedulePolicy = new ComputeResourcePolicyInstanceSchedulePolicyOutputReference(this, "instance_schedule_policy");
  public get instanceSchedulePolicy() {
    return this._instanceSchedulePolicy;
  }
  public putInstanceSchedulePolicy(value: ComputeResourcePolicyInstanceSchedulePolicy) {
    this._instanceSchedulePolicy.internalValue = value;
  }
  public resetInstanceSchedulePolicy() {
    this._instanceSchedulePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSchedulePolicyInput() {
    return this._instanceSchedulePolicy.internalValue;
  }

  // snapshot_schedule_policy - computed: false, optional: true, required: false
  private _snapshotSchedulePolicy = new ComputeResourcePolicySnapshotSchedulePolicyOutputReference(this, "snapshot_schedule_policy");
  public get snapshotSchedulePolicy() {
    return this._snapshotSchedulePolicy;
  }
  public putSnapshotSchedulePolicy(value: ComputeResourcePolicySnapshotSchedulePolicy) {
    this._snapshotSchedulePolicy.internalValue = value;
  }
  public resetSnapshotSchedulePolicy() {
    this._snapshotSchedulePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSchedulePolicyInput() {
    return this._snapshotSchedulePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeResourcePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeResourcePolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload_policy - computed: false, optional: true, required: false
  private _workloadPolicy = new ComputeResourcePolicyWorkloadPolicyOutputReference(this, "workload_policy");
  public get workloadPolicy() {
    return this._workloadPolicy;
  }
  public putWorkloadPolicy(value: ComputeResourcePolicyWorkloadPolicy) {
    this._workloadPolicy.internalValue = value;
  }
  public resetWorkloadPolicy() {
    this._workloadPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPolicyInput() {
    return this._workloadPolicy.internalValue;
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
      region: cdktf.stringToTerraform(this._region),
      disk_consistency_group_policy: computeResourcePolicyDiskConsistencyGroupPolicyToTerraform(this._diskConsistencyGroupPolicy.internalValue),
      group_placement_policy: computeResourcePolicyGroupPlacementPolicyToTerraform(this._groupPlacementPolicy.internalValue),
      instance_schedule_policy: computeResourcePolicyInstanceSchedulePolicyToTerraform(this._instanceSchedulePolicy.internalValue),
      snapshot_schedule_policy: computeResourcePolicySnapshotSchedulePolicyToTerraform(this._snapshotSchedulePolicy.internalValue),
      timeouts: computeResourcePolicyTimeoutsToTerraform(this._timeouts.internalValue),
      workload_policy: computeResourcePolicyWorkloadPolicyToTerraform(this._workloadPolicy.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_consistency_group_policy: {
        value: computeResourcePolicyDiskConsistencyGroupPolicyToHclTerraform(this._diskConsistencyGroupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeResourcePolicyDiskConsistencyGroupPolicyList",
      },
      group_placement_policy: {
        value: computeResourcePolicyGroupPlacementPolicyToHclTerraform(this._groupPlacementPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeResourcePolicyGroupPlacementPolicyList",
      },
      instance_schedule_policy: {
        value: computeResourcePolicyInstanceSchedulePolicyToHclTerraform(this._instanceSchedulePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeResourcePolicyInstanceSchedulePolicyList",
      },
      snapshot_schedule_policy: {
        value: computeResourcePolicySnapshotSchedulePolicyToHclTerraform(this._snapshotSchedulePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeResourcePolicySnapshotSchedulePolicyList",
      },
      timeouts: {
        value: computeResourcePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeResourcePolicyTimeouts",
      },
      workload_policy: {
        value: computeResourcePolicyWorkloadPolicyToHclTerraform(this._workloadPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeResourcePolicyWorkloadPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
