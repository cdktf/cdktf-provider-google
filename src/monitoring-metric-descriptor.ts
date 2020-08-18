// https://www.terraform.io/docs/providers/google/r/monitoring_metric_descriptor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitoringMetricDescriptorConfig extends TerraformMetaArguments {
  /** A detailed description of the metric, which can be used in documentation. */
  readonly description: string;
  /** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". */
  readonly displayName: string;
  /** The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"] */
  readonly launchStage?: string;
  /** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"] */
  readonly metricKind: string;
  readonly project?: string;
  /** The metric type, including its DNS name prefix. The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/. */
  readonly type: string;
  /** The units in which the metric value is reported. It is only applicable if the
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
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors). */
  readonly unit?: string;
  /** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"] */
  readonly valueType: string;
  /** labels block */
  readonly labels?: MonitoringMetricDescriptorLabels[];
  /** metadata block */
  readonly metadata?: MonitoringMetricDescriptorMetadata[];
  /** timeouts block */
  readonly timeouts?: MonitoringMetricDescriptorTimeouts;
}
export interface MonitoringMetricDescriptorLabels {
  /** A human-readable description for the label. */
  readonly description?: string;
  /** The key for this label. The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]* */
  readonly key: string;
  /** The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"] */
  readonly valueType?: string;
}
export interface MonitoringMetricDescriptorMetadata {
  /** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'. */
  readonly ingestDelay?: string;
  /** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'. */
  readonly samplePeriod?: string;
}
export interface MonitoringMetricDescriptorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringMetricDescriptor extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitoringMetricDescriptorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_metric_descriptor',
      terraformGeneratorMetadata: {
        providerName: 'google'
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
    this._metadata = config.metadata;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // launch_stage - computed: false, optional: true, required: false
  private _launchStage?: string;
  public get launchStage() {
    return this._launchStage;
  }
  public set launchStage(value: string | undefined) {
    this._launchStage = value;
  }

  // metric_kind - computed: false, optional: false, required: true
  private _metricKind: string;
  public get metricKind() {
    return this._metricKind;
  }
  public set metricKind(value: string) {
    this._metricKind = value;
  }

  // monitored_resource_types - computed: true, optional: false, required: true
  public get monitoredResourceTypes() {
    return this.getListAttribute('monitored_resource_types');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this._unit;
  }
  public set unit(value: string | undefined) {
    this._unit = value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType: string;
  public get valueType() {
    return this._valueType;
  }
  public set valueType(value: string) {
    this._valueType = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: MonitoringMetricDescriptorLabels[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: MonitoringMetricDescriptorLabels[] | undefined) {
    this._labels = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: MonitoringMetricDescriptorMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: MonitoringMetricDescriptorMetadata[] | undefined) {
    this._metadata = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringMetricDescriptorTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringMetricDescriptorTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      launch_stage: this._launchStage,
      metric_kind: this._metricKind,
      project: this._project,
      type: this._type,
      unit: this._unit,
      value_type: this._valueType,
      labels: this._labels,
      metadata: this._metadata,
      timeouts: this._timeouts,
    };
  }
}
