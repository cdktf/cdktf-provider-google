// https://www.terraform.io/docs/providers/google/r/logging_metric.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#description LoggingMetric#description}
  */
  readonly description?: string;
  /**
  * An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#filter LoggingMetric#filter}
  */
  readonly filter: string;
  /**
  * A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#label_extractors LoggingMetric#label_extractors}
  */
  readonly labelExtractors?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#name LoggingMetric#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#project LoggingMetric#project}
  */
  readonly project?: string;
  /**
  * A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#value_extractor LoggingMetric#value_extractor}
  */
  readonly valueExtractor?: string;
  /**
  * bucket_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#bucket_options LoggingMetric#bucket_options}
  */
  readonly bucketOptions?: LoggingMetricBucketOptions[];
  /**
  * metric_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#metric_descriptor LoggingMetric#metric_descriptor}
  */
  readonly metricDescriptor: LoggingMetricMetricDescriptor[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#timeouts LoggingMetric#timeouts}
  */
  readonly timeouts?: LoggingMetricTimeouts;
}
export interface LoggingMetricBucketOptionsExplicitBuckets {
  /**
  * The values must be monotonically increasing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#bounds LoggingMetric#bounds}
  */
  readonly bounds: number[];
}

function loggingMetricBucketOptionsExplicitBucketsToTerraform(struct?: LoggingMetricBucketOptionsExplicitBuckets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bounds: cdktf.listMapper(cdktf.numberToTerraform)(struct!.bounds),
  }
}

export interface LoggingMetricBucketOptionsExponentialBuckets {
  /**
  * Must be greater than 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#growth_factor LoggingMetric#growth_factor}
  */
  readonly growthFactor?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#num_finite_buckets LoggingMetric#num_finite_buckets}
  */
  readonly numFiniteBuckets?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#scale LoggingMetric#scale}
  */
  readonly scale?: number;
}

function loggingMetricBucketOptionsExponentialBucketsToTerraform(struct?: LoggingMetricBucketOptionsExponentialBuckets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    growth_factor: cdktf.numberToTerraform(struct!.growthFactor),
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    scale: cdktf.numberToTerraform(struct!.scale),
  }
}

export interface LoggingMetricBucketOptionsLinearBuckets {
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#num_finite_buckets LoggingMetric#num_finite_buckets}
  */
  readonly numFiniteBuckets?: number;
  /**
  * Lower bound of the first bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#offset LoggingMetric#offset}
  */
  readonly offset?: number;
  /**
  * Must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#width LoggingMetric#width}
  */
  readonly width?: number;
}

function loggingMetricBucketOptionsLinearBucketsToTerraform(struct?: LoggingMetricBucketOptionsLinearBuckets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    offset: cdktf.numberToTerraform(struct!.offset),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export interface LoggingMetricBucketOptions {
  /**
  * explicit_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#explicit_buckets LoggingMetric#explicit_buckets}
  */
  readonly explicitBuckets?: LoggingMetricBucketOptionsExplicitBuckets[];
  /**
  * exponential_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#exponential_buckets LoggingMetric#exponential_buckets}
  */
  readonly exponentialBuckets?: LoggingMetricBucketOptionsExponentialBuckets[];
  /**
  * linear_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#linear_buckets LoggingMetric#linear_buckets}
  */
  readonly linearBuckets?: LoggingMetricBucketOptionsLinearBuckets[];
}

function loggingMetricBucketOptionsToTerraform(struct?: LoggingMetricBucketOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    explicit_buckets: cdktf.listMapper(loggingMetricBucketOptionsExplicitBucketsToTerraform)(struct!.explicitBuckets),
    exponential_buckets: cdktf.listMapper(loggingMetricBucketOptionsExponentialBucketsToTerraform)(struct!.exponentialBuckets),
    linear_buckets: cdktf.listMapper(loggingMetricBucketOptionsLinearBucketsToTerraform)(struct!.linearBuckets),
  }
}

export interface LoggingMetricMetricDescriptorLabels {
  /**
  * A human-readable description for the label.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#description LoggingMetric#description}
  */
  readonly description?: string;
  /**
  * The label key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#key LoggingMetric#key}
  */
  readonly key: string;
  /**
  * The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["BOOL", "INT64", "STRING"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#value_type LoggingMetric#value_type}
  */
  readonly valueType?: string;
}

function loggingMetricMetricDescriptorLabelsToTerraform(struct?: LoggingMetricMetricDescriptorLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}

export interface LoggingMetricMetricDescriptor {
  /**
  * A concise name for the metric, which can be displayed in user interfaces. Use sentence case 
without an ending period, for example "Request count". This field is optional but it is 
recommended to be set for any metrics associated with user-visible concepts, such as Quota.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#display_name LoggingMetric#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the metric records instantaneous values, changes to a value, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA. Possible values: ["DELTA", "GAUGE", "CUMULATIVE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#metric_kind LoggingMetric#metric_kind}
  */
  readonly metricKind: string;
  /**
  * The unit in which the metric value is reported. It is only applicable if the valueType is
'INT64', 'DOUBLE', or 'DISTRIBUTION'. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#unit LoggingMetric#unit}
  */
  readonly unit?: string;
  /**
  * Whether the measurement is an integer, a floating-point number, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION", "MONEY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#value_type LoggingMetric#value_type}
  */
  readonly valueType: string;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#labels LoggingMetric#labels}
  */
  readonly labels?: LoggingMetricMetricDescriptorLabels[];
}

function loggingMetricMetricDescriptorToTerraform(struct?: LoggingMetricMetricDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    metric_kind: cdktf.stringToTerraform(struct!.metricKind),
    unit: cdktf.stringToTerraform(struct!.unit),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    labels: cdktf.listMapper(loggingMetricMetricDescriptorLabelsToTerraform)(struct!.labels),
  }
}

export interface LoggingMetricTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#create LoggingMetric#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#delete LoggingMetric#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#update LoggingMetric#update}
  */
  readonly update?: string;
}

function loggingMetricTimeoutsToTerraform(struct?: LoggingMetricTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html google_logging_metric}
*/
export class LoggingMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_logging_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html google_logging_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingMetricConfig
  */
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
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // filter - computed: false, optional: false, required: true
  private _filter: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_extractors - computed: false, optional: true, required: false
  private _labelExtractors?: { [key: string]: string } | cdktf.IResolvable;
  public get labelExtractors() {
    return this.interpolationForAttribute('label_extractors') as any;
  }
  public set labelExtractors(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._labelExtractors = value;
  }
  public resetLabelExtractors() {
    this._labelExtractors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelExtractorsInput() {
    return this._labelExtractors
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // value_extractor - computed: false, optional: true, required: false
  private _valueExtractor?: string;
  public get valueExtractor() {
    return this.getStringAttribute('value_extractor');
  }
  public set valueExtractor(value: string ) {
    this._valueExtractor = value;
  }
  public resetValueExtractor() {
    this._valueExtractor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExtractorInput() {
    return this._valueExtractor
  }

  // bucket_options - computed: false, optional: true, required: false
  private _bucketOptions?: LoggingMetricBucketOptions[];
  public get bucketOptions() {
    return this.interpolationForAttribute('bucket_options') as any;
  }
  public set bucketOptions(value: LoggingMetricBucketOptions[] ) {
    this._bucketOptions = value;
  }
  public resetBucketOptions() {
    this._bucketOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOptionsInput() {
    return this._bucketOptions
  }

  // metric_descriptor - computed: false, optional: false, required: true
  private _metricDescriptor: LoggingMetricMetricDescriptor[];
  public get metricDescriptor() {
    return this.interpolationForAttribute('metric_descriptor') as any;
  }
  public set metricDescriptor(value: LoggingMetricMetricDescriptor[]) {
    this._metricDescriptor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptorInput() {
    return this._metricDescriptor
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoggingMetricTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LoggingMetricTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      filter: cdktf.stringToTerraform(this._filter),
      label_extractors: cdktf.hashMapper(cdktf.anyToTerraform)(this._labelExtractors),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      value_extractor: cdktf.stringToTerraform(this._valueExtractor),
      bucket_options: cdktf.listMapper(loggingMetricBucketOptionsToTerraform)(this._bucketOptions),
      metric_descriptor: cdktf.listMapper(loggingMetricMetricDescriptorToTerraform)(this._metricDescriptor),
      timeouts: loggingMetricTimeoutsToTerraform(this._timeouts),
    };
  }
}
