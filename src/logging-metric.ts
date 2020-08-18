// https://www.terraform.io/docs/providers/google/r/logging_metric.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingMetricConfig extends TerraformMetaArguments {
  /** A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters. */
  readonly description?: string;
  /** An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries. */
  readonly filter: string;
  /** A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field. */
  readonly labelExtractors?: { [key: string]: string };
  /** The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name. */
  readonly name: string;
  readonly project?: string;
  /** A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group. */
  readonly valueExtractor?: string;
  /** bucket_options block */
  readonly bucketOptions?: LoggingMetricBucketOptions[];
  /** metric_descriptor block */
  readonly metricDescriptor: LoggingMetricMetricDescriptor[];
  /** timeouts block */
  readonly timeouts?: LoggingMetricTimeouts;
}
export interface LoggingMetricBucketOptionsExplicitBuckets {
  /** The values must be monotonically increasing. */
  readonly bounds: number[];
}
export interface LoggingMetricBucketOptionsExponentialBuckets {
  /** Must be greater than 1. */
  readonly growthFactor?: number;
  /** Must be greater than 0. */
  readonly numFiniteBuckets?: number;
  /** Must be greater than 0. */
  readonly scale?: number;
}
export interface LoggingMetricBucketOptionsLinearBuckets {
  /** Must be greater than 0. */
  readonly numFiniteBuckets?: number;
  /** Lower bound of the first bucket. */
  readonly offset?: number;
  /** Must be greater than 0. */
  readonly width?: number;
}
export interface LoggingMetricBucketOptions {
  /** explicit_buckets block */
  readonly explicitBuckets?: LoggingMetricBucketOptionsExplicitBuckets[];
  /** exponential_buckets block */
  readonly exponentialBuckets?: LoggingMetricBucketOptionsExponentialBuckets[];
  /** linear_buckets block */
  readonly linearBuckets?: LoggingMetricBucketOptionsLinearBuckets[];
}
export interface LoggingMetricMetricDescriptorLabels {
  /** A human-readable description for the label. */
  readonly description?: string;
  /** The label key. */
  readonly key: string;
  /** The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"] */
  readonly valueType?: string;
}
export interface LoggingMetricMetricDescriptor {
  /** A concise name for the metric, which can be displayed in user interfaces. Use sentence case 
without an ending period, for example "Request count". This field is optional but it is 
recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
  readonly displayName?: string;
  /** Whether the metric records instantaneous values, changes to a value, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"] */
  readonly metricKind: string;
  /** The unit in which the metric value is reported. It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard */
  readonly unit?: string;
  /** Whether the measurement is an integer, a floating-point number, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"] */
  readonly valueType: string;
  /** labels block */
  readonly labels?: LoggingMetricMetricDescriptorLabels[];
}
export interface LoggingMetricTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoggingMetric extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_metric',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._filter = config.filter;
    this._labelExtractors = config.labelExtractors;
    this._name = config.name;
    this._project = config.project;
    this._valueExtractor = config.valueExtractor;
    this._bucketOptions = config.bucketOptions;
    this._metricDescriptor = config.metricDescriptor;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // filter - computed: false, optional: false, required: true
  private _filter: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string) {
    this._filter = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // label_extractors - computed: false, optional: true, required: false
  private _labelExtractors?: { [key: string]: string };
  public get labelExtractors() {
    return this._labelExtractors;
  }
  public set labelExtractors(value: { [key: string]: string } | undefined) {
    this._labelExtractors = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // value_extractor - computed: false, optional: true, required: false
  private _valueExtractor?: string;
  public get valueExtractor() {
    return this._valueExtractor;
  }
  public set valueExtractor(value: string | undefined) {
    this._valueExtractor = value;
  }

  // bucket_options - computed: false, optional: true, required: false
  private _bucketOptions?: LoggingMetricBucketOptions[];
  public get bucketOptions() {
    return this._bucketOptions;
  }
  public set bucketOptions(value: LoggingMetricBucketOptions[] | undefined) {
    this._bucketOptions = value;
  }

  // metric_descriptor - computed: false, optional: false, required: true
  private _metricDescriptor: LoggingMetricMetricDescriptor[];
  public get metricDescriptor() {
    return this._metricDescriptor;
  }
  public set metricDescriptor(value: LoggingMetricMetricDescriptor[]) {
    this._metricDescriptor = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoggingMetricTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoggingMetricTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      filter: this._filter,
      label_extractors: this._labelExtractors,
      name: this._name,
      project: this._project,
      value_extractor: this._valueExtractor,
      bucket_options: this._bucketOptions,
      metric_descriptor: this._metricDescriptor,
      timeouts: this._timeouts,
    };
  }
}
