// https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringMetricDescriptorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A detailed description of the metric, which can be used in documentation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}
  */
  readonly description: string;
  /**
  * A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#display_name MonitoringMetricDescriptor#display_name}
  */
  readonly displayName: string;
  /**
  * The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#launch_stage MonitoringMetricDescriptor#launch_stage}
  */
  readonly launchStage?: string;
  /**
  * Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#metric_kind MonitoringMetricDescriptor#metric_kind}
  */
  readonly metricKind: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}
  */
  readonly project?: string;
  /**
  * The metric type, including its DNS name prefix. The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#type MonitoringMetricDescriptor#type}
  */
  readonly type: string;
  /**
  * The units in which the metric value is reported. It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#unit MonitoringMetricDescriptor#unit}
  */
  readonly unit?: string;
  /**
  * Whether the measurement is an integer, a floating-point number, etc. Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}
  */
  readonly valueType: string;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#labels MonitoringMetricDescriptor#labels}
  */
  readonly labels?: MonitoringMetricDescriptorLabels[] | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#metadata MonitoringMetricDescriptor#metadata}
  */
  readonly metadata?: MonitoringMetricDescriptorMetadata;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#timeouts MonitoringMetricDescriptor#timeouts}
  */
  readonly timeouts?: MonitoringMetricDescriptorTimeouts;
}
export interface MonitoringMetricDescriptorLabels {
  /**
  * A human-readable description for the label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}
  */
  readonly description?: string;
  /**
  * The key for this label. The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#key MonitoringMetricDescriptor#key}
  */
  readonly key: string;
  /**
  * The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}
  */
  readonly valueType?: string;
}

export function monitoringMetricDescriptorLabelsToTerraform(struct?: MonitoringMetricDescriptorLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}

export interface MonitoringMetricDescriptorMetadata {
  /**
  * The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#ingest_delay MonitoringMetricDescriptor#ingest_delay}
  */
  readonly ingestDelay?: string;
  /**
  * The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#sample_period MonitoringMetricDescriptor#sample_period}
  */
  readonly samplePeriod?: string;
}

export function monitoringMetricDescriptorMetadataToTerraform(struct?: MonitoringMetricDescriptorMetadataOutputReference | MonitoringMetricDescriptorMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingest_delay: cdktf.stringToTerraform(struct!.ingestDelay),
    sample_period: cdktf.stringToTerraform(struct!.samplePeriod),
  }
}

export class MonitoringMetricDescriptorMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringMetricDescriptorMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestDelay = this._ingestDelay;
    }
    if (this._samplePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplePeriod = this._samplePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringMetricDescriptorMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingestDelay = undefined;
      this._samplePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingestDelay = value.ingestDelay;
      this._samplePeriod = value.samplePeriod;
    }
  }

  // ingest_delay - computed: false, optional: true, required: false
  private _ingestDelay?: string; 
  public get ingestDelay() {
    return this.getStringAttribute('ingest_delay');
  }
  public set ingestDelay(value: string) {
    this._ingestDelay = value;
  }
  public resetIngestDelay() {
    this._ingestDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestDelayInput() {
    return this._ingestDelay;
  }

  // sample_period - computed: false, optional: true, required: false
  private _samplePeriod?: string; 
  public get samplePeriod() {
    return this.getStringAttribute('sample_period');
  }
  public set samplePeriod(value: string) {
    this._samplePeriod = value;
  }
  public resetSamplePeriod() {
    this._samplePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplePeriodInput() {
    return this._samplePeriod;
  }
}
export interface MonitoringMetricDescriptorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}
  */
  readonly update?: string;
}

export function monitoringMetricDescriptorTimeoutsToTerraform(struct?: MonitoringMetricDescriptorTimeoutsOutputReference | MonitoringMetricDescriptorTimeouts | cdktf.IResolvable): any {
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

export class MonitoringMetricDescriptorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitoringMetricDescriptorTimeouts | undefined {
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

  public set internalValue(value: MonitoringMetricDescriptorTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor google_monitoring_metric_descriptor}
*/
export class MonitoringMetricDescriptor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_monitoring_metric_descriptor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor google_monitoring_metric_descriptor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringMetricDescriptorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringMetricDescriptorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_metric_descriptor',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.19.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._launchStage = config.launchStage;
    this._metricKind = config.metricKind;
    this._project = config.project;
    this._type = config.type;
    this._unit = config.unit;
    this._valueType = config.valueType;
    this._labels = config.labels;
    this._metadata.internalValue = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_stage - computed: false, optional: true, required: false
  private _launchStage?: string; 
  public get launchStage() {
    return this.getStringAttribute('launch_stage');
  }
  public set launchStage(value: string) {
    this._launchStage = value;
  }
  public resetLaunchStage() {
    this._launchStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchStageInput() {
    return this._launchStage;
  }

  // metric_kind - computed: false, optional: false, required: true
  private _metricKind?: string; 
  public get metricKind() {
    return this.getStringAttribute('metric_kind');
  }
  public set metricKind(value: string) {
    this._metricKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKindInput() {
    return this._metricKind;
  }

  // monitored_resource_types - computed: true, optional: false, required: false
  public get monitoredResourceTypes() {
    return this.getListAttribute('monitored_resource_types');
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: MonitoringMetricDescriptorLabels[] | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('labels')));
  }
  public set labels(value: MonitoringMetricDescriptorLabels[] | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new MonitoringMetricDescriptorMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MonitoringMetricDescriptorMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitoringMetricDescriptorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitoringMetricDescriptorTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      launch_stage: cdktf.stringToTerraform(this._launchStage),
      metric_kind: cdktf.stringToTerraform(this._metricKind),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      unit: cdktf.stringToTerraform(this._unit),
      value_type: cdktf.stringToTerraform(this._valueType),
      labels: cdktf.listMapper(monitoringMetricDescriptorLabelsToTerraform)(this._labels),
      metadata: monitoringMetricDescriptorMetadataToTerraform(this._metadata.internalValue),
      timeouts: monitoringMetricDescriptorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
