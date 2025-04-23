// https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupDrBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the backup plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#backup_plan_id BackupDrBackupPlan#backup_plan_id}
  */
  readonly backupPlanId: string;
  /**
  * Backup vault where the backups gets stored using this Backup plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#backup_vault BackupDrBackupPlan#backup_vault}
  */
  readonly backupVault: string;
  /**
  * The description allows for additional details about 'BackupPlan' and its use cases to be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#description BackupDrBackupPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the backup plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#location BackupDrBackupPlan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}
  */
  readonly project?: string;
  /**
  * The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#resource_type BackupDrBackupPlan#resource_type}
  */
  readonly resourceType: string;
  /**
  * backup_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#backup_rules BackupDrBackupPlan#backup_rules}
  */
  readonly backupRules: BackupDrBackupPlanBackupRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#timeouts BackupDrBackupPlan#timeouts}
  */
  readonly timeouts?: BackupDrBackupPlanTimeouts;
}
export interface BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow {
  /**
  * The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00.
  * The end hour of the day should be greater than the start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#end_hour_of_day BackupDrBackupPlan#end_hour_of_day}
  */
  readonly endHourOfDay?: number;
  /**
  * The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#start_hour_of_day BackupDrBackupPlan#start_hour_of_day}
  */
  readonly startHourOfDay: number;
}

export function backupDrBackupPlanBackupRulesStandardScheduleBackupWindowToTerraform(struct?: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference | BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_hour_of_day: cdktf.numberToTerraform(struct!.endHourOfDay),
    start_hour_of_day: cdktf.numberToTerraform(struct!.startHourOfDay),
  }
}


export function backupDrBackupPlanBackupRulesStandardScheduleBackupWindowToHclTerraform(struct?: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference | BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.endHourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.startHourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endHourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endHourOfDay = this._endHourOfDay;
    }
    if (this._startHourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHourOfDay = this._startHourOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endHourOfDay = undefined;
      this._startHourOfDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endHourOfDay = value.endHourOfDay;
      this._startHourOfDay = value.startHourOfDay;
    }
  }

  // end_hour_of_day - computed: false, optional: true, required: false
  private _endHourOfDay?: number; 
  public get endHourOfDay() {
    return this.getNumberAttribute('end_hour_of_day');
  }
  public set endHourOfDay(value: number) {
    this._endHourOfDay = value;
  }
  public resetEndHourOfDay() {
    this._endHourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endHourOfDayInput() {
    return this._endHourOfDay;
  }

  // start_hour_of_day - computed: false, optional: false, required: true
  private _startHourOfDay?: number; 
  public get startHourOfDay() {
    return this.getNumberAttribute('start_hour_of_day');
  }
  public set startHourOfDay(value: number) {
    this._startHourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourOfDayInput() {
    return this._startHourOfDay;
  }
}
export interface BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth {
  /**
  * Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#day_of_week BackupDrBackupPlan#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#week_of_month BackupDrBackupPlan#week_of_month}
  */
  readonly weekOfMonth: string;
}

export function backupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthToTerraform(struct?: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference | BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
  }
}


export function backupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthToHclTerraform(struct?: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference | BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_of_month - computed: false, optional: false, required: true
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}
export interface BackupDrBackupPlanBackupRulesStandardSchedule {
  /**
  * Specifies days of months like 1, 5, or 14 on which jobs will run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#days_of_month BackupDrBackupPlan#days_of_month}
  */
  readonly daysOfMonth?: number[];
  /**
  * Specifies days of week like MONDAY or TUESDAY, on which jobs will run. This is required for 'recurrence_type', 'WEEKLY' and is not applicable otherwise. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#days_of_week BackupDrBackupPlan#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Specifies frequency for hourly backups. An hourly frequency of 2 means jobs will run every 2 hours from start time till end time defined.
  * This is required for 'recurrence_type', 'HOURLY' and is not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#hourly_frequency BackupDrBackupPlan#hourly_frequency}
  */
  readonly hourlyFrequency?: number;
  /**
  * Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#months BackupDrBackupPlan#months}
  */
  readonly months?: string[];
  /**
  * RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#recurrence_type BackupDrBackupPlan#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * The time zone to be used when interpreting the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#time_zone BackupDrBackupPlan#time_zone}
  */
  readonly timeZone: string;
  /**
  * backup_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#backup_window BackupDrBackupPlan#backup_window}
  */
  readonly backupWindow?: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow;
  /**
  * week_day_of_month block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#week_day_of_month BackupDrBackupPlan#week_day_of_month}
  */
  readonly weekDayOfMonth?: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth;
}

export function backupDrBackupPlanBackupRulesStandardScheduleToTerraform(struct?: BackupDrBackupPlanBackupRulesStandardScheduleOutputReference | BackupDrBackupPlanBackupRulesStandardSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfMonth),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    hourly_frequency: cdktf.numberToTerraform(struct!.hourlyFrequency),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    backup_window: backupDrBackupPlanBackupRulesStandardScheduleBackupWindowToTerraform(struct!.backupWindow),
    week_day_of_month: backupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthToTerraform(struct!.weekDayOfMonth),
  }
}


export function backupDrBackupPlanBackupRulesStandardScheduleToHclTerraform(struct?: BackupDrBackupPlanBackupRulesStandardScheduleOutputReference | BackupDrBackupPlanBackupRulesStandardSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hourly_frequency: {
      value: cdktf.numberToHclTerraform(struct!.hourlyFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    months: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.months),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurrence_type: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceType),
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
    backup_window: {
      value: backupDrBackupPlanBackupRulesStandardScheduleBackupWindowToHclTerraform(struct!.backupWindow),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList",
    },
    week_day_of_month: {
      value: backupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthToHclTerraform(struct!.weekDayOfMonth),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrBackupPlanBackupRulesStandardScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupDrBackupPlanBackupRulesStandardSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfMonth = this._daysOfMonth;
    }
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._hourlyFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourlyFrequency = this._hourlyFrequency;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._recurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceType = this._recurrenceType;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._backupWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindow = this._backupWindow?.internalValue;
    }
    if (this._weekDayOfMonth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayOfMonth = this._weekDayOfMonth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrBackupPlanBackupRulesStandardSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfMonth = undefined;
      this._daysOfWeek = undefined;
      this._hourlyFrequency = undefined;
      this._months = undefined;
      this._recurrenceType = undefined;
      this._timeZone = undefined;
      this._backupWindow.internalValue = undefined;
      this._weekDayOfMonth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfMonth = value.daysOfMonth;
      this._daysOfWeek = value.daysOfWeek;
      this._hourlyFrequency = value.hourlyFrequency;
      this._months = value.months;
      this._recurrenceType = value.recurrenceType;
      this._timeZone = value.timeZone;
      this._backupWindow.internalValue = value.backupWindow;
      this._weekDayOfMonth.internalValue = value.weekDayOfMonth;
    }
  }

  // days_of_month - computed: false, optional: true, required: false
  private _daysOfMonth?: number[]; 
  public get daysOfMonth() {
    return this.getNumberListAttribute('days_of_month');
  }
  public set daysOfMonth(value: number[]) {
    this._daysOfMonth = value;
  }
  public resetDaysOfMonth() {
    this._daysOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfMonthInput() {
    return this._daysOfMonth;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // hourly_frequency - computed: false, optional: true, required: false
  private _hourlyFrequency?: number; 
  public get hourlyFrequency() {
    return this.getNumberAttribute('hourly_frequency');
  }
  public set hourlyFrequency(value: number) {
    this._hourlyFrequency = value;
  }
  public resetHourlyFrequency() {
    this._hourlyFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyFrequencyInput() {
    return this._hourlyFrequency;
  }

  // months - computed: false, optional: true, required: false
  private _months?: string[]; 
  public get months() {
    return this.getListAttribute('months');
  }
  public set months(value: string[]) {
    this._months = value;
  }
  public resetMonths() {
    this._months = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months;
  }

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
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

  // backup_window - computed: false, optional: true, required: false
  private _backupWindow = new BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(this, "backup_window");
  public get backupWindow() {
    return this._backupWindow;
  }
  public putBackupWindow(value: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow) {
    this._backupWindow.internalValue = value;
  }
  public resetBackupWindow() {
    this._backupWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowInput() {
    return this._backupWindow.internalValue;
  }

  // week_day_of_month - computed: false, optional: true, required: false
  private _weekDayOfMonth = new BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(this, "week_day_of_month");
  public get weekDayOfMonth() {
    return this._weekDayOfMonth;
  }
  public putWeekDayOfMonth(value: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth) {
    this._weekDayOfMonth.internalValue = value;
  }
  public resetWeekDayOfMonth() {
    this._weekDayOfMonth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayOfMonthInput() {
    return this._weekDayOfMonth.internalValue;
  }
}
export interface BackupDrBackupPlanBackupRules {
  /**
  * Configures the duration for which backup data will be kept. The value should be greater than or equal to minimum enforced retention of the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#backup_retention_days BackupDrBackupPlan#backup_retention_days}
  */
  readonly backupRetentionDays: number;
  /**
  * The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#rule_id BackupDrBackupPlan#rule_id}
  */
  readonly ruleId: string;
  /**
  * standard_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#standard_schedule BackupDrBackupPlan#standard_schedule}
  */
  readonly standardSchedule: BackupDrBackupPlanBackupRulesStandardSchedule;
}

export function backupDrBackupPlanBackupRulesToTerraform(struct?: BackupDrBackupPlanBackupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_days: cdktf.numberToTerraform(struct!.backupRetentionDays),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    standard_schedule: backupDrBackupPlanBackupRulesStandardScheduleToTerraform(struct!.standardSchedule),
  }
}


export function backupDrBackupPlanBackupRulesToHclTerraform(struct?: BackupDrBackupPlanBackupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_schedule: {
      value: backupDrBackupPlanBackupRulesStandardScheduleToHclTerraform(struct!.standardSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupDrBackupPlanBackupRulesStandardScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrBackupPlanBackupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupDrBackupPlanBackupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionDays = this._backupRetentionDays;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._standardSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardSchedule = this._standardSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrBackupPlanBackupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupRetentionDays = undefined;
      this._ruleId = undefined;
      this._standardSchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupRetentionDays = value.backupRetentionDays;
      this._ruleId = value.ruleId;
      this._standardSchedule.internalValue = value.standardSchedule;
    }
  }

  // backup_retention_days - computed: false, optional: false, required: true
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // standard_schedule - computed: false, optional: false, required: true
  private _standardSchedule = new BackupDrBackupPlanBackupRulesStandardScheduleOutputReference(this, "standard_schedule");
  public get standardSchedule() {
    return this._standardSchedule;
  }
  public putStandardSchedule(value: BackupDrBackupPlanBackupRulesStandardSchedule) {
    this._standardSchedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardScheduleInput() {
    return this._standardSchedule.internalValue;
  }
}

export class BackupDrBackupPlanBackupRulesList extends cdktf.ComplexList {
  public internalValue? : BackupDrBackupPlanBackupRules[] | cdktf.IResolvable

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
  public get(index: number): BackupDrBackupPlanBackupRulesOutputReference {
    return new BackupDrBackupPlanBackupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrBackupPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#create BackupDrBackupPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#delete BackupDrBackupPlan#delete}
  */
  readonly delete?: string;
}

export function backupDrBackupPlanTimeoutsToTerraform(struct?: BackupDrBackupPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function backupDrBackupPlanTimeoutsToHclTerraform(struct?: BackupDrBackupPlanTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupDrBackupPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupDrBackupPlanTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrBackupPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan google_backup_dr_backup_plan}
*/
export class BackupDrBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupDrBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupDrBackupPlan to import
  * @param importFromId The id of the existing BackupDrBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupDrBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/backup_dr_backup_plan google_backup_dr_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupDrBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupDrBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.31.0',
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
    this._backupPlanId = config.backupPlanId;
    this._backupVault = config.backupVault;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._resourceType = config.resourceType;
    this._backupRules.internalValue = config.backupRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan_id - computed: false, optional: false, required: true
  private _backupPlanId?: string; 
  public get backupPlanId() {
    return this.getStringAttribute('backup_plan_id');
  }
  public set backupPlanId(value: string) {
    this._backupPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanIdInput() {
    return this._backupPlanId;
  }

  // backup_vault - computed: false, optional: false, required: true
  private _backupVault?: string; 
  public get backupVault() {
    return this.getStringAttribute('backup_vault');
  }
  public set backupVault(value: string) {
    this._backupVault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultInput() {
    return this._backupVault;
  }

  // backup_vault_service_account - computed: true, optional: false, required: false
  public get backupVaultServiceAccount() {
    return this.getStringAttribute('backup_vault_service_account');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // backup_rules - computed: false, optional: false, required: true
  private _backupRules = new BackupDrBackupPlanBackupRulesList(this, "backup_rules", false);
  public get backupRules() {
    return this._backupRules;
  }
  public putBackupRules(value: BackupDrBackupPlanBackupRules[] | cdktf.IResolvable) {
    this._backupRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRulesInput() {
    return this._backupRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupDrBackupPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupDrBackupPlanTimeouts) {
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
      backup_plan_id: cdktf.stringToTerraform(this._backupPlanId),
      backup_vault: cdktf.stringToTerraform(this._backupVault),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      backup_rules: cdktf.listMapper(backupDrBackupPlanBackupRulesToTerraform, true)(this._backupRules.internalValue),
      timeouts: backupDrBackupPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_plan_id: {
        value: cdktf.stringToHclTerraform(this._backupPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_vault: {
        value: cdktf.stringToHclTerraform(this._backupVault),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_rules: {
        value: cdktf.listMapperHcl(backupDrBackupPlanBackupRulesToHclTerraform, true)(this._backupRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupDrBackupPlanBackupRulesList",
      },
      timeouts: {
        value: backupDrBackupPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupDrBackupPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
