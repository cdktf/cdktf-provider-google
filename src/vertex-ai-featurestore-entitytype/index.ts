// https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiFeaturestoreEntitytypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Description of the EntityType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#description VertexAiFeaturestoreEntitytype#description}
  */
  readonly description?: string;
  /**
  * The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#featurestore VertexAiFeaturestoreEntitytype#featurestore}
  */
  readonly featurestore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#id VertexAiFeaturestoreEntitytype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this EntityType.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#labels VertexAiFeaturestoreEntitytype#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#name VertexAiFeaturestoreEntitytype#name}
  */
  readonly name?: string;
  /**
  * monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#monitoring_config VertexAiFeaturestoreEntitytype#monitoring_config}
  */
  readonly monitoringConfig?: VertexAiFeaturestoreEntitytypeMonitoringConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#timeouts VertexAiFeaturestoreEntitytype#timeouts}
  */
  readonly timeouts?: VertexAiFeaturestoreEntitytypeTimeouts;
}
export interface VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig {
  /**
  * Specify a threshold value that can trigger the alert. For categorical feature, the distribution distance is calculated by L-inifinity norm. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}
  */
  readonly value: number;
}

export function vertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigToTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function vertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigToHclTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis {
  /**
  * Defines the baseline to do anomaly detection for feature values imported by each [entityTypes.importFeatureValues][] operation. The value must be one of the values below:
  * * LATEST_STATS: Choose the later one statistics generated by either most recent snapshot analysis or previous import features analysis. If non of them exists, skip anomaly detection and only generate a statistics.
  * * MOST_RECENT_SNAPSHOT_STATS: Use the statistics generated by the most recent snapshot analysis if exists.
  * * PREVIOUS_IMPORT_FEATURES_STATS: Use the statistics generated by the previous import features analysis if exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#anomaly_detection_baseline VertexAiFeaturestoreEntitytype#anomaly_detection_baseline}
  */
  readonly anomalyDetectionBaseline?: string;
  /**
  * Whether to enable / disable / inherite default hebavior for import features analysis. The value must be one of the values below:
  * * DEFAULT: The default behavior of whether to enable the monitoring. EntityType-level config: disabled.
  * * ENABLED: Explicitly enables import features analysis. EntityType-level config: by default enables import features analysis for all Features under it.
  * * DISABLED: Explicitly disables import features analysis. EntityType-level config: by default disables import features analysis for all Features under it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#state VertexAiFeaturestoreEntitytype#state}
  */
  readonly state?: string;
}

export function vertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisToTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly_detection_baseline: cdktf.stringToTerraform(struct!.anomalyDetectionBaseline),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function vertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisToHclTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anomaly_detection_baseline: {
      value: cdktf.stringToHclTerraform(struct!.anomalyDetectionBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anomalyDetectionBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyDetectionBaseline = this._anomalyDetectionBaseline;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anomalyDetectionBaseline = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anomalyDetectionBaseline = value.anomalyDetectionBaseline;
      this._state = value.state;
    }
  }

  // anomaly_detection_baseline - computed: false, optional: true, required: false
  private _anomalyDetectionBaseline?: string; 
  public get anomalyDetectionBaseline() {
    return this.getStringAttribute('anomaly_detection_baseline');
  }
  public set anomalyDetectionBaseline(value: string) {
    this._anomalyDetectionBaseline = value;
  }
  public resetAnomalyDetectionBaseline() {
    this._anomalyDetectionBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionBaselineInput() {
    return this._anomalyDetectionBaseline;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig {
  /**
  * Specify a threshold value that can trigger the alert. For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. The default value is 0.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#value VertexAiFeaturestoreEntitytype#value}
  */
  readonly value: number;
}

export function vertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigToTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function vertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigToHclTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis {
  /**
  * The monitoring schedule for snapshot analysis. For EntityType-level config: unset / disabled = true indicates disabled by default for Features under it; otherwise by default enable snapshot analysis monitoring with monitoringInterval for Features under it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#disabled VertexAiFeaturestoreEntitytype#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Configuration of the snapshot analysis based monitoring pipeline running interval. The value indicates number of days. The default value is 1.
  * If both FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days and [FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval][] are set when creating/updating EntityTypes/Features, FeaturestoreMonitoringConfig.SnapshotAnalysis.monitoring_interval_days will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#monitoring_interval_days VertexAiFeaturestoreEntitytype#monitoring_interval_days}
  */
  readonly monitoringIntervalDays?: number;
  /**
  * Customized export features time window for snapshot analysis. Unit is one day. The default value is 21 days. Minimum value is 1 day. Maximum value is 4000 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#staleness_days VertexAiFeaturestoreEntitytype#staleness_days}
  */
  readonly stalenessDays?: number;
}

export function vertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisToTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    monitoring_interval_days: cdktf.numberToTerraform(struct!.monitoringIntervalDays),
    staleness_days: cdktf.numberToTerraform(struct!.stalenessDays),
  }
}


export function vertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisToHclTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_interval_days: {
      value: cdktf.numberToHclTerraform(struct!.monitoringIntervalDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    staleness_days: {
      value: cdktf.numberToHclTerraform(struct!.stalenessDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._monitoringIntervalDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringIntervalDays = this._monitoringIntervalDays;
    }
    if (this._stalenessDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.stalenessDays = this._stalenessDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._monitoringIntervalDays = undefined;
      this._stalenessDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._monitoringIntervalDays = value.monitoringIntervalDays;
      this._stalenessDays = value.stalenessDays;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // monitoring_interval_days - computed: false, optional: true, required: false
  private _monitoringIntervalDays?: number; 
  public get monitoringIntervalDays() {
    return this.getNumberAttribute('monitoring_interval_days');
  }
  public set monitoringIntervalDays(value: number) {
    this._monitoringIntervalDays = value;
  }
  public resetMonitoringIntervalDays() {
    this._monitoringIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringIntervalDaysInput() {
    return this._monitoringIntervalDays;
  }

  // staleness_days - computed: false, optional: true, required: false
  private _stalenessDays?: number; 
  public get stalenessDays() {
    return this.getNumberAttribute('staleness_days');
  }
  public set stalenessDays(value: number) {
    this._stalenessDays = value;
  }
  public resetStalenessDays() {
    this._stalenessDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stalenessDaysInput() {
    return this._stalenessDays;
  }
}
export interface VertexAiFeaturestoreEntitytypeMonitoringConfig {
  /**
  * categorical_threshold_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#categorical_threshold_config VertexAiFeaturestoreEntitytype#categorical_threshold_config}
  */
  readonly categoricalThresholdConfig?: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig;
  /**
  * import_features_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#import_features_analysis VertexAiFeaturestoreEntitytype#import_features_analysis}
  */
  readonly importFeaturesAnalysis?: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis;
  /**
  * numerical_threshold_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#numerical_threshold_config VertexAiFeaturestoreEntitytype#numerical_threshold_config}
  */
  readonly numericalThresholdConfig?: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig;
  /**
  * snapshot_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#snapshot_analysis VertexAiFeaturestoreEntitytype#snapshot_analysis}
  */
  readonly snapshotAnalysis?: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis;
}

export function vertexAiFeaturestoreEntitytypeMonitoringConfigToTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categorical_threshold_config: vertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigToTerraform(struct!.categoricalThresholdConfig),
    import_features_analysis: vertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisToTerraform(struct!.importFeaturesAnalysis),
    numerical_threshold_config: vertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigToTerraform(struct!.numericalThresholdConfig),
    snapshot_analysis: vertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisToTerraform(struct!.snapshotAnalysis),
  }
}


export function vertexAiFeaturestoreEntitytypeMonitoringConfigToHclTerraform(struct?: VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference | VertexAiFeaturestoreEntitytypeMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categorical_threshold_config: {
      value: vertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigToHclTerraform(struct!.categoricalThresholdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigList",
    },
    import_features_analysis: {
      value: vertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisToHclTerraform(struct!.importFeaturesAnalysis),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisList",
    },
    numerical_threshold_config: {
      value: vertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigToHclTerraform(struct!.numericalThresholdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigList",
    },
    snapshot_analysis: {
      value: vertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisToHclTerraform(struct!.snapshotAnalysis),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeaturestoreEntitytypeMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoricalThresholdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoricalThresholdConfig = this._categoricalThresholdConfig?.internalValue;
    }
    if (this._importFeaturesAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.importFeaturesAnalysis = this._importFeaturesAnalysis?.internalValue;
    }
    if (this._numericalThresholdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericalThresholdConfig = this._numericalThresholdConfig?.internalValue;
    }
    if (this._snapshotAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotAnalysis = this._snapshotAnalysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeaturestoreEntitytypeMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoricalThresholdConfig.internalValue = undefined;
      this._importFeaturesAnalysis.internalValue = undefined;
      this._numericalThresholdConfig.internalValue = undefined;
      this._snapshotAnalysis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoricalThresholdConfig.internalValue = value.categoricalThresholdConfig;
      this._importFeaturesAnalysis.internalValue = value.importFeaturesAnalysis;
      this._numericalThresholdConfig.internalValue = value.numericalThresholdConfig;
      this._snapshotAnalysis.internalValue = value.snapshotAnalysis;
    }
  }

  // categorical_threshold_config - computed: false, optional: true, required: false
  private _categoricalThresholdConfig = new VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfigOutputReference(this, "categorical_threshold_config");
  public get categoricalThresholdConfig() {
    return this._categoricalThresholdConfig;
  }
  public putCategoricalThresholdConfig(value: VertexAiFeaturestoreEntitytypeMonitoringConfigCategoricalThresholdConfig) {
    this._categoricalThresholdConfig.internalValue = value;
  }
  public resetCategoricalThresholdConfig() {
    this._categoricalThresholdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoricalThresholdConfigInput() {
    return this._categoricalThresholdConfig.internalValue;
  }

  // import_features_analysis - computed: false, optional: true, required: false
  private _importFeaturesAnalysis = new VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysisOutputReference(this, "import_features_analysis");
  public get importFeaturesAnalysis() {
    return this._importFeaturesAnalysis;
  }
  public putImportFeaturesAnalysis(value: VertexAiFeaturestoreEntitytypeMonitoringConfigImportFeaturesAnalysis) {
    this._importFeaturesAnalysis.internalValue = value;
  }
  public resetImportFeaturesAnalysis() {
    this._importFeaturesAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFeaturesAnalysisInput() {
    return this._importFeaturesAnalysis.internalValue;
  }

  // numerical_threshold_config - computed: false, optional: true, required: false
  private _numericalThresholdConfig = new VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfigOutputReference(this, "numerical_threshold_config");
  public get numericalThresholdConfig() {
    return this._numericalThresholdConfig;
  }
  public putNumericalThresholdConfig(value: VertexAiFeaturestoreEntitytypeMonitoringConfigNumericalThresholdConfig) {
    this._numericalThresholdConfig.internalValue = value;
  }
  public resetNumericalThresholdConfig() {
    this._numericalThresholdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericalThresholdConfigInput() {
    return this._numericalThresholdConfig.internalValue;
  }

  // snapshot_analysis - computed: false, optional: true, required: false
  private _snapshotAnalysis = new VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysisOutputReference(this, "snapshot_analysis");
  public get snapshotAnalysis() {
    return this._snapshotAnalysis;
  }
  public putSnapshotAnalysis(value: VertexAiFeaturestoreEntitytypeMonitoringConfigSnapshotAnalysis) {
    this._snapshotAnalysis.internalValue = value;
  }
  public resetSnapshotAnalysis() {
    this._snapshotAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotAnalysisInput() {
    return this._snapshotAnalysis.internalValue;
  }
}
export interface VertexAiFeaturestoreEntitytypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#create VertexAiFeaturestoreEntitytype#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#delete VertexAiFeaturestoreEntitytype#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#update VertexAiFeaturestoreEntitytype#update}
  */
  readonly update?: string;
}

export function vertexAiFeaturestoreEntitytypeTimeoutsToTerraform(struct?: VertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable): any {
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


export function vertexAiFeaturestoreEntitytypeTimeoutsToHclTerraform(struct?: VertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable): any {
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

export class VertexAiFeaturestoreEntitytypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiFeaturestoreEntitytypeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype}
*/
export class VertexAiFeaturestoreEntitytype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_featurestore_entitytype";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiFeaturestoreEntitytype resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiFeaturestoreEntitytype to import
  * @param importFromId The id of the existing VertexAiFeaturestoreEntitytype that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiFeaturestoreEntitytype to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_featurestore_entitytype", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/vertex_ai_featurestore_entitytype google_vertex_ai_featurestore_entitytype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiFeaturestoreEntitytypeConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiFeaturestoreEntitytypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_featurestore_entitytype',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.39.1',
        providerVersionConstraint: '~> 5.0'
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
    this._featurestore = config.featurestore;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // featurestore - computed: false, optional: false, required: true
  private _featurestore?: string; 
  public get featurestore() {
    return this.getStringAttribute('featurestore');
  }
  public set featurestore(value: string) {
    this._featurestore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featurestoreInput() {
    return this._featurestore;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new VertexAiFeaturestoreEntitytypeMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: VertexAiFeaturestoreEntitytypeMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiFeaturestoreEntitytypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiFeaturestoreEntitytypeTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      featurestore: cdktf.stringToTerraform(this._featurestore),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      monitoring_config: vertexAiFeaturestoreEntitytypeMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      timeouts: vertexAiFeaturestoreEntitytypeTimeoutsToTerraform(this._timeouts.internalValue),
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
      featurestore: {
        value: cdktf.stringToHclTerraform(this._featurestore),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_config: {
        value: vertexAiFeaturestoreEntitytypeMonitoringConfigToHclTerraform(this._monitoringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeaturestoreEntitytypeMonitoringConfigList",
      },
      timeouts: {
        value: vertexAiFeaturestoreEntitytypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiFeaturestoreEntitytypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
