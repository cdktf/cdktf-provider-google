/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryEngineRecommendationEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data stores associated with this engine. For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#data_store_ids DiscoveryEngineRecommendationEngine#data_store_ids}
  */
  readonly dataStoreIds: string[];
  /**
  * Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#display_name DiscoveryEngineRecommendationEngine#display_name}
  */
  readonly displayName: string;
  /**
  * Unique ID to use for Recommendation Engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#engine_id DiscoveryEngineRecommendationEngine#engine_id}
  */
  readonly engineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#industry_vertical DiscoveryEngineRecommendationEngine#industry_vertical}
  */
  readonly industryVertical?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#location DiscoveryEngineRecommendationEngine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}
  */
  readonly project?: string;
  /**
  * common_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#common_config DiscoveryEngineRecommendationEngine#common_config}
  */
  readonly commonConfig?: DiscoveryEngineRecommendationEngineCommonConfig;
  /**
  * media_recommendation_engine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#media_recommendation_engine_config DiscoveryEngineRecommendationEngine#media_recommendation_engine_config}
  */
  readonly mediaRecommendationEngineConfig?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#timeouts DiscoveryEngineRecommendationEngine#timeouts}
  */
  readonly timeouts?: DiscoveryEngineRecommendationEngineTimeouts;
}
export interface DiscoveryEngineRecommendationEngineCommonConfig {
  /**
  * The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features.cd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#company_name DiscoveryEngineRecommendationEngine#company_name}
  */
  readonly companyName?: string;
}

export function discoveryEngineRecommendationEngineCommonConfigToTerraform(struct?: DiscoveryEngineRecommendationEngineCommonConfigOutputReference | DiscoveryEngineRecommendationEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_name: cdktf.stringToTerraform(struct!.companyName),
  }
}


export function discoveryEngineRecommendationEngineCommonConfigToHclTerraform(struct?: DiscoveryEngineRecommendationEngineCommonConfigOutputReference | DiscoveryEngineRecommendationEngineCommonConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_name: {
      value: cdktf.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineRecommendationEngineCommonConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineCommonConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineRecommendationEngineCommonConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyName = value.companyName;
    }
  }

  // company_name - computed: false, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }
}
export interface DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig {
  /**
  * The time window of which the engine is queried at training and
  * prediction time. Positive integers only. The value translates to the
  * last X days of events. Currently required for the 'most-popular-items'
  * engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#time_window_days DiscoveryEngineRecommendationEngine#time_window_days}
  */
  readonly timeWindowDays?: number;
}

export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window_days: cdktf.numberToTerraform(struct!.timeWindowDays),
  }
}


export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToHclTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_window_days: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindowDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowDays = this._timeWindowDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindowDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindowDays = value.timeWindowDays;
    }
  }

  // time_window_days - computed: false, optional: true, required: false
  private _timeWindowDays?: number; 
  public get timeWindowDays() {
    return this.getNumberAttribute('time_window_days');
  }
  public set timeWindowDays(value: number) {
    this._timeWindowDays = value;
  }
  public resetTimeWindowDays() {
    this._timeWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowDaysInput() {
    return this._timeWindowDays;
  }
}
export interface DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig {
  /**
  * The type of event with which the engine is queried at prediction time.
  * If set to 'generic', only 'view-item', 'media-play',and
  * 'media-complete' will be used as 'context-event' in engine training. If
  * set to 'view-home-page', 'view-home-page' will also be used as
  * 'context-events' in addition to 'view-item', 'media-play', and
  * 'media-complete'. Currently supported for the 'recommended-for-you'
  * engine. Currently supported values: 'view-home-page', 'generic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#context_event_type DiscoveryEngineRecommendationEngine#context_event_type}
  */
  readonly contextEventType?: string;
}

export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_event_type: cdktf.stringToTerraform(struct!.contextEventType),
  }
}


export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToHclTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_event_type: {
      value: cdktf.stringToHclTerraform(struct!.contextEventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextEventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextEventType = this._contextEventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextEventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextEventType = value.contextEventType;
    }
  }

  // context_event_type - computed: false, optional: true, required: false
  private _contextEventType?: string; 
  public get contextEventType() {
    return this.getStringAttribute('context_event_type');
  }
  public set contextEventType(value: string) {
    this._contextEventType = value;
  }
  public resetContextEventType() {
    this._contextEventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextEventTypeInput() {
    return this._contextEventType;
  }
}
export interface DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig {
  /**
  * most_popular_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#most_popular_config DiscoveryEngineRecommendationEngine#most_popular_config}
  */
  readonly mostPopularConfig?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig;
  /**
  * recommended_for_you_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#recommended_for_you_config DiscoveryEngineRecommendationEngine#recommended_for_you_config}
  */
  readonly recommendedForYouConfig?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig;
}

export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    most_popular_config: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToTerraform(struct!.mostPopularConfig),
    recommended_for_you_config: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToTerraform(struct!.recommendedForYouConfig),
  }
}


export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToHclTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    most_popular_config: {
      value: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigToHclTerraform(struct!.mostPopularConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigList",
    },
    recommended_for_you_config: {
      value: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigToHclTerraform(struct!.recommendedForYouConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mostPopularConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostPopularConfig = this._mostPopularConfig?.internalValue;
    }
    if (this._recommendedForYouConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedForYouConfig = this._recommendedForYouConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mostPopularConfig.internalValue = undefined;
      this._recommendedForYouConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mostPopularConfig.internalValue = value.mostPopularConfig;
      this._recommendedForYouConfig.internalValue = value.recommendedForYouConfig;
    }
  }

  // most_popular_config - computed: false, optional: true, required: false
  private _mostPopularConfig = new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(this, "most_popular_config");
  public get mostPopularConfig() {
    return this._mostPopularConfig;
  }
  public putMostPopularConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig) {
    this._mostPopularConfig.internalValue = value;
  }
  public resetMostPopularConfig() {
    this._mostPopularConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostPopularConfigInput() {
    return this._mostPopularConfig.internalValue;
  }

  // recommended_for_you_config - computed: false, optional: true, required: false
  private _recommendedForYouConfig = new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(this, "recommended_for_you_config");
  public get recommendedForYouConfig() {
    return this._recommendedForYouConfig;
  }
  public putRecommendedForYouConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig) {
    this._recommendedForYouConfig.internalValue = value;
  }
  public resetRecommendedForYouConfig() {
    this._recommendedForYouConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedForYouConfigInput() {
    return this._recommendedForYouConfig.internalValue;
  }
}
export interface DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig {
  /**
  * The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#target_field DiscoveryEngineRecommendationEngine#target_field}
  */
  readonly targetField?: string;
  /**
  * The threshold to be applied to the target (e.g., 0.5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#target_field_value_float DiscoveryEngineRecommendationEngine#target_field_value_float}
  */
  readonly targetFieldValueFloat?: number;
}

export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_field: cdktf.stringToTerraform(struct!.targetField),
    target_field_value_float: cdktf.numberToTerraform(struct!.targetFieldValueFloat),
  }
}


export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToHclTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field_value_float: {
      value: cdktf.numberToHclTerraform(struct!.targetFieldValueFloat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    if (this._targetFieldValueFloat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFieldValueFloat = this._targetFieldValueFloat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetField = undefined;
      this._targetFieldValueFloat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetField = value.targetField;
      this._targetFieldValueFloat = value.targetFieldValueFloat;
    }
  }

  // target_field - computed: false, optional: true, required: false
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  public resetTargetField() {
    this._targetField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }

  // target_field_value_float - computed: false, optional: true, required: false
  private _targetFieldValueFloat?: number; 
  public get targetFieldValueFloat() {
    return this.getNumberAttribute('target_field_value_float');
  }
  public set targetFieldValueFloat(value: number) {
    this._targetFieldValueFloat = value;
  }
  public resetTargetFieldValueFloat() {
    this._targetFieldValueFloat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldValueFloatInput() {
    return this._targetFieldValueFloat;
  }
}
export interface DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig {
  /**
  * The optimization objective. e.g., 'cvr'.
  * This field together with MediaRecommendationEngineConfig.type describes
  * engine metadata to use to control engine training and serving.
  * Currently supported values: 'ctr', 'cvr'.
  * If not specified, we choose default based on engine type. Default depends on type of recommendation:
  * 'recommended-for-you' => 'ctr'
  * 'others-you-may-like' => 'ctr'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#optimization_objective DiscoveryEngineRecommendationEngine#optimization_objective}
  */
  readonly optimizationObjective?: string;
  /**
  * The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED').
  * Since part of the cost of running the service
  * is frequency of training - this can be used to determine when to train
  * engine in order to control cost. If not specified: the default value for
  * 'CreateEngine' method is 'TRAINING'. The default value for
  * 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#training_state DiscoveryEngineRecommendationEngine#training_state}
  */
  readonly trainingState?: string;
  /**
  * The type of engine. e.g., 'recommended-for-you'.
  * This field together with MediaRecommendationEngineConfig.optimizationObjective describes
  * engine metadata to use to control engine training and serving.
  * Currently supported values: 'recommended-for-you', 'others-you-may-like',
  * 'more-like-this', 'most-popular-items'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#type DiscoveryEngineRecommendationEngine#type}
  */
  readonly type?: string;
  /**
  * engine_features_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#engine_features_config DiscoveryEngineRecommendationEngine#engine_features_config}
  */
  readonly engineFeaturesConfig?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig;
  /**
  * optimization_objective_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#optimization_objective_config DiscoveryEngineRecommendationEngine#optimization_objective_config}
  */
  readonly optimizationObjectiveConfig?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;
}

export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigToTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimization_objective: cdktf.stringToTerraform(struct!.optimizationObjective),
    training_state: cdktf.stringToTerraform(struct!.trainingState),
    type: cdktf.stringToTerraform(struct!.type),
    engine_features_config: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToTerraform(struct!.engineFeaturesConfig),
    optimization_objective_config: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToTerraform(struct!.optimizationObjectiveConfig),
  }
}


export function discoveryEngineRecommendationEngineMediaRecommendationEngineConfigToHclTerraform(struct?: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference | DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optimization_objective: {
      value: cdktf.stringToHclTerraform(struct!.optimizationObjective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_state: {
      value: cdktf.stringToHclTerraform(struct!.trainingState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_features_config: {
      value: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigToHclTerraform(struct!.engineFeaturesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigList",
    },
    optimization_objective_config: {
      value: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigToHclTerraform(struct!.optimizationObjectiveConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizationObjective !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationObjective = this._optimizationObjective;
    }
    if (this._trainingState !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingState = this._trainingState;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._engineFeaturesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineFeaturesConfig = this._engineFeaturesConfig?.internalValue;
    }
    if (this._optimizationObjectiveConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationObjectiveConfig = this._optimizationObjectiveConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizationObjective = undefined;
      this._trainingState = undefined;
      this._type = undefined;
      this._engineFeaturesConfig.internalValue = undefined;
      this._optimizationObjectiveConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizationObjective = value.optimizationObjective;
      this._trainingState = value.trainingState;
      this._type = value.type;
      this._engineFeaturesConfig.internalValue = value.engineFeaturesConfig;
      this._optimizationObjectiveConfig.internalValue = value.optimizationObjectiveConfig;
    }
  }

  // optimization_objective - computed: false, optional: true, required: false
  private _optimizationObjective?: string; 
  public get optimizationObjective() {
    return this.getStringAttribute('optimization_objective');
  }
  public set optimizationObjective(value: string) {
    this._optimizationObjective = value;
  }
  public resetOptimizationObjective() {
    this._optimizationObjective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationObjectiveInput() {
    return this._optimizationObjective;
  }

  // training_state - computed: false, optional: true, required: false
  private _trainingState?: string; 
  public get trainingState() {
    return this.getStringAttribute('training_state');
  }
  public set trainingState(value: string) {
    this._trainingState = value;
  }
  public resetTrainingState() {
    this._trainingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingStateInput() {
    return this._trainingState;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // engine_features_config - computed: false, optional: true, required: false
  private _engineFeaturesConfig = new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(this, "engine_features_config");
  public get engineFeaturesConfig() {
    return this._engineFeaturesConfig;
  }
  public putEngineFeaturesConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig) {
    this._engineFeaturesConfig.internalValue = value;
  }
  public resetEngineFeaturesConfig() {
    this._engineFeaturesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFeaturesConfigInput() {
    return this._engineFeaturesConfig.internalValue;
  }

  // optimization_objective_config - computed: false, optional: true, required: false
  private _optimizationObjectiveConfig = new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(this, "optimization_objective_config");
  public get optimizationObjectiveConfig() {
    return this._optimizationObjectiveConfig;
  }
  public putOptimizationObjectiveConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig) {
    this._optimizationObjectiveConfig.internalValue = value;
  }
  public resetOptimizationObjectiveConfig() {
    this._optimizationObjectiveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationObjectiveConfigInput() {
    return this._optimizationObjectiveConfig.internalValue;
  }
}
export interface DiscoveryEngineRecommendationEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}
  */
  readonly update?: string;
}

export function discoveryEngineRecommendationEngineTimeoutsToTerraform(struct?: DiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable): any {
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


export function discoveryEngineRecommendationEngineTimeoutsToHclTerraform(struct?: DiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable): any {
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

export class DiscoveryEngineRecommendationEngineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineRecommendationEngineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}
*/
export class DiscoveryEngineRecommendationEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_recommendation_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineRecommendationEngine to import
  * @param importFromId The id of the existing DiscoveryEngineRecommendationEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineRecommendationEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_recommendation_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineRecommendationEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineRecommendationEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_recommendation_engine',
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
    this._dataStoreIds = config.dataStoreIds;
    this._displayName = config.displayName;
    this._engineId = config.engineId;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._location = config.location;
    this._project = config.project;
    this._commonConfig.internalValue = config.commonConfig;
    this._mediaRecommendationEngineConfig.internalValue = config.mediaRecommendationEngineConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_ids - computed: false, optional: false, required: true
  private _dataStoreIds?: string[]; 
  public get dataStoreIds() {
    return this.getListAttribute('data_store_ids');
  }
  public set dataStoreIds(value: string[]) {
    this._dataStoreIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdsInput() {
    return this._dataStoreIds;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
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

  // industry_vertical - computed: false, optional: true, required: false
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  public resetIndustryVertical() {
    this._industryVertical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // common_config - computed: false, optional: true, required: false
  private _commonConfig = new DiscoveryEngineRecommendationEngineCommonConfigOutputReference(this, "common_config");
  public get commonConfig() {
    return this._commonConfig;
  }
  public putCommonConfig(value: DiscoveryEngineRecommendationEngineCommonConfig) {
    this._commonConfig.internalValue = value;
  }
  public resetCommonConfig() {
    this._commonConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonConfigInput() {
    return this._commonConfig.internalValue;
  }

  // media_recommendation_engine_config - computed: false, optional: true, required: false
  private _mediaRecommendationEngineConfig = new DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(this, "media_recommendation_engine_config");
  public get mediaRecommendationEngineConfig() {
    return this._mediaRecommendationEngineConfig;
  }
  public putMediaRecommendationEngineConfig(value: DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig) {
    this._mediaRecommendationEngineConfig.internalValue = value;
  }
  public resetMediaRecommendationEngineConfig() {
    this._mediaRecommendationEngineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaRecommendationEngineConfigInput() {
    return this._mediaRecommendationEngineConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineRecommendationEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineRecommendationEngineTimeouts) {
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
      data_store_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dataStoreIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      engine_id: cdktf.stringToTerraform(this._engineId),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      common_config: discoveryEngineRecommendationEngineCommonConfigToTerraform(this._commonConfig.internalValue),
      media_recommendation_engine_config: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigToTerraform(this._mediaRecommendationEngineConfig.internalValue),
      timeouts: discoveryEngineRecommendationEngineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_store_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dataStoreIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
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
      industry_vertical: {
        value: cdktf.stringToHclTerraform(this._industryVertical),
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
      common_config: {
        value: discoveryEngineRecommendationEngineCommonConfigToHclTerraform(this._commonConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineRecommendationEngineCommonConfigList",
      },
      media_recommendation_engine_config: {
        value: discoveryEngineRecommendationEngineMediaRecommendationEngineConfigToHclTerraform(this._mediaRecommendationEngineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigList",
      },
      timeouts: {
        value: discoveryEngineRecommendationEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineRecommendationEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
