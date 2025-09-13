/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleDatabaseCloudExadataInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Exadata Infrastructure to create. This value is restricted
  * to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
  * characters in length. The value must start with a letter and end with
  * a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id OracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}
  */
  readonly cloudExadataInfrastructureId: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#deletion_protection OracleDatabaseCloudExadataInfrastructure#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * User friendly name for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#display_name OracleDatabaseCloudExadataInfrastructure#display_name}
  */
  readonly displayName?: string;
  /**
  * GCP location where Oracle Exadata is hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone OracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}
  */
  readonly gcpOracleZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels or tags associated with the resource. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#labels OracleDatabaseCloudExadataInfrastructure#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#location OracleDatabaseCloudExadataInfrastructure#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#properties OracleDatabaseCloudExadataInfrastructure#properties}
  */
  readonly properties?: OracleDatabaseCloudExadataInfrastructureProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#timeouts OracleDatabaseCloudExadataInfrastructure#timeouts}
  */
  readonly timeouts?: OracleDatabaseCloudExadataInfrastructureTimeouts;
}
export interface OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts {
  /**
  * The email address used by Oracle to send notifications regarding databases
  * and infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#email OracleDatabaseCloudExadataInfrastructure#email}
  */
  readonly email: string;
}

export function oracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsToTerraform(struct?: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function oracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsToHclTerraform(struct?: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList extends cdktf.ComplexList {
  public internalValue? : OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[] | cdktf.IResolvable

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
  public get(index: number): OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference {
    return new OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow {
  /**
  * Determines the amount of time the system will wait before the start of each
  * database server patching operation. Custom action timeout is in minutes and
  * valid value is between 15 to 120 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins OracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}
  */
  readonly customActionTimeoutMins?: number;
  /**
  * Days during the week when maintenance should be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#days_of_week OracleDatabaseCloudExadataInfrastructure#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * The window of hours during the day when maintenance should be performed.
  * The window is a 4 hour slot. Valid values are:
  *   0 - represents time slot 0:00 - 3:59 UTC
  *   4 - represents time slot 4:00 - 7:59 UTC
  *   8 - represents time slot 8:00 - 11:59 UTC
  *   12 - represents time slot 12:00 - 15:59 UTC
  *   16 - represents time slot 16:00 - 19:59 UTC
  *   20 - represents time slot 20:00 - 23:59 UTC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#hours_of_day OracleDatabaseCloudExadataInfrastructure#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * If true, enables the configuration of a custom action timeout (waiting
  * period) between database server patching operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}
  */
  readonly isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Lead time window allows user to set a lead time to prepare for a down time.
  * The lead time is in weeks and valid value is between 1 to 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#lead_time_week OracleDatabaseCloudExadataInfrastructure#lead_time_week}
  */
  readonly leadTimeWeek?: number;
  /**
  * Months during the year when maintenance should be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#months OracleDatabaseCloudExadataInfrastructure#months}
  */
  readonly months?: string[];
  /**
  * Cloud CloudExadataInfrastructure node patching method, either "ROLLING"
  *  or "NONROLLING". Default value is ROLLING. 
  *  Possible values:
  *  PATCHING_MODE_UNSPECIFIED
  * ROLLING
  * NON_ROLLING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#patching_mode OracleDatabaseCloudExadataInfrastructure#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * The maintenance window scheduling preference. 
  *  Possible values:
  *  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED
  * CUSTOM_PREFERENCE
  * NO_PREFERENCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#preference OracleDatabaseCloudExadataInfrastructure#preference}
  */
  readonly preference?: string;
  /**
  * Weeks during the month when maintenance should be performed. Weeks start on
  * the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
  * days. Weeks start and end based on calendar dates, not days of the week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#weeks_of_month OracleDatabaseCloudExadataInfrastructure#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
}

export function oracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowToTerraform(struct?: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference | OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_timeout_mins: cdktf.numberToTerraform(struct!.customActionTimeoutMins),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    hours_of_day: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hoursOfDay),
    is_custom_action_timeout_enabled: cdktf.booleanToTerraform(struct!.isCustomActionTimeoutEnabled),
    lead_time_week: cdktf.numberToTerraform(struct!.leadTimeWeek),
    months: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.months),
    patching_mode: cdktf.stringToTerraform(struct!.patchingMode),
    preference: cdktf.stringToTerraform(struct!.preference),
    weeks_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeksOfMonth),
  }
}


export function oracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowToHclTerraform(struct?: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference | OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_action_timeout_mins: {
      value: cdktf.numberToHclTerraform(struct!.customActionTimeoutMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hours_of_day: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hoursOfDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    is_custom_action_timeout_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomActionTimeoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lead_time_week: {
      value: cdktf.numberToHclTerraform(struct!.leadTimeWeek),
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
    patching_mode: {
      value: cdktf.stringToHclTerraform(struct!.patchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customActionTimeoutMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionTimeoutMins = this._customActionTimeoutMins;
    }
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._hoursOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursOfDay = this._hoursOfDay;
    }
    if (this._isCustomActionTimeoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomActionTimeoutEnabled = this._isCustomActionTimeoutEnabled;
    }
    if (this._leadTimeWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadTimeWeek = this._leadTimeWeek;
    }
    if (this._months !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months;
    }
    if (this._patchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchingMode = this._patchingMode;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customActionTimeoutMins = undefined;
      this._daysOfWeek = undefined;
      this._hoursOfDay = undefined;
      this._isCustomActionTimeoutEnabled = undefined;
      this._leadTimeWeek = undefined;
      this._months = undefined;
      this._patchingMode = undefined;
      this._preference = undefined;
      this._weeksOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customActionTimeoutMins = value.customActionTimeoutMins;
      this._daysOfWeek = value.daysOfWeek;
      this._hoursOfDay = value.hoursOfDay;
      this._isCustomActionTimeoutEnabled = value.isCustomActionTimeoutEnabled;
      this._leadTimeWeek = value.leadTimeWeek;
      this._months = value.months;
      this._patchingMode = value.patchingMode;
      this._preference = value.preference;
      this._weeksOfMonth = value.weeksOfMonth;
    }
  }

  // custom_action_timeout_mins - computed: true, optional: true, required: false
  private _customActionTimeoutMins?: number; 
  public get customActionTimeoutMins() {
    return this.getNumberAttribute('custom_action_timeout_mins');
  }
  public set customActionTimeoutMins(value: number) {
    this._customActionTimeoutMins = value;
  }
  public resetCustomActionTimeoutMins() {
    this._customActionTimeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionTimeoutMinsInput() {
    return this._customActionTimeoutMins;
  }

  // days_of_week - computed: true, optional: true, required: false
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

  // hours_of_day - computed: true, optional: true, required: false
  private _hoursOfDay?: number[]; 
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }
  public set hoursOfDay(value: number[]) {
    this._hoursOfDay = value;
  }
  public resetHoursOfDay() {
    this._hoursOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfDayInput() {
    return this._hoursOfDay;
  }

  // is_custom_action_timeout_enabled - computed: true, optional: true, required: false
  private _isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable; 
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }
  public set isCustomActionTimeoutEnabled(value: boolean | cdktf.IResolvable) {
    this._isCustomActionTimeoutEnabled = value;
  }
  public resetIsCustomActionTimeoutEnabled() {
    this._isCustomActionTimeoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomActionTimeoutEnabledInput() {
    return this._isCustomActionTimeoutEnabled;
  }

  // lead_time_week - computed: true, optional: true, required: false
  private _leadTimeWeek?: number; 
  public get leadTimeWeek() {
    return this.getNumberAttribute('lead_time_week');
  }
  public set leadTimeWeek(value: number) {
    this._leadTimeWeek = value;
  }
  public resetLeadTimeWeek() {
    this._leadTimeWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadTimeWeekInput() {
    return this._leadTimeWeek;
  }

  // months - computed: true, optional: true, required: false
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

  // patching_mode - computed: true, optional: true, required: false
  private _patchingMode?: string; 
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }
  public set patchingMode(value: string) {
    this._patchingMode = value;
  }
  public resetPatchingMode() {
    this._patchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingModeInput() {
    return this._patchingMode;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // weeks_of_month - computed: true, optional: true, required: false
  private _weeksOfMonth?: number[]; 
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
  public set weeksOfMonth(value: number[]) {
    this._weeksOfMonth = value;
  }
  public resetWeeksOfMonth() {
    this._weeksOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }
}
export interface OracleDatabaseCloudExadataInfrastructureProperties {
  /**
  * The number of compute servers for the Exadata Infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#compute_count OracleDatabaseCloudExadataInfrastructure#compute_count}
  */
  readonly computeCount?: number;
  /**
  * The shape of the Exadata Infrastructure. The shape determines the
  * amount of CPU, storage, and memory resources allocated to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#shape OracleDatabaseCloudExadataInfrastructure#shape}
  */
  readonly shape: string;
  /**
  * The number of Cloud Exadata storage servers for the Exadata Infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#storage_count OracleDatabaseCloudExadataInfrastructure#storage_count}
  */
  readonly storageCount?: number;
  /**
  * The total storage allocated to the Exadata Infrastructure
  * resource, in gigabytes (GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#total_storage_size_gb OracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}
  */
  readonly totalStorageSizeGb?: number;
  /**
  * customer_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#customer_contacts OracleDatabaseCloudExadataInfrastructure#customer_contacts}
  */
  readonly customerContacts?: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#maintenance_window OracleDatabaseCloudExadataInfrastructure#maintenance_window}
  */
  readonly maintenanceWindow?: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow;
}

export function oracleDatabaseCloudExadataInfrastructurePropertiesToTerraform(struct?: OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference | OracleDatabaseCloudExadataInfrastructureProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_count: cdktf.numberToTerraform(struct!.computeCount),
    shape: cdktf.stringToTerraform(struct!.shape),
    storage_count: cdktf.numberToTerraform(struct!.storageCount),
    total_storage_size_gb: cdktf.numberToTerraform(struct!.totalStorageSizeGb),
    customer_contacts: cdktf.listMapper(oracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsToTerraform, true)(struct!.customerContacts),
    maintenance_window: oracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowToTerraform(struct!.maintenanceWindow),
  }
}


export function oracleDatabaseCloudExadataInfrastructurePropertiesToHclTerraform(struct?: OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference | OracleDatabaseCloudExadataInfrastructureProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_count: {
      value: cdktf.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_count: {
      value: cdktf.numberToHclTerraform(struct!.storageCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_storage_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.totalStorageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_contacts: {
      value: cdktf.listMapperHcl(oracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsToHclTerraform, true)(struct!.customerContacts),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList",
    },
    maintenance_window: {
      value: oracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowToHclTerraform(struct!.maintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseCloudExadataInfrastructureProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._storageCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCount = this._storageCount;
    }
    if (this._totalStorageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalStorageSizeGb = this._totalStorageSizeGb;
    }
    if (this._customerContacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerContacts = this._customerContacts?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseCloudExadataInfrastructureProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeCount = undefined;
      this._shape = undefined;
      this._storageCount = undefined;
      this._totalStorageSizeGb = undefined;
      this._customerContacts.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeCount = value.computeCount;
      this._shape = value.shape;
      this._storageCount = value.storageCount;
      this._totalStorageSizeGb = value.totalStorageSizeGb;
      this._customerContacts.internalValue = value.customerContacts;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // activated_storage_count - computed: true, optional: false, required: false
  public get activatedStorageCount() {
    return this.getNumberAttribute('activated_storage_count');
  }

  // additional_storage_count - computed: true, optional: false, required: false
  public get additionalStorageCount() {
    return this.getNumberAttribute('additional_storage_count');
  }

  // available_storage_size_gb - computed: true, optional: false, required: false
  public get availableStorageSizeGb() {
    return this.getNumberAttribute('available_storage_size_gb');
  }

  // compute_count - computed: false, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // data_storage_size_tb - computed: true, optional: false, required: false
  public get dataStorageSizeTb() {
    return this.getNumberAttribute('data_storage_size_tb');
  }

  // db_node_storage_size_gb - computed: true, optional: false, required: false
  public get dbNodeStorageSizeGb() {
    return this.getNumberAttribute('db_node_storage_size_gb');
  }

  // db_server_version - computed: true, optional: false, required: false
  public get dbServerVersion() {
    return this.getStringAttribute('db_server_version');
  }

  // max_cpu_count - computed: true, optional: false, required: false
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // max_data_storage_tb - computed: true, optional: false, required: false
  public get maxDataStorageTb() {
    return this.getNumberAttribute('max_data_storage_tb');
  }

  // max_db_node_storage_size_gb - computed: true, optional: false, required: false
  public get maxDbNodeStorageSizeGb() {
    return this.getNumberAttribute('max_db_node_storage_size_gb');
  }

  // max_memory_gb - computed: true, optional: false, required: false
  public get maxMemoryGb() {
    return this.getNumberAttribute('max_memory_gb');
  }

  // memory_size_gb - computed: true, optional: false, required: false
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }

  // monthly_db_server_version - computed: true, optional: false, required: false
  public get monthlyDbServerVersion() {
    return this.getStringAttribute('monthly_db_server_version');
  }

  // monthly_storage_server_version - computed: true, optional: false, required: false
  public get monthlyStorageServerVersion() {
    return this.getStringAttribute('monthly_storage_server_version');
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // next_maintenance_run_time - computed: true, optional: false, required: false
  public get nextMaintenanceRunTime() {
    return this.getStringAttribute('next_maintenance_run_time');
  }

  // next_security_maintenance_run_time - computed: true, optional: false, required: false
  public get nextSecurityMaintenanceRunTime() {
    return this.getStringAttribute('next_security_maintenance_run_time');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_count - computed: false, optional: true, required: false
  private _storageCount?: number; 
  public get storageCount() {
    return this.getNumberAttribute('storage_count');
  }
  public set storageCount(value: number) {
    this._storageCount = value;
  }
  public resetStorageCount() {
    this._storageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCountInput() {
    return this._storageCount;
  }

  // storage_server_version - computed: true, optional: false, required: false
  public get storageServerVersion() {
    return this.getStringAttribute('storage_server_version');
  }

  // total_storage_size_gb - computed: true, optional: true, required: false
  private _totalStorageSizeGb?: number; 
  public get totalStorageSizeGb() {
    return this.getNumberAttribute('total_storage_size_gb');
  }
  public set totalStorageSizeGb(value: number) {
    this._totalStorageSizeGb = value;
  }
  public resetTotalStorageSizeGb() {
    this._totalStorageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalStorageSizeGbInput() {
    return this._totalStorageSizeGb;
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts = new OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }
  public putCustomerContacts(value: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts[] | cdktf.IResolvable) {
    this._customerContacts.internalValue = value;
  }
  public resetCustomerContacts() {
    this._customerContacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface OracleDatabaseCloudExadataInfrastructureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}
  */
  readonly update?: string;
}

export function oracleDatabaseCloudExadataInfrastructureTimeoutsToTerraform(struct?: OracleDatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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


export function oracleDatabaseCloudExadataInfrastructureTimeoutsToHclTerraform(struct?: OracleDatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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

export class OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}
*/
export class OracleDatabaseCloudExadataInfrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_cloud_exadata_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseCloudExadataInfrastructure to import
  * @param importFromId The id of the existing OracleDatabaseCloudExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseCloudExadataInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_cloud_exadata_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseCloudExadataInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseCloudExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_cloud_exadata_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.3',
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
    this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._gcpOracleZone = config.gcpOracleZone;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._properties.internalValue = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _cloudExadataInfrastructureId?: string; 
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }
  public set cloudExadataInfrastructureId(value: string) {
    this._cloudExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureIdInput() {
    return this._cloudExadataInfrastructureId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // display_name - computed: false, optional: true, required: false
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }

  // gcp_oracle_zone - computed: true, optional: true, required: false
  private _gcpOracleZone?: string; 
  public get gcpOracleZone() {
    return this.getStringAttribute('gcp_oracle_zone');
  }
  public set gcpOracleZone(value: string) {
    this._gcpOracleZone = value;
  }
  public resetGcpOracleZone() {
    this._gcpOracleZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOracleZoneInput() {
    return this._gcpOracleZone;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseCloudExadataInfrastructureProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseCloudExadataInfrastructureTimeouts) {
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
      cloud_exadata_infrastructure_id: cdktf.stringToTerraform(this._cloudExadataInfrastructureId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      display_name: cdktf.stringToTerraform(this._displayName),
      gcp_oracle_zone: cdktf.stringToTerraform(this._gcpOracleZone),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      properties: oracleDatabaseCloudExadataInfrastructurePropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseCloudExadataInfrastructureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_oracle_zone: {
        value: cdktf.stringToHclTerraform(this._gcpOracleZone),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      properties: {
        value: oracleDatabaseCloudExadataInfrastructurePropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseCloudExadataInfrastructurePropertiesList",
      },
      timeouts: {
        value: oracleDatabaseCloudExadataInfrastructureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseCloudExadataInfrastructureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
