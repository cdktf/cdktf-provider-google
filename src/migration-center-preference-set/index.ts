/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MigrationCenterPreferenceSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the preference set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#description MigrationCenterPreferenceSet#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name. Maximum length is 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#display_name MigrationCenterPreferenceSet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#id MigrationCenterPreferenceSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Part of 'parent'. See documentation of 'projectsId'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#location MigrationCenterPreferenceSet#location}
  */
  readonly location: string;
  /**
  * Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z]([a-z0-9-]{0,61}[a-z0-9])?'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#preference_set_id MigrationCenterPreferenceSet#preference_set_id}
  */
  readonly preferenceSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#project MigrationCenterPreferenceSet#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#timeouts MigrationCenterPreferenceSet#timeouts}
  */
  readonly timeouts?: MigrationCenterPreferenceSetTimeouts;
  /**
  * virtual_machine_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#virtual_machine_preferences MigrationCenterPreferenceSet#virtual_machine_preferences}
  */
  readonly virtualMachinePreferences?: MigrationCenterPreferenceSetVirtualMachinePreferences;
}
export interface MigrationCenterPreferenceSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#create MigrationCenterPreferenceSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#delete MigrationCenterPreferenceSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#update MigrationCenterPreferenceSet#update}
  */
  readonly update?: string;
}

export function migrationCenterPreferenceSetTimeoutsToTerraform(struct?: MigrationCenterPreferenceSetTimeouts | cdktf.IResolvable): any {
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


export function migrationCenterPreferenceSetTimeoutsToHclTerraform(struct?: MigrationCenterPreferenceSetTimeouts | cdktf.IResolvable): any {
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

export class MigrationCenterPreferenceSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationCenterPreferenceSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MigrationCenterPreferenceSetTimeouts | cdktf.IResolvable | undefined) {
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
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
  /**
  * Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#code MigrationCenterPreferenceSet#code}
  */
  readonly code?: string;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList extends cdktf.ComplexList {
  public internalValue? : MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[] | cdktf.IResolvable

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
  public get(index: number): MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference {
    return new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
  /**
  * allowed_machine_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#allowed_machine_series MigrationCenterPreferenceSet#allowed_machine_series}
  */
  readonly allowedMachineSeries?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[] | cdktf.IResolvable;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_machine_series: cdktf.listMapper(migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToTerraform, true)(struct!.allowedMachineSeries),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_machine_series: {
      value: cdktf.listMapperHcl(migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToHclTerraform, true)(struct!.allowedMachineSeries),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMachineSeries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMachineSeries = this._allowedMachineSeries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedMachineSeries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedMachineSeries.internalValue = value.allowedMachineSeries;
    }
  }

  // allowed_machine_series - computed: false, optional: true, required: false
  private _allowedMachineSeries = new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(this, "allowed_machine_series", false);
  public get allowedMachineSeries() {
    return this._allowedMachineSeries;
  }
  public putAllowedMachineSeries(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[] | cdktf.IResolvable) {
    this._allowedMachineSeries.internalValue = value;
  }
  public resetAllowedMachineSeries() {
    this._allowedMachineSeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMachineSeriesInput() {
    return this._allowedMachineSeries.internalValue;
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences {
  /**
  * License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan. Possible values: 'LICENSE_TYPE_UNSPECIFIED', 'LICENSE_TYPE_DEFAULT', 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#license_type MigrationCenterPreferenceSet#license_type}
  */
  readonly licenseType?: string;
  /**
  * machine_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#machine_preferences MigrationCenterPreferenceSet#machine_preferences}
  */
  readonly machinePreferences?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    machine_preferences: migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesToTerraform(struct!.machinePreferences),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_preferences: {
      value: migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesToHclTerraform(struct!.machinePreferences),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._machinePreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePreferences = this._machinePreferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseType = undefined;
      this._machinePreferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseType = value.licenseType;
      this._machinePreferences.internalValue = value.machinePreferences;
    }
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // machine_preferences - computed: false, optional: true, required: false
  private _machinePreferences = new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(this, "machine_preferences");
  public get machinePreferences() {
    return this._machinePreferences;
  }
  public putMachinePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences) {
    this._machinePreferences.internalValue = value;
  }
  public resetMachinePreferences() {
    this._machinePreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePreferencesInput() {
    return this._machinePreferences.internalValue;
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences {
  /**
  * A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#preferred_regions MigrationCenterPreferenceSet#preferred_regions}
  */
  readonly preferredRegions?: string[];
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredRegions),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredRegions = this._preferredRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredRegions = value.preferredRegions;
    }
  }

  // preferred_regions - computed: false, optional: true, required: false
  private _preferredRegions?: string[]; 
  public get preferredRegions() {
    return this.getListAttribute('preferred_regions');
  }
  public set preferredRegions(value: string[]) {
    this._preferredRegions = value;
  }
  public resetPreferredRegions() {
    this._preferredRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRegionsInput() {
    return this._preferredRegions;
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes {
  /**
  * Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#node_name MigrationCenterPreferenceSet#node_name}
  */
  readonly nodeName?: string;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
    }
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList extends cdktf.ComplexList {
  public internalValue? : MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[] | cdktf.IResolvable

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
  public get(index: number): MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference {
    return new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences {
  /**
  * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR', 'COMMITMENT_3_YEAR'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}
  */
  readonly commitmentPlan?: string;
  /**
  * CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#cpu_overcommit_ratio MigrationCenterPreferenceSet#cpu_overcommit_ratio}
  */
  readonly cpuOvercommitRatio?: number;
  /**
  * Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#host_maintenance_policy MigrationCenterPreferenceSet#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: string;
  /**
  * node_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#node_types MigrationCenterPreferenceSet#node_types}
  */
  readonly nodeTypes?: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[] | cdktf.IResolvable;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitment_plan: cdktf.stringToTerraform(struct!.commitmentPlan),
    cpu_overcommit_ratio: cdktf.numberToTerraform(struct!.cpuOvercommitRatio),
    host_maintenance_policy: cdktf.stringToTerraform(struct!.hostMaintenancePolicy),
    node_types: cdktf.listMapper(migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesToTerraform, true)(struct!.nodeTypes),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitment_plan: {
      value: cdktf.stringToHclTerraform(struct!.commitmentPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_overcommit_ratio: {
      value: cdktf.numberToHclTerraform(struct!.cpuOvercommitRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_maintenance_policy: {
      value: cdktf.stringToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_types: {
      value: cdktf.listMapperHcl(migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesToHclTerraform, true)(struct!.nodeTypes),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitmentPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitmentPlan = this._commitmentPlan;
    }
    if (this._cpuOvercommitRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuOvercommitRatio = this._cpuOvercommitRatio;
    }
    if (this._hostMaintenancePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy;
    }
    if (this._nodeTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypes = this._nodeTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitmentPlan = undefined;
      this._cpuOvercommitRatio = undefined;
      this._hostMaintenancePolicy = undefined;
      this._nodeTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitmentPlan = value.commitmentPlan;
      this._cpuOvercommitRatio = value.cpuOvercommitRatio;
      this._hostMaintenancePolicy = value.hostMaintenancePolicy;
      this._nodeTypes.internalValue = value.nodeTypes;
    }
  }

  // commitment_plan - computed: false, optional: true, required: false
  private _commitmentPlan?: string; 
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }
  public set commitmentPlan(value: string) {
    this._commitmentPlan = value;
  }
  public resetCommitmentPlan() {
    this._commitmentPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentPlanInput() {
    return this._commitmentPlan;
  }

  // cpu_overcommit_ratio - computed: false, optional: true, required: false
  private _cpuOvercommitRatio?: number; 
  public get cpuOvercommitRatio() {
    return this.getNumberAttribute('cpu_overcommit_ratio');
  }
  public set cpuOvercommitRatio(value: number) {
    this._cpuOvercommitRatio = value;
  }
  public resetCpuOvercommitRatio() {
    this._cpuOvercommitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOvercommitRatioInput() {
    return this._cpuOvercommitRatio;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy?: string; 
  public get hostMaintenancePolicy() {
    return this.getStringAttribute('host_maintenance_policy');
  }
  public set hostMaintenancePolicy(value: string) {
    this._hostMaintenancePolicy = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy;
  }

  // node_types - computed: false, optional: true, required: false
  private _nodeTypes = new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList(this, "node_types", false);
  public get nodeTypes() {
    return this._nodeTypes;
  }
  public putNodeTypes(value: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[] | cdktf.IResolvable) {
    this._nodeTypes.internalValue = value;
  }
  public resetNodeTypes() {
    this._nodeTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypesInput() {
    return this._nodeTypes.internalValue;
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences {
  /**
  * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT',
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}
  */
  readonly commitmentPlan?: string;
  /**
  * CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#cpu_overcommit_ratio MigrationCenterPreferenceSet#cpu_overcommit_ratio}
  */
  readonly cpuOvercommitRatio?: number;
  /**
  * Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#memory_overcommit_ratio MigrationCenterPreferenceSet#memory_overcommit_ratio}
  */
  readonly memoryOvercommitRatio?: number;
  /**
  * The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#storage_deduplication_compression_ratio MigrationCenterPreferenceSet#storage_deduplication_compression_ratio}
  */
  readonly storageDeduplicationCompressionRatio?: number;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitment_plan: cdktf.stringToTerraform(struct!.commitmentPlan),
    cpu_overcommit_ratio: cdktf.numberToTerraform(struct!.cpuOvercommitRatio),
    memory_overcommit_ratio: cdktf.numberToTerraform(struct!.memoryOvercommitRatio),
    storage_deduplication_compression_ratio: cdktf.numberToTerraform(struct!.storageDeduplicationCompressionRatio),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitment_plan: {
      value: cdktf.stringToHclTerraform(struct!.commitmentPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_overcommit_ratio: {
      value: cdktf.numberToHclTerraform(struct!.cpuOvercommitRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_overcommit_ratio: {
      value: cdktf.numberToHclTerraform(struct!.memoryOvercommitRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_deduplication_compression_ratio: {
      value: cdktf.numberToHclTerraform(struct!.storageDeduplicationCompressionRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitmentPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitmentPlan = this._commitmentPlan;
    }
    if (this._cpuOvercommitRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuOvercommitRatio = this._cpuOvercommitRatio;
    }
    if (this._memoryOvercommitRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryOvercommitRatio = this._memoryOvercommitRatio;
    }
    if (this._storageDeduplicationCompressionRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDeduplicationCompressionRatio = this._storageDeduplicationCompressionRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitmentPlan = undefined;
      this._cpuOvercommitRatio = undefined;
      this._memoryOvercommitRatio = undefined;
      this._storageDeduplicationCompressionRatio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitmentPlan = value.commitmentPlan;
      this._cpuOvercommitRatio = value.cpuOvercommitRatio;
      this._memoryOvercommitRatio = value.memoryOvercommitRatio;
      this._storageDeduplicationCompressionRatio = value.storageDeduplicationCompressionRatio;
    }
  }

  // commitment_plan - computed: false, optional: true, required: false
  private _commitmentPlan?: string; 
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }
  public set commitmentPlan(value: string) {
    this._commitmentPlan = value;
  }
  public resetCommitmentPlan() {
    this._commitmentPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentPlanInput() {
    return this._commitmentPlan;
  }

  // cpu_overcommit_ratio - computed: false, optional: true, required: false
  private _cpuOvercommitRatio?: number; 
  public get cpuOvercommitRatio() {
    return this.getNumberAttribute('cpu_overcommit_ratio');
  }
  public set cpuOvercommitRatio(value: number) {
    this._cpuOvercommitRatio = value;
  }
  public resetCpuOvercommitRatio() {
    this._cpuOvercommitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOvercommitRatioInput() {
    return this._cpuOvercommitRatio;
  }

  // memory_overcommit_ratio - computed: false, optional: true, required: false
  private _memoryOvercommitRatio?: number; 
  public get memoryOvercommitRatio() {
    return this.getNumberAttribute('memory_overcommit_ratio');
  }
  public set memoryOvercommitRatio(value: number) {
    this._memoryOvercommitRatio = value;
  }
  public resetMemoryOvercommitRatio() {
    this._memoryOvercommitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOvercommitRatioInput() {
    return this._memoryOvercommitRatio;
  }

  // storage_deduplication_compression_ratio - computed: false, optional: true, required: false
  private _storageDeduplicationCompressionRatio?: number; 
  public get storageDeduplicationCompressionRatio() {
    return this.getNumberAttribute('storage_deduplication_compression_ratio');
  }
  public set storageDeduplicationCompressionRatio(value: number) {
    this._storageDeduplicationCompressionRatio = value;
  }
  public resetStorageDeduplicationCompressionRatio() {
    this._storageDeduplicationCompressionRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeduplicationCompressionRatioInput() {
    return this._storageDeduplicationCompressionRatio;
  }
}
export interface MigrationCenterPreferenceSetVirtualMachinePreferences {
  /**
  * Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'COMMITMENT_PLAN_NONE', 'COMMITMENT_PLAN_ONE_YEAR', 'COMMITMENT_PLAN_THREE_YEARS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}
  */
  readonly commitmentPlan?: string;
  /**
  * Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. Possible values: 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#sizing_optimization_strategy MigrationCenterPreferenceSet#sizing_optimization_strategy}
  */
  readonly sizingOptimizationStrategy?: string;
  /**
  * Target product for assets using this preference set. Specify either target product or business goal, but not both. Possible values: 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#target_product MigrationCenterPreferenceSet#target_product}
  */
  readonly targetProduct?: string;
  /**
  * compute_engine_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#compute_engine_preferences MigrationCenterPreferenceSet#compute_engine_preferences}
  */
  readonly computeEnginePreferences?: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences;
  /**
  * region_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#region_preferences MigrationCenterPreferenceSet#region_preferences}
  */
  readonly regionPreferences?: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences;
  /**
  * sole_tenancy_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#sole_tenancy_preferences MigrationCenterPreferenceSet#sole_tenancy_preferences}
  */
  readonly soleTenancyPreferences?: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;
  /**
  * vmware_engine_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#vmware_engine_preferences MigrationCenterPreferenceSet#vmware_engine_preferences}
  */
  readonly vmwareEnginePreferences?: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;
}

export function migrationCenterPreferenceSetVirtualMachinePreferencesToTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commitment_plan: cdktf.stringToTerraform(struct!.commitmentPlan),
    sizing_optimization_strategy: cdktf.stringToTerraform(struct!.sizingOptimizationStrategy),
    target_product: cdktf.stringToTerraform(struct!.targetProduct),
    compute_engine_preferences: migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesToTerraform(struct!.computeEnginePreferences),
    region_preferences: migrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesToTerraform(struct!.regionPreferences),
    sole_tenancy_preferences: migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesToTerraform(struct!.soleTenancyPreferences),
    vmware_engine_preferences: migrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesToTerraform(struct!.vmwareEnginePreferences),
  }
}


export function migrationCenterPreferenceSetVirtualMachinePreferencesToHclTerraform(struct?: MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference | MigrationCenterPreferenceSetVirtualMachinePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commitment_plan: {
      value: cdktf.stringToHclTerraform(struct!.commitmentPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sizing_optimization_strategy: {
      value: cdktf.stringToHclTerraform(struct!.sizingOptimizationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_product: {
      value: cdktf.stringToHclTerraform(struct!.targetProduct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_engine_preferences: {
      value: migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesToHclTerraform(struct!.computeEnginePreferences),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesList",
    },
    region_preferences: {
      value: migrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesToHclTerraform(struct!.regionPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesList",
    },
    sole_tenancy_preferences: {
      value: migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesToHclTerraform(struct!.soleTenancyPreferences),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesList",
    },
    vmware_engine_preferences: {
      value: migrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesToHclTerraform(struct!.vmwareEnginePreferences),
      isBlock: true,
      type: "list",
      storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MigrationCenterPreferenceSetVirtualMachinePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitmentPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitmentPlan = this._commitmentPlan;
    }
    if (this._sizingOptimizationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizingOptimizationStrategy = this._sizingOptimizationStrategy;
    }
    if (this._targetProduct !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProduct = this._targetProduct;
    }
    if (this._computeEnginePreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeEnginePreferences = this._computeEnginePreferences?.internalValue;
    }
    if (this._regionPreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionPreferences = this._regionPreferences?.internalValue;
    }
    if (this._soleTenancyPreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenancyPreferences = this._soleTenancyPreferences?.internalValue;
    }
    if (this._vmwareEnginePreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmwareEnginePreferences = this._vmwareEnginePreferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterPreferenceSetVirtualMachinePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitmentPlan = undefined;
      this._sizingOptimizationStrategy = undefined;
      this._targetProduct = undefined;
      this._computeEnginePreferences.internalValue = undefined;
      this._regionPreferences.internalValue = undefined;
      this._soleTenancyPreferences.internalValue = undefined;
      this._vmwareEnginePreferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitmentPlan = value.commitmentPlan;
      this._sizingOptimizationStrategy = value.sizingOptimizationStrategy;
      this._targetProduct = value.targetProduct;
      this._computeEnginePreferences.internalValue = value.computeEnginePreferences;
      this._regionPreferences.internalValue = value.regionPreferences;
      this._soleTenancyPreferences.internalValue = value.soleTenancyPreferences;
      this._vmwareEnginePreferences.internalValue = value.vmwareEnginePreferences;
    }
  }

  // commitment_plan - computed: false, optional: true, required: false
  private _commitmentPlan?: string; 
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }
  public set commitmentPlan(value: string) {
    this._commitmentPlan = value;
  }
  public resetCommitmentPlan() {
    this._commitmentPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentPlanInput() {
    return this._commitmentPlan;
  }

  // sizing_optimization_strategy - computed: false, optional: true, required: false
  private _sizingOptimizationStrategy?: string; 
  public get sizingOptimizationStrategy() {
    return this.getStringAttribute('sizing_optimization_strategy');
  }
  public set sizingOptimizationStrategy(value: string) {
    this._sizingOptimizationStrategy = value;
  }
  public resetSizingOptimizationStrategy() {
    this._sizingOptimizationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingOptimizationStrategyInput() {
    return this._sizingOptimizationStrategy;
  }

  // target_product - computed: false, optional: true, required: false
  private _targetProduct?: string; 
  public get targetProduct() {
    return this.getStringAttribute('target_product');
  }
  public set targetProduct(value: string) {
    this._targetProduct = value;
  }
  public resetTargetProduct() {
    this._targetProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProductInput() {
    return this._targetProduct;
  }

  // compute_engine_preferences - computed: false, optional: true, required: false
  private _computeEnginePreferences = new MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference(this, "compute_engine_preferences");
  public get computeEnginePreferences() {
    return this._computeEnginePreferences;
  }
  public putComputeEnginePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences) {
    this._computeEnginePreferences.internalValue = value;
  }
  public resetComputeEnginePreferences() {
    this._computeEnginePreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeEnginePreferencesInput() {
    return this._computeEnginePreferences.internalValue;
  }

  // region_preferences - computed: false, optional: true, required: false
  private _regionPreferences = new MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference(this, "region_preferences");
  public get regionPreferences() {
    return this._regionPreferences;
  }
  public putRegionPreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences) {
    this._regionPreferences.internalValue = value;
  }
  public resetRegionPreferences() {
    this._regionPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPreferencesInput() {
    return this._regionPreferences.internalValue;
  }

  // sole_tenancy_preferences - computed: false, optional: true, required: false
  private _soleTenancyPreferences = new MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference(this, "sole_tenancy_preferences");
  public get soleTenancyPreferences() {
    return this._soleTenancyPreferences;
  }
  public putSoleTenancyPreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences) {
    this._soleTenancyPreferences.internalValue = value;
  }
  public resetSoleTenancyPreferences() {
    this._soleTenancyPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenancyPreferencesInput() {
    return this._soleTenancyPreferences.internalValue;
  }

  // vmware_engine_preferences - computed: false, optional: true, required: false
  private _vmwareEnginePreferences = new MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference(this, "vmware_engine_preferences");
  public get vmwareEnginePreferences() {
    return this._vmwareEnginePreferences;
  }
  public putVmwareEnginePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences) {
    this._vmwareEnginePreferences.internalValue = value;
  }
  public resetVmwareEnginePreferences() {
    this._vmwareEnginePreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareEnginePreferencesInput() {
    return this._vmwareEnginePreferences.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set google_migration_center_preference_set}
*/
export class MigrationCenterPreferenceSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_migration_center_preference_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MigrationCenterPreferenceSet to import
  * @param importFromId The id of the existing MigrationCenterPreferenceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MigrationCenterPreferenceSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_migration_center_preference_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/migration_center_preference_set google_migration_center_preference_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MigrationCenterPreferenceSetConfig
  */
  public constructor(scope: Construct, id: string, config: MigrationCenterPreferenceSetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_migration_center_preference_set',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._preferenceSetId = config.preferenceSetId;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._virtualMachinePreferences.internalValue = config.virtualMachinePreferences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // preference_set_id - computed: false, optional: false, required: true
  private _preferenceSetId?: string; 
  public get preferenceSetId() {
    return this.getStringAttribute('preference_set_id');
  }
  public set preferenceSetId(value: string) {
    this._preferenceSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceSetIdInput() {
    return this._preferenceSetId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MigrationCenterPreferenceSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MigrationCenterPreferenceSetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_machine_preferences - computed: false, optional: true, required: false
  private _virtualMachinePreferences = new MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference(this, "virtual_machine_preferences");
  public get virtualMachinePreferences() {
    return this._virtualMachinePreferences;
  }
  public putVirtualMachinePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferences) {
    this._virtualMachinePreferences.internalValue = value;
  }
  public resetVirtualMachinePreferences() {
    this._virtualMachinePreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachinePreferencesInput() {
    return this._virtualMachinePreferences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      preference_set_id: cdktf.stringToTerraform(this._preferenceSetId),
      project: cdktf.stringToTerraform(this._project),
      timeouts: migrationCenterPreferenceSetTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_machine_preferences: migrationCenterPreferenceSetVirtualMachinePreferencesToTerraform(this._virtualMachinePreferences.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      preference_set_id: {
        value: cdktf.stringToHclTerraform(this._preferenceSetId),
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
      timeouts: {
        value: migrationCenterPreferenceSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MigrationCenterPreferenceSetTimeouts",
      },
      virtual_machine_preferences: {
        value: migrationCenterPreferenceSetVirtualMachinePreferencesToHclTerraform(this._virtualMachinePreferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MigrationCenterPreferenceSetVirtualMachinePreferencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
