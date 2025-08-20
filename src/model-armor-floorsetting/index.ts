/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModelArmorFloorsettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Floor Settings enforcement status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#enable_floor_setting_enforcement ModelArmorFloorsetting#enable_floor_setting_enforcement}
  */
  readonly enableFloorSettingEnforcement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of integrated services for which the floor setting is applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#integrated_services ModelArmorFloorsetting#integrated_services}
  */
  readonly integratedServices?: string[];
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#location ModelArmorFloorsetting#location}
  */
  readonly location: string;
  /**
  * Will be any one of these:
  * 
  * * 'projects/{project}'
  * * 'folders/{folder}'
  * * 'organizations/{organizationId}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#parent ModelArmorFloorsetting#parent}
  */
  readonly parent: string;
  /**
  * ai_platform_floor_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#ai_platform_floor_setting ModelArmorFloorsetting#ai_platform_floor_setting}
  */
  readonly aiPlatformFloorSetting?: ModelArmorFloorsettingAiPlatformFloorSetting;
  /**
  * filter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#filter_config ModelArmorFloorsetting#filter_config}
  */
  readonly filterConfig: ModelArmorFloorsettingFilterConfig;
  /**
  * floor_setting_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#floor_setting_metadata ModelArmorFloorsetting#floor_setting_metadata}
  */
  readonly floorSettingMetadata?: ModelArmorFloorsettingFloorSettingMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#timeouts ModelArmorFloorsetting#timeouts}
  */
  readonly timeouts?: ModelArmorFloorsettingTimeouts;
}
export interface ModelArmorFloorsettingAiPlatformFloorSetting {
  /**
  * If true, log Model Armor filter results to Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#enable_cloud_logging ModelArmorFloorsetting#enable_cloud_logging}
  */
  readonly enableCloudLogging?: boolean | cdktf.IResolvable;
  /**
  * If true, Model Armor filters will be run in inspect and block mode.
  * Requests that trip Model Armor filters will be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#inspect_and_block ModelArmorFloorsetting#inspect_and_block}
  */
  readonly inspectAndBlock?: boolean | cdktf.IResolvable;
  /**
  * If true, Model Armor filters will be run in inspect only mode. No action
  * will be taken on the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#inspect_only ModelArmorFloorsetting#inspect_only}
  */
  readonly inspectOnly?: boolean | cdktf.IResolvable;
}

export function modelArmorFloorsettingAiPlatformFloorSettingToTerraform(struct?: ModelArmorFloorsettingAiPlatformFloorSettingOutputReference | ModelArmorFloorsettingAiPlatformFloorSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_cloud_logging: cdktf.booleanToTerraform(struct!.enableCloudLogging),
    inspect_and_block: cdktf.booleanToTerraform(struct!.inspectAndBlock),
    inspect_only: cdktf.booleanToTerraform(struct!.inspectOnly),
  }
}


export function modelArmorFloorsettingAiPlatformFloorSettingToHclTerraform(struct?: ModelArmorFloorsettingAiPlatformFloorSettingOutputReference | ModelArmorFloorsettingAiPlatformFloorSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_cloud_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableCloudLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspect_and_block: {
      value: cdktf.booleanToHclTerraform(struct!.inspectAndBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspect_only: {
      value: cdktf.booleanToHclTerraform(struct!.inspectOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingAiPlatformFloorSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingAiPlatformFloorSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCloudLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudLogging = this._enableCloudLogging;
    }
    if (this._inspectAndBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectAndBlock = this._inspectAndBlock;
    }
    if (this._inspectOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectOnly = this._inspectOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingAiPlatformFloorSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCloudLogging = undefined;
      this._inspectAndBlock = undefined;
      this._inspectOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCloudLogging = value.enableCloudLogging;
      this._inspectAndBlock = value.inspectAndBlock;
      this._inspectOnly = value.inspectOnly;
    }
  }

  // enable_cloud_logging - computed: false, optional: true, required: false
  private _enableCloudLogging?: boolean | cdktf.IResolvable; 
  public get enableCloudLogging() {
    return this.getBooleanAttribute('enable_cloud_logging');
  }
  public set enableCloudLogging(value: boolean | cdktf.IResolvable) {
    this._enableCloudLogging = value;
  }
  public resetEnableCloudLogging() {
    this._enableCloudLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudLoggingInput() {
    return this._enableCloudLogging;
  }

  // inspect_and_block - computed: false, optional: true, required: false
  private _inspectAndBlock?: boolean | cdktf.IResolvable; 
  public get inspectAndBlock() {
    return this.getBooleanAttribute('inspect_and_block');
  }
  public set inspectAndBlock(value: boolean | cdktf.IResolvable) {
    this._inspectAndBlock = value;
  }
  public resetInspectAndBlock() {
    this._inspectAndBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectAndBlockInput() {
    return this._inspectAndBlock;
  }

  // inspect_only - computed: false, optional: true, required: false
  private _inspectOnly?: boolean | cdktf.IResolvable; 
  public get inspectOnly() {
    return this.getBooleanAttribute('inspect_only');
  }
  public set inspectOnly(value: boolean | cdktf.IResolvable) {
    this._inspectOnly = value;
  }
  public resetInspectOnly() {
    this._inspectOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectOnlyInput() {
    return this._inspectOnly;
  }
}
export interface ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings {
  /**
  * Tells whether the Malicious URI filter is enabled or disabled.
  * Possible values:
  * ENABLED
  * DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}
  */
  readonly filterEnforcement?: string;
}

export function modelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsToTerraform(struct?: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference | ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_enforcement: cdktf.stringToTerraform(struct!.filterEnforcement),
  }
}


export function modelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference | ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.filterEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnforcement = this._filterEnforcement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterEnforcement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterEnforcement = value.filterEnforcement;
    }
  }

  // filter_enforcement - computed: false, optional: true, required: false
  private _filterEnforcement?: string; 
  public get filterEnforcement() {
    return this.getStringAttribute('filter_enforcement');
  }
  public set filterEnforcement(value: string) {
    this._filterEnforcement = value;
  }
  public resetFilterEnforcement() {
    this._filterEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnforcementInput() {
    return this._filterEnforcement;
  }
}
export interface ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings {
  /**
  * Possible values:
  * LOW_AND_ABOVE
  * MEDIUM_AND_ABOVE
  * HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}
  */
  readonly confidenceLevel?: string;
  /**
  * Tells whether Prompt injection and Jailbreak filter is enabled or
  * disabled.
  * Possible values:
  * ENABLED
  * DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}
  */
  readonly filterEnforcement?: string;
}

export function modelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsToTerraform(struct?: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference | ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
    filter_enforcement: cdktf.stringToTerraform(struct!.filterEnforcement),
  }
}


export function modelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference | ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_level: {
      value: cdktf.stringToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.filterEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._filterEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnforcement = this._filterEnforcement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidenceLevel = undefined;
      this._filterEnforcement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidenceLevel = value.confidenceLevel;
      this._filterEnforcement = value.filterEnforcement;
    }
  }

  // confidence_level - computed: false, optional: true, required: false
  private _confidenceLevel?: string; 
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
  public set confidenceLevel(value: string) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // filter_enforcement - computed: false, optional: true, required: false
  private _filterEnforcement?: string; 
  public get filterEnforcement() {
    return this.getStringAttribute('filter_enforcement');
  }
  public set filterEnforcement(value: string) {
    this._filterEnforcement = value;
  }
  public resetFilterEnforcement() {
    this._filterEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnforcementInput() {
    return this._filterEnforcement;
  }
}
export interface ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters {
  /**
  * Possible values:
  * LOW_AND_ABOVE
  * MEDIUM_AND_ABOVE
  * HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}
  */
  readonly confidenceLevel?: string;
  /**
  * Possible values:
  * SEXUALLY_EXPLICIT
  * HATE_SPEECH
  * HARASSMENT
  * DANGEROUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#filter_type ModelArmorFloorsetting#filter_type}
  */
  readonly filterType: string;
}

export function modelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersToTerraform(struct?: ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
  }
}


export function modelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence_level: {
      value: cdktf.stringToHclTerraform(struct!.confidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceLevel = this._confidenceLevel;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceLevel = undefined;
      this._filterType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceLevel = value.confidenceLevel;
      this._filterType = value.filterType;
    }
  }

  // confidence_level - computed: false, optional: true, required: false
  private _confidenceLevel?: string; 
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
  public set confidenceLevel(value: string) {
    this._confidenceLevel = value;
  }
  public resetConfidenceLevel() {
    this._confidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelInput() {
    return this._confidenceLevel;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }
}

export class ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList extends cdktf.ComplexList {
  public internalValue? : ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] | cdktf.IResolvable

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
  public get(index: number): ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference {
    return new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ModelArmorFloorsettingFilterConfigRaiSettings {
  /**
  * rai_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#rai_filters ModelArmorFloorsetting#rai_filters}
  */
  readonly raiFilters: ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] | cdktf.IResolvable;
}

export function modelArmorFloorsettingFilterConfigRaiSettingsToTerraform(struct?: ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference | ModelArmorFloorsettingFilterConfigRaiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rai_filters: cdktf.listMapper(modelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersToTerraform, true)(struct!.raiFilters),
  }
}


export function modelArmorFloorsettingFilterConfigRaiSettingsToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference | ModelArmorFloorsettingFilterConfigRaiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rai_filters: {
      value: cdktf.listMapperHcl(modelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersToHclTerraform, true)(struct!.raiFilters),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfigRaiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raiFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raiFilters = this._raiFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigRaiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raiFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raiFilters.internalValue = value.raiFilters;
    }
  }

  // rai_filters - computed: false, optional: false, required: true
  private _raiFilters = new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(this, "rai_filters", false);
  public get raiFilters() {
    return this._raiFilters;
  }
  public putRaiFilters(value: ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] | cdktf.IResolvable) {
    this._raiFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get raiFiltersInput() {
    return this._raiFilters.internalValue;
  }
}
export interface ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig {
  /**
  * Optional Sensitive Data Protection Deidentify template resource name.
  * 
  * If provided then DeidentifyContent action is performed during Sanitization
  * using this template and inspect template. The De-identified data will
  * be returned in SdpDeidentifyResult.
  * Note that all info-types present in the deidentify template must be present
  * in inspect template.
  * 
  * e.g.
  * 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#deidentify_template ModelArmorFloorsetting#deidentify_template}
  */
  readonly deidentifyTemplate?: string;
  /**
  * Sensitive Data Protection inspect template resource name
  * 
  * If only inspect template is provided (de-identify template not provided),
  * then Sensitive Data Protection InspectContent action is performed during
  * Sanitization. All Sensitive Data Protection findings identified during
  * inspection will be returned as SdpFinding in SdpInsepctionResult.
  * 
  * e.g:-
  * 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#inspect_template ModelArmorFloorsetting#inspect_template}
  */
  readonly inspectTemplate?: string;
}

export function modelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigToTerraform(struct?: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference | ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deidentify_template: cdktf.stringToTerraform(struct!.deidentifyTemplate),
    inspect_template: cdktf.stringToTerraform(struct!.inspectTemplate),
  }
}


export function modelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference | ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deidentify_template: {
      value: cdktf.stringToHclTerraform(struct!.deidentifyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_template: {
      value: cdktf.stringToHclTerraform(struct!.inspectTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deidentifyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deidentifyTemplate = this._deidentifyTemplate;
    }
    if (this._inspectTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplate = this._inspectTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deidentifyTemplate = undefined;
      this._inspectTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deidentifyTemplate = value.deidentifyTemplate;
      this._inspectTemplate = value.inspectTemplate;
    }
  }

  // deidentify_template - computed: false, optional: true, required: false
  private _deidentifyTemplate?: string; 
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }
  public set deidentifyTemplate(value: string) {
    this._deidentifyTemplate = value;
  }
  public resetDeidentifyTemplate() {
    this._deidentifyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyTemplateInput() {
    return this._deidentifyTemplate;
  }

  // inspect_template - computed: false, optional: true, required: false
  private _inspectTemplate?: string; 
  public get inspectTemplate() {
    return this.getStringAttribute('inspect_template');
  }
  public set inspectTemplate(value: string) {
    this._inspectTemplate = value;
  }
  public resetInspectTemplate() {
    this._inspectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateInput() {
    return this._inspectTemplate;
  }
}
export interface ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig {
  /**
  * Tells whether the Sensitive Data Protection basic config is enabled or
  * disabled.
  * Possible values:
  * ENABLED
  * DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}
  */
  readonly filterEnforcement?: string;
}

export function modelArmorFloorsettingFilterConfigSdpSettingsBasicConfigToTerraform(struct?: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference | ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_enforcement: cdktf.stringToTerraform(struct!.filterEnforcement),
  }
}


export function modelArmorFloorsettingFilterConfigSdpSettingsBasicConfigToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference | ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.filterEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEnforcement = this._filterEnforcement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterEnforcement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterEnforcement = value.filterEnforcement;
    }
  }

  // filter_enforcement - computed: false, optional: true, required: false
  private _filterEnforcement?: string; 
  public get filterEnforcement() {
    return this.getStringAttribute('filter_enforcement');
  }
  public set filterEnforcement(value: string) {
    this._filterEnforcement = value;
  }
  public resetFilterEnforcement() {
    this._filterEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEnforcementInput() {
    return this._filterEnforcement;
  }
}
export interface ModelArmorFloorsettingFilterConfigSdpSettings {
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#advanced_config ModelArmorFloorsetting#advanced_config}
  */
  readonly advancedConfig?: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig;
  /**
  * basic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#basic_config ModelArmorFloorsetting#basic_config}
  */
  readonly basicConfig?: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig;
}

export function modelArmorFloorsettingFilterConfigSdpSettingsToTerraform(struct?: ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference | ModelArmorFloorsettingFilterConfigSdpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_config: modelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigToTerraform(struct!.advancedConfig),
    basic_config: modelArmorFloorsettingFilterConfigSdpSettingsBasicConfigToTerraform(struct!.basicConfig),
  }
}


export function modelArmorFloorsettingFilterConfigSdpSettingsToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference | ModelArmorFloorsettingFilterConfigSdpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_config: {
      value: modelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigToHclTerraform(struct!.advancedConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigList",
    },
    basic_config: {
      value: modelArmorFloorsettingFilterConfigSdpSettingsBasicConfigToHclTerraform(struct!.basicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfigSdpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfig = this._advancedConfig?.internalValue;
    }
    if (this._basicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicConfig = this._basicConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfigSdpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedConfig.internalValue = undefined;
      this._basicConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedConfig.internalValue = value.advancedConfig;
      this._basicConfig.internalValue = value.basicConfig;
    }
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // basic_config - computed: false, optional: true, required: false
  private _basicConfig = new ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(this, "basic_config");
  public get basicConfig() {
    return this._basicConfig;
  }
  public putBasicConfig(value: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig) {
    this._basicConfig.internalValue = value;
  }
  public resetBasicConfig() {
    this._basicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicConfigInput() {
    return this._basicConfig.internalValue;
  }
}
export interface ModelArmorFloorsettingFilterConfig {
  /**
  * malicious_uri_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#malicious_uri_filter_settings ModelArmorFloorsetting#malicious_uri_filter_settings}
  */
  readonly maliciousUriFilterSettings?: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings;
  /**
  * pi_and_jailbreak_filter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#pi_and_jailbreak_filter_settings ModelArmorFloorsetting#pi_and_jailbreak_filter_settings}
  */
  readonly piAndJailbreakFilterSettings?: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings;
  /**
  * rai_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#rai_settings ModelArmorFloorsetting#rai_settings}
  */
  readonly raiSettings?: ModelArmorFloorsettingFilterConfigRaiSettings;
  /**
  * sdp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#sdp_settings ModelArmorFloorsetting#sdp_settings}
  */
  readonly sdpSettings?: ModelArmorFloorsettingFilterConfigSdpSettings;
}

export function modelArmorFloorsettingFilterConfigToTerraform(struct?: ModelArmorFloorsettingFilterConfigOutputReference | ModelArmorFloorsettingFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malicious_uri_filter_settings: modelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsToTerraform(struct!.maliciousUriFilterSettings),
    pi_and_jailbreak_filter_settings: modelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsToTerraform(struct!.piAndJailbreakFilterSettings),
    rai_settings: modelArmorFloorsettingFilterConfigRaiSettingsToTerraform(struct!.raiSettings),
    sdp_settings: modelArmorFloorsettingFilterConfigSdpSettingsToTerraform(struct!.sdpSettings),
  }
}


export function modelArmorFloorsettingFilterConfigToHclTerraform(struct?: ModelArmorFloorsettingFilterConfigOutputReference | ModelArmorFloorsettingFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malicious_uri_filter_settings: {
      value: modelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsToHclTerraform(struct!.maliciousUriFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsList",
    },
    pi_and_jailbreak_filter_settings: {
      value: modelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsToHclTerraform(struct!.piAndJailbreakFilterSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsList",
    },
    rai_settings: {
      value: modelArmorFloorsettingFilterConfigRaiSettingsToHclTerraform(struct!.raiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigRaiSettingsList",
    },
    sdp_settings: {
      value: modelArmorFloorsettingFilterConfigSdpSettingsToHclTerraform(struct!.sdpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFilterConfigSdpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFilterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFilterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maliciousUriFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUriFilterSettings = this._maliciousUriFilterSettings?.internalValue;
    }
    if (this._piAndJailbreakFilterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piAndJailbreakFilterSettings = this._piAndJailbreakFilterSettings?.internalValue;
    }
    if (this._raiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.raiSettings = this._raiSettings?.internalValue;
    }
    if (this._sdpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdpSettings = this._sdpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFilterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maliciousUriFilterSettings.internalValue = undefined;
      this._piAndJailbreakFilterSettings.internalValue = undefined;
      this._raiSettings.internalValue = undefined;
      this._sdpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maliciousUriFilterSettings.internalValue = value.maliciousUriFilterSettings;
      this._piAndJailbreakFilterSettings.internalValue = value.piAndJailbreakFilterSettings;
      this._raiSettings.internalValue = value.raiSettings;
      this._sdpSettings.internalValue = value.sdpSettings;
    }
  }

  // malicious_uri_filter_settings - computed: false, optional: true, required: false
  private _maliciousUriFilterSettings = new ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(this, "malicious_uri_filter_settings");
  public get maliciousUriFilterSettings() {
    return this._maliciousUriFilterSettings;
  }
  public putMaliciousUriFilterSettings(value: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings) {
    this._maliciousUriFilterSettings.internalValue = value;
  }
  public resetMaliciousUriFilterSettings() {
    this._maliciousUriFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUriFilterSettingsInput() {
    return this._maliciousUriFilterSettings.internalValue;
  }

  // pi_and_jailbreak_filter_settings - computed: false, optional: true, required: false
  private _piAndJailbreakFilterSettings = new ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(this, "pi_and_jailbreak_filter_settings");
  public get piAndJailbreakFilterSettings() {
    return this._piAndJailbreakFilterSettings;
  }
  public putPiAndJailbreakFilterSettings(value: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings) {
    this._piAndJailbreakFilterSettings.internalValue = value;
  }
  public resetPiAndJailbreakFilterSettings() {
    this._piAndJailbreakFilterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piAndJailbreakFilterSettingsInput() {
    return this._piAndJailbreakFilterSettings.internalValue;
  }

  // rai_settings - computed: false, optional: true, required: false
  private _raiSettings = new ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(this, "rai_settings");
  public get raiSettings() {
    return this._raiSettings;
  }
  public putRaiSettings(value: ModelArmorFloorsettingFilterConfigRaiSettings) {
    this._raiSettings.internalValue = value;
  }
  public resetRaiSettings() {
    this._raiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiSettingsInput() {
    return this._raiSettings.internalValue;
  }

  // sdp_settings - computed: false, optional: true, required: false
  private _sdpSettings = new ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(this, "sdp_settings");
  public get sdpSettings() {
    return this._sdpSettings;
  }
  public putSdpSettings(value: ModelArmorFloorsettingFilterConfigSdpSettings) {
    this._sdpSettings.internalValue = value;
  }
  public resetSdpSettings() {
    this._sdpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdpSettingsInput() {
    return this._sdpSettings.internalValue;
  }
}
export interface ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection {
  /**
  * If true, multi language detection will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#enable_multi_language_detection ModelArmorFloorsetting#enable_multi_language_detection}
  */
  readonly enableMultiLanguageDetection: boolean | cdktf.IResolvable;
}

export function modelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionToTerraform(struct?: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference | ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_multi_language_detection: cdktf.booleanToTerraform(struct!.enableMultiLanguageDetection),
  }
}


export function modelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionToHclTerraform(struct?: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference | ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_multi_language_detection: {
      value: cdktf.booleanToHclTerraform(struct!.enableMultiLanguageDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMultiLanguageDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultiLanguageDetection = this._enableMultiLanguageDetection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMultiLanguageDetection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMultiLanguageDetection = value.enableMultiLanguageDetection;
    }
  }

  // enable_multi_language_detection - computed: false, optional: false, required: true
  private _enableMultiLanguageDetection?: boolean | cdktf.IResolvable; 
  public get enableMultiLanguageDetection() {
    return this.getBooleanAttribute('enable_multi_language_detection');
  }
  public set enableMultiLanguageDetection(value: boolean | cdktf.IResolvable) {
    this._enableMultiLanguageDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiLanguageDetectionInput() {
    return this._enableMultiLanguageDetection;
  }
}
export interface ModelArmorFloorsettingFloorSettingMetadata {
  /**
  * multi_language_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#multi_language_detection ModelArmorFloorsetting#multi_language_detection}
  */
  readonly multiLanguageDetection?: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection;
}

export function modelArmorFloorsettingFloorSettingMetadataToTerraform(struct?: ModelArmorFloorsettingFloorSettingMetadataOutputReference | ModelArmorFloorsettingFloorSettingMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_language_detection: modelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionToTerraform(struct!.multiLanguageDetection),
  }
}


export function modelArmorFloorsettingFloorSettingMetadataToHclTerraform(struct?: ModelArmorFloorsettingFloorSettingMetadataOutputReference | ModelArmorFloorsettingFloorSettingMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_language_detection: {
      value: modelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionToHclTerraform(struct!.multiLanguageDetection),
      isBlock: true,
      type: "list",
      storageClassType: "ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ModelArmorFloorsettingFloorSettingMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ModelArmorFloorsettingFloorSettingMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiLanguageDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLanguageDetection = this._multiLanguageDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ModelArmorFloorsettingFloorSettingMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiLanguageDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiLanguageDetection.internalValue = value.multiLanguageDetection;
    }
  }

  // multi_language_detection - computed: false, optional: true, required: false
  private _multiLanguageDetection = new ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(this, "multi_language_detection");
  public get multiLanguageDetection() {
    return this._multiLanguageDetection;
  }
  public putMultiLanguageDetection(value: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection) {
    this._multiLanguageDetection.internalValue = value;
  }
  public resetMultiLanguageDetection() {
    this._multiLanguageDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLanguageDetectionInput() {
    return this._multiLanguageDetection.internalValue;
  }
}
export interface ModelArmorFloorsettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}
  */
  readonly update?: string;
}

export function modelArmorFloorsettingTimeoutsToTerraform(struct?: ModelArmorFloorsettingTimeouts | cdktf.IResolvable): any {
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


export function modelArmorFloorsettingTimeoutsToHclTerraform(struct?: ModelArmorFloorsettingTimeouts | cdktf.IResolvable): any {
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

export class ModelArmorFloorsettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ModelArmorFloorsettingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ModelArmorFloorsettingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting google_model_armor_floorsetting}
*/
export class ModelArmorFloorsetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_model_armor_floorsetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModelArmorFloorsetting to import
  * @param importFromId The id of the existing ModelArmorFloorsetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModelArmorFloorsetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_model_armor_floorsetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/model_armor_floorsetting google_model_armor_floorsetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModelArmorFloorsettingConfig
  */
  public constructor(scope: Construct, id: string, config: ModelArmorFloorsettingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_model_armor_floorsetting',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.0',
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
    this._enableFloorSettingEnforcement = config.enableFloorSettingEnforcement;
    this._id = config.id;
    this._integratedServices = config.integratedServices;
    this._location = config.location;
    this._parent = config.parent;
    this._aiPlatformFloorSetting.internalValue = config.aiPlatformFloorSetting;
    this._filterConfig.internalValue = config.filterConfig;
    this._floorSettingMetadata.internalValue = config.floorSettingMetadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_floor_setting_enforcement - computed: false, optional: true, required: false
  private _enableFloorSettingEnforcement?: boolean | cdktf.IResolvable; 
  public get enableFloorSettingEnforcement() {
    return this.getBooleanAttribute('enable_floor_setting_enforcement');
  }
  public set enableFloorSettingEnforcement(value: boolean | cdktf.IResolvable) {
    this._enableFloorSettingEnforcement = value;
  }
  public resetEnableFloorSettingEnforcement() {
    this._enableFloorSettingEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFloorSettingEnforcementInput() {
    return this._enableFloorSettingEnforcement;
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

  // integrated_services - computed: false, optional: true, required: false
  private _integratedServices?: string[]; 
  public get integratedServices() {
    return this.getListAttribute('integrated_services');
  }
  public set integratedServices(value: string[]) {
    this._integratedServices = value;
  }
  public resetIntegratedServices() {
    this._integratedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integratedServicesInput() {
    return this._integratedServices;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // ai_platform_floor_setting - computed: false, optional: true, required: false
  private _aiPlatformFloorSetting = new ModelArmorFloorsettingAiPlatformFloorSettingOutputReference(this, "ai_platform_floor_setting");
  public get aiPlatformFloorSetting() {
    return this._aiPlatformFloorSetting;
  }
  public putAiPlatformFloorSetting(value: ModelArmorFloorsettingAiPlatformFloorSetting) {
    this._aiPlatformFloorSetting.internalValue = value;
  }
  public resetAiPlatformFloorSetting() {
    this._aiPlatformFloorSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiPlatformFloorSettingInput() {
    return this._aiPlatformFloorSetting.internalValue;
  }

  // filter_config - computed: false, optional: false, required: true
  private _filterConfig = new ModelArmorFloorsettingFilterConfigOutputReference(this, "filter_config");
  public get filterConfig() {
    return this._filterConfig;
  }
  public putFilterConfig(value: ModelArmorFloorsettingFilterConfig) {
    this._filterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigInput() {
    return this._filterConfig.internalValue;
  }

  // floor_setting_metadata - computed: false, optional: true, required: false
  private _floorSettingMetadata = new ModelArmorFloorsettingFloorSettingMetadataOutputReference(this, "floor_setting_metadata");
  public get floorSettingMetadata() {
    return this._floorSettingMetadata;
  }
  public putFloorSettingMetadata(value: ModelArmorFloorsettingFloorSettingMetadata) {
    this._floorSettingMetadata.internalValue = value;
  }
  public resetFloorSettingMetadata() {
    this._floorSettingMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorSettingMetadataInput() {
    return this._floorSettingMetadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ModelArmorFloorsettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ModelArmorFloorsettingTimeouts) {
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
      enable_floor_setting_enforcement: cdktf.booleanToTerraform(this._enableFloorSettingEnforcement),
      id: cdktf.stringToTerraform(this._id),
      integrated_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integratedServices),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      ai_platform_floor_setting: modelArmorFloorsettingAiPlatformFloorSettingToTerraform(this._aiPlatformFloorSetting.internalValue),
      filter_config: modelArmorFloorsettingFilterConfigToTerraform(this._filterConfig.internalValue),
      floor_setting_metadata: modelArmorFloorsettingFloorSettingMetadataToTerraform(this._floorSettingMetadata.internalValue),
      timeouts: modelArmorFloorsettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_floor_setting_enforcement: {
        value: cdktf.booleanToHclTerraform(this._enableFloorSettingEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integrated_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integratedServices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_platform_floor_setting: {
        value: modelArmorFloorsettingAiPlatformFloorSettingToHclTerraform(this._aiPlatformFloorSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelArmorFloorsettingAiPlatformFloorSettingList",
      },
      filter_config: {
        value: modelArmorFloorsettingFilterConfigToHclTerraform(this._filterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelArmorFloorsettingFilterConfigList",
      },
      floor_setting_metadata: {
        value: modelArmorFloorsettingFloorSettingMetadataToHclTerraform(this._floorSettingMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ModelArmorFloorsettingFloorSettingMetadataList",
      },
      timeouts: {
        value: modelArmorFloorsettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ModelArmorFloorsettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
