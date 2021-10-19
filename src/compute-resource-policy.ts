// https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeResourcePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when you create the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#description ComputeResourcePolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the resource, provided by the client when initially creating
the resource. The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#name ComputeResourcePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#project ComputeResourcePolicy#project}
  */
  readonly project?: string;
  /**
  * Region where resource policy resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#region ComputeResourcePolicy#region}
  */
  readonly region?: string;
  /**
  * group_placement_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#group_placement_policy ComputeResourcePolicy#group_placement_policy}
  */
  readonly groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy;
  /**
  * instance_schedule_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#instance_schedule_policy ComputeResourcePolicy#instance_schedule_policy}
  */
  readonly instanceSchedulePolicy?: ComputeResourcePolicyInstanceSchedulePolicy;
  /**
  * snapshot_schedule_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#snapshot_schedule_policy ComputeResourcePolicy#snapshot_schedule_policy}
  */
  readonly snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#timeouts ComputeResourcePolicy#timeouts}
  */
  readonly timeouts?: ComputeResourcePolicyTimeouts;
}
export interface ComputeResourcePolicyGroupPlacementPolicy {
  /**
  * The number of availability domains instances will be spread across. If two instances are in different
availability domain, they will not be put in the same low latency network
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#availability_domain_count ComputeResourcePolicy#availability_domain_count}
  */
  readonly availabilityDomainCount?: number;
  /**
  * Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
attached. Possible values: ["COLLOCATED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#collocation ComputeResourcePolicy#collocation}
  */
  readonly collocation?: string;
  /**
  * Number of vms in this placement group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#vm_count ComputeResourcePolicy#vm_count}
  */
  readonly vmCount?: number;
}

function computeResourcePolicyGroupPlacementPolicyToTerraform(struct?: ComputeResourcePolicyGroupPlacementPolicyOutputReference | ComputeResourcePolicyGroupPlacementPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain_count: cdktf.numberToTerraform(struct!.availabilityDomainCount),
    collocation: cdktf.stringToTerraform(struct!.collocation),
    vm_count: cdktf.numberToTerraform(struct!.vmCount),
  }
}

export class ComputeResourcePolicyGroupPlacementPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // availability_domain_count - computed: false, optional: true, required: false
  private _availabilityDomainCount?: number | undefined; 
  public get availabilityDomainCount() {
    return this.getNumberAttribute('availability_domain_count');
  }
  public set availabilityDomainCount(value: number | undefined) {
    this._availabilityDomainCount = value;
  }
  public resetAvailabilityDomainCount() {
    this._availabilityDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainCountInput() {
    return this._availabilityDomainCount
  }

  // collocation - computed: false, optional: true, required: false
  private _collocation?: string | undefined; 
  public get collocation() {
    return this.getStringAttribute('collocation');
  }
  public set collocation(value: string | undefined) {
    this._collocation = value;
  }
  public resetCollocation() {
    this._collocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collocationInput() {
    return this._collocation
  }

  // vm_count - computed: false, optional: true, required: false
  private _vmCount?: number | undefined; 
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
  public set vmCount(value: number | undefined) {
    this._vmCount = value;
  }
  public resetVmCount() {
    this._vmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCountInput() {
    return this._vmCount
  }
}
export interface ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule {
  /**
  * Specifies the frequency for the operation, using the unix-cron format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: string;
}

function computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference | ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}

export class ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._schedule
  }
}
export interface ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule {
  /**
  * Specifies the frequency for the operation, using the unix-cron format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: string;
}

function computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference | ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}

export class ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._schedule
  }
}
export interface ComputeResourcePolicyInstanceSchedulePolicy {
  /**
  * The expiration time of the schedule. The timestamp is an RFC3339 string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#expiration_time ComputeResourcePolicy#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * The start time of the schedule. The timestamp is an RFC3339 string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime?: string;
  /**
  * Specifies the time zone to be used in interpreting the schedule. The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#time_zone ComputeResourcePolicy#time_zone}
  */
  readonly timeZone: string;
  /**
  * vm_start_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#vm_start_schedule ComputeResourcePolicy#vm_start_schedule}
  */
  readonly vmStartSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;
  /**
  * vm_stop_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#vm_stop_schedule ComputeResourcePolicy#vm_stop_schedule}
  */
  readonly vmStopSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;
}

function computeResourcePolicyInstanceSchedulePolicyToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyOutputReference | ComputeResourcePolicyInstanceSchedulePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class ComputeResourcePolicyInstanceSchedulePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string | undefined; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string | undefined) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
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
    return this._timeZone
  }

  // vm_start_schedule - computed: false, optional: true, required: false
  private _vmStartSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule | undefined; 
  private __vmStartScheduleOutput = new ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(this as any, "vm_start_schedule", true);
  public get vmStartSchedule() {
    return this.__vmStartScheduleOutput;
  }
  public putVmStartSchedule(value: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule | undefined) {
    this._vmStartSchedule = value;
  }
  public resetVmStartSchedule() {
    this._vmStartSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStartScheduleInput() {
    return this._vmStartSchedule
  }

  // vm_stop_schedule - computed: false, optional: true, required: false
  private _vmStopSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule | undefined; 
  private __vmStopScheduleOutput = new ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(this as any, "vm_stop_schedule", true);
  public get vmStopSchedule() {
    return this.__vmStopScheduleOutput;
  }
  public putVmStopSchedule(value: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule | undefined) {
    this._vmStopSchedule = value;
  }
  public resetVmStopSchedule() {
    this._vmStopSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStopScheduleInput() {
    return this._vmStopSchedule
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy {
  /**
  * Maximum age of the snapshot that is allowed to be kept.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#max_retention_days ComputeResourcePolicy#max_retention_days}
  */
  readonly maxRetentionDays: number;
  /**
  * Specifies the behavior to apply to scheduled snapshots when
the source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#on_source_disk_delete ComputeResourcePolicy#on_source_disk_delete}
  */
  readonly onSourceDiskDelete?: string;
}

function computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference | ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retention_days: cdktf.numberToTerraform(struct!.maxRetentionDays),
    on_source_disk_delete: cdktf.stringToTerraform(struct!.onSourceDiskDelete),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._maxRetentionDays
  }

  // on_source_disk_delete - computed: false, optional: true, required: false
  private _onSourceDiskDelete?: string | undefined; 
  public get onSourceDiskDelete() {
    return this.getStringAttribute('on_source_disk_delete');
  }
  public set onSourceDiskDelete(value: string | undefined) {
    this._onSourceDiskDelete = value;
  }
  public resetOnSourceDiskDelete() {
    this._onSourceDiskDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSourceDiskDeleteInput() {
    return this._onSourceDiskDelete
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule {
  /**
  * The number of days between snapshots.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#days_in_cycle ComputeResourcePolicy#days_in_cycle}
  */
  readonly daysInCycle: number;
  /**
  * This must be in UTC format that resolves to one of
00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,
both 13:00-5 and 08:00 are valid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime: string;
}

function computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_in_cycle: cdktf.numberToTerraform(struct!.daysInCycle),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._daysInCycle
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
    return this._startTime
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
  /**
  * The number of hours between snapshots.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#hours_in_cycle ComputeResourcePolicy#hours_in_cycle}
  */
  readonly hoursInCycle: number;
  /**
  * Time within the window to start the operations.
It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT.
eg: 21:00
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime: string;
}

function computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours_in_cycle: cdktf.numberToTerraform(struct!.hoursInCycle),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._hoursInCycle
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
    return this._startTime
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks {
  /**
  * The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#day ComputeResourcePolicy#day}
  */
  readonly day: string;
  /**
  * Time within the window to start the operations.
It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#start_time ComputeResourcePolicy#start_time}
  */
  readonly startTime: string;
}

function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  /**
  * day_of_weeks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#day_of_weeks ComputeResourcePolicy#day_of_weeks}
  */
  readonly dayOfWeeks: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[];
}

function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_weeks: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToTerraform)(struct!.dayOfWeeks),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // day_of_weeks - computed: false, optional: false, required: true
  private _dayOfWeeks?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[]; 
  public get dayOfWeeks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('day_of_weeks') as any;
  }
  public set dayOfWeeks(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[]) {
    this._dayOfWeeks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeeksInput() {
    return this._dayOfWeeks
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicySchedule {
  /**
  * daily_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#daily_schedule ComputeResourcePolicy#daily_schedule}
  */
  readonly dailySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
  /**
  * hourly_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#hourly_schedule ComputeResourcePolicy#hourly_schedule}
  */
  readonly hourlySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;
  /**
  * weekly_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#weekly_schedule ComputeResourcePolicy#weekly_schedule}
  */
  readonly weeklySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
}

function computeResourcePolicySnapshotSchedulePolicyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference | ComputeResourcePolicySnapshotSchedulePolicySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_schedule: computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToTerraform(struct!.dailySchedule),
    hourly_schedule: computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToTerraform(struct!.hourlySchedule),
    weekly_schedule: computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule | undefined; 
  private __dailyScheduleOutput = new ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(this as any, "daily_schedule", true);
  public get dailySchedule() {
    return this.__dailyScheduleOutput;
  }
  public putDailySchedule(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule | undefined) {
    this._dailySchedule = value;
  }
  public resetDailySchedule() {
    this._dailySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule
  }

  // hourly_schedule - computed: false, optional: true, required: false
  private _hourlySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule | undefined; 
  private __hourlyScheduleOutput = new ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(this as any, "hourly_schedule", true);
  public get hourlySchedule() {
    return this.__hourlyScheduleOutput;
  }
  public putHourlySchedule(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule | undefined) {
    this._hourlySchedule = value;
  }
  public resetHourlySchedule() {
    this._hourlySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyScheduleInput() {
    return this._hourlySchedule
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule | undefined; 
  private __weeklyScheduleOutput = new ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(this as any, "weekly_schedule", true);
  public get weeklySchedule() {
    return this.__weeklyScheduleOutput;
  }
  public putWeeklySchedule(value: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule | undefined) {
    this._weeklySchedule = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties {
  /**
  * Whether to perform a 'guest aware' snapshot.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#guest_flush ComputeResourcePolicy#guest_flush}
  */
  readonly guestFlush?: boolean | cdktf.IResolvable;
  /**
  * A set of key-value pairs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#labels ComputeResourcePolicy#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Cloud Storage bucket location to store the auto snapshot
(regional or multi-regional)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#storage_locations ComputeResourcePolicy#storage_locations}
  */
  readonly storageLocations?: string[];
}

function computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference | ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guest_flush: cdktf.booleanToTerraform(struct!.guestFlush),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    storage_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.storageLocations),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // guest_flush - computed: false, optional: true, required: false
  private _guestFlush?: boolean | cdktf.IResolvable | undefined; 
  public get guestFlush() {
    return this.getBooleanAttribute('guest_flush') as any;
  }
  public set guestFlush(value: boolean | cdktf.IResolvable | undefined) {
    this._guestFlush = value;
  }
  public resetGuestFlush() {
    this._guestFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFlushInput() {
    return this._guestFlush
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // storage_locations - computed: false, optional: true, required: false
  private _storageLocations?: string[] | undefined; 
  public get storageLocations() {
    return this.getListAttribute('storage_locations');
  }
  public set storageLocations(value: string[] | undefined) {
    this._storageLocations = value;
  }
  public resetStorageLocations() {
    this._storageLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationsInput() {
    return this._storageLocations
  }
}
export interface ComputeResourcePolicySnapshotSchedulePolicy {
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#retention_policy ComputeResourcePolicy#retention_policy}
  */
  readonly retentionPolicy?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: ComputeResourcePolicySnapshotSchedulePolicySchedule;
  /**
  * snapshot_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#snapshot_properties ComputeResourcePolicy#snapshot_properties}
  */
  readonly snapshotProperties?: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;
}

function computeResourcePolicySnapshotSchedulePolicyToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyOutputReference | ComputeResourcePolicySnapshotSchedulePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_policy: computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToTerraform(struct!.retentionPolicy),
    schedule: computeResourcePolicySnapshotSchedulePolicyScheduleToTerraform(struct!.schedule),
    snapshot_properties: computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToTerraform(struct!.snapshotProperties),
  }
}

export class ComputeResourcePolicySnapshotSchedulePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy | undefined; 
  private __retentionPolicyOutput = new ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(this as any, "retention_policy", true);
  public get retentionPolicy() {
    return this.__retentionPolicyOutput;
  }
  public putRetentionPolicy(value: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy | undefined) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: ComputeResourcePolicySnapshotSchedulePolicySchedule; 
  private __scheduleOutput = new ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this.__scheduleOutput;
  }
  public putSchedule(value: ComputeResourcePolicySnapshotSchedulePolicySchedule) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // snapshot_properties - computed: false, optional: true, required: false
  private _snapshotProperties?: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties | undefined; 
  private __snapshotPropertiesOutput = new ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(this as any, "snapshot_properties", true);
  public get snapshotProperties() {
    return this.__snapshotPropertiesOutput;
  }
  public putSnapshotProperties(value: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties | undefined) {
    this._snapshotProperties = value;
  }
  public resetSnapshotProperties() {
    this._snapshotProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPropertiesInput() {
    return this._snapshotProperties
  }
}
export interface ComputeResourcePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#create ComputeResourcePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#delete ComputeResourcePolicy#delete}
  */
  readonly delete?: string;
}

function computeResourcePolicyTimeoutsToTerraform(struct?: ComputeResourcePolicyTimeoutsOutputReference | ComputeResourcePolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeResourcePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html google_compute_resource_policy}
*/
export class ComputeResourcePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_resource_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html google_compute_resource_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeResourcePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeResourcePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_resource_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._groupPlacementPolicy = config.groupPlacementPolicy;
    this._instanceSchedulePolicy = config.instanceSchedulePolicy;
    this._snapshotSchedulePolicy = config.snapshotSchedulePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // group_placement_policy - computed: false, optional: true, required: false
  private _groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy | undefined; 
  private __groupPlacementPolicyOutput = new ComputeResourcePolicyGroupPlacementPolicyOutputReference(this as any, "group_placement_policy", true);
  public get groupPlacementPolicy() {
    return this.__groupPlacementPolicyOutput;
  }
  public putGroupPlacementPolicy(value: ComputeResourcePolicyGroupPlacementPolicy | undefined) {
    this._groupPlacementPolicy = value;
  }
  public resetGroupPlacementPolicy() {
    this._groupPlacementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPlacementPolicyInput() {
    return this._groupPlacementPolicy
  }

  // instance_schedule_policy - computed: false, optional: true, required: false
  private _instanceSchedulePolicy?: ComputeResourcePolicyInstanceSchedulePolicy | undefined; 
  private __instanceSchedulePolicyOutput = new ComputeResourcePolicyInstanceSchedulePolicyOutputReference(this as any, "instance_schedule_policy", true);
  public get instanceSchedulePolicy() {
    return this.__instanceSchedulePolicyOutput;
  }
  public putInstanceSchedulePolicy(value: ComputeResourcePolicyInstanceSchedulePolicy | undefined) {
    this._instanceSchedulePolicy = value;
  }
  public resetInstanceSchedulePolicy() {
    this._instanceSchedulePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSchedulePolicyInput() {
    return this._instanceSchedulePolicy
  }

  // snapshot_schedule_policy - computed: false, optional: true, required: false
  private _snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy | undefined; 
  private __snapshotSchedulePolicyOutput = new ComputeResourcePolicySnapshotSchedulePolicyOutputReference(this as any, "snapshot_schedule_policy", true);
  public get snapshotSchedulePolicy() {
    return this.__snapshotSchedulePolicyOutput;
  }
  public putSnapshotSchedulePolicy(value: ComputeResourcePolicySnapshotSchedulePolicy | undefined) {
    this._snapshotSchedulePolicy = value;
  }
  public resetSnapshotSchedulePolicy() {
    this._snapshotSchedulePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSchedulePolicyInput() {
    return this._snapshotSchedulePolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeResourcePolicyTimeouts | undefined; 
  private __timeoutsOutput = new ComputeResourcePolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeResourcePolicyTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      group_placement_policy: computeResourcePolicyGroupPlacementPolicyToTerraform(this._groupPlacementPolicy),
      instance_schedule_policy: computeResourcePolicyInstanceSchedulePolicyToTerraform(this._instanceSchedulePolicy),
      snapshot_schedule_policy: computeResourcePolicySnapshotSchedulePolicyToTerraform(this._snapshotSchedulePolicy),
      timeouts: computeResourcePolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
