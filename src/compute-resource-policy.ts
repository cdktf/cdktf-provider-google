// https://www.terraform.io/docs/providers/google/r/compute_resource_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeResourcePolicyConfig extends TerraformMetaArguments {
  /** The name of the resource, provided by the client when initially creating
the resource. The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** Region where resource policy resides. */
  readonly region?: string;
  /** group_placement_policy block */
  readonly groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy[];
  /** snapshot_schedule_policy block */
  readonly snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy[];
  /** timeouts block */
  readonly timeouts?: ComputeResourcePolicyTimeouts;
}
export interface ComputeResourcePolicyGroupPlacementPolicy {
  /** The number of availability domains instances will be spread across. If two instances are in different
availability domain, they will not be put in the same low latency network */
  readonly availabilityDomainCount?: number;
  /** Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.
Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
attached. Possible values: ["COLLOCATED"] */
  readonly collocation?: string;
  /** Number of vms in this placement group. */
  readonly vmCount?: number;
}
export interface ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy {
  /** Maximum age of the snapshot that is allowed to be kept. */
  readonly maxRetentionDays: number;
  /** Specifies the behavior to apply to scheduled snapshots when
the source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"] */
  readonly onSourceDiskDelete?: string;
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule {
  /** The number of days between snapshots. */
  readonly daysInCycle: number;
  /** This must be in UTC format that resolves to one of
00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example,
both 13:00-5 and 08:00 are valid. */
  readonly startTime: string;
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
  /** The number of hours between snapshots. */
  readonly hoursInCycle: number;
  /** Time within the window to start the operations.
It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT.
eg: 21:00 */
  readonly startTime: string;
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks {
  /** The day of the week to create the snapshot. e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] */
  readonly day: string;
  /** Time within the window to start the operations.
It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT. */
  readonly startTime: string;
}
export interface ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
  /** day_of_weeks block */
  readonly dayOfWeeks: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[];
}
export interface ComputeResourcePolicySnapshotSchedulePolicySchedule {
  /** daily_schedule block */
  readonly dailySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule[];
  /** hourly_schedule block */
  readonly hourlySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule[];
  /** weekly_schedule block */
  readonly weeklySchedule?: ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule[];
}
export interface ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties {
  /** Whether to perform a 'guest aware' snapshot. */
  readonly guestFlush?: boolean;
  /** A set of key-value pairs. */
  readonly labels?: { [key: string]: string };
  /** Cloud Storage bucket location to store the auto snapshot
(regional or multi-regional) */
  readonly storageLocations?: string[];
}
export interface ComputeResourcePolicySnapshotSchedulePolicy {
  /** retention_policy block */
  readonly retentionPolicy?: ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy[];
  /** schedule block */
  readonly schedule: ComputeResourcePolicySnapshotSchedulePolicySchedule[];
  /** snapshot_properties block */
  readonly snapshotProperties?: ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties[];
}
export interface ComputeResourcePolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeResourcePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._groupPlacementPolicy = config.groupPlacementPolicy;
    this._snapshotSchedulePolicy = config.snapshotSchedulePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // group_placement_policy - computed: false, optional: true, required: false
  private _groupPlacementPolicy?: ComputeResourcePolicyGroupPlacementPolicy[];
  public get groupPlacementPolicy() {
    return this._groupPlacementPolicy;
  }
  public set groupPlacementPolicy(value: ComputeResourcePolicyGroupPlacementPolicy[] | undefined) {
    this._groupPlacementPolicy = value;
  }

  // snapshot_schedule_policy - computed: false, optional: true, required: false
  private _snapshotSchedulePolicy?: ComputeResourcePolicySnapshotSchedulePolicy[];
  public get snapshotSchedulePolicy() {
    return this._snapshotSchedulePolicy;
  }
  public set snapshotSchedulePolicy(value: ComputeResourcePolicySnapshotSchedulePolicy[] | undefined) {
    this._snapshotSchedulePolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeResourcePolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeResourcePolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      region: this._region,
      group_placement_policy: this._groupPlacementPolicy,
      snapshot_schedule_policy: this._snapshotSchedulePolicy,
      timeouts: this._timeouts,
    };
  }
}
