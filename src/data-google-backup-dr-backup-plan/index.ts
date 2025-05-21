/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleBackupDrBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the backup plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan#backup_plan_id DataGoogleBackupDrBackupPlan#backup_plan_id}
  */
  readonly backupPlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan#id DataGoogleBackupDrBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the backup plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan#location DataGoogleBackupDrBackupPlan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan#project DataGoogleBackupDrBackupPlan#project}
  */
  readonly project?: string;
}
export interface DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow {
}

export function dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowToTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowToHclTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_hour_of_day - computed: true, optional: false, required: false
  public get endHourOfDay() {
    return this.getNumberAttribute('end_hour_of_day');
  }

  // start_hour_of_day - computed: true, optional: false, required: false
  public get startHourOfDay() {
    return this.getNumberAttribute('start_hour_of_day');
  }
}

export class DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference {
    return new DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth {
}

export function dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthToTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthToHclTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // week_of_month - computed: true, optional: false, required: false
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
}

export class DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference {
    return new DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule {
}

export function dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleToTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleToHclTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_window - computed: true, optional: false, required: false
  private _backupWindow = new DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList(this, "backup_window", false);
  public get backupWindow() {
    return this._backupWindow;
  }

  // days_of_month - computed: true, optional: false, required: false
  public get daysOfMonth() {
    return this.getNumberListAttribute('days_of_month');
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }

  // hourly_frequency - computed: true, optional: false, required: false
  public get hourlyFrequency() {
    return this.getNumberAttribute('hourly_frequency');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getListAttribute('months');
  }

  // recurrence_type - computed: true, optional: false, required: false
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // week_day_of_month - computed: true, optional: false, required: false
  private _weekDayOfMonth = new DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList(this, "week_day_of_month", false);
  public get weekDayOfMonth() {
    return this._weekDayOfMonth;
  }
}

export class DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference {
    return new DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleBackupDrBackupPlanBackupRules {
}

export function dataGoogleBackupDrBackupPlanBackupRulesToTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanBackupRulesToHclTerraform(struct?: DataGoogleBackupDrBackupPlanBackupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanBackupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleBackupDrBackupPlanBackupRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanBackupRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_retention_days - computed: true, optional: false, required: false
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // standard_schedule - computed: true, optional: false, required: false
  private _standardSchedule = new DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList(this, "standard_schedule", false);
  public get standardSchedule() {
    return this._standardSchedule;
  }
}

export class DataGoogleBackupDrBackupPlanBackupRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesOutputReference {
    return new DataGoogleBackupDrBackupPlanBackupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan google_backup_dr_backup_plan}
*/
export class DataGoogleBackupDrBackupPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleBackupDrBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleBackupDrBackupPlan to import
  * @param importFromId The id of the existing DataGoogleBackupDrBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleBackupDrBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/backup_dr_backup_plan google_backup_dr_backup_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBackupDrBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBackupDrBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.0',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
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

  // backup_rules - computed: true, optional: false, required: false
  private _backupRules = new DataGoogleBackupDrBackupPlanBackupRulesList(this, "backup_rules", false);
  public get backupRules() {
    return this._backupRules;
  }

  // backup_vault - computed: true, optional: false, required: false
  public get backupVault() {
    return this.getStringAttribute('backup_vault');
  }

  // backup_vault_service_account - computed: true, optional: false, required: false
  public get backupVaultServiceAccount() {
    return this.getStringAttribute('backup_vault_service_account');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_plan_id: cdktf.stringToTerraform(this._backupPlanId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
