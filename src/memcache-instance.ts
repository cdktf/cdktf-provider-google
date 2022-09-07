// https://www.terraform.io/docs/providers/google/r/memcache_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemcacheInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full name of the GCE network to connect the instance to.  If not provided,
'default' will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#authorized_network MemcacheInstance#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * A user-visible name for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#display_name MemcacheInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#id MemcacheInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#labels MemcacheInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The major version of Memcached software. If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#memcache_version MemcacheInstance#memcache_version}
  */
  readonly memcacheVersion?: string;
  /**
  * The resource name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#name MemcacheInstance#name}
  */
  readonly name: string;
  /**
  * Number of nodes in the memcache instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#node_count MemcacheInstance#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#project MemcacheInstance#project}
  */
  readonly project?: string;
  /**
  * The region of the Memcache instance. If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#region MemcacheInstance#region}
  */
  readonly region?: string;
  /**
  * Zones where memcache nodes should be provisioned.  If not
provided, all zones will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#zones MemcacheInstance#zones}
  */
  readonly zones?: string[];
  /**
  * maintenance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#maintenance_policy MemcacheInstance#maintenance_policy}
  */
  readonly maintenancePolicy?: MemcacheInstanceMaintenancePolicy;
  /**
  * memcache_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#memcache_parameters MemcacheInstance#memcache_parameters}
  */
  readonly memcacheParameters?: MemcacheInstanceMemcacheParameters;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#node_config MemcacheInstance#node_config}
  */
  readonly nodeConfig: MemcacheInstanceNodeConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#timeouts MemcacheInstance#timeouts}
  */
  readonly timeouts?: MemcacheInstanceTimeouts;
}
export interface MemcacheInstanceMaintenanceSchedule {
}

export function memcacheInstanceMaintenanceScheduleToTerraform(struct?: MemcacheInstanceMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MemcacheInstanceMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemcacheInstanceMaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMaintenanceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // schedule_deadline_time - computed: true, optional: false, required: false
  public get scheduleDeadlineTime() {
    return this.getStringAttribute('schedule_deadline_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class MemcacheInstanceMaintenanceScheduleList extends cdktf.ComplexList {

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
  public get(index: number): MemcacheInstanceMaintenanceScheduleOutputReference {
    return new MemcacheInstanceMaintenanceScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemcacheInstanceMemcacheNodes {
}

export function memcacheInstanceMemcacheNodesToTerraform(struct?: MemcacheInstanceMemcacheNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class MemcacheInstanceMemcacheNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemcacheInstanceMemcacheNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMemcacheNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class MemcacheInstanceMemcacheNodesList extends cdktf.ComplexList {

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
  public get(index: number): MemcacheInstanceMemcacheNodesOutputReference {
    return new MemcacheInstanceMemcacheNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#hours MemcacheInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#minutes MemcacheInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#nanos MemcacheInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#seconds MemcacheInstance#seconds}
  */
  readonly seconds?: number;
}

export function memcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct?: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
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

  public set internalValue(value: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
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
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
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
export interface MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow {
  /**
  * Required. The day of week that maintenance updates occur.
- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#day MemcacheInstance#day}
  */
  readonly day: string;
  /**
  * Required. The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#duration MemcacheInstance#duration}
  */
  readonly duration: string;
  /**
  * start_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#start_time MemcacheInstance#start_time}
  */
  readonly startTime: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function memcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowToTerraform(struct?: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    duration: cdktf.stringToTerraform(struct!.duration),
    start_time: memcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct!.startTime),
  }
}

export class MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._duration = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._duration = value.duration;
      this._startTime.internalValue = value.startTime;
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

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference {
    return new MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MemcacheInstanceMaintenancePolicy {
  /**
  * Optional. Description of what this policy is for.
Create/Update methods return INVALID_ARGUMENT if the
length is greater than 512.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#description MemcacheInstance#description}
  */
  readonly description?: string;
  /**
  * weekly_maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#weekly_maintenance_window MemcacheInstance#weekly_maintenance_window}
  */
  readonly weeklyMaintenanceWindow: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable;
}

export function memcacheInstanceMaintenancePolicyToTerraform(struct?: MemcacheInstanceMaintenancePolicyOutputReference | MemcacheInstanceMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    weekly_maintenance_window: cdktf.listMapper(memcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowToTerraform, true)(struct!.weeklyMaintenanceWindow),
  }
}

export class MemcacheInstanceMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._weeklyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceWindow = this._weeklyMaintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._weeklyMaintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._weeklyMaintenanceWindow.internalValue = value.weeklyMaintenanceWindow;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // weekly_maintenance_window - computed: false, optional: false, required: true
  private _weeklyMaintenanceWindow = new MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(this, "weekly_maintenance_window", false);
  public get weeklyMaintenanceWindow() {
    return this._weeklyMaintenanceWindow;
  }
  public putWeeklyMaintenanceWindow(value: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable) {
    this._weeklyMaintenanceWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowInput() {
    return this._weeklyMaintenanceWindow.internalValue;
  }
}
export interface MemcacheInstanceMemcacheParameters {
  /**
  * User-defined set of parameters to use in the memcache process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#params MemcacheInstance#params}
  */
  readonly params?: { [key: string]: string };
}

export function memcacheInstanceMemcacheParametersToTerraform(struct?: MemcacheInstanceMemcacheParametersOutputReference | MemcacheInstanceMemcacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
  }
}

export class MemcacheInstanceMemcacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceMemcacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceMemcacheParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._params = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._params = value.params;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}
export interface MemcacheInstanceNodeConfig {
  /**
  * Number of CPUs per node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#cpu_count MemcacheInstance#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * Memory size in Mebibytes for each memcache node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#memory_size_mb MemcacheInstance#memory_size_mb}
  */
  readonly memorySizeMb: number;
}

export function memcacheInstanceNodeConfigToTerraform(struct?: MemcacheInstanceNodeConfigOutputReference | MemcacheInstanceNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    memory_size_mb: cdktf.numberToTerraform(struct!.memorySizeMb),
  }
}

export class MemcacheInstanceNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._memorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeMb = this._memorySizeMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemcacheInstanceNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._memorySizeMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._memorySizeMb = value.memorySizeMb;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // memory_size_mb - computed: false, optional: false, required: true
  private _memorySizeMb?: number; 
  public get memorySizeMb() {
    return this.getNumberAttribute('memory_size_mb');
  }
  public set memorySizeMb(value: number) {
    this._memorySizeMb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeMbInput() {
    return this._memorySizeMb;
  }
}
export interface MemcacheInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#create MemcacheInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#delete MemcacheInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/memcache_instance#update MemcacheInstance#update}
  */
  readonly update?: string;
}

export function memcacheInstanceTimeoutsToTerraform(struct?: MemcacheInstanceTimeoutsOutputReference | MemcacheInstanceTimeouts | cdktf.IResolvable): any {
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

export class MemcacheInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MemcacheInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MemcacheInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/memcache_instance google_memcache_instance}
*/
export class MemcacheInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_memcache_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/memcache_instance google_memcache_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemcacheInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MemcacheInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_memcache_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._authorizedNetwork = config.authorizedNetwork;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._memcacheVersion = config.memcacheVersion;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._project = config.project;
    this._region = config.region;
    this._zones = config.zones;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._memcacheParameters.internalValue = config.memcacheParameters;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_network - computed: true, optional: true, required: false
  private _authorizedNetwork?: string; 
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string) {
    this._authorizedNetwork = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // discovery_endpoint - computed: true, optional: false, required: false
  public get discoveryEndpoint() {
    return this.getStringAttribute('discovery_endpoint');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // maintenance_schedule - computed: true, optional: false, required: false
  private _maintenanceSchedule = new MemcacheInstanceMaintenanceScheduleList(this, "maintenance_schedule", false);
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
  }

  // memcache_full_version - computed: true, optional: false, required: false
  public get memcacheFullVersion() {
    return this.getStringAttribute('memcache_full_version');
  }

  // memcache_nodes - computed: true, optional: false, required: false
  private _memcacheNodes = new MemcacheInstanceMemcacheNodesList(this, "memcache_nodes", false);
  public get memcacheNodes() {
    return this._memcacheNodes;
  }

  // memcache_version - computed: false, optional: true, required: false
  private _memcacheVersion?: string; 
  public get memcacheVersion() {
    return this.getStringAttribute('memcache_version');
  }
  public set memcacheVersion(value: string) {
    this._memcacheVersion = value;
  }
  public resetMemcacheVersion() {
    this._memcacheVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheVersionInput() {
    return this._memcacheVersion;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
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

  // zones - computed: true, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktf.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new MemcacheInstanceMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: MemcacheInstanceMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // memcache_parameters - computed: false, optional: true, required: false
  private _memcacheParameters = new MemcacheInstanceMemcacheParametersOutputReference(this, "memcache_parameters");
  public get memcacheParameters() {
    return this._memcacheParameters;
  }
  public putMemcacheParameters(value: MemcacheInstanceMemcacheParameters) {
    this._memcacheParameters.internalValue = value;
  }
  public resetMemcacheParameters() {
    this._memcacheParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheParametersInput() {
    return this._memcacheParameters.internalValue;
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig = new MemcacheInstanceNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: MemcacheInstanceNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MemcacheInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MemcacheInstanceTimeouts) {
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
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memcache_version: cdktf.stringToTerraform(this._memcacheVersion),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      maintenance_policy: memcacheInstanceMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      memcache_parameters: memcacheInstanceMemcacheParametersToTerraform(this._memcacheParameters.internalValue),
      node_config: memcacheInstanceNodeConfigToTerraform(this._nodeConfig.internalValue),
      timeouts: memcacheInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
