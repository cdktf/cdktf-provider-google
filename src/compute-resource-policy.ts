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
  readonly groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy[];
  /**
  * instance_schedule_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#instance_schedule_policy ComputeResourcePolicy#instance_schedule_policy}
  */
  readonly instanceSchedulePolicy?: ComputeResourcePolicyInstanceSchedulePolicy[];
  /**
  * snapshot_schedule_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#snapshot_schedule_policy ComputeResourcePolicy#snapshot_schedule_policy}
  */
  readonly snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy[];
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

function computeResourcePolicyGroupPlacementPolicyToTerraform(struct?: ComputeResourcePolicyGroupPlacementPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_domain_count: cdktf.numberToTerraform(struct!.availabilityDomainCount),
    collocation: cdktf.stringToTerraform(struct!.collocation),
    vm_count: cdktf.numberToTerraform(struct!.vmCount),
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

function computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
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

function computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule: cdktf.stringToTerraform(struct!.schedule),
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
  readonly vmStartSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule[];
  /**
  * vm_stop_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#vm_stop_schedule ComputeResourcePolicy#vm_stop_schedule}
  */
  readonly vmStopSchedule?: ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule[];
}

function computeResourcePolicyInstanceSchedulePolicyToTerraform(struct?: ComputeResourcePolicyInstanceSchedulePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    vm_start_schedule: cdktf.listMapper(computeResourcePolicyInstanceSchedulePolicyVmStartScheduleToTerraform)(struct!.vmStartSchedule),
    vm_stop_schedule: cdktf.listMapper(computeResourcePolicyInstanceSchedulePolicyVmStopScheduleToTerraform)(struct!.vmStopSchedule),
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

function computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_retention_days: cdktf.numberToTerraform(struct!.maxRetentionDays),
    on_source_disk_delete: cdktf.stringToTerraform(struct!.onSourceDiskDelete),
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

function computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_in_cycle: cdktf.numberToTerraform(struct!.daysInCycle),
    start_time: cdktf.stringToTerraform(struct!.startTime),
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

function computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hours_in_cycle: cdktf.numberToTerraform(struct!.hoursInCycle),
    start_time: cdktf.stringToTerraform(struct!.startTime),
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

function computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_weeks: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksToTerraform)(struct!.dayOfWeeks),
  }
}

export interface ComputeResourcePolicySnapshotSchedulePolicySchedule {
  /**
  * daily_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#daily_schedule ComputeResourcePolicy#daily_schedule}
  */
  readonly dailySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule[];
  /**
  * hourly_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#hourly_schedule ComputeResourcePolicy#hourly_schedule}
  */
  readonly hourlySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule[];
  /**
  * weekly_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#weekly_schedule ComputeResourcePolicy#weekly_schedule}
  */
  readonly weeklySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule[];
}

function computeResourcePolicySnapshotSchedulePolicyScheduleToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    daily_schedule: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleToTerraform)(struct!.dailySchedule),
    hourly_schedule: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleToTerraform)(struct!.hourlySchedule),
    weekly_schedule: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleToTerraform)(struct!.weeklySchedule),
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

function computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    guest_flush: cdktf.booleanToTerraform(struct!.guestFlush),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    storage_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.storageLocations),
  }
}

export interface ComputeResourcePolicySnapshotSchedulePolicy {
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#retention_policy ComputeResourcePolicy#retention_policy}
  */
  readonly retentionPolicy?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy[];
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#schedule ComputeResourcePolicy#schedule}
  */
  readonly schedule: ComputeResourcePolicySnapshotSchedulePolicySchedule[];
  /**
  * snapshot_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html#snapshot_properties ComputeResourcePolicy#snapshot_properties}
  */
  readonly snapshotProperties?: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties[];
}

function computeResourcePolicySnapshotSchedulePolicyToTerraform(struct?: ComputeResourcePolicySnapshotSchedulePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retention_policy: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyRetentionPolicyToTerraform)(struct!.retentionPolicy),
    schedule: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyScheduleToTerraform)(struct!.schedule),
    snapshot_properties: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicySnapshotPropertiesToTerraform)(struct!.snapshotProperties),
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

function computeResourcePolicyTimeoutsToTerraform(struct?: ComputeResourcePolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _name: string;
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
    return this._project
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
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // group_placement_policy - computed: false, optional: true, required: false
  private _groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy[];
  public get groupPlacementPolicy() {
    return this.interpolationForAttribute('group_placement_policy') as any;
  }
  public set groupPlacementPolicy(value: ComputeResourcePolicyGroupPlacementPolicy[] ) {
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
  private _instanceSchedulePolicy?: ComputeResourcePolicyInstanceSchedulePolicy[];
  public get instanceSchedulePolicy() {
    return this.interpolationForAttribute('instance_schedule_policy') as any;
  }
  public set instanceSchedulePolicy(value: ComputeResourcePolicyInstanceSchedulePolicy[] ) {
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
  private _snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy[];
  public get snapshotSchedulePolicy() {
    return this.interpolationForAttribute('snapshot_schedule_policy') as any;
  }
  public set snapshotSchedulePolicy(value: ComputeResourcePolicySnapshotSchedulePolicy[] ) {
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
  private _timeouts?: ComputeResourcePolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeResourcePolicyTimeouts ) {
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
      group_placement_policy: cdktf.listMapper(computeResourcePolicyGroupPlacementPolicyToTerraform)(this._groupPlacementPolicy),
      instance_schedule_policy: cdktf.listMapper(computeResourcePolicyInstanceSchedulePolicyToTerraform)(this._instanceSchedulePolicy),
      snapshot_schedule_policy: cdktf.listMapper(computeResourcePolicySnapshotSchedulePolicyToTerraform)(this._snapshotSchedulePolicy),
      timeouts: computeResourcePolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
