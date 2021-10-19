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
  readonly bucketOptions?: LoggingMetricBucketOptions;
  /**
  * metric_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#metric_descriptor LoggingMetric#metric_descriptor}
  */
  readonly metricDescriptor: LoggingMetricMetricDescriptor;
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

function loggingMetricBucketOptionsExplicitBucketsToTerraform(struct?: LoggingMetricBucketOptionsExplicitBucketsOutputReference | LoggingMetricBucketOptionsExplicitBuckets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bounds: cdktf.listMapper(cdktf.numberToTerraform)(struct!.bounds),
  }
}

export class LoggingMetricBucketOptionsExplicitBucketsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bounds - computed: false, optional: false, required: true
  private _bounds?: number[]; 
  public get bounds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bounds') as any;
  }
  public set bounds(value: number[]) {
    this._bounds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundsInput() {
    return this._bounds
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

function loggingMetricBucketOptionsExponentialBucketsToTerraform(struct?: LoggingMetricBucketOptionsExponentialBucketsOutputReference | LoggingMetricBucketOptionsExponentialBuckets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    growth_factor: cdktf.numberToTerraform(struct!.growthFactor),
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    scale: cdktf.numberToTerraform(struct!.scale),
  }
}

export class LoggingMetricBucketOptionsExponentialBucketsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // growth_factor - computed: false, optional: true, required: false
  private _growthFactor?: number | undefined; 
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number | undefined) {
    this._growthFactor = value;
  }
  public resetGrowthFactor() {
    this._growthFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor
  }

  // num_finite_buckets - computed: false, optional: true, required: false
  private _numFiniteBuckets?: number | undefined; 
  public get numFiniteBuckets() {
    return this.getNumberAttribute('num_finite_buckets');
  }
  public set numFiniteBuckets(value: number | undefined) {
    this._numFiniteBuckets = value;
  }
  public resetNumFiniteBuckets() {
    this._numFiniteBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFiniteBucketsInput() {
    return this._numFiniteBuckets
  }

  // scale - computed: false, optional: true, required: false
  private _scale?: number | undefined; 
  public get scale() {
    return this.getNumberAttribute('scale');
  }
  public set scale(value: number | undefined) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale
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

function loggingMetricBucketOptionsLinearBucketsToTerraform(struct?: LoggingMetricBucketOptionsLinearBucketsOutputReference | LoggingMetricBucketOptionsLinearBuckets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_finite_buckets: cdktf.numberToTerraform(struct!.numFiniteBuckets),
    offset: cdktf.numberToTerraform(struct!.offset),
    width: cdktf.numberToTerraform(struct!.width),
  }
}

export class LoggingMetricBucketOptionsLinearBucketsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // num_finite_buckets - computed: false, optional: true, required: false
  private _numFiniteBuckets?: number | undefined; 
  public get numFiniteBuckets() {
    return this.getNumberAttribute('num_finite_buckets');
  }
  public set numFiniteBuckets(value: number | undefined) {
    this._numFiniteBuckets = value;
  }
  public resetNumFiniteBuckets() {
    this._numFiniteBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numFiniteBucketsInput() {
    return this._numFiniteBuckets
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number | undefined; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number | undefined) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset
  }

  // width - computed: false, optional: true, required: false
  private _width?: number | undefined; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number | undefined) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width
  }
}
export interface LoggingMetricBucketOptions {
  /**
  * explicit_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#explicit_buckets LoggingMetric#explicit_buckets}
  */
  readonly explicitBuckets?: LoggingMetricBucketOptionsExplicitBuckets;
  /**
  * exponential_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#exponential_buckets LoggingMetric#exponential_buckets}
  */
  readonly exponentialBuckets?: LoggingMetricBucketOptionsExponentialBuckets;
  /**
  * linear_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_metric.html#linear_buckets LoggingMetric#linear_buckets}
  */
  readonly linearBuckets?: LoggingMetricBucketOptionsLinearBuckets;
}

function loggingMetricBucketOptionsToTerraform(struct?: LoggingMetricBucketOptionsOutputReference | LoggingMetricBucketOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_buckets: loggingMetricBucketOptionsExplicitBucketsToTerraform(struct!.explicitBuckets),
    exponential_buckets: loggingMetricBucketOptionsExponentialBucketsToTerraform(struct!.exponentialBuckets),
    linear_buckets: loggingMetricBucketOptionsLinearBucketsToTerraform(struct!.linearBuckets),
  }
}

export class LoggingMetricBucketOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // explicit_buckets - computed: false, optional: true, required: false
  private _explicitBuckets?: LoggingMetricBucketOptionsExplicitBuckets | undefined; 
  private __explicitBucketsOutput = new LoggingMetricBucketOptionsExplicitBucketsOutputReference(this as any, "explicit_buckets", true);
  public get explicitBuckets() {
    return this.__explicitBucketsOutput;
  }
  public putExplicitBuckets(value: LoggingMetricBucketOptionsExplicitBuckets | undefined) {
    this._explicitBuckets = value;
  }
  public resetExplicitBuckets() {
    this._explicitBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitBucketsInput() {
    return this._explicitBuckets
  }

  // exponential_buckets - computed: false, optional: true, required: false
  private _exponentialBuckets?: LoggingMetricBucketOptionsExponentialBuckets | undefined; 
  private __exponentialBucketsOutput = new LoggingMetricBucketOptionsExponentialBucketsOutputReference(this as any, "exponential_buckets", true);
  public get exponentialBuckets() {
    return this.__exponentialBucketsOutput;
  }
  public putExponentialBuckets(value: LoggingMetricBucketOptionsExponentialBuckets | undefined) {
    this._exponentialBuckets = value;
  }
  public resetExponentialBuckets() {
    this._exponentialBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBucketsInput() {
    return this._exponentialBuckets
  }

  // linear_buckets - computed: false, optional: true, required: false
  private _linearBuckets?: LoggingMetricBucketOptionsLinearBuckets | undefined; 
  private __linearBucketsOutput = new LoggingMetricBucketOptionsLinearBucketsOutputReference(this as any, "linear_buckets", true);
  public get linearBuckets() {
    return this.__linearBucketsOutput;
  }
  public putLinearBuckets(value: LoggingMetricBucketOptionsLinearBuckets | undefined) {
    this._linearBuckets = value;
  }
  public resetLinearBuckets() {
    this._linearBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearBucketsInput() {
    return this._linearBuckets
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function loggingMetricMetricDescriptorToTerraform(struct?: LoggingMetricMetricDescriptorOutputReference | LoggingMetricMetricDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    metric_kind: cdktf.stringToTerraform(struct!.metricKind),
    unit: cdktf.stringToTerraform(struct!.unit),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    labels: cdktf.listMapper(loggingMetricMetricDescriptorLabelsToTerraform)(struct!.labels),
  }
}

export class LoggingMetricMetricDescriptorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
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
    return this._metricKind
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string | undefined; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string | undefined) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
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
    return this._valueType
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: LoggingMetricMetricDescriptorLabels[] | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: LoggingMetricMetricDescriptorLabels[] | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

function loggingMetricTimeoutsToTerraform(struct?: LoggingMetricTimeoutsOutputReference | LoggingMetricTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class LoggingMetricTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _filter?: string; 
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
  private _labelExtractors?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labelExtractors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_extractors') as any;
  }
  public set labelExtractors(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _name?: string; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _valueExtractor?: string | undefined; 
  public get valueExtractor() {
    return this.getStringAttribute('value_extractor');
  }
  public set valueExtractor(value: string | undefined) {
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
  private _bucketOptions?: LoggingMetricBucketOptions | undefined; 
  private __bucketOptionsOutput = new LoggingMetricBucketOptionsOutputReference(this as any, "bucket_options", true);
  public get bucketOptions() {
    return this.__bucketOptionsOutput;
  }
  public putBucketOptions(value: LoggingMetricBucketOptions | undefined) {
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
  private _metricDescriptor?: LoggingMetricMetricDescriptor; 
  private __metricDescriptorOutput = new LoggingMetricMetricDescriptorOutputReference(this as any, "metric_descriptor", true);
  public get metricDescriptor() {
    return this.__metricDescriptorOutput;
  }
  public putMetricDescriptor(value: LoggingMetricMetricDescriptor) {
    this._metricDescriptor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptorInput() {
    return this._metricDescriptor
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoggingMetricTimeouts | undefined; 
  private __timeoutsOutput = new LoggingMetricTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LoggingMetricTimeouts | undefined) {
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
      bucket_options: loggingMetricBucketOptionsToTerraform(this._bucketOptions),
      metric_descriptor: loggingMetricMetricDescriptorToTerraform(this._metricDescriptor),
      timeouts: loggingMetricTimeoutsToTerraform(this._timeouts),
    };
  }
}
