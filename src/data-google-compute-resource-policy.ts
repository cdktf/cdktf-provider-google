// https://www.terraform.io/docs/providers/google/r/data_google_compute_resource_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeResourcePolicyConfig extends cdktf.TerraformMetaArguments {
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
}
export class DataGoogleComputeResourcePolicyGroupPlacementPolicy extends cdktf.ComplexComputedList {

  // availability_domain_count - computed: true, optional: false, required: false
  public get availabilityDomainCount() {
    return this.getNumberAttribute('availability_domain_count');
  }

  // collocation - computed: true, optional: false, required: false
  public get collocation() {
    return this.getStringAttribute('collocation');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy extends cdktf.ComplexComputedList {

  // max_retention_days - computed: true, optional: false, required: false
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }

  // on_source_disk_delete - computed: true, optional: false, required: false
  public get onSourceDiskDelete() {
    return this.getStringAttribute('on_source_disk_delete');
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule extends cdktf.ComplexComputedList {

  // days_in_cycle - computed: true, optional: false, required: false
  public get daysInCycle() {
    return this.getNumberAttribute('days_in_cycle');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule extends cdktf.ComplexComputedList {

  // hours_in_cycle - computed: true, optional: false, required: false
  public get hoursInCycle() {
    return this.getNumberAttribute('hours_in_cycle');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks extends cdktf.ComplexComputedList {

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule extends cdktf.ComplexComputedList {

  // day_of_weeks - computed: true, optional: false, required: false
  public get dayOfWeeks() {
    return this.interpolationForAttribute('day_of_weeks') as any;
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule extends cdktf.ComplexComputedList {

  // daily_schedule - computed: true, optional: false, required: false
  public get dailySchedule() {
    return this.interpolationForAttribute('daily_schedule') as any;
  }

  // hourly_schedule - computed: true, optional: false, required: false
  public get hourlySchedule() {
    return this.interpolationForAttribute('hourly_schedule') as any;
  }

  // weekly_schedule - computed: true, optional: false, required: false
  public get weeklySchedule() {
    return this.interpolationForAttribute('weekly_schedule') as any;
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties extends cdktf.ComplexComputedList {

  // guest_flush - computed: true, optional: false, required: false
  public get guestFlush() {
    return this.getBooleanAttribute('guest_flush');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }

  // storage_locations - computed: true, optional: false, required: false
  public get storageLocations() {
    return this.getListAttribute('storage_locations');
  }
}
export class DataGoogleComputeResourcePolicySnapshotSchedulePolicy extends cdktf.ComplexComputedList {

  // retention_policy - computed: true, optional: false, required: false
  public get retentionPolicy() {
    return this.interpolationForAttribute('retention_policy') as any;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }

  // snapshot_properties - computed: true, optional: false, required: false
  public get snapshotProperties() {
    return this.interpolationForAttribute('snapshot_properties') as any;
  }
}

// Resource

export class DataGoogleComputeResourcePolicy extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeResourcePolicyConfig) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_placement_policy - computed: true, optional: false, required: false
  public groupPlacementPolicy(index: string) {
    return new DataGoogleComputeResourcePolicyGroupPlacementPolicy(this, 'group_placement_policy', index);
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

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string ) {
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

  // snapshot_schedule_policy - computed: true, optional: false, required: false
  public snapshotSchedulePolicy(index: string) {
    return new DataGoogleComputeResourcePolicySnapshotSchedulePolicy(this, 'snapshot_schedule_policy', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
